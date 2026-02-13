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

async function fetchAndShowPost(id) {
  try {
    // Send GET req to our new API
    const response = await fetch(`posts/${id}`);
    const post = await response.json();
    // 1. Inject the data
    document.getElementById("readTitle").innerText = post.title;
    document.getElementById("readCategory").innerText = post.category;
    document.getElementById("readContent").innerText = post.content;
    document.getElementById("readID").innerText =
      `ID: ${post.id.toString().slice(-4)}`;
    // 2. Show the modal
    document.getElementById("readModalOverlay").classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } catch (err) {
    console.error("Error fetching post: ", err);
    alert("Error fetching post");
  }
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
