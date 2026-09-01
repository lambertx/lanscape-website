document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#quote-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Free Quote Request - LanScape Outdoors");
      const body = encodeURIComponent(
        `Name: ${data.get("name")}\n` +
        `Phone: ${data.get("phone")}\n` +
        `Email: ${data.get("email")}\n` +
        `City: ${data.get("city")}\n` +
        `Service: ${data.get("service")}\n` +
        `Project Size: ${data.get("size")}\n\n` +
        `Project Details:\n${data.get("message")}`
      );
      window.location.href = `mailto:info@lanscape.ca?subject=${subject}&body=${body}`;
    });
  }
});
