console.log("YAY!");

var projects = [
    {
        id: "project1",
        title: "Super Cool Title 1",
        imgURL: "img/bug-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "project2",
        title: "Super Cool Title 2",
        imgURL: "img/not-funny-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "project3",
        title: "Super Cool Title 3",
        imgURL: "img/airplane-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "project4",
        title: "Super Cool Title 4",
        imgURL: "img/jedi-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "project5",
        title: "Super Cool Title 5",
        imgURL: "img/must-ask-cat.jpg",
        description: "This might be the most awesome project ever created, no seriously its really cool! Okay maybe it's not that great but you should still check it out.",
        gitHubURL: "https://awieckert.github.io/"
    },
    {
        id: "project6",
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

console.log(projects[0].id);

function createProjectCards (arrayOfObjects) {
    var currentObject;
    var stringToPrint;
    for(var i = 0; i < arrayOfObjects.length; i++){
        currentObject = arrayOfObjects[i];
        stringToPrint += "<section>";
        stringToPrint += 
    }
}

