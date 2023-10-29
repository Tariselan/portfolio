var accessmode = false

function changefont() {
    if (accessmode == false) {
        document.body.style.fontFamily = 'Courier New';
        document.body.style.color = "#000";
        document.body.style.backgroundColor = "#FFF";
        for (let i = 0; i < document.getElementsByClassName("visible").length; i++) {
            document.getElementsByClassName("visible")[i].style.backgroundColor = "#FFF";
        }
        document.getElementById("title").style.backgroundColor = "#FFF"
        accessmode = true;
    }
    else {
        document.body.style.fontFamily = 'Helvetica';
        document.body.style.color = "#9b2948";
        document.body.style.backgroundColor = "#ffedbf";
        for (let i = 0; i < document.getElementsByClassName("visible").length; i++) {
            document.getElementsByClassName("visible")[i].style.backgroundColor = "#ffca7b";
        }
        document.getElementById("title").style.backgroundColor = "#ffca7b"
        accessmode = false;
    }
}