<template>
  <div class="container">
    <h2>WYSFIYAU Editor</h2>
    <p>Why You Steal Flowers Is You Are Ugly Editor (for Animal Crossing)</p>
    <Editor v-for="(editor, index) in editors"
      v-bind:key="index" v-bind:idx="index" v-bind:init="editor"
    />
    <div class="mt-container">
      <a class="with-icon" href="https://github.com/aligo/WYSFIYAU" target="_blank" rel="noopener">
        <i class="nes-icon github"></i>
        <span>aligo/WYSFIYAU</span>
      </a>
    </div>
  </div>
</template>

<script>
import Editor from './components/Editor.vue'

let bgColor = '#ff0000';
let textColor = '#ffffff';

export default {
  name:       'WYSFIYAU',
  components: { Editor },
  data() {
    return {
      editors: [
        {
          bg: bgColor,
          items: [
            {t: '你丑', fs: 12, x: 4, y: 5, c: textColor },
            {t: '你偷花', fs: 11, x: 0, y: 18, c: textColor }
          ]
        }
      ]
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
input.hide[type=file] {
  opacity: 0;
  position: absolute;
  z-index: -1;
}
img.preview-img {
  width: 100%;
}
</style>