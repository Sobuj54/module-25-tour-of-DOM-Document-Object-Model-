// 1.where to add
const placesList = document.getElementById('places-list');

// 2.what to add
const li = document.createElement('li');
li.innerText = 'Rajar bon';

// 3.add the child
placesList.appendChild(li);

// ----------------------->
// adding a whole section
// 1.where to add
const mainContainer = document.getElementById('main-container');

// 2.what to add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "favourite foods";
section.append(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Haji Biriani';
ul.append(li1);

const li2 = document.createElement('li');
li2.innerText = 'Kacci Biriani';
ul.append(li2);

const li3 = document.createElement('li');
li3.innerText = 'Kolkata Biriani';
ul.append(li3);

section.append(ul);
// 3.add the child
mainContainer.append(section);

// ---------------------->
// adding section in different method..using innerHtml
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>Dresses</h2>
<ul>
<li>t-shirt</li>
<li>pant</li>
<li>panjabi</li>
</ul>
`
mainContainer.append(sectionDress);