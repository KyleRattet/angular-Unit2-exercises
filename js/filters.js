app.filter('inStock', function () {
  return function (input) {
      if (input === true) {
        return "Yes";
      } else {
        return "Out of Stock";
      }
  };
});

app.filter('price', function () {
  return function (input) {
      return input/100;
  };
});
