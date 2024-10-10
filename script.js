window.addEventListener("DOMContentLoaded", () => {
  let swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 20,
    pagination: {
      el: ".pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1300: {
        slidesPerView: 3,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
      },
    },
  });

  const labels = document.querySelectorAll("label");

  labels.forEach((label) => {
    label.addEventListener("mouseenter", () => {
      const img = label.querySelector("img");
      img.dataset.originalSrc = img.src;
      img.src = "./icons/plus-hover.svg";
    });

    label.addEventListener("mouseleave", () => {
      const img = label.querySelector("img");
      img.src = img.dataset.originalSrc;
    });
  });
});
