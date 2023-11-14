let musicContainer = document.getElementById('music-container');

let musicData = [
    {
        "title": "Easy On Me",
        "artist": "Adele",
        "genre": "Pop",
        "releaseYear": 2021,
        "albumCover": "albumCover/easyOnMe.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=U3ASj1L6_sY"
    },
    {
        "title": "Fallin' All in You",
        "artist": "Shawn Mendes",
        "genre": "Pop",
        "releaseYear": 2018,
        "albumCover": "albumCover/fallinAllInYou.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=D5P1R6CRsoM"
    },
    {
        "title": "Lay Me Down",
        "artist": "Sam Smith",
        "genre": "Soul Music",
        "releaseYear": 2014,
        "albumCover": "albumCover/layMeDown.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=HaMq2nn5ac0"
    },
    {
        "title": "Cruel Summer",
        "artist": "Taylor Swift",
        "genre": "Pop",
        "releaseYear": 2019,
        "albumCover": "albumCover/cruelSummer.png",
        "youtubeLink": "https://www.youtube.com/watch?v=ic8j13piAhQ"
    },
    {
        "title": "Celebrity",
        "artist": "IU (Lee Ji-eun)",
        "genre": "K-Pop",
        "releaseYear": 2021,
        "albumCover": "albumCover/celebrity.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=0-q1KafFCLU"
    },
    {
        "title": "Winter Without You",
        "artist": "Gloria Kim",
        "genre": "Pop",
        "releaseYear": 2021,
        "albumCover": "albumCover/winterWithoutYou.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=48mCZ7RAIQ8"
    },
    {
        "title": "I miss you, I'm sorry",
        "artist": "Gracie Abrams",
        "genre": "Adult Contemporary",
        "releaseYear": 2021,
        "albumCover": "albumCover/iMissYouIAmSorry.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=nijx6Np0o40"
    },
    {
        "title": "Dancing With Your Ghost",
        "artist": "Sasha Alex Sloan",
        "genre": "Pop",
        "releaseYear": 2019,
        "albumCover": "albumCover/dancingWithYourGhost.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=Qzc_aX8c8g4"
    },
    {
        "title": "Consequences",
        "artist": "Camila Cabello",
        "genre": "Pop",
        "releaseYear": 2018,
        "albumCover": "albumCover/consequences.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=k73EBmeJ950"
    },
    {
        "title": "The Butterfly Effect",
        "artist": "Before You Exit",
        "genre": "Pop",
        "releaseYear": 2019,
        "albumCover": "albumCover/theButterflyEffect.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=8SFo7A8sD04"
    },
    {
        "title": "YOUTH",
        "artist": "Troye Sivan",
        "genre": "Pop",
        "releaseYear": 2015,
        "albumCover": "albumCover/youth.jpeg",
        "youtubeLink": "https://www.youtube.com/watch?v=XYAghEq5Lfw"
    }
]

for (let i = 0; i < musicData.length; i++) {
    addAlbum(musicData[i]);
}

function addAlbum (album) {
    let albumElement = document.createElement('div');
    albumElement.classList.add('album');

    let anchor = document.createElement('a');
    anchor.href = album.youtubeLink;
    // Opens the YouTube Link on a New Window
    anchor.target = "_blank";

    let img = document.createElement('img');
    img.src = album.albumCover;

    let content = document.createElement('div');
    content.classList.add('album-content');

    let title = document.createElement('h2');
    title.textContent = album.title;

    let artist = document.createElement('p');
    artist.textContent = album.artist;

    let details = document.createElement('p');
    details.textContent = `${album.genre} |  ${album.releaseYear}`;

    content.appendChild(title);
    content.appendChild(artist);
    content.appendChild(details);

    anchor.appendChild(img);
    albumElement.appendChild(anchor);
    albumElement.appendChild(content);

    musicContainer.appendChild(albumElement);
}