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

const readModal = document.getElementById("readModalOverlay");

function openReadModal(title, category, content, id) {
  // 1. Inject the data
  document.getElementById("readTitle").innerText = title;
  document.getElementById("readCategory").innerText = category;
  document.getElementById("readContent").innerText = content;
  document.getElementById("readID").innerText = `ID: ${id}`;

  // 2. Show the modal
  readModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Close logic
document.getElementById("closeReadModal").addEventListener("click", closeRead);
document.getElementById("closeReadBtn").addEventListener("click", closeRead);

function closeRead() {
  readModal.classList.add("hidden");
  document.body.style.overflow = "auto";
}

// Close on clicking background
readModal.addEventListener("click", (e) => {
  if (e.target === readModal) closeRead();
});
