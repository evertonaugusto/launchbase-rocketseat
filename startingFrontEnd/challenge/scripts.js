const modal_overlay = document.querySelector(".modal_overlay");
const modal = document.querySelector(".modal");

const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function () {
    const contant = card.getAttribute("id");
    modal_overlay.classList.add("active");
    modal_overlay.querySelector(
      "iframe"
    ).src = `https://rocketseat.com.br/${contant}`;
  });
}

document.querySelector(".close_modal").addEventListener("click", function () {
  modal_overlay.classList.remove("active");
  modal_overlay.querySelector("iframe").src = "";
});

document
  .querySelector(".modal_maximize")
  .addEventListener("click", function () {
    console.log(".modal_maximize");

    if (modal.classList.contains("maximize")) {
      modal.classList.remove("maximize");
    } else {
      modal.classList.add("maximize");
    }
  });
