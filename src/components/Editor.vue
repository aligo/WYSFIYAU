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
          <label>Title</label>
          <input class="nes-input" v-model="title">
        </div>
      </div>
      <div class="col">
        <div class="nes-field">
          <label>Background</label>
          <input class="nes-input" v-model="bg">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="nes-field">
              <label>Creator</label>
              <input class="nes-input" v-model="creator">
            </div>
          </div>
          <!-- <div class="col">
            <div class="nes-field">
              <label>Id</label>
              <input class="nes-input" v-model="creatorId">
            </div>
          </div> -->
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="nes-field">
              <label>Town</label>
              <input class="nes-input" v-model="town">
            </div>
          </div>
         <!--  <div class="col">
            <div class="nes-field">
              <label>Id</label>
              <input class="nes-input" v-model="townId">
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="nes-table-responsive">
      <table class="nes-table is-bordered">
        <thead>
          <tr>
            <td>Text/Image</td>
            <td width="18%"><small>Size/Width</small></td>
            <td width="18%"><small>Color/Height</small></td>
            <td width="12%">x</td>
            <td width="12%">y</td>
            <td width="6%">z</td>
            <td width="6%"></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in items" v-bind:key="index">
            <template v-if="item.i">
              <td><img class="preview-img" v-bind:src="item.i.src"></td>
              <td><input class="nes-input" v-model="item.width"></td>
              <td><input class="nes-input" v-model="item.height"></td>
            </template>
            <template v-else>
              <td><input class="nes-input" v-model="item.t"></td>
              <td><input class="nes-input" v-model="item.fs"></td>
              <td><input class="nes-input" v-model="item.c"></td>
            </template>
            <td><input class="nes-input" v-model="item.x"></td>
            <td><input class="nes-input" v-model="item.y"></td>
            <td>
              <button class="nes-btn" v-on:click="moveDown(index)"><span class="rz90">></span></button>
            </td>
            <td><button class="nes-btn is-error" v-on:click="remove(index)">X</button></td>
          </tr>
          <tr>
            <td>
              <div class="row mb-0">
                <div class="col nes-field">
                  <label class="nes-btn is-success" v-on:click="addText">Txt</label>
                </div>
                <div class="col nes-field">
                  <label class="nes-btn is-success" v-bind:for="'add-img-' + idx">Img</label>
                  <input class="hide" accept=".jpg,.png" type="file" v-on:change="addImage" v-bind:id="'add-img-' + idx">
                </div>
              </div>
            </td>
            <td colspan="6">
              <div class="nes-field is-inline">
                <input class="nes-input" v-model="autoText" placeholder="...auto fit text...">
                <button class="nes-btn is-primary lt-input" v-on:click="autoFitText">Fit</button>
              </div>
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
    idx:        Number,
    init:       Object,
    edge:       { type: Number, default: 32 },
    previewRatio: { type: Number, default: 6 },
  },
  data: function () {
    return {
      bg:         this.init.bg,
      items:      this.init.items,
      title:      this.init.title || 'no title',
      creator:    'aligo',
      creatorId:  60598,
      town:       '大岛',
      townId:     50500,
      autoText:   ''
    }
  },
  methods: {
    autoFitText() {
      if (this.autoText.length > 0) {
        let textColor = this.items[0].c;
        this.items = this.acCanvas.autoFitText(this.autoText, textColor);
      }
    },
    addText() {
      this.items.push({});
    },
    addImage(e) {
      let file = e.target.files[0],
          url = window.URL || window.webkitURL,
          src = url.createObjectURL(file),
          img = new Image(),
          vm  = this;
      img.src = src;
      img.onload = function() {
        let width = img.naturalWidth, height = img.naturalHeight;
        let item = {i: img, x: 0, y: 0};
        if (width > height) {
          item.width = vm.edge;
          item.height = Math.floor(vm.edge * height / width);
        } else {
          item.height = vm.edge;
          item.width = Math.floor(vm.edge * width / height);
        }
        vm.items.push(item);
      }
    },
    remove(index) {
      this.items.splice(index, 1);
    },
    moveDown(index) {
      this.items = this.items.concat(this.items.splice(index, 1));
    },
    renderCanvas() {
      this.acCanvas.renderContext(this);
    },
    renderQR() {
      let buff = new AcQrData(620);
      
      ['title', 'creator', 'creatorId', 'town', 'townId'].forEach((k) => {
        buff[k] = this[k];
      });

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