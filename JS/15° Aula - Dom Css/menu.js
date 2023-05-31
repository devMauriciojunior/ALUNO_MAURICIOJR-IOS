const btnClose = document.getElementById("closeBtn");
let OpenBtn = document.getElementById("openBtn");
let sidebar = document.getElementById("mySideBar");
let main = document.getElementById("main");


OpenBtn.addEventListener("click", () => {
    sidebar.style.width = "200px"
    main.style.marginLeft = "200px"
});

btnClose.addEventListener("click", () => {
    sidebar.style.width = "0"
    main.style.marginLeft = "0"
});