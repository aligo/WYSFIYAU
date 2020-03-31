export default class AcQrData extends Uint8Array {
  constructor(...args) {
    super(...args);
    this.initDefaults();
  }
  initDefaults() {
    this[28] = 0;
    this[29] = 0;
    this.setUint16(0x56, 0x3119);
    this[0x67] = 0xCC;
    this[0x68] = 0x0A;
    this[0x69] = 0x09;
    this[0x2C+18] = 0;
    this[0x2C+19] = 0;
    this[0x42+18] = 0;
    this[0x42+19] = 0;

    this.creatorId = 60598;
    this.townId = 50500;
  }
  set title(title) {
    this.setStr(0x00, title, 40);
  }
  set creatorId(creatorId) {
    this.setUint16(0x2A, creatorId);
  }
  set creator(creator) {
    this.setUint16(0x2C, creator, 20);
  }
  set townId(townId) {
    this.setUint16(0x2A, townId);
  }
  set town(town) {
    this.setUint16(0x2C, town, 20);
  }
  set palettes(palettes) {
    for (let i = 0; i < palettes.length; i++){
      this[0x58 + i] = palettes[i];
    }
  }
  set pixels(pixels) {
    let offset = 0x6C;
    let pixel = 0;
    for (let i = offset; pixel < pixels.length; i++) {
      this[i] = (pixels[pixel] & 0x0F) + ((pixels[pixel+1] & 0x0F) << 4);
      pixel += 2;
    }
  }
  setUint16(offset, n) {
    this[offset] = n & 0xFF;
    this[offset+1] = n >> 8;
  }
  setStr(offset, str, len) {
    for (let i = 0; i < len / 2; i++){
      if (i >= str.length){
        this.setUint16(offset+i*2, 0, true);
      } else {
        this.setUint16(offset+i*2, str.charCodeAt(i), true);
      }
    }
  }
}