<template>
  <div class="container">
    <h2>WYSFIYAU Editor</h2>
    <p>Why You Steal Flowers Is You Are Ugly Editor (for Animal Crossing)</p>
    <Splitter v-on:splited="splited" />
    <Editor v-for="(editor, index) in editors"
      v-bind:key="editor.key" v-bind:idx="index" v-bind:init="editor"
    />
    <div class="mt-container">
      <a class="with-icon" href="https://github.com/aligo/WYSFIYAU" target="_blank" rel="noopener">
        <i class="nes-icon github"></i>
        <span>aligo/WYSFIYAU</span>
      </a>
      <a class="with-icon ml-2" href="https://mori.wiki" target="_blank" rel="noopener">
        <i class="nes-icon coin"></i>
        <span>mori.wiki</span>
      </a>
    </div>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'
import Splitter from './components/Splitter.vue'

let bgColor = '#ff0000';
let textColor = '#ffffff';

export default {
  name:       'WYSFIYAU',
  components: { Editor, Splitter },
  data() {
    return {
      editors: [
        {
          key: Math.random(),
          bg: bgColor,
          items: [
            {t: '你丑', fs: 12, x: 4, y: 5, c: textColor },
            {t: '你偷花', fs: 11, x: 0, y: 18, c: textColor }
          ]
        }
      ]
    }
  },
  methods: {
    splited(editors) {
      while (this.editors.shift());
      this.editors = editors;
    }
  }
}
</script>

<style>
@import "./../node_modules/nes.css/css/nes.css";
.container {
  max-width: 1080px;
  margin: 0 auto;
  padding-top: 2.5rem;
}
.nes-container, .mt-container {
  margin-top: 2.5rem;
}
.row {
  display: flex;
  margin: 0 -0.5rem 0.5rem;
}
.mb-0 {
  margin-bottom: 0;
}
.mb-1 {
  margin-bottom: 1rem;
}
.mt-1 {
  margin-top: 1rem;
}
.ml-2 {
  margin-left: 2rem;
}
.col {
  flex: 1;
  padding: 0 0.5rem;
}
a.with-icon > span {
  margin-left: 1rem;
}
.nes-field.is-inline .lt-input{
  margin-left: 1rem;
}
.nes-field {
  position: relative;
  overflow: hidden;
}
.rz90 {
  display: block;
  transform: rotateZ(90deg);
  margin-left: -0.1rem;
}
.canvas-container canvas {
  background-image: linear-gradient(45deg, #AAA 25%, transparent 25%), linear-gradient(-45deg, #AAA 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #AAA 75%), linear-gradient(-45deg, transparent 75%, #AAA 75%);
  background-size: 16px 16px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
}
input.hide[type=file] {
  opacity: 0;
  position: absolute;
  z-index: -1;
  top: 0;
}
img.preview-img {
  width: 100%;
}
.tooltip {
  position: relative;
  display: inline-block;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 320px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  /*border-radius: 6px;*/

  border-style: solid;
  border-width: 4px;
  border-image-slice: 2;
  border-image-width: 2;
  border-image-repeat: stretch;
  border-image-source: url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="5" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2 1 h1 v1 h-1 z M1 2 h1 v1 h-1 z M3 2 h1 v1 h-1 z M2 3 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>');
  border-image-outset: 2;

  position: absolute;
  z-index: 1;
  top: 115%;
  left: 50%;
  margin-left: -160px;

  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 112%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #000 transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
</style>