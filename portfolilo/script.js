// Close welcome popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Highlight nav link on scroll
document.addEventListener("DOMContentLoaded", () => {
  const links    = document.querySelectorAll(".nav a");
  const sections = document.querySelectorAll(".page");

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(link =>
          link.classList.toggle("active", link.getAttribute("href") === `#${e.target.id}`)
        );
      }
    });
  }, { threshold: 0.6 });

  sections.forEach(sec => io.observe(sec));
});
