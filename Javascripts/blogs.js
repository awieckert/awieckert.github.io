console.log("YAY!");

var blogs = [
    {
        id: "Blog 1",
        title: "Blog Post #1",
        date: "Date: 2/25/2018",
        strengths: "After going over Git and GitHub with the instructors I feel more comfortable with it than I did after the treehouse course. I feel that I am able to conceptualize most/all of what is being taught, except for the difference between red and green apparently!",
        weaknesses: "Styling images! Christ! I'm not sure if it is attempting to mimic another site using their source material or what but I have been struggling with the sizing of images. Page layout is going to be my biggest downfall, or really where I need to spend most of my time practicing. Hoping that utilizing flexbox on my own site will prove more fruitful for my understanding of layout and image/div sizing.",
        notes: "It may be, that a better way to size images is by utilizing background-image in CSS. Requires a div to have set width and heigh though."
    },
    {
        id: "Blog 2",
        title: "Blog Post #2",
        date: "Date: 3/9/2018",
        strengths: "JavaScript logic. I feel relatively comfortable with the concepts of JavaScript that we have learned so far. I think my strengths will primarily lie within the realm of JavaScript over CSS styling. I have felt good about our group communication as well. Everyone is putting the time in and willing to ask questions/help out.",
        weaknesses: "More advanced JavaScript. While I just said JavaScript was where my strength lie, it is also where I have plenty of glaring weaknesses. There is a lot to learn and I've only just scratched the tip. Recently I've been frustrated with the .filter() function. I also need to be careful creating infinite loops. Is doesn't happen often but when it does, oh man does it!",
        notes: "When fixing an infinite loop, make sure to clear you're browsers cache. Even after fixing the issue and starting a localhost on a different port, depending on where the loop is being loaded it can persist in your cache.",
    },
    {
        id: "Blog 3",
        title: "Blog Post #3",
        date: "Date: 3/9/2018",
        strengths: "Not sure there are any new updates in this category. Certainly have more weaknesses to discuss! YAY!",
        weaknesses: "Knowing when to take a break! I struggled with a loop for an hour and a half, fixed the issue but became frustrated with myself. I then attempted to wrestle with a new concept. BAD IDEA when you're already frustrated. I need to identify when I need to switch gears and work on something else. Part of the issue is that I don't like to leave things unfinished. Probably going to have to learn that this is an inevitability.",
        notes: "JavaScript is awesome when it works and you comprehend whats being done. JavaScript SUCKS when you don't.",
    },
];
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

createBlogCards(blogs);