const woobleFunc = (item) => {
  item.addEventListener("mouseout", () => {
    item.children[0].style.transform =
      "perspective(300px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
  });

  item.addEventListener("mousemove", (e) => {
    let cardWidth = item.clientWidth;
    let cardHeight = item.clientHeight;

    let rotatex = ((e.offsetX - cardWidth * 0.2) / cardWidth) * 12;
    let rotatey = ((1 - (e.offsetY - cardHeight * 0.2)) / cardHeight) * 12;

    item.children[0].style.transform = `perspective(300px) rotateX(${rotatey}deg) rotateY(${rotatex}deg) rotateZ(0deg)`;
  });
};

export default woobleFunc;
