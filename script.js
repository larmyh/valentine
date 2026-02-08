const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const question = document.getElementById('question');

let fontSize = 1.2;

noButton.addEventListener('click', () => {
    // Make the Yes button bigger
    fontSize += 0.5;
    yesButton.style.fontSize = `${fontSize}rem`;
    
    // Change the "No" text to be more persuasive
    const phrases = ["Are you sure?", "Really?", "Think again!", "Pwease?", "I nom u then u know:("];
    noButton.innerText = phrases[Math.floor(Math.random() * phrases.length)];
});

yesButton.addEventListener('click', () => {
    question.innerText = "Yay! See you on the 14th! hehehehehehe i love you🥰";
    document.querySelector('.buttons').style.display = 'none';
});
