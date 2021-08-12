
exports.min = function min (array) {
  if ((!array) || (array.length === 0)) {
    return 0;
  } else {
    let min = 0;

    array.forEach(function(item, index, array) {

      if (item < min) {
        min = item;
      }
    });

    return min;
  }
}

exports.max = function max (array) {
  if ((!array) || (array.length === 0)) {
    return 0;
  } else {
    let max = 0;

    array.forEach(function(item, index, array) {

      if (item > max) {
        max = item;
      }
    });

    return max;
  }
}

exports.avg = function avg (array) {
  if ((!array) || (array.length === 0)) {
    return 0;
  } else {
    let avg = 0;

    array.forEach(function(item, index, array) {
      avg += item;
    });

    avg = avg / array.length;

    return avg;
  }
}
