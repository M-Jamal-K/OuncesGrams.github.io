(() => {
  var e,
    n,
    t,
    r,
    o,
    c,
    l,
    i = document.querySelector("#number"),
    u = document.querySelectorAll("tr"),
    s = document.querySelector(".tbody"),
    a = document.querySelector(".btn"),
    d = document.querySelectorAll(".ounces"),
    m = document.querySelectorAll(".grams"),
    L = document.querySelector(".info"),
    f = document.querySelector(".Result");
  function y(e, n) {
    e.forEach(function (e) {
      e.innerHTML = n;
    });
  }
  a.addEventListener("click", function () {
    (r = Math.abs(parseFloat(Number(i.value)))),
      (s.innerHTML = ""),
      r < 10
        ? (function (r) {
            for (var c = 0; c < 20; c++)
              (e = s.insertRow(c)),
                (n = e.insertCell(0)),
                (t = e.insertCell(1)),
                (n.innerHTML = "".concat(r + c)),
                (o = (o = 28.3495 * (r + c)).toFixed(3)),
                (t.innerHTML = "".concat(o));
          })(r)
        : (function (r) {
            for (var c = r - 10, l = 0; l < 20; c++, l++)
              (e = s.insertRow(l)),
                (n = e.insertCell(0)),
                (t = e.insertCell(1)),
                (n.innerHTML = "".concat(c)),
                (o = (o = 28.3495 * c).toFixed(3)),
                (t.innerHTML = "".concat(o));
          })(r),
      y(d, r),
      (c = (28.3495 * r).toFixed(4)),
      y(m, c),
      r
        ? (f.classList.remove("hide"),
          L.classList.remove("hide"),
          (u = document.querySelectorAll("tr")))
        : (f.classList.add("hide"), L.classList.add("hide")),
      u.forEach(function (e) {
        (l = parseFloat(Number((l = e.cells.item(0).innerHTML)))),
          r === l &&
            r &&
            (console.log(l), console.log(e), e.classList.add("currentValue"));
      });
  });
})();
