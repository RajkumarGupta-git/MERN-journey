const quizData = {
  html: [
    { q: "1. What does HTML stand for?", opts: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Text Mode Language", "Home Tool Markup Language"], ans: 0 },
    { q: "2. Which CSS layout display creates a 1D flex container along main and cross axes?", opts: ["display: flex", "display: grid", "display: inline-block", "display: block"], ans: 0 },
    { q: "3. In CSS Grid layout, which property defines the layout structure using named template areas?", opts: ["grid-area", "grid-template-areas", "grid-template-columns", "grid-auto-flow"], ans: 1 },
    { q: "4. Which attribute specifies the destination URL of a link?", opts: ["src", "href", "link", "path"], ans: 1 },
    { q: "5. How do you create a responsive 2D grid layout using CSS Grid?", opts: ["display: block", "display: grid", "display: flex", "display: table"], ans: 1 },
    { q: "6. Which CSS Flexbox property controls how flex items wrap onto multiple lines?", opts: ["flex-flow", "flex-direction", "flex-wrap", "align-content"], ans: 2 },
    { q: "7. What is the purpose of the HTML5 `<picture>` element?", opts: ["To play video with image fallback", "To render responsive images with `<source>` elements", "To crop photos automatically", "To draw graphics via JavaScript"], ans: 1 },
    { q: "8. What does `srcset` attribute do in an `<img>` tag?", opts: ["Defines animated image frames", "Provides multiple image sources for different display resolutions", "Sets image borders", "Loads images from external CDN"], ans: 1 },
    { q: "9. Which attribute controls custom non-visible data on HTML elements?", opts: ["custom-*", "data-*", "meta-*", "attr-*"], ans: 1 },
    { q: "10. Which attribute specifies that an input field must be filled out before submitting?", opts: ["validate", "important", "required", "placeholder"], ans: 2 }
  ],
  css: [
    { q: "1. What does CSS stand for?", opts: ["Cascading Style Sheets", "Computer Style System", "Creative Style Solution", "Colorful Style Sheet"], ans: 0 },
    { q: "2. Which CSS property changes text color?", opts: ["text-color", "color", "font-color", "background-color"], ans: 1 },
    { q: "3. How do you select an element with id 'header'?", opts: [".header", "#header", "*header", "header"], ans: 1 },
    { q: "4. Which property controls spacing inside borders?", opts: ["margin", "padding", "border-spacing", "gap"], ans: 1 },
    { q: "5. What is the default position value of elements in CSS?", opts: ["relative", "fixed", "absolute", "static"], ans: 3 },
    { q: "6. What is the difference between `display: none` and `visibility: hidden`?", opts: ["Both behave identically", "`display: none` leaves layout space, `visibility: hidden` removes it", "`display: none` removes element from document flow, `visibility: hidden` keeps its space", "None"], ans: 2 },
    { q: "7. Which CSS unit is relative to the font-size of the root element?", opts: ["em", "px", "rem", "vh"], ans: 2 },
    { q: "8. In Flexbox, which property aligns items along the cross axis?", opts: ["justify-content", "align-items", "flex-direction", "align-content"], ans: 1 },
    { q: "9. What does `box-sizing: border-box` do?", opts: ["Adds extra space outside border", "Includes padding and border within the total width and height", "Fixes background images", "Removes default margins"], ans: 1 },
    { q: "10. Which CSS Grid area shorthand property defines grid placement?", opts: ["grid-template-areas", "grid-area", "grid-column-start", "grid-auto-flow"], ans: 1 }
  ],
  js: [
    { q: "1. Which keyword declares a block-scoped variable?", opts: ["var", "let", "global", "declare"], ans: 1 },
    { q: "2. How do you output 'Hello' in browser alert popups?", opts: ["msg('Hello')", "alert('Hello')", "console.log('Hello')", "prompt('Hello')"], ans: 1 },
    { q: "3. What is the correct operator for checking value and type equality?", opts: ["==", "=", "===", "equals"], ans: 2 },
    { q: "4. What is the output of `typeof null` in JavaScript?", opts: ["'null'", "'undefined'", "'object'", "'number'"], ans: 2 },
    { q: "5. Which array method adds an item to the end of an array?", opts: ["push()", "pop()", "unshift()", "shift()"], ans: 0 },
    { q: "6. What does `Array.prototype.map()` return?", opts: ["A modified original array", "A brand new array with transformed elements", "A single number", "A boolean value"], ans: 1 },
    { q: "7. What is JavaScript Closure?", opts: ["A function bundled with references to its surrounding state (lexical environment)", "A method to close browser tabs", "A way to hide CSS variables", "A syntax error catch mechanism"], ans: 0 },
    { q: "8. What is the Event Loop in JavaScript?", opts: ["A loop that repeats animations", "Mechanism handling asynchronous callbacks execution queue", "A recursive function loop", "A way to iterate through arrays"], ans: 1 },
    { q: "9. What does `Promise.all()` do if one promise rejects?", opts: ["Resolves with remaining fulfilled promises", "Rejects immediately with the reason of the first rejected promise", "Retries automatically", "Ignores errors"], ans: 1 },
    { q: "10. What is the primary purpose of JavaScript Generators (`function*`)?", opts: ["Generate random numbers faster", "Functions that can be paused and resumed using `yield`", "Compile code into WebAssembly", "Create DB schemas"], ans: 1 }
  ]
};

const radius = 70;
const circumference = 2 * Math.PI * radius;

function renderQuiz() {
  Object.keys(quizData).forEach(subject => {
    const container = document.getElementById(`${subject}-questions`);
    container.innerHTML = "";

    quizData[subject].forEach((item, qIndex) => {
      const qBlock = document.createElement("div");
      qBlock.className = "q-block";

      let optionsHTML = item.opts.map((opt, optIndex) => `
        <label class="option-label" data-subject="${subject}" data-qindex="${qIndex}" data-optindex="${optIndex}">
          <input type="radio" name="${subject}-q${qIndex}" value="${optIndex}" />
          <span>${opt}</span>
        </label>
      `).join("");

      qBlock.innerHTML = `
        <p class="q-text">${item.q}</p>
        <div class="options-grid">${optionsHTML}</div>
      `;

      container.appendChild(qBlock);
    });
  });

  document.querySelectorAll('.option-label').forEach(label => {
    label.addEventListener('click', handleOptionClick);
  });
}

function handleOptionClick(e) {
  const label = e.currentTarget;
  const subject = label.getAttribute("data-subject");
  const qIndex = parseInt(label.getAttribute("data-qindex"));
  const selectedOpt = parseInt(label.getAttribute("data-optindex"));
  const correctOpt = quizData[subject][qIndex].ans;

  const parentGrid = label.parentElement;
  const allLabels = parentGrid.querySelectorAll('.option-label');

  allLabels.forEach(lbl => {
    lbl.classList.remove('correct', 'wrong');
  });

  if (selectedOpt === correctOpt) {
    label.classList.add('correct');
  } else {
    label.classList.add('wrong');
  }

  updateProgress(subject);
  checkFullCompletion();
}

function updateProgress(subject) {
  const totalQuestions = quizData[subject].length;
  const correctCount = document.querySelectorAll(`#${subject}-questions .option-label.correct`).length;

  const percent = (correctCount / totalQuestions) * 100;

  const circle = document.querySelector(`.${subject}-bar`);
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  document.getElementById(`${subject}-text`).textContent = `${Math.round(percent)}%`;
}

function checkFullCompletion() {
  const totalQuestionsAll = 30;
  const correctTotal = document.querySelectorAll('.option-label.correct').length;

  if (correctTotal === totalQuestionsAll) {
    triggerPartyPopper();
  }
}

function triggerPartyPopper() {
  const duration = 2.5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);

    confetti({
      particleCount,
      spread: 360,
      startVelocity: 30,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
  }, 250);
}

window.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
});