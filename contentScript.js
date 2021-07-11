let counter = 0 
let storedLocation = window.location.pathname
window.setInterval(()=>{
if(window.location.pathname !== storedLocation){
storedLocation = window.location.pathname
console.log(window.location.pathname);
counter++
console.log(`%c Рома пососал ${counter} раз!`, 'color: red; font-size: 70px;');;
if(window.location.href.includes("https://vk.com/im")){
    document.querySelector(".im-right-menu").style.display = "none"
}
}
})