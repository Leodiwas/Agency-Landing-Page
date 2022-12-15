"use strict";

const navBar = document.querySelector(".navbar-nav");
const contact_form = document.querySelector(".contact");
const contact_Btn = document.getElementById("contact_btn");

navBar.addEventListener("click", (e) => {
  e.preventDefault();

  const btn = e.target.closest(".nav-link");

  if (!btn) return;

  const id = e.target.getAttribute("href");
  console.log(id);
  return document.querySelector(id).scrollIntoView({ behaviour: "smooth" });
});

contact_Btn.addEventListener("click", () => {
  return contact_form.scrollIntoView({ behavior: "smooth" });
});
