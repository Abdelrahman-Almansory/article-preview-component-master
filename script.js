const shareBtn = document.querySelector(".share");
const shareSection = document.querySelector(".share-section");
const shareBtn2 = document.querySelector(".share2");

shareBtn.addEventListener("click", function () {
  shareSection.classList.toggle("hidden");
});

shareBtn2.addEventListener("click", function () {
  shareSection.classList.add("hidden");
});
