const quotes = [
  { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
  { text: "Do what you can, with what you have, where you are.", author: "Teddy Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "Small steps in the right direction can turn out to be the biggest step of your life.", author: "Anonymous" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" }
];

const gradients = [
  "linear-gradient(135deg, #0f172a, #1e1b4b, #311042)",
  "linear-gradient(135deg, #064e3b, #047857, #111827)",
  "linear-gradient(135deg, #4c1d95, #831843, #0f172a)",
  "linear-gradient(135deg, #1e3a8a, #0d9488, #111827)",
  "linear-gradient(135deg, #881337, #431407, #0f172a)"
];

const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function updateQuote() {
  quoteText.classList.add('fade-out');
  quoteAuthor.classList.add('fade-out');

  setTimeout(() => {
    const randomQuote = getRandomItem(quotes);
    quoteText.textContent = `"${randomQuote.text}"`;
    quoteAuthor.textContent = `- ${randomQuote.author}`;

    document.body.style.background = getRandomItem(gradients);

    quoteText.classList.remove('fade-out');
    quoteAuthor.classList.remove('fade-out');
  }, 300);
}

copyBtn.addEventListener('click', () => {
  const fullText = `${quoteText.textContent} ${quoteAuthor.textContent}`;
  navigator.clipboard.writeText(fullText).then(() => {
    copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    setTimeout(() => {
      copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    }, 1500);
  });
});

generateBtn.addEventListener('click', updateQuote);