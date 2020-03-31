<template>
  <div class="container">
    <h2>WYSFIYAU Editor</h2>
    <Editor
    v-for="(editor, index) in editors"
    v-bind:key="index"
    v-bind:init="editor"
    ></Editor>
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
.col {
  flex: 1;
  padding: 0 0.5rem;
}
a.with-icon > span {
  margin-left: 1rem;
}
</style>