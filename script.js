const numberOfFilms = +prompt('How many films have you seen?', '');
const yourFavouriteActor = prompt('Who is your favourite actor?', '');
const yourFavouriteGenre = prompt('What is your favourite genre?', '');
const filmNovelty = +prompt('What year is your favorite movie?', '');

    let novelty = false;

    if (filmNovelty > 2010) {
        novelty = true;
    } else {
        novelty = false;
    }
    let a = 'New';
    
    if (novelty = true) {
        a = 'New';
    } else {
        a = 'Old';
    }

    document.write(`<p id = 'title'>Your Answer</p>` + `<p id = 'jstext'>Films count: ${numberOfFilms}`
    + '<br>' + `Favourite Actor: ${yourFavouriteActor}` + '<br>' + `Favourite Genre: ${yourFavouriteGenre}`
    + '<br>' + `Film Novelty: ${a}</p>`);
    