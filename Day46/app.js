document.addEventListener('DOMContentLoaded', () => {
  const choices = {
    rock: { emoji: '🪨', beats: 'scissors' },
    paper: { emoji: '📄', beats: 'rock' },
    scissors: { emoji: '✂️', beats: 'paper' }
  };

  let gameState = {
    playerScore: 0,
    computerScore: 0,
    drawScore: 0,
    round: 1,
    streak: 0,
    highScore: parseInt(localStorage.getItem('rps_high_score')) || 0,
    isProcessing: false,
    soundEnabled: true,
    maxRounds: 5
  };

  const playerScoreEl = document.getElementById('player-score');
  const computerScoreEl = document.getElementById('computer-score');
  const drawScoreEl = document.getElementById('draw-score');
  const roundCountEl = document.getElementById('round-count');
  const winStreakEl = document.getElementById('win-streak');
  const highScoreEl = document.getElementById('high-score');
  const statusMessageEl = document.getElementById('status-message');
  
  const playerChoiceDisplay = document.getElementById('player-choice-display');
  const computerChoiceDisplay = document.getElementById('computer-choice-display');
  
  const choiceBtns = document.querySelectorAll('.choice-btn');
  const resetBtn = document.getElementById('reset-btn');
  const soundToggleBtn = document.getElementById('sound-toggle');
  
  const modalOverlay = document.getElementById('modal-overlay');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalPlayAgain = document.getElementById('modal-play-again');

  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  function playSound(type) {
    if (!gameState.soundEnabled || !audioCtx) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(200, now + 0.05);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'win') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.setValueAtTime(400, now + 0.1);
      osc.frequency.setValueAtTime(600, now + 0.2);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'lose') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(250, now);
      osc.frequency.linearRampToValueAtTime(100, now + 0.3);
      gain.gain.setValueAtTime(0.3, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.3);
      osc.start(now);
      osc.stop(now + 0.3);
    } else if (type === 'draw') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(300, now);
      osc.frequency.setValueAtTime(300, now + 0.15);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    }
  }

  function initGame() {
    highScoreEl.textContent = gameState.highScore;
    attachEventListeners();
  }

  function attachEventListeners() {
    choiceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        if (gameState.isProcessing) return;
        const choice = btn.getAttribute('data-choice');
        playRound(choice);
      });
    });

    resetBtn.addEventListener('click', resetGame);
    
    soundToggleBtn.addEventListener('click', () => {
      gameState.soundEnabled = !gameState.soundEnabled;
      soundToggleBtn.querySelector('.sound-icon').textContent = gameState.soundEnabled ? '🔊' : '🔇';
      playSound('click');
    });

    modalPlayAgain.addEventListener('click', () => {
      modalOverlay.classList.add('hidden');
      modalOverlay.setAttribute('aria-hidden', 'true');
      resetGame();
    });
  }

  function getComputerChoice() {
    const keys = Object.keys(choices);
    return keys[Math.floor(Math.random() * keys.length)];
  }

  function playRound(playerChoice) {
    gameState.isProcessing = true;
    playSound('click');

    clearVisualStates();

    updateChoiceDisplay(playerChoiceDisplay, choices[playerChoice].emoji);

    updateStatusMessage('Computer is thinking...', '');
    computerChoiceDisplay.querySelector('.choice-emoji').textContent = '⚡';
    computerChoiceDisplay.classList.add('thinking');

    setTimeout(() => {
      computerChoiceDisplay.classList.remove('thinking');
      const computerChoice = getComputerChoice();
      updateChoiceDisplay(computerChoiceDisplay, choices[computerChoice].emoji);

      const result = determineWinner(playerChoice, computerChoice);
      handleResult(result, playerChoice, computerChoice);

      gameState.isProcessing = false;
    }, 600);
  }

  function determineWinner(player, computer) {
    if (player === computer) return 'draw';
    return choices[player].beats === computer ? 'win' : 'lose';
  }

  function handleResult(result, player, computer) {
    if (result === 'win') {
      gameState.playerScore++;
      gameState.streak++;
      if (gameState.streak > gameState.highScore) {
        gameState.highScore = gameState.streak;
        localStorage.setItem('rps_high_score', gameState.highScore);
        highScoreEl.textContent = gameState.highScore;
      }
      
      updateStatusMessage(`You Win! ${choices[player].emoji} beats ${choices[computer].emoji}`, 'win');
      playerChoiceDisplay.classList.add('winner-glow');
      computerChoiceDisplay.classList.add('loser-shake');
      triggerPop(playerScoreEl);
      playSound('win');
      triggerConfetti();
    } else if (result === 'lose') {
      gameState.computerScore++;
      gameState.streak = 0;
      
      updateStatusMessage(`Computer Wins! ${choices[computer].emoji} beats ${choices[player].emoji}`, 'lose');
      computerChoiceDisplay.classList.add('winner-glow');
      playerChoiceDisplay.classList.add('loser-shake');
      triggerPop(computerScoreEl);
      playSound('lose');
    } else {
      gameState.drawScore++;
      updateStatusMessage("It's a Draw! 🤝", 'draw');
      triggerPop(drawScoreEl);
      playSound('draw');
    }

    updateScoreUI();

    if (gameState.playerScore >= 3 || gameState.computerScore >= 3) {
      setTimeout(() => {
        showGameOverModal(gameState.playerScore >= 3);
      }, 800);
    } else {
      gameState.round++;
      roundCountEl.textContent = gameState.round;
    }
  }

  function updateChoiceDisplay(element, emoji) {
    const emojiSpan = element.querySelector('.choice-emoji');
    emojiSpan.textContent = emoji;
    element.classList.add('score-pop');
    setTimeout(() => element.classList.remove('score-pop'), 300);
  }

  function updateStatusMessage(text, type) {
    statusMessageEl.textContent = text;
    statusMessageEl.className = 'status-message';
    if (type) statusMessageEl.classList.add(type);
  }

  function updateScoreUI() {
    playerScoreEl.textContent = gameState.playerScore;
    computerScoreEl.textContent = gameState.computerScore;
    drawScoreEl.textContent = gameState.drawScore;
    winStreakEl.textContent = `🔥 ${gameState.streak}`;
  }

  function triggerPop(element) {
    element.classList.add('score-pop');
    setTimeout(() => element.classList.remove('score-pop'), 400);
  }

  function clearVisualStates() {
    playerChoiceDisplay.classList.remove('winner-glow', 'loser-shake');
    computerChoiceDisplay.classList.remove('winner-glow', 'loser-shake');
  }

  function resetGame() {
    playSound('click');
    gameState.playerScore = 0;
    gameState.computerScore = 0;
    gameState.drawScore = 0;
    gameState.round = 1;
    gameState.streak = 0;
    gameState.isProcessing = false;

    updateScoreUI();
    roundCountEl.textContent = gameState.round;
    
    updateChoiceDisplay(playerChoiceDisplay, '?');
    updateChoiceDisplay(computerChoiceDisplay, '?');
    
    clearVisualStates();
    updateStatusMessage('Choose your weapon to start!', '');
  }

  function showGameOverModal(isWin) {
    modalTitle.textContent = isWin ? '🎉 Match Victory!' : '🤖 Defeat!';
    modalTitle.style.color = isWin ? 'var(--success)' : 'var(--danger)';
    modalDesc.textContent = isWin 
      ? `Outstanding! You won the Best of 5 series ${gameState.playerScore} - ${gameState.computerScore}.` 
      : `The computer claimed the series ${gameState.computerScore} - ${gameState.playerScore}. Better luck next time!`;
    
    modalOverlay.classList.remove('hidden');
    modalOverlay.setAttribute('aria-hidden', 'false');
    if (isWin) triggerConfetti();
  }

  function triggerConfetti() {
    const particlesCount = 25;
    for (let i = 0; i < particlesCount; i++) {
      const p = document.createElement('div');
      p.style.position = 'fixed';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.top = '-10px';
      p.style.width = Math.random() * 8 + 4 + 'px';
      p.style.height = Math.random() * 8 + 4 + 'px';
      p.style.backgroundColor = ['#7C3AED', '#2563EB', '#06B6D4', '#22C55E', '#F59E0B'][Math.floor(Math.random() * 5)];
      p.style.borderRadius = '50%';
      p.style.zIndex = '999';
      p.style.pointerEvents = 'none';
      p.style.transition = `transform ${Math.random() * 1.5 + 1}s ease-out, opacity ${Math.random() * 1.5 + 1}s ease-out`;

      document.body.appendChild(p);

      setTimeout(() => {
        p.style.transform = `translate(${Math.random() * 100 - 50}px, ${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`;
        p.style.opacity = '0';
      }, 20);

      setTimeout(() => p.remove(), 2500);
    }
  }

  initGame();
});