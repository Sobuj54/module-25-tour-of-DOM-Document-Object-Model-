// here we didn't use . or # before section because here section is not class or id it's html tag
const sections = document.querySelectorAll('section');
for(const section of sections){
    // console.log(section);
    // styling each section inside js
    section.style.border = '5px solid green';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'gray';
    section.style.paddingLeft = '20px';
}

const places = document.getElementById('places');
// by using classlist and add we can take styles from css and use it in js
places.classList.add('large-text');
// removing an style
places.classList.remove('text');