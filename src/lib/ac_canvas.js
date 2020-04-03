import quantize from 'quantize';

import {findRGB} from './ac_colors';

export default class AcCanvas {

  constructor(ctx, edge) {
    this.ctx = ctx;
    this.edge = edge;
  }
  autoFitText(text, color) {
    let items = [];
    let edgeNum = Math.ceil(Math.sqrt(text.length));
    let fontSize = Math.floor((this.edge - 2) / edgeNum);
    let margin = Math.ceil((this.edge - edgeNum * fontSize) / 2);
    for (var i = 0; i < edgeNum; i++) {
      let row = text.slice(i * edgeNum, (i + 1) * edgeNum);
      if (row.length > 0)
        items.push({t: row, c: color, fs: fontSize, x: margin, y: margin + 2 + i * fontSize})
    }
    return items;
  }
  renderContext(data) {
    if (data.bg && (data.bg.length > 0)) {
      this.ctx.fillStyle = data.bg;
      this.ctx.fillRect(0, 0, this.edge, this.edge);
    } else {
      this.ctx.clearRect(0, 0, this.edge, this.edge);
    }

    let fontArgs = this.ctx.font.split(' ');
    this.ctx.textBaseline = 'top';
    for (var i = 0; i < data.items.length; i++) {
      let item = data.items[i];
      if (item.i) {
        this.ctx.drawImage(item.i, item.x, item.y, item.width, item.height);
      } else {
        if (item.c && (item.c.length > 0)) {
          this.ctx.globalCompositeOperation = 'source-over';
        } else {
          this.ctx.globalCompositeOperation = 'destination-out';
        }
        this.ctx.font = item.fs + 'px ' + fontArgs[fontArgs.length - 1];
        this.ctx.fillStyle = item.c;
        this.ctx.fillText(item.t, item.x, item.y);
      }
    }
  }
  readContext() {
    let pixels = [];
    for (let y = 0; y < this.edge; y++) {
      for (let x = 0; x < this.edge; x++) {
        let d = this.ctx.getImageData(x, y, 1, 1).data;
        if (d[3] < 100) {
          pixels.push(-1);
        } else {
          pixels.push([d[0], d[1], d[2]]);
        }
      }
    }
    let colorMap = quantize(pixels, 16);
    let palettes = colorMap.palette();

    this.palettes = palettes.map(p => findRGB(p));
    
    this.pixels = pixels.map(p => {
      if (p == -1) {
        return 15;
      } else {
        return palettes.indexOf(colorMap.map(p));
      }
    });
  }
}