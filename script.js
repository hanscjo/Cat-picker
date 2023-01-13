var src = "";
var boxId = "";
var textId = "";

function setSourceFromBox(selectedBox) {
    if (src == "") {
        if (boxId) {
            deSelectBox(); //Foretrekker dette fremfor å iterere gjennom alle img taggene
        }
        boxId = selectedBox.id;
        selectedBox.style.border = "4px solid red";
    }
    else {
        src = parseSource(src) + '.jpg';
        selectedBox.src = src;
        deSelectText();
        updateImgDescription("");
    }
}

function setSourceFromText(selectedText) {
    if (boxId == "") {
        if (textId) {
            deSelectText();
        }
        src = selectedText.innerHTML;
        textId = selectedText.id;
        selectedText.style.color = "red";
    }
    else {
        src = parseSource(selectedText.innerHTML) + '.jpg';
        document.getElementById(boxId).src = src;
        deSelectBox();
        updateImgDescription("");
        src = "";
    }
}

function parseSource(srcIn) {
    let parsedString = srcIn;
    parsedString = parsedString.toLowerCase();
    //parsedString = parsedString.replace(/\s/g, '');
    return parsedString;
}

function parseName(nameIn) {
    let nameArr = nameIn.split("/");
    nameStr = nameArr[nameArr.length - 1];
    nameArr = nameStr.split(".");
    nameStr = nameArr[0];
    nameStr = nameStr.replace('%20', ' ');
    return nameStr;
}

function getName() {
    if (boxId == '') {
        //document.getElementById("imgDescription").innerHTML = "Vennligst velg et bilde!";
        updateImgDescription("Vennligst velg et bilde!");
    }
    else {
        let name = document.getElementById(boxId).src;
        if (name == '') {
            //document.getElementById("imgDescription").innerHTML = "Dette bildet er tomt!";
            updateImgDescription("Dette bildet er tomt!");
            deSelectBox();
        }
        else {
            //document.getElementById("imgDescription").innerHTML = "Dette bildet er en " + parseName(name) + '.';
            updateImgDescription("Dette bildet er en <b>" + parseName(name) + '</b>.');
            deSelectBox();
        }
    }
    
}

function deSelectBox() {
    document.getElementById(boxId).style.border = "2px solid";
    boxId = "";
}

function deSelectText() {
    document.getElementById(textId).style.color = "black";
    textId = "";
    src = "";
}

function updateImgDescription(description) {
    document.getElementById("imgDescription").innerHTML = description;
}