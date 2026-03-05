document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const faqItem = item.parentElement;
    faqItem.classList.toggle("active");
  });
});

const headers = document.querySelectorAll(".accordion-header");

headers.forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;

    // Fecha os outros (accordion clássico)
    document.querySelectorAll(".accordion-item").forEach((el) => {
      if (el !== item) {
        el.classList.remove("active");
      }
    });

    // Alterna o atual
    item.classList.toggle("active");
  });
});

const swiper = new Swiper('.swiper-aprender', {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  effect: 'fade', // Transição suave entre os conteúdos
  fadeEffect: {
    crossFade: true
  }
});

// Modal
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("campaignModal");
    const closeBtn = document.querySelector(".close");

    // verifica se já foi fechado antes
    if (!localStorage.getItem("modalClosed")) {
      setTimeout(() => {
        modal.style.display = "flex";
      }, 5000);
    }

        closeBtn.addEventListener("click", function () {
          modal.style.display = "none";
          localStorage.setItem("modalClosed", "true");
        });

        window.addEventListener("click", function (event) {
          if (event.target === modal) {
            modal.style.display = "none";
            localStorage.setItem("modalClosed", "true");
          }
        });
  });
