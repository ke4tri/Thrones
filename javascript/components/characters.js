import {printToDom} from '../helpers/util.js'
const characters = [
    {
        name:'Jon Snow', 
        house:'Stark',
        image:'https://s3.r29static.com//bin/entry/4f0/720x864,85/1801540/image.jpg'
    },
    {
        name:'Daenerys Targaryen', 
        house:'Targaryen',
        image:'https://amp.thisisinsider.com/images/5989fc4eefe3df1f008b48b9-750-563.png'
    },
    {
        name:'Cersei Lannister', 
        house:'Lannister',
        image:'http://pixel.nymag.com/imgs/daily/vulture/2015/04/09/09-cersei-lannister.w529.h352.jpg'
    },
    {
        name:'Tyrion Lannister', 
        house:'Lannister',
        image:'https://amp.thisisinsider.com/images/59a5dd9cb065da49008b4878-750-563.png'
    }
    
]

const characterBuilder = () => {
    let domString = '';
    characters.forEach((character) => {
        domString += `<h1>${character.name}</h1>`
        
        //         <div class="card" style="width: 18rem;">
        // <img class="card-img-top" src=".../100px180/" alt="Card image cap">
        // <div class="card-body">
        // <h5 class="card-title">Card title</h5>
        // <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        // <a href="#" class="btn btn-primary">Go somewhere</a>
        // </div>
</div
            
    });
    printToDom(domString, 'characters');
        
};

export{characterBuilder}