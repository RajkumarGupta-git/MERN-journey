const columns = document.querySelectorAll('.column');
const taskInput = document.getElementById('taskInput');


const addBtn = document.getElementById('addBtn');
const todoContainer = document.querySelector('#todo .cards-container');
const inProgressContainer = document.querySelector('#in-progress .cards-container');
const doneContainer = document.querySelector('#done .cards-container');

let draggedCard = null;

function attachCardEvents(card){
  card.addEventListener('dragstart',()=>{
    draggedCard = card;

    card.classList.add('dragging');
});
  card.addEventListener('dragend', ()=>{
    card.classList.remove('dragging');
    draggedCard = null;



  });

  const deleteBtn = card.querySelector('.delete-btn');
  deleteBtn.addEventListener('click',()=>{
    card.remove();


    checkAllCompleted();
  });

}

document.querySelectorAll('.card').forEach(attachCardEvents);

function createCard(text)   {
  const card =document.createElement('div');
  card.classList.add('card');

  card.setAttribute('draggable','true');
  const cardText = document.createElement('span');
  cardText.textContent =text;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = '✕';
  card.appendChild(cardText);
  card.appendChild(deleteBtn);
  attachCardEvents(card);
  return card;

}

function addTask(){
  const text =taskInput.value.trim();


  if (text !== ''){
    const newCard=createCard(text);
    todoContainer.appendChild(newCard);
    taskInput.value= '';
    checkAllCompleted();
  }


}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key==='Enter'){
    addTask();
  }
});



columns.forEach(column=>{
  const container=column.querySelector('.cards-container');

  column.addEventListener('dragover',(e)=>{
    e.preventDefault();


    column.classList.add('hovered');
  });

  column.addEventListener('dragleave',()=>   {
    column.classList.remove('hovered');
  });

  column.addEventListener(  'drop',   ()=>{
    column.classList.remove('hovered');
    if (draggedCard){
      container.appendChild(draggedCard);
      checkAllCompleted();
    }



  });
});

function trigger10SecCelebration() {
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(function() {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }


    confetti({
      particleCount: 40,
      startVelocity: 30,
      spread: 360,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 250);
}

function checkAllCompleted() {
  const todoCount = todoContainer.querySelectorAll('.card').length;
  const inProgressCount = inProgressContainer.querySelectorAll('.card').length;
  const doneCount = doneContainer.querySelectorAll('.card').length;

  if (todoCount=== 0 && inProgressCount ===0 && doneCount>0)   {
    trigger10SecCelebration();


  }
}