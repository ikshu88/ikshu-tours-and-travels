const whatsappMessage =
  `Hello Ikshu Tours & Travels!\n\n` +
  `My name is ${name}.\n` +
  `I am interested in ${interest}.\n\n` +
  `${message}`;const toggle = document.querySelector(".menu-toggle");
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

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const form = document.querySelector("#bookingForm");
const formNote = document.querySelector("#formNote");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get("name") || "Traveler";
    const interest = formData.get("interest") || "a Sri Lanka tour";
    const message =
      formData.get("message") || "I would like to plan a trip.";

    const whatsappMessage =
      `Hello Ikshu Tours & Travels!\n\n` +
.\n` +
      `I am interested in ${interest}.\n\n` +
      message;

    if (formNote) {
      formNote.textContent =
        "Opening WhatsApp so we can start planning your journey...";
    }

    window.open(
      `https://wa.me/94774553892?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener"
    );

    form.reset();
  });
}