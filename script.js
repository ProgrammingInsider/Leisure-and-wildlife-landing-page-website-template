const bar = document.getElementById("bar");
const nav = document.getElementById("nav");

bar.onclick = (e) => {
    const iconType = e.target.getAttribute("class");

    if(iconType == "fa-solid fa-bars"){
        e.target.setAttribute("class","fa-solid fa-xmark");
        nav.classList.add("showNav")
    }else{
        e.target.setAttribute("class","fa-solid fa-bars");
        nav.classList.remove("showNav")
    }
}