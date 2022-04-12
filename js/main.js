const modalWindow = document.querySelector(".modal"),
  buttonsModal = document.querySelectorAll(".button-play");

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("player");
}

buttonsModal.forEach((item, i) => {
  item.addEventListener("click", () => {
    modalWindow.classList.add("active");
    player.playVideo();
  });
});

modalWindow.addEventListener("click", () => {
  modalWindow.classList.remove("active");
  player.pauseVideo();
});