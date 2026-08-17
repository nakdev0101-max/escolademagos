/* =========================================================
   ESCOLA DE MAGOS — script.js
   1. Menu mobile (abrir/fechar)
   2. Fechar o menu ao clicar em um link
   3. Formulário -> monta mensagem e abre o WhatsApp
   4. Revelar seções ao rolar a página (scroll reveal)
   ========================================================= */

// Número de WhatsApp que recebe os pedidos (só os dígitos, com DDI+DDD)
const WHATSAPP_NUMBER = "5547997138542";

/* ---------- 1. MENU MOBILE ---------- */
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", isOpen);
});

/* ---------- 2. FECHAR MENU AO CLICAR EM LINK ---------- */
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 3. FORMULÁRIO -> WHATSAPP ---------- */
const form = document.getElementById("pedidoForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const trabalho = document.getElementById("trabalho").value;
  const nascimento = document.getElementById("nascimento").value;
  const caso = document.getElementById("caso").value.trim();

  // monta o texto que vai ser enviado no WhatsApp
  const linhas = [
    "Olá! Gostaria de solicitar um trabalho.",
    `Nome: ${nome}`,
    `Trabalho desejado: ${trabalho}`,
  ];

  if (nascimento) {
    linhas.push(`Data de nascimento: ${nascimento}`);
  }

  linhas.push(`Caso: ${caso}`);

  const mensagem = linhas.join("\n");
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensagem)}`;

  window.open(url, "_blank");
});

/* ---------- 4. SCROLL REVEAL ---------- */
// marca os elementos que devem "aparecer" suavemente ao entrar na tela
const revealTargets = document.querySelectorAll(
  ".card, .section-title, .gallery-item, .social-links a, .about-inner, .process-list li"
);

revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => observer.observe(el));
