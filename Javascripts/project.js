console.log("YAY!");

var projects = [
    {
        id: "Project 1",
        title: "Super Cool Title 1",
        imgURL: "img/bug-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "Project 2",
        title: "Super Cool Title 2",
        imgURL: "img/not-funny-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "Project 3",
        title: "Super Cool Title 3",
        imgURL: "img/airplane-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "Project 4",
        title: "Super Cool Title 4",
        imgURL: "img/jedi-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "Project 5",
        title: "Super Cool Title 5",
        imgURL: "img/must-ask-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "Project 6",
        title: "Honestly, Not That Great of a Title",
        imgURL: "img/thermo-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
];

function writeToDom (stringToPrint, divID){
    var printDiv = document.getElementById(divID);
    printDiv.innerHTML = stringToPrint;
}


function createProjectCards (arrayOfObjects) {
    var currentObject;
    var stringToPrint = "";
    for(var i = 0; i < arrayOfObjects.length; i++){
        currentObject = arrayOfObjects[i];
        stringToPrint += "<div class='col-md-4'>";
        stringToPrint += "<div class='card' style='width: 18rem;'>";
        stringToPrint += "<img class='card-img-top' src=" + currentObject.imgURL + " alt='Cat Image'>";
        stringToPrint += "<div class='card-body'>";
        stringToPrint += "<h4 class='card-title'>" + currentObject.title + "</h4>";
        stringToPrint += "<p class='card-text'>" + currentObject.description + "</p>";
        stringToPrint += "<a href=" + currentObject.gitHubURL + "class='btn btn-primary'>Go to " + currentObject.id + "</a>";
        stringToPrint += "</div>";
        stringToPrint += "</div>";
        stringToPrint += "</div>";
    }
    writeToDom(stringToPrint, "project-container");
}

createProjectCards(projects);