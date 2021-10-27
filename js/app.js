// UI 
const imagesel = document.querySelector('.images');
const nameel = document.querySelector('.name');
const commandel = document.getElementById('command');
const countel = document.querySelector('.count');
const btnel = document.getElementById('btn');
const htmlel = document.querySelector('html');


// console.log(imagesel,nameel,commandel,countel);

let idx = 0;

let testimonialarrs = [
    {
        name:"Mr.Rovert",
        command: "Rovert Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati ea eaque itaque esse, rem veritatis repellendus dicta temporibus beatae vero. Excepturi iste, unde illo dolor cupiditate et totam ducimus.",
        photo: `./img/boytwo.jpg`        
    },

    {
        name:"Ms.Sandi",
        command: "Sandi Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati ea eaque itaque esse, rem veritatis repellendus dicta temporibus beatae vero. Excepturi iste, unde illo dolor cupiditate et totam ducimus.",
        photo: `./img/girlone.jpg`        
    },

    {
        name:"Ms.Phoo",
        command: "Phoo Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati ea eaque itaque esse, rem veritatis repellendus dicta temporibus beatae vero. Excepturi iste, unde illo dolor cupiditate et totam ducimus.",
        photo: `./img/girltwo.jpg`        
    },

    {
        name:"Ms.Moe",
        command: "Moe Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi obcaecati ea eaque itaque esse, rem veritatis repellendus dicta temporibus beatae vero. Excepturi iste, unde illo dolor cupiditate et totam ducimus.",
        photo: `./img/girlthree.jpg`        
    }
];



// console.log(testimonialarrs[0].name);


function putting(){
    

    // const getname = testimonialarrs[idx].name;
    // console.log(getname);


  let {name,command,photo} = testimonialarrs[idx];

  nameel.innerText = name;
  commandel.textContent = command;
  imagesel.src = photo;

  countel.innerText = idx +1;

  idx++;

  if(idx > testimonialarrs.length -1){
      idx = 0;
  }



}


// putting();

setInterval(putting,10000);


btnel.addEventListener('click',()=>{
    // console.log("hey");

    if(htmlel.classList.contains('dark')){
        htmlel.classList.remove('dark');
        btnel.innerHTML = `<i class="fas fa-moon fa-2x"></i>`;
    }else{
        htmlel.classList.add('dark');
        btnel.innerHTML = `<i class="fas fa-sun fa-2x"></i>`;
    }

});