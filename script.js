// Handle adding Hero
document.getElementById('heroForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const hero = {
        name: document.getElementById('hero_name').value,
        real_name: document.getElementById('hero_real_name').value,
        nationality: document.getElementById('hero_nationality').value,
        first_appearance: document.getElementById('hero_first_appearance').value,
    };
    const heroes = JSON.parse(localStorage.getItem('heroes')) || [];
    heroes.push(hero);
    localStorage.setItem('heroes', JSON.stringify(heroes));
    alert('Hero added!');
    window.location.href = 'index.html';
});

// Handle adding Villain
document.getElementById('villainForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const villain = {
        name: document.getElementById('villain_name').value,
        real_name: document.getElementById('villain_real_name').value,
        nationality: document.getElementById('villain_nationality').value,
        first_appearance: document.getElementById('villain_first_appearance').value,
    };
    const villains = JSON.parse(localStorage.getItem('villains')) || [];
    villains.push(villain);
    localStorage.setItem('villains', JSON.stringify(villains));
    alert('Villain added!');
    window.location.href = 'index.html';
});

// Handle adding Movie
document.getElementById('movieForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const movie = {
        title: document.getElementById('movie_title').value,
        year: document.getElementById('movie_year').value,
        studio: document.getElementById('movie_studio').value,
        box_office: document.getElementById('movie_box_office').value,
    };
    const movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movie);
    localStorage.setItem('movies', JSON.stringify(movies));
    alert('Movie added!');
    window.location.href = 'index.html';
});

// Display Data in Browse Database
window.addEventListener('DOMContentLoaded', function() {
    const heroes = JSON.parse(localStorage.getItem('heroes')) || [];
    const villains = JSON.parse(localStorage.getItem('villains')) || [];
    const movies = JSON.parse(localStorage.getItem('movies')) || [];

    const heroList = document.getElementById('heroList');
    heroes.forEach(hero => {
        const li = document.createElement('li');
        li.textContent = `${hero.name} (First Appearance: ${hero.first_appearance})`;
        heroList.appendChild(li);
    });

    const villainList = document.getElementById('villainList');
    villains.forEach(villain => {
        const li = document.createElement('li');
        li.textContent = `${villain.name} (First Appearance: ${villain.first_appearance})`;
        villainList.appendChild(li);
    });

    const movieList = document.getElementById('movieList');
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = `${movie.title} (${movie.year}, Box Office: $${movie.box_office})`;
        movieList.appendChild(li);
    });
});
