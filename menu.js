let icons = document.querySelector(".icon")
let links = document.querySelector(".link-content")
let Image = document.querySelector 

let flag = false


icons.addEventListener("click", () => {
    console.log("hello")
    flag = !flag
    console.log(flag);
    if (flag) {
        links.style.display = "block"
        // links.style.visibility =  "visible"
        Image .src = "cross.png"


    } else {
        links.style.display = "none"
        //  Image.src = "images.png"

    }

})
