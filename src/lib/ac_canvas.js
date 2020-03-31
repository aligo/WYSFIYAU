import quantize from 'quantize';

import {findRGB} from './ac_colors';

export default class AcCanvas {

  constructor(ctx, edge) {
    this.ctx = ctx;
    this.edge = edge;
  }
  renderContext(data) {
    this.ctx.fillStyle = data.bg;
    this.ctx.fillRect(0, 0, this.edge, this.edge);

    let fontArgs = this.ctx.font.split(' ');
    this.ctx.textBaseline = 'top';
    for (var i = 0; i < data.items.length; i++) {
      let item = data.items[i];
      this.ctx.font = item.fs + 'px ' + fontArgs[fontArgs.length - 1];
      this.ctx.fillStyle = item.c;
      this.ctx.fillText(item.t, item.x, item.y);
    }
  }
  readContext() {
    let pixels = [];
    for (let y = 0; y < this.edge; y++) {
      for (let x = 0; x < this.edge; x++) {
        let d = this.ctx.getImageData(x, y, 1, 1).data;
        pixels.push([d[0], d[1], d[2]]);
      }
    }
    let colorMap = quantize(pixels, 16);
    let palettes = colorMap.palette();
    this.palettes = palettes.map(p => findRGB(p));
    
    this.pixels = pixels.map(p => palettes.indexOf(colorMap.map(p)));
  }
}