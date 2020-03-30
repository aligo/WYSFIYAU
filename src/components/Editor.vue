<template>
  <div class="editor">
    <canvas ref="canvas"></canvas>
    <div ref="qrcode"></div>
    <input v-model="bg" placeholder="bg">
    <input v-model="title" placeholder="title">
    <input v-model="creator" placeholder="creator">
    <input v-model="town" placeholder="town">
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

let setUint16 = function(buff, offset, n) {
  buff[offset] = n & 0xFF;
  buff[offset+1] = n >> 8;
}

let setStr = function(buff, offset, str, len) {
  for (let i = 0; i < len / 2; i++){
    if (i >= str.length){
      setUint16(buff, offset+i*2, 0, true);
    } else {
      setUint16(buff, offset+i*2, str.charCodeAt(i), true);
    }
  }
}

export default {
  props: {
    init:       Object,
    edge:       { type: Number, default: 32 },
    previewRatio: { type: Number, default: 6 },
  },
  data: function () {
    return {
      bg:     this.init.bg,
      items:  this.init.items,
      title:   'no title',
      creator: 'aligo',
      town:    '大岛',
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
      setUint16(buff, 0x56, 0x3119);
      buff[0x67] = 0xCC;
      buff[0x68] = 0x0A;
      buff[0x69] = 0x09;
      
      setStr(buff, 0x00, this.title, 40);
      buff[40] = 0;
      buff[41] = 0;
      setUint16(buff, 0x2A, 60598);
      setStr(buff, 0x2C, this.creator, 20);
      buff[0x2C+18] = 0;
      buff[0x2C+19] = 0;
      setUint16(buff, 0x40, 50500);
      setStr(buff, 0x42, this.town, 20);
      buff[0x42+18] = 0;
      buff[0x42+19] = 0;

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