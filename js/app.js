// UI

const movieImg = document.querySelectorAll("#movies img");
const movieTitle = document.querySelectorAll("#movies .movie-title");

const comingImg = document.querySelectorAll("#coming img");
const comingTitle = document.querySelectorAll("#coming .movie-title");

const year = document.querySelectorAll(".year");

console.log(year);


// console.log(movieImg);
// console.log(movieImg.length);
// console.log(movieTitle);

console.log(comingImg);

fetch("https://imdb8.p.rapidapi.com/title/v2/find?title=one%20piece&limit=20&sortArg=moviemeter%2Casc",{

    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'fa7f61bcc6mshde537db691385b9p121ce5jsnddd0bede12b3',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
})
.then( response => response.json() )
.then( json => {

    movieImg.forEach( ( each, idx ) => {

        if( !(json.results[idx].image == undefined || json.results[idx].image.url == undefined)) {

            each.src = json.results[idx].image.url;

            movieTitle[idx].innerText = json.results[idx].title;
        }else{
            each.src = "./image/default.jpg";

            movieTitle[idx].innerText = json.results[idx].title;
        }

    } );

    comingImg.forEach(function(each, idx) {

        if( !(json.results[idx].image == undefined || json.results[idx].image.url == undefined)) {

            each.src = json.results[movieImg.length + idx].image.url;

            comingTitle[idx].innerText = json.results[movieImg.length + idx].title;
        
        }else{
            each.src = "./image/default.jpg";

            comingTitle[idx].innerText = json.results[movieImg.length + idx].title;
        }
    });

    year.forEach( (each, idx) => {

        if( !(json.results[idx].image == undefined || json.results[idx].image.url == undefined)) {

            each.innerText = json.results[idx].year;

            each.nextElementSibling.innerText = json.results[idx].titleType;
        
        }else{
            each.src = "./image/default.jpg";

            each.innerText = "";

            each.nextElementSibling.innerText = json.results[idx].titleType;
        }

        console.log(each.nextElementSibling);

    } );

    console.log(json);
} );


fetch("https://imdb8.p.rapidapi.com/title/v2/find?title=one%20piece&limit=20&sortArg=moviemeter%2Casc", {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa7f61bcc6mshde537db691385b9p121ce5jsnddd0bede12b3',
		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
}
})
.then( response => response.json() )
.then( json => console.log(json) );
