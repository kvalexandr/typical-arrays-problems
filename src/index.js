
exports.min = function min(array) {
  return array && array.length ? Math.min(...array) : 0;
}

exports.max = function max(array) {
  return array && array.length ? Math.max(...array) : 0;
}

exports.avg = function avg(array) {
  if (array && array.length) {
    const count = array.length;
    const sum = array.reduce((a, e) => a + parseInt(e), 0);
    return sum / count || 0;
  }
  return 0;
}
