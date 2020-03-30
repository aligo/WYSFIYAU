<template>
  <div class="editor">
    <canvas ref="canvas"></canvas>
    <div ref="qrcode"></div>
    <input v-model="bg" placeholder="bg">
    <table>
      <thead>
        <tr>
          <td>Text</td>
          <td>Size</td>
          <td>Color</td>
          <td>x</td>
          <td>y</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" v-bind:key="index">
          <td><input v-model="item.t"></td>
          <td><input v-model="item.fs"></td>
          <td><input v-model="item.c"></td>
          <td><input v-model="item.x"></td>
          <td><input v-model="item.y"></td>
          <td><button v-on:click="remove(index)">Del</button></td>
        </tr>
        <tr>
          <td colspan="5">
            <button v-on:click="add">Add</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import quantize from 'quantize';
import qrcode from 'qrcode-generator';
import {findRGB} from '../lib/ac_colors';

qrcode.stringToBytes = function(data) { return data; };

export default {
  props: {
    init:  Object,
    edge:   { type: Number, default: 32 },
    previewRatio: { type: Number, default: 6 }
  },
  data: function () {
    return {
      bg: this.init.bg,
      items: this.init.items,
    }
  },
  methods: {
    add() {
      this.items.push({});
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    updateQR() {
      this.ctx.fillStyle = this.bg;
      this.ctx.fillRect(0, 0, this.edge, this.edge);

      let fontArgs = this.ctx.font.split(' ');
      this.ctx.textBaseline = 'top';
      for (var i = 0; i < this.items.length; i++) {
        let item = this.items[i];
        this.ctx.font = item.fs + 'px ' + fontArgs[fontArgs.length - 1];
        this.ctx.fillStyle = item.c;
        this.ctx.fillText(item.t, item.x, item.y);
      }

      let buff = new Uint8Array(620);
      buff[0x69] = 0x09;

      // get all pixels
      let pixels = [];
      for (let y = 0; y < this.edge; y++) {
        for (let x = 0; x < this.edge; x++) {
          let d = this.ctx.getImageData(x, y, 1, 1).data;
          pixels.push([d[0], d[1], d[2]]);
        }
      }
      // quantize map
      let colorMap = quantize(pixels, 16);

      // quantize to 16 colors
      let palettes = colorMap.palette();
      
      // map 16 colors to closest 256 in-game colors
      for (let i = 0; i < palettes.length; i++){
        let color = findRGB(palettes[i]);
        buff[0x58 + i] = color;
      }

      // each pixels color to palette
      let offset = 0x6C;
      let pixel = 0;
      for (let i = offset; i < buff.byteLength; i++) {
        let x0 = palettes.indexOf(colorMap.map(pixels[pixel]));
        let x1 = palettes.indexOf(colorMap.map(pixels[pixel+1]));
        buff[i] = (x0 & 0x0F) + ((x1 & 0x0F) << 4);
        pixel += 2;
      }

      let qr = qrcode(0, 'M');
      qr.addData(buff);
      qr.make();
      this.$refs.qrcode.innerHTML = qr.createImgTag()
    }
  },
  mounted () {
    let canvas = this.$refs.canvas;
    canvas.width  = this.edge;
    canvas.height = this.edge; 
    canvas.style.width  = (this.edge * this.previewRatio).toString() + 'px';
    canvas.style.height = (this.edge * this.previewRatio).toString() + 'px';
    this.ctx = canvas.getContext('2d');
    this.updateQR();
  },
  updated () {
    this.updateQR();
  }
}
</script>