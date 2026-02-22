//parent node
const mainContainer = document.getElementById ('main-container');
console.log(mainContainer);

//create child node
const fishSection = document.createElement ('section');
console.log(fishSection);
fishSection.classList.add ('section-card');//add style by classList
fishSection.setAttribute ('id','fish-section');//set attribute
//cerate h1
const h2 = document.createElement ('h2');
h2.innerText = 'There are so many fishes that I like more';
fishSection.appendChild (h2);
//ul
const ul = document.createElement ('ul');
fishSection.appendChild (ul);
//li1
const li1 = document.createElement ('li');
li1.innerText = 'Elish mach';
ul.appendChild(li1);
//li2
const li2 = document.createElement ('li');
li2.innerText = 'Roi mach';
ul.appendChild(li2);

//set browser
mainContainer.appendChild(fishSection);


//easier to create element
const bookSection = document.createElement ('section');
bookSection.setAttribute ('id','book-section');
bookSection.classList.add ('section-card');

bookSection.innerHTML = `
<h2>Books that I need to read</h1>
<ul>
<li>physics</li>
<li>chemistry</li>
<li>math</li>
</ul>
`
mainContainer.appendChild (bookSection);