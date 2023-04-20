export default class ArrayBufferConverter {
  load(buffer) {
    if (buffer instanceof ArrayBuffer) {
      this.buffer = buffer;
    }
  }

  toString() {
    const uint16array = new Uint16Array(this.buffer);
    let result = '';
    uint16array.forEach((num) => {
      result += String.fromCharCode(num);
    });
    return result;
  }
}
