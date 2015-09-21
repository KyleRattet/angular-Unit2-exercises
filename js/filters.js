app.filter('price', function () {
  return function (input) {
      return input/100;
  };
});
