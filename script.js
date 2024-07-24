// Boutons + scroll

const enTete = document.querySelector(".header");

window.addEventListener("scroll", () => {
  enTete.classList.toggle("sticky", window.scrollY > 120);
});

let menu = document.querySelector("#menu-icon");
let navList = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navList.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navList.classList.remove("active");
};

// Vanta.js

var setVanta = () => {
  if (window.VANTA)
    window.VANTA.BIRDS({
      el: ".hero",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x1b1f24,
      color1: 0x13bbff,
      color2: 0xc3cad5,
      speedLimit: 4.0,
      separation: 36.0,
      cohesion: 32.0,
      quantity: 4.0,
    });
};

document.addEventListener("DOMContentLoaded", (event) => {
  setVanta();
});

// AOS

// mail

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const nameElement = document.getElementById("text");
  const emailElement = document.getElementById("email");
  const messageElement = document.getElementById("message");

  const name = nameElement.value;
  const email = emailElement.value;
  const message = messageElement.value;

  // Encode les valeurs pour les utiliser dans une URL
  const subject = encodeURIComponent(`Contact de ${name}`);
  const body = encodeURIComponent(
    `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  // Crée un lien mailto: dynamique
  const mailtoLink = `mailto:gleizepierre3@gmail.com?subject=${subject}&body=${body}`;

  // Redirige l'utilisateur vers le lien mailto:
  window.location.href = mailtoLink;
});
