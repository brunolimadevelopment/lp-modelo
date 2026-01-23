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
