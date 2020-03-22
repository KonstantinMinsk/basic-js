const chainMaker = {

  Array: [],

  getLength() {
    return this.Array.length;
  },

  addLink(value) {
    if (value == undefined && value != null) this.Array.push(' ');
    else this.Array.push(value);
    return this;
  },

  removeLink(position) {
    if (typeof position !== "number" || position - 1 > this.Array.length - 1 || position - 1 < 0) {
        this.Array = new Array();
        throw new Error();
    } else this.Array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.Array.reverse();
    return this;
  },
  
  finishChain() {
    let result = ' ';
    this.Array.forEach((item, index) => {
        if (index == this.Array.length - 1) result += `( ${item} )`;
        else result += `( ${item} )~~`;
    })
    this.Array = new Arr();
    return result;
}

};

module.exports = chainMaker;
