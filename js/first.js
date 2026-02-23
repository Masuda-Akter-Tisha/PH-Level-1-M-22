console.log('first-js');

const allSection = document.getElementsByTagName ('section');
console.log(allSection);

for (const sec of allSection) {
    console.log(sec.innerText);
}

const firstTitle = document.getElementById ('first-title');
console.log(firstTitle.innerText);
firstTitle.innerText = 'prothum prothum valo lage';