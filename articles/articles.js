const homeLink = document.querySelector("#home");
const aboutUsLink = document.querySelector("#about-us");
const articlesLink = document.querySelector("#articles");
const shoppingLink = document.querySelector("#shopping");
const contactUsLink = document.querySelector("#contact-us");

homeLink.addEventListener("click", () => {
    window.location.href = "../index.html";
})
aboutUsLink.addEventListener("click", () => {
    window.location.href = "../about-us/about-us.html";
})
articlesLink.addEventListener("click", () => {
    window.location.reload;
})
shoppingLink.addEventListener("click", () => {
    window.location.href = "../shopping/shopping.html";
})
contactUsLink.addEventListener("click", () => {
    window.location.href = "../contact-us/contact-us.html";
})