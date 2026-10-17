// Manually defined images for each movie
const movieImages = [
  "images/action1.jpeg",
  "images/How to Lose a Guy in 10 Days 2003.jpeg",
  "images/bhyl bhuliya.jpeg",
  "images/horror 1.jpeg",
  "images/life hayat.jpeg",
  "images/Andy Dufresne - The man who crawled through hell to find freedom_.jpeg",
  "images/Up.jpeg",
  "images/adventure.jpeg",
  "images/twilight poster fantasy.jpeg",
  "images/Murder Mystery.jpeg",
  "images/✨PASANGERS ♥️.jpeg",
  "images/jab we met (2007).jpeg",
  "images/Padmaavat (2018).jpeg",
  "images/documentry1.jpeg",
  "images/movie11.jpg",
  "images/Cruella.jpeg",
  "images/Lord of the Rings - The Fellowship of the Ring.jpeg",
  "images/It - Chapter Two.jpeg",
  "images/Tamasha (2015).jpeg",
  "images/swades.jpeg"
];

// Manually defining the movie genres for simplicity
const genres = [
  "Action", "Romance", "Comedy", "Horror", "Drama", "Thriller",
  "Adventure", "Fantasy", "Sci-Fi", "Mystery", "Animation",
  "Family", "History", "Documentary"
];

// Create movie array with manual images and genres
const movies = Array.from({ length: 20 }, (_, i) => ({
  title: `Movie ${i + 1}`,
  genre: genres[i % genres.length],
  img: movieImages[i]  // Using manually defined image URLs
}));

// Get references to necessary elements
const movieList = document.getElementById("movieList");
const genreBar = document.getElementById("genreBar");
const extraGenres = document.getElementById("extraGenres");
const dropdownBtn = document.getElementById("dropdownBtn");

let selectedGenres = new Set(); // Track selected genres

// Genre buttons from HTML (selecting them dynamically)
const genreButtons = document.querySelectorAll('.genre-button');

// Add event listeners to genre buttons
genreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const genre = btn.textContent;
    btn.classList.toggle("selected");

    // Toggle the genre in the selected genres set
    if (selectedGenres.has(genre)) {
      selectedGenres.delete(genre);
    } else {
      selectedGenres.add(genre);
    }

    highlightMovies(); // Reapply highlight after selection
  });
});

// Toggle visibility of extra genres
dropdownBtn.addEventListener("click", () => {
  extraGenres.style.display = extraGenres.style.display === "none" ? "flex" : "none";
});

// Add movie cards to the page
movies.forEach(movie => {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.dataset.genre = movie.genre;

  const img = document.createElement("img");
  img.src = movie.img;
  img.alt = movie.title;

  card.appendChild(img);
  movieList.appendChild(card);
});

// Highlight movies based on selected genres
function highlightMovies() {
  const cards = document.querySelectorAll(".movie-card");
  cards.forEach(card => {
    const movieGenre = card.dataset.genre;

    // If no genres are selected, highlight all movies
    // If selected genres intersect with movie genre, highlight it
    if (selectedGenres.size === 0 || selectedGenres.has(movieGenre)) {
      card.classList.add("highlight");
    } else {
      card.classList.remove("highlight");
    }
  });
}

highlightMovies();
