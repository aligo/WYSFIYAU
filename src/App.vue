<template>
  <div>
    <Editor
    v-for="(editor, index) in editors"
    v-bind:key="index"
    v-bind:init="editor"
    ></Editor>
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
