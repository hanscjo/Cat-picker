var src = "";
var boxId = "";
var textId = "";

function setSourceFromBox(selectedBox) {
    if (src == "") {
        for (img of document.images) {
            img.style.border = "2px solid";
        }
        boxId = selectedBox.id;
        selectedBox.style.border = "4px solid red";
    }
    else {
        src = parseSource(src) + '.jpg';
        selectedBox.src = src;
        document.getElementById(textId).style.color = "black";
        textId = "";
        src = "";
    }
}

function setSourceFromText(selectedText) {
    if (boxId == "") {
        for (div of document.getElementsByTagName("div")) {
            div.style.color = "black";
        }
        src = selectedText.innerHTML;
        textId = selectedText.id;
        selectedText.style.color = "red";
    }
    else {
        src = parseSource(selectedText.innerHTML) + '.jpg';
        document.getElementById(boxId).src = src;
        document.getElementById(boxId).style.border = "2px solid";
        boxId = "";
        src = "";
    }
}

function parseSource(srcIn) {
    let parsedString = srcIn;
    parsedString = parsedString.toLowerCase();
    parsedString = parsedString.replace(/\s/g, '');
    return parsedString;
}

function getName() {
    if (boxId == '') {
        document.getElementById("imgDescription").innerHTML = "Vennligst velg et bilde!";
    }
    else {
        let name = document.getElementById(boxId).src;
        if (name == '') {
            document.getElementById("imgDescription").innerHTML = "Dette bildet er tomt!";
            document.getElementById(boxId).style.border = "2px solid";
            boxId = "";
        }
        else {
            document.getElementById("imgDescription").innerHTML = "Dette bildet er en " + parseName(name);
            document.getElementById(boxId).style.border = "2px solid";
            boxId = "";
        }
    }
    
}

function parseName(nameIn) {
    let nameArr = nameIn.split("/");
    nameStr = nameArr[nameArr.length - 1];
    nameArr = nameStr.split(".");
    nameStr = nameArr[0];
    return nameStr;
}