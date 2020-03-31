<template>
  <section class="nes-container with-title">
    <h3 class="title">{{title}}</h3>
    <div class="row">
      <div class="col">
        <canvas ref="canvas"></canvas>
      </div>
      <div class="col" ref="qrcode"></div>
    </div>
    <div class="row">
      <div class="col">
        <div class="nes-field">
          <label for="inline_field">Title</label>
          <input class="nes-input" v-model="title">
        </div>
      </div>
      <div class="col">
        <div class="nes-field">
          <label for="inline_field">Background</label>
          <input class="nes-input" v-model="bg">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="nes-field">
          <label for="inline_field">Creator</label>
          <input class="nes-input" v-model="creator">
        </div>
      </div>
      <div class="col">
        <div class="nes-field">
          <label for="inline_field">Town</label>
          <input class="nes-input" v-model="town">
        </div>
      </div>
    </div>
    <div class="nes-table-responsive">
      <table class="nes-table is-bordered">
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
            <td><input class="nes-input" v-model="item.t"></td>
            <td><input class="nes-input" v-model="item.fs"></td>
            <td><input class="nes-input" v-model="item.c"></td>
            <td><input class="nes-input" v-model="item.x"></td>
            <td><input class="nes-input" v-model="item.y"></td>
            <td><button class="nes-btn is-error" v-on:click="remove(index)">Del</button></td>
          </tr>
          <tr>
            <td colspan="5"></td>
            <td>
              <button class="nes-btn is-success" v-on:click="add">Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>

import qrcode from 'qrcode-generator';
import AcQrData from '../lib/ac_qr_data';
import AcCanvas from '../lib/ac_canvas';

qrcode.stringToBytes = function(data) { return data; };

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
    renderCanvas() {
      this.acCanvas.renderContext(this);
    },
    renderQR() {
      let buff = new AcQrData(620);
      
      buff.title = this.title;
      buff.creator = this.creator;
      buff.town = this.town;

      this.acCanvas.readContext();

      buff.palettes = this.acCanvas.palettes;
      buff.pixels = this.acCanvas.pixels;

      let qr = qrcode(0, 'M');
      qr.addData(buff);
      qr.make();
      this.$refs.qrcode.innerHTML = qr.createImgTag()
    },
    renderAll() {
      this.renderCanvas();
      this.renderQR();
    }
  },
  mounted () {
    let canvas = this.$refs.canvas;
    canvas.width  = this.edge;
    canvas.height = this.edge; 
    canvas.style.width  = (this.edge * this.previewRatio).toString() + 'px';
    canvas.style.height = (this.edge * this.previewRatio).toString() + 'px';
    this.ctx = canvas.getContext('2d');
    this.acCanvas = new AcCanvas(this.ctx, this.edge);
    this.renderAll();
  },
  updated () {
    this.renderAll();
  }
}
</script>