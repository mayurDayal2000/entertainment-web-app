let cards_sm = document.querySelectorAll(".container-sm .card");

const resizer = () => {
  // resize image height based on width
  window.addEventListener("resize", height_resizer(cards_sm));

  function height_resizer(cards) {
    cards.forEach((card) => {
      card.children[0].style.height = `${card.clientWidth / 1.5}px`;
    });
  }

  // default value of height
  height_resizer(cards_sm);
};

export default resizer;
