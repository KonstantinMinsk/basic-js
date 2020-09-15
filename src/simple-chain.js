const chainMaker = {

  Array: [],

  getLength() {
    return this.Array.length;
  },

  addLink(value) {
    this.Array.push(value === undefined ? '' : String(value));
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position > this.Array.length || position < 1 || Math.round(position) != position) {
      this.Array = [];
      throw new Error();
    } else {
      this.Array.splice(position - 1, 1);;
      return this;
    }
  },

  reverseChain() {
    this.Array.reverse();
    return this;
  },
  
  finishChain() {
    let res = this.Array.map(x => '( ' + x + ' )').join('~~');
    this.Array = [];
    return res;
}

};

module.exports = chainMaker;
