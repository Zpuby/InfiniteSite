"use strict"

let bodyElement = document.querySelector("body");
let mainElement = document.querySelector("main")


function CreateBlock(title, content, link) {
    let titleElement = document.createElement("h2");
    let contentElement = document.createElement("p");
    let urlElement = document.createElement("a");
    titleElement.innerText = title;
    contentElement.innerText = content;
    urlElement.href = link;
    urlElement.innerText = `Ссылка`;
    urlElement.className = "link";
    
    
    let divElement = document.createElement("div");
    divElement.className = `block-${mainElement.childElementCount+1}`;
    divElement.className += ` block`;
    divElement.append(titleElement);
    divElement.append(contentElement);
    divElement.append(urlElement);
    mainElement.append(divElement);
}

console.log(CreateBlock("Test", "Test", "youtube.com"));