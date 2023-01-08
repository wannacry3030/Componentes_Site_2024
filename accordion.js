function toggleAccordion(event) {
  event.currentTarget.classList.toggle("open");
}

const items = document.querySelectorAll(".item");
items.forEach((item) => item.addEventListener("click", toggleAccordion));
