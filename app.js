/*======================================================
 *  go to top btn start here
 *======================================================*/

/* scroll variable */
const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

/* scroll container */
const scrollContainer = () => {
  return document.documentElement || document.body;
};

/* to show or hide btn */
document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

/* smooth scrolling */
const goToTop = () => {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
};

/* trigger scroll btn */
backToTopButton.addEventListener("click", goToTop)

