// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Loop Card
let outputHtml = "";
const dataCards = [
  {
    name: "Lupa ATM",
    desc: "Apakah yang harus dilakukan jika lupa PIN ATM Kartu BCI Debit",
  },
  {
    name: "Kartu debit BCI hilang",
    desc: "Apa yang harus kalian lakukan jika kartu debit BCI hilang",
  },
  {
    name: "Kartu terbelokir",
    desc: "Apa yang harus kalian lakukan jika kartu bank bci terbelokir ?",
  },
  {
    name: "Buat pertanyaan kepada kami",
    desc: "tanyakan sesuatu",
  },
];

for (let i = 0; i < dataCards.length; i++) {
  outputHtml += `<div class="card box-shadow">`;
  outputHtml += `<h2>${dataCards[i].name}</h2>`;
  outputHtml += ` <p>${dataCards[i].desc}</p>`;
  outputHtml += `<a href="#">Lihat Solusi ></a>`;
  outputHtml += `</div>`;
}

document.querySelector(".cards").innerHTML = outputHtml;
