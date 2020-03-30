// From: https://github.com/Thulinma/ACNLPatternTool/blob/master/src/libs/ACNLFormat.js#L317
let paletteColors = [
  //Back in June 2013 when I first made this list, I worked off of a heavily post-processed PHOTOGRAPH of the 3DS screen.
  //Now, in 2020, we have emulators. I took an oversampled screenshot of the editor screen and went through and fixed all these colors by hand.
  //Now, my question to everyone else: why did you all just copy my wrong list of colors, instead of grabbing an emulator and finding the correct values...? Come on guys, put some work in! -_-
  //Pinks (0x00 - 0x08)
  "#FFEEFF", "#FF99AA", "#EE5599", "#FF66AA", "#FF0066", "#BB4477", "#CC0055", "#990033", "#552233",
  "","","","","","",//0x09-0x0E unused / unknown
  "#FFFFFF", //0x0F: Grey 1
  //Reds (0x10 - 0x18)
  "#FFBBCC", "#FF7777", "#DD3210", "#FF5544", "#FF0000", "#CC6666", "#BB4444", "#BB0000", "#882222",
  "","","","","","",//0x19-0x1E unused / unknown
  "#EEEEEE", //0x1F: Grey 2
  //Oranges (0x20 - 0x28)
  "#DDCDBB", "#FFCD66", "#DD6622", "#FFAA22", "#FF6600", "#BB8855", "#DD4400", "#BB4400", "#663210",
  "","","","","","",//0x29-0x2E unused / unknown
  "#DDDDDD", //0x2F: Grey 3
  //Pastels or something, I guess? (0x30 - 0x38)
  "#FFEEDD", "#FFDDCC", "#FFCDAA", "#FFBB88", "#FFAA88", "#DD8866", "#BB6644", "#995533", "#884422",
  "","","","","","",//0x39-0x3E unused / unknown
  "#CCCDCC", //0x3F: Grey 4
  //Purple (0x40 - 0x48)
  "#FFCDFF", "#EE88FF", "#CC66DD", "#BB88CC", "#CC00FF", "#996699", "#8800AA", "#550077", "#330044",
  "","","","","","",//0x49-0x4E unused / unknown
  "#BBBBBB", //0x4F: Grey 5
  //Pink (0x50 - 0x58)
  "#FFBBFF", "#FF99FF", "#DD22BB", "#FF55EE", "#FF00CC", "#885577", "#BB0099", "#880066", "#550044",
  "","","","","","",//0x59-0x5E unused / unknown
  "#AAAAAA", //0x5F: Grey 6
  //Brown (0x60 - 0x68)
  "#DDBB99", "#CCAA77", "#774433", "#AA7744", "#993200", "#773222", "#552200", "#331000", "#221000",
  "","","","","","",//0x69-0x6E unused / unknown
  "#999999", //0x6F: Grey 7
  //Yellow (0x70 - 0x78)
  "#FFFFCC", "#FFFF77", "#DDDD22", "#FFFF00", "#FFDD00", "#CCAA00", "#999900", "#887700", "#555500",
  "","","","","","",//0x79-0x7E unused / unknown
  "#888888", //0x7F: Grey 8
  //Blue (0x80 - 0x88)
  "#DDBBFF", "#BB99EE", "#6632CC", "#9955FF", "#6600FF", "#554488", "#440099", "#220066", "#221033",
  "","","","","","",//0x89-0x8E unused / unknown
  "#777777", //0x8F: Grey 9
  //Ehm... also blue? (0x90 - 0x98)
  "#BBBBFF", "#8899FF", "#3332AA", "#3355EE", "#0000FF", "#333288", "#0000AA", "#101066", "#000022",
  "","","","","","",//0x99-0x9E unused / unknown
  "#666666", //0x9F: Grey 10
  //Green (0xA0 - 0xA8)
  "#99EEBB", "#66CD77", "#226610", "#44AA33", "#008833", "#557755", "#225500", "#103222", "#002210",
  "","","","","","",//0xA9-0xAE unused / unknown
  "#555555", //0xAF: Grey 11
  //Icky greenish yellow (0xB0 - 0xB8)
  "#DDFFBB", "#CCFF88", "#88AA55", "#AADD88", "#88FF00", "#AABB99", "#66BB00", "#559900", "#336600",
  "","","","","","",//0xB9-0xBE unused / unknown
  "#444444", //0xBF: Grey 12
  //Wtf? More blue? (0xC0 - 0xC8)
  "#BBDDFF", "#77CDFF", "#335599", "#6699FF", "#1077FF", "#4477AA", "#224477", "#002277", "#001044",
  "","","","","","",//0xC9-0xCE unused / unknown
  "#333233", //0xCF: Grey 13
  //Gonna call this cyan (0xD0 - 0xD8)
  "#AAFFFF", "#55FFFF", "#0088BB", "#55BBCC", "#00CDFF", "#4499AA", "#006688", "#004455", "#002233",
  "","","","","","",//0xD9-0xDE unused / unknown
  "#222222", //0xDF: Grey 14
  //More cyan, because we didn't have enough blue-like colors yet (0xE0 - 0xE8)
  "#CCFFEE", "#AAEEDD", "#33CDAA", "#55EEBB", "#00FFCC", "#77AAAA", "#00AA99", "#008877", "#004433",
  "","","","","","",//0xE9-0xEE unused / unknown
  "#000000", //0xEF: Grey 15
  //Also green. Fuck it, whatever. (0xF0 - 0xF8)
  "#AAFFAA", "#77FF77", "#66DD44", "#00FF00", "#22DD22", "#55BB55", "#00BB00", "#008800", "#224422",
  "","","","","","",//0xF9-0xFE unused / unknown
  "", //0xFF unused (white in-game, editing freezes the game)
];
let RGBLookup = [];
for (let i = 0; i < 256; i++){
  let m = paletteColors[i];
  if (m.length < 7){
    RGBLookup.push(null);
  }else{
    let rgb = [parseInt(m.substr(1, 2), 16), parseInt(m.substr(3, 2), 16), parseInt(m.substr(5, 2), 16)];
    RGBLookup.push(rgb);
  }
}
let findRGB = function(rgb) {
  let best = 255*255*3;
  let bestno = 0;
  for (let i = 0; i < 256; i++){
    let m = RGBLookup[i];
    if (m === null){continue;}
    let rD = (m[0] - rgb[0]);
    let gD = (m[1] - rgb[1]);
    let bD = (m[2] - rgb[2]);
    let match = (rD*rD + gD*gD + bD*bD);
    if (match < best){
      if (!match){return i;}
      best = match;
      bestno = i;
    }
  }
  return bestno;
}

export {findRGB};