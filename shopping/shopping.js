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
    window.location.href = "../articles/articles.html";
})
shoppingLink.addEventListener("click", () => {
    window.location.reload;
})
contactUsLink.addEventListener("click", () => {
    window.location.href = "../contact-us/contact-us.html";
})

const displayGallaryButton = document.querySelector(".gallary");
displayGallaryButton.addEventListener("click", () => {
    document.querySelector(".section1 .shopping-wraper .items").classList.add("display-gallary")
})
const displayGridButton = document.querySelector(".grid");
displayGridButton.addEventListener("click", () => {
    document.querySelector(".section1 .shopping-wraper .items").classList.remove("display-gallary")
})