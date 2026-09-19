const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("visible");
  });
}

const form = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get("name") || "Traveler";
    const email = formData.get("email") || "Not provided";
    const interest = formData.get("interest") || "a Sri Lanka tour";
    const message =
      formData.get("message") || "I would like to plan a trip.";

    const whatsappMessage =
      `Hello Ikshu Tours & Travels!\n\n` +
      `My name is ${name}.\n` +
      `Email: ${email}\n` +
      `I am interested in: ${interest}\n\n` +
      `Trip details:\n${message}`;

    if (formNote) {
      formNote.textContent =
        "Opening WhatsApp so we can start planning your journey...";
    }

    const whatsappUrl =
      `https://wa.me/94774553892?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    form.reset();
  });
}