//extra fun
//change image on refreash
function randomImage(){
    var images = [
     'static/images/flyingscasure.jpg',
     'static/images/invasion.jpg',
     'static/images/nasa.jpg',
     'static/images/IndependenceDay.jpg',
     'static/images/misslerange.png',
     'static/images/verses.jpg',
     'static/images/maxresdefault.jpg',
     'static/images/spaceship_edited/shippsAdded1.png',
     'static/images/spaceship_edited/shippsAdded7.png',
     'static/images/spaceship_edited/shippsAdded3.png',
     'static/images/spaceship_edited/shippsAdded6.png',
     'static/images/spaceship_edited/shippsAdded2.png',
     'static/images/spaceship_edited/shippsAdded8.png',
     'static/images/spaceship_edited/shippsAdded9.png',
     'static/images/spaceship_edited/shippsAdded10.png',
     'static/images/spaceship_edited/shippsAdded18.png',
     'static/images/spaceship_edited/shippsAdded17.png',
     'static/images/spaceship_edited/shippsAdded16.png',
     'static/images/spaceship_edited/shippsAdded20.png',
     'static/images/spaceship_edited/shippsAdded19.png',
     'static/images/spaceship_edited/shippsAdded21.png',
     'static/images/spaceship_edited/historical1.jpg',
     'static/images/spaceship_edited/historical2.jpg',
     'static/images/spaceship_edited/historical3.jpg',
     'static/images/spaceship_edited/historical4.jpg',
     'static/images/spaceship_edited/historical5.jpg',
     'static/images/spaceship_edited/historical6.jpg',
     'static/images/spaceship_edited/historical7.jpg'
    ];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('hero');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
   }
   
   document.addEventListener("DOMContentLoaded", randomImage);


///Another random image looper on refresh
function randomImage2(){
    var images = [
     'static/images/ships_floating/free_saucer.png',
     'static/images/ships_floating/saucer2.png',
     'static/images/ships_floating/saucer8.png',
     'static/images/ships_floating/Space-rocket.png',
     'static/images/ships_floating/swarm.png',
     'static/images/ships_floating/SwarmBlurred3.png',
     'static/images/alien/3dHead.png',
     'static/images/alien/alienEmoji.png',
     'static/images/alien/aliensSayhi.png',
     'static/images/alien/HalfFace.png',
     'static/images/alien/popular_alien.png',
     'static/images/alien/scaryAliens.png',
    ];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('imagebg2');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
   }
   
   document.addEventListener("DOMContentLoaded", randomImage2);

//<img src class=imagebg src= "static\images\ufo-clipart-clip-art-2.png">

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

















// from data.js
var tableData = data;
var table = d3.select("table");
var tbody = d3.select("tbody");
// YOUR CODE HERE!

console.log(data);

//loop through data
//console.log each Sighting object 
//Tueday class- went ovre this.

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
});//hate the semic colons so annoying

//linking table row 'tr' for each sighting object
data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
});//hate

//I've spent $9 for a js carosl  maker and it was all the animation I needed. money well spent. 

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");
    Object.entries(UFOSighting).forEach(function([key, value]) {
      console.log(key, value);
    });//hate
});//hate

//Object entries link to each UFOSightings.console.log
//one cell per a data value(group)

data.forEach(function(UFOSighting) {
    console.log(UFOSighting);
    var row = tbody.append("tr");

    //inside the loop
    Object.entries(UFOSighting).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the UFOSighting object
        var cell = tbody.append("td");
        //var cell2 = cell.toUpperCase();
    });//hate
});//hate

//Function to create the table from the array of objects
function createTable(rows){
    rows.forEach(function(element) {
        var row = tbody.append('tr');
        Object.entries(element).forEach(function([key, value]) {
            row.append('td').text(value);
        });//hate
    });//hate
}//Aparently doesnt need a semicolon



//clicks!!!
//Create a button and a response to clinking on it
var submit = d3.select("#filter-btn");
submit.on("click", function() {

d3.event.preventDefault();//neccessarey so it doesnt refreash

var inputElement = d3.select("#datetime");

var inputValue = inputElement.property("value");

//link between input values and stored values
var filteredData = tableData.filter(data => data.datetime === inputValue);

console.log(filteredData);

//refreash/clear output for next search
    tbody.selectAll('tr').remove();
   //fill the table with the searched for content
    filteredData.forEach(function(obj){
        var rows = tbody.append("tr");
        Object.keys(obj).forEach(function(key){
            rows.append("td").text(obj[key]);
        })
    })
});