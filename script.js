const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.textContent = isOpen ? "✕" : "☰";
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.textContent = "☰";
    });
  });
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();

// PERSONALIZE THESE LINKS BEFORE PUBLISHING:
const githubUsername = "YOUR_GITHUB_USERNAME";
const emailAddress = "YOUR_EMAIL@example.com";
const githubLink = document.querySelector("#github-link");
const emailLink = document.querySelector("#email-link");

if (githubUsername !== "YOUR_GITHUB_USERNAME") {
  githubLink.href = `https://github.com/${githubUsername}`;
}
if (emailAddress !== "YOUR_EMAIL@example.com") {
  emailLink.href = `mailto:${emailAddress}`;
}
