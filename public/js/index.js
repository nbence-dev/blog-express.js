const modal = document.getElementById("modalOverlay");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

// Open Modal
openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden"; // Stop background scrolling
});

// Close Modal
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Re-enable scrolling
});

// Close on clicking outside the box
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }
});
