const homburger = document.querySelector(".homburger");
const navList = document.querySelector(".nav-list");
const headerEl = document.querySelector(".header");


homburger.addEventListener("click", () => {
    let allChildren = homburger.children;
    let allChildrenLenght = allChildren.length;
    for (let i = 0; i < allChildrenLenght; i++) {
        allChildren[i].classList.toggle("active");
    }
    navList.classList.toggle("active");
    headerEl.classList.toggle("active");
});
