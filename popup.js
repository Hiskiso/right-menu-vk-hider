let mainButton = document.querySelector("#main");
let log = document.querySelector("#data-area")
mainButton.addEventListener("click",async()=>{
let [tabs] =  await chrome.tabs.query({ active: true, currentWindow: true });
console.log(tabs);
if(tabs.url.includes("https://vk.com/im")){
    console.log("its vk!");
    log.innerHTML = "Ydalil ;)"
    chrome.tabs.getCurrent(function(tab) {
        console.log(tab);
    });

}
else{
    log.innerHTML = "idiot! Eto ne VK!!!"
}
})