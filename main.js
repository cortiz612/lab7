function getRandomCat() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => {
        const catImageElement = document.getElementById('catImage');
        catImageElement.src = data[0].url;
    })
    .catch(error => {
        console.error('Error fetching cat image:', error);
    });
}

function getRandomJoke() {
    fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit&type=single')
    .then(response => response.json())
    .then(data => {
        const jokeElement = document.getElementById('programmingJoke');
        jokeElement.textContent = data.joke || `${data.setup} ${data.delivery}`;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
    });
}
