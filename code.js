var countries = ['BRAZIL', 'USA','ENGLAND','SPAIN','ARGENTINA','AUSTRALIA','GREECE','FRANCE'];


var grid;
var gridSize = 100;
var imagesPerRow = 4;

//function called after the page loads
function initialize(){
    grid = document.getElementById('grid');
    console.log(document.getElementById('searchButton'));
    document.getElementById('searchButton').onclick = search;
    populateGrid('Brazil');

   
}

function search(){
    var searchText = document.getElementById('searchInput').value;
    //make search text upper case to it can be matched with in country;
    searchText=searchText.toUpperCase();  
    if(countries.includes(searchText)){//populate grid if search is found
        populateGrid(searchText);
    }else{//display message when search is not found.
        notFoundMessage = "Sorry. "+searchText +" could not be found.<br> Available Countries: "+countries.join(", ");
        grid.innerHTML=notFoundMessage;
    }
}

function populateGrid(country){
    country=country.toUpperCase();
    //update the title for the grid
    document.getElementById('gridTitle').innerText=country;
    //clear grid
    grid.innerHTML = "";
    //add images to the grid
    for(i=1;i<=8;i++){
        var img = document.createElement("img");
        img.src="img/"+country+"/"+i+".jpg";
        img.width = gridSize;
        img.height = gridSize;
        grid.appendChild(img);
        //add a line break to the image grid
        if(i==imagesPerRow){
            var br = document.createElement("br");
            grid.appendChild(br);
        }
    }
}


