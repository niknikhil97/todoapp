const themeSelectTag = document.querySelector("header select");
console.log(themeSelectTag);
themeSelectTag.addEventListener('change' , function(){
    let body = document.querySelector("body");
    if(this.value == "dark"){
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
    }
})