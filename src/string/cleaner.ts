declare global {
  interface String {
    removeExtraSpaces(): string;
    toTitleCase(): string;
  }
}

String.prototype.removeExtraSpaces = function() {
  return this.replace(/ +/g, ' ')
}

String.prototype.toTitleCase = function() {
  return this.replace(
    /\w\S*/g,
    function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    }
  );
}

export {}