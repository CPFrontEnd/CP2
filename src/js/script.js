let imagens =[
    'src/assets/img1.jpg',
    'src/assets/img2.jpg',
    'src/assets/img3.jpg',  
];

let index =0;
let tempo =3000;

function slideShow(){

    document.getElementById('image').src =imagens[index];
    index++;
    if(index ==imagens.length){
        index=0;
    }
    setTimeout("slideShow()",tempo)
}
slideShow();