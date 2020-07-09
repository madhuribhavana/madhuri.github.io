var i = 0;
var arr = [
  { first: "build", second: "stuff", emoji: "🔧" },
  { first: "push", second: "pixels", emoji: "🖌️" },
  { first: "empathize", second: "with users", emoji: "🔍" },
  { first: "code", second: "stuff", emoji: "🖥️" },
  { first: "design", second: "stuff", emoji: "✏️" },
];

function changeVal() {
  if (i == arr.length) i = 0;
  document.getElementById("first").innerHTML = arr[i].first;
  document.getElementById("last").innerHTML = arr[i].second;
  document.getElementById("emoji").innerHTML = arr[i].emoji;
  i++;
}

setInterval(changeVal, 500);
