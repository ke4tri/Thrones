import {printToDom} from '../helpers/util.js'
const characters = [
    {
        id:'character1',
        name:'Jon Snow', 
        house:'Stark',
        image:'https://s3.r29static.com//bin/entry/4f0/720x864,85/1801540/image.jpg'
    },
    {
        id:'character1',
        name:'Daenerys Targaryen', 
        house:'Targaryen',
        image:'https://amp.thisisinsider.com/images/5989fc4eefe3df1f008b48b9-750-563.png'
    },
    {
        id:'character1',
        name:'Cersei Lannister', 
        house:'Lannister',
        image:'http://pixel.nymag.com/imgs/daily/vulture/2015/04/09/09-cersei-lannister.w529.h352.jpg'
    },
    {
        id:'character1',
        name:'Tyrion Lannister', 
        house:'Lannister',
        image:'https://amp.thisisinsider.com/images/59a5dd9cb065da49008b4878-750-563.png'
    }
    
]

const characterBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        // domString += `<div class="col-2 character">`;
        domString += `<div class="card">`;
        domString +=  `<img class="card-img-top" src="${character.image}" alt="${character.name}">`;
        domString += `<div class="card-body">`;
        domString +=  `<h5 class="card-title">${character.name}</h5>`;
        domString += `</div>`;
        domString +=`</div>`
    });
    printToDom(domString);
 };

export{characterBuilder}