const homeLink = document.querySelector("#home");
const aboutUsLink = document.querySelector("#about-us");
const articlesLink = document.querySelector("#articles");
const shoppingLink = document.querySelector("#shopping");
const contactUsLink = document.querySelector("#contact-us");

homeLink.addEventListener("click", () => {
    location.reload;
})
aboutUsLink.addEventListener("click", () => {
    location.href = "./about-us/about-us.html";
})
articlesLink.addEventListener("click", () => {
    location.href = "./articles/articles.html";
})
shoppingLink.addEventListener("click", () => {
    location.href = "./shopping/shopping.html";
})
contactUsLink.addEventListener("click", () => {
    location.href = "./contact-us/contact-us.html";
})