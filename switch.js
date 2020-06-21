var textWrapper = document.querySelector(".rotate");
var arr = ["design", "empathize", "code"];
var randInt = anime.random(arr.length);
anime.timeline({ loop: true }).add({
  targets: textWrapper,
  update: function () {
    textWrapper.innerHTML = JSON.stringify(arr[randInt]);
  },
  easing: "easeOutElastic(1, .8)",
});
