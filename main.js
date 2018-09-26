const myPeeps = [
  {
    title: 'Actress',
    name: 'Marilyn Monroe',
    bio:
      'an American actress, model, and singer. Famous for playing comic "blonde bombshell" characters, she became one of the most popular sex symbols of the 1950s and was emblematic of the era\'s attitudes towards sexuality.',
    image: '//upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Monroecirca1953.jpg/220px-Monroecirca1953.jpg',
    lifespan: {
      birth: 1926,
      death: 1962
    }
  },
  {
    title: 'US President',
    name: 'Abraham Lincoln',
    bio:
      'an American statesman and lawyer who served as the 16th President of the United States from March 1861 until his assassination in April 1865.',
    image:
      '//upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Abraham_Lincoln_O-77_matte_collodion_print.jpg/220px-Abraham_Lincoln_O-77_matte_collodion_print.jpg',
    lifespan: {
      birth: 1809,
      death: 1865
    }
  },
  {
    title: 'Scientist',
    name: 'Albert Einstein',
    bio:
      'Albert Einstein is one of the most celebrated scientists of the Twentieth Century. His theories on relativity laid the framework for a new branch of physics, and Einstein’s E = mc2 on mass-energy equivalence is one of the most famous formulas in the world.',
    image: 'https://www.biographyonline.net/wp-content/uploads/2017/02/Albert_Einstein_Nobel.jpg',
    lifespan: {
      birth: 1879,
      death: 1955
    }
  },
  {
    title: 'Author',
    name: 'J.R.R. Tolkien',
    bio:
      'Tolkien was best known for his fantasy creations of Middle-Earth – writing The Hobbit, and the epic trilogy ‘The Lord of the Rings’. The Lord of the Rings made him one of the best selling authors of the Twentieth Century, spawning a new genre of fantasy.',
    image: 'https://www.biographyonline.net/wp-content/uploads/2014/05/jrr-tolkien1.jpeg',
    lifespan: {
      birth: 1892,
      death: 1973
    }
  }
];

const printToDom = (stringToPrint, elementId) => {
  const selectedDiv = document.getElementById(elementId);
  selectedDiv.innerHTML += stringToPrint;
};

const loadPeeps = () => {
  // const peepCards = document.getElementsByClassName
  let newString = '';
  for (let i = 0; i < myPeeps.length; i++) {
    const element = myPeeps[i];
    newString += `<div class="card m-2" style="max-width: 18rem;" id="${i + 1}">
    <div class="card-header bg-transparent">${element.name}</div>
    <div class="card-body">
        <h5 class="card-title">${element.title}</h5>
        <p class="card-text">${element.bio}</p>
    </div>
    <div class="card-footer bg-transparent">Born: ${element.lifespan.birth}<br>Died: ${element.lifespan.death}</div>
    </div>`;
  }
  printToDom(newString, 'peepBios');
};

// Set Card border and focus teh input
const cardFocus = () => {
  document.getElementById('input-field').focus();
  let cardEle = event.srcElement;
  // Traverse parents until you get to 'card' class, apply styling
  while (cardEle.parentNode) {
    cardEle = cardEle.parentNode;
    if (cardEle.classList.contains('card')) {
      cardEle.classList.contains('card-border')
        ? cardEle.classList.remove('card-border')
        : cardEle.classList.add('card-border');
      return;
    }
  }
};

// Rip through the bio cards and put click events on the top most DIV (card)
const registerEvents = () => {
  const bioCards = document.getElementsByClassName('card');
  for (let i = 0; i < bioCards.length; i++) {
    const element = bioCards[i];
    element.addEventListener('click', cardFocus);
  }
};

(document.onload = loadPeeps()), registerEvents();
