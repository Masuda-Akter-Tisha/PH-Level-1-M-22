 const playerSection = document.getElementById('players-section');
//  console.log(playerSection.childNodes[3]);
console.log(playerSection.childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);

//create element
// const para = document.createElement('p');
// para.innerText = 'Play Games';

// let box = document.getElementById ('players-section');
// box.appendChild(para);

//element create
let newElement = document.createElement ('li');
console.log(newElement);
//text set kora
newElement.innerText = 'new born baby footballer';
//browser a bushano
let setElement = document.getElementById ('players-list');
setElement.appendChild (newElement);