const homeLink = document.querySelector("#home");
const aboutUsLink = document.querySelector("#about-us");
const articlesLink = document.querySelector("#articles");
const shoppingLink = document.querySelector("#shopping");
const contactUsLink = document.querySelector("#contact-us");

homeLink.addEventListener("click", () => {
    window.location.href = "../index.html";
})
aboutUsLink.addEventListener("click", () => {
    window.location.reload;
})
articlesLink.addEventListener("click", () => {
    window.location.href = "../articles/articles.html";
})
shoppingLink.addEventListener("click", () => {
    window.location.href = "../shopping/shopping.html";
})
contactUsLink.addEventListener("click", () => {
    window.location.href = "../contact-us/contact-us.html";
})