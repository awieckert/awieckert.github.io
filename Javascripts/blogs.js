console.log("YAY!");




function writeToDom (stringToPrint, divID){
    var printDiv = document.getElementById(divID);
    printDiv.innerHTML = stringToPrint;
}


function createBlogCards (arrayOfObjects) {
    var currentObject;
    var stringToPrint = "";
    for(var i = 0; i < arrayOfObjects.length; i++){
        currentObject = arrayOfObjects[i];
        stringToPrint += "<div class='col-md-11 mb-3' id='Blog " + i + "'>";
        stringToPrint += "<div class='card'>";
        stringToPrint += "<div class='card-body'>";
        stringToPrint += "<h4 class='card-title'>" + currentObject.title + "</h4>";
        stringToPrint += "<h5 class='card-subtitle mb-2 text-muted'>" + currentObject.date + "</h5>";
        stringToPrint += "<h4>Strengths:</h4>" + "<p class='card-text'>" + currentObject.strengths + "</p>" + "<h4>Weaknesses:</h4>" + "<p class='card-text'>" + currentObject.weaknesses + "</p>";
        stringToPrint += "<a href='#Blog " + (i - 1) + "' class='btn btn-primary'>Go to previous</a>";
        stringToPrint += "<a href='#Blog " + (i + 1) + "' class='btn btn-primary ml-3'>Go to next</a>";
        stringToPrint += "</div>";
        stringToPrint += "</div>";
        stringToPrint += "</div>";
    }
    writeToDom(stringToPrint, "blogs-container");
}


function onLoad () {
    const data = JSON.parse(this.responseText);
    createBlogCards(data.blogs);
}

function onFail () {
    console.log("SHIT! It Broke");
}

const startApplication = () => {
    let myRequest = new XMLHttpRequest;
    myRequest.addEventListener("load", onLoad);
    myRequest.addEventListener("error", onFail);
    myRequest.open("GET", "../db/blogs.json");
    myRequest.send();
}

startApplication();