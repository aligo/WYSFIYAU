<template>
  <section class="nes-container with-title">
    <h3 class="title">Tiles Splitter</h3>
    <div class="row">
      <div class="col">
        <div class="nes-field mb-1">
          <label class="nes-btn is-primary" for="select-img">Select an Image</label>
          <input class="hide" accept=".jpg,.png" type="file" v-on:change="selectImage" id="select-img">
        </div>
        <div v-if="img" class="nes-container is-rounded" >
          <img class="preview-img" v-bind:src="img.src">
        </div>
      </div>
      <div class="col">
        <template v-if="img">
          <div class="nes-field">
            <label for="split-pieces">Split horizontally into</label>
            <input id="split-pieces" class="nes-input" v-model="pieces" v-on:change="updatePieces">
          </div>
          <div class="nes-field mt-1">
            <label class="nes-btn is-success lt-input" v-on:click="split">Split into {{this.pieces}} x {{this.vPieces}}!</label>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    edge:       { type: Number, default: 32 }
  },
  data: function () {
    return {
      img: false,
      pieces: 2,
      vPieces: 2
    }
  },
  methods: {
    selectImage(e) {
      let file = e.target.files[0],
          url = window.URL || window.webkitURL,
          src = url.createObjectURL(file),
          img = new Image(),
          vm  = this;
      img.src = src;
      img.onload = function() {
        vm.img = img;
        vm.updatePieces();
      }
    },
    updatePieces() {
      this.piecesWidth = this.edge * this.pieces;
      this.piecesHeight = Math.ceil(this.piecesWidth * this.img.naturalHeight / this.img.naturalWidth);
      this.vPieces = Math.ceil(this.piecesHeight / this.edge);
    },
    split() {
      let editors = [];
      for (let y = 0; y < this.vPieces; y++) {
        for (let x = 0; x < this.pieces; x++) {
          let item = {i: this.img, width: this.piecesWidth, height: this.piecesHeight};
          item.x = -x * this.edge;
          item.y = -y * this.edge;
          editors.push({
            key:   Math.random(),
            title: 'tile' + x + ',' + y,
            items: [item]
          });
        }
      }
      this.$emit('splited', editors)
    }
  }
}
</script>