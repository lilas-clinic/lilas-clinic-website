const button=document.querySelector(".menu-button");
const nav=document.querySelector(".mobile-nav");
button?.addEventListener("click",()=>{
  const open=nav.classList.toggle("open");
  button.setAttribute("aria-expanded",String(open));
  button.textContent=open?"×":"☰";
});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open");
  button.setAttribute("aria-expanded","false");
  button.textContent="☰";
}));
