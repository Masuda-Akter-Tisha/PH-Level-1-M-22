// const section = document.getElementsByTagName ('section');
const section = document.querySelectorAll('section');
console.log(section);
for (const sec of section) {
    console.log(sec);
    sec.style.backgroundColor = 'pink';
    sec.style.border = '2px solid black';
    sec.style.marginBottom = '5px';
    sec.style.borderRadius = '10px';
    sec.style.padding = '20px';
}
// for (const sec of section) {
//     sec.classList.add ('section-card');
// }

const poranDhaka = document.querySelectorAll ('#poran-dhaka h1');
console.log(poranDhaka);
// for (const h1 of poranDhaka) {
//     h1.style.color = 'gold';
// }

//dynamic style
 for (const h1 of poranDhaka) {
   h1.classList.add ('dhaka-h1');
 }



