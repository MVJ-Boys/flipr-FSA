const bm = bodymovin.loadAnimation({
    container: document.getElementById("hero-img"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "../img/wash-your-hands.json",
});