
// JUST A THEME SELECTOR FUNCTION
const themeSelectTag = document.querySelector("header select");
console.log(themeSelectTag);
themeSelectTag.addEventListener('change' , function(){
    // get body element
    let body = document.querySelector("body");

    // check for the value of select option selected
    // add or remove corresponding class to change the value of CSS Variables
    if(this.value == "dark"){
        body.classList.add("dark");
    }else{
        body.classList.remove("dark");
    }
})