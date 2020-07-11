const body = document.body;
const nav = document.querySelector("nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;



window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  console.log(document.body,"currentScroll")
  if (currentScroll == 0) {
    document.body.classList.remove(scrollUp);
    return;
  }

  if (currentScroll > lastScroll && !document.body.classList.contains(scrollDown)) {
    // down
    document.body.classList.remove(scrollUp);
    document.body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    document.body.classList.remove(scrollDown);
    document.body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});
