const bm = bodymovin.loadAnimation({
  container: document.getElementById("hero-img"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../img/wash-your-hands.json",
});

const reveal = () => {
  const dropDiv = document.querySelector(".dropDown");
  const btn = document.querySelector("#drop-btn");

  btn.addEventListener("click", () => {
    dropDiv.classList.toggle("revealed");
  });
};
