
const Data = {
    poodle: {
        title: "Beibei",
        image: "images/poodle.png",
        description: "The most spoiled member of the family. Loves to sneak snacks and steal slippers."
    },
    guitar: {
        title: "Guitar",
        image: "images/guitar.png",
        description: "Accompanied Jessica on her musical journey, and participated in many performances and competitions."
    },
    me: {
        title: "Jessica",
        image: "images/me.png",
        description: "A mischievous girl who is curious about everything. She has a hundred different interests."
    }
};

function closeWelcomeCard() {
    const welcomeOverlay = document.querySelector('.welcome-overlay');
    welcomeOverlay.style.display = 'none';
}


function openCard(itemId) {
    const cardOverlay = document.querySelector('.card-overlay');
    const title = document.getElementById('card-title');
    const description = document.getElementById('card-description');
    const image = document.getElementById('card-image');
    cardOverlay.style.display = 'flex';


    const itemData = Data[itemId];

    if (itemData) {
        title.innerText = itemData.title;
        description.innerText = itemData.description;
        image.src = itemData.image;
        cardOverlay.style.display = 'flex';
    }
}

function closeCard() {
    const cardOverlay = document.querySelector('.card-overlay');
    cardOverlay.style.display = 'none';
}