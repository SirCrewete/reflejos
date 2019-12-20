
/*
function incioJuego(){
    const usuario = opcion;
    box1_div = alert("hello world")
    return opcion;
}







function game(opcion){
    const movidaPc = movidaComp();
    const movidaUsuario = opcion;

}


function prueba(){
    document.getElementsByClassName('box1').style.background = '#CCCCCC';
}


function prueba()
*/

const box1_div = document.getElementById('box1');
const box2_div = document.getElementById('box2');
const box3_div = document.getElementById('box3');
const box4_div = document.getElementById('box4');
const box5_div = document.getElementById('box5');
const box6_div = document.getElementById('box6');
const box7_div = document.getElementById('box7');
const box8_div = document.getElementById('box8');
const box9_div = document.getElementById('box9');
const box10_div = document.getElementById('box10');
const box11_div = document.getElementById('box11');
const box12_div = document.getElementById('box12');
const box13_div = document.getElementById('box13');
const box14_div = document.getElementById('box14');
const box15_div = document.getElementById('box15');
const box16_div = document.getElementById('box16');
const box17_div = document.getElementById('box17');
const box18_div = document.getElementById('box18');
const box19_div = document.getElementById('box19');
const box20_div = document.getElementById('box20');
const box21_div = document.getElementById('box21');
const box22_div = document.getElementById('box22');
const box23_div = document.getElementById('box23');
const box24_div = document.getElementById('box24');



function cambiarFondo() {
    obj = document.getElementById('box2');
    obj.style.backgroundColor = (obj.style.backgroundColor == '#E9E2E3') ? 'none' : '#CCCCCC';
}



function movidaComp(){

    const opciones = ['box1','box2','box3','box4','box5','box6','box7','box8','box9','box10','box11','box12','box13','box14','box15','box16','box17','box18','box19','box20','box21','box22','box23','box24',]
   
    
    
    /*const random = Math.floor(Math.random() * 25)
    const movida = opciones[random]
    return (movida);*/
}

function game(){
    opciones = cambiarFondo
}






function main(){
    box1_div.addEventListener('click', () => game('box1'));
    box2_div.addEventListener('click', () => game('box2'));
    box3_div.addEventListener('click', () => game('box3'));
    box4_div.addEventListener('click', () => game('box4'));
    box5_div.addEventListener('click', () => game('box5'));
    box6_div.addEventListener('click', () => game('box6'));
    box7_div.addEventListener('click', () => game('box7'));
    box8_div.addEventListener('click', () => game('box8'));
    box9_div.addEventListener('click', () => game('box9'));
    box10_div.addEventListener('click', () => game('box10'));
    box11_div.addEventListener('click', () => game('box11'));
    box12_div.addEventListener('click', () => game('box12'));
    box13_div.addEventListener('click', () => game('box13'));
    box14_div.addEventListener('click', () => game('box14'));
    box15_div.addEventListener('click', () => game('box15'));
    box16_div.addEventListener('click', () => game('box16'));
    box17_div.addEventListener('click', () => game('box17'));
    box18_div.addEventListener('click', () => game('box18'));
    box19_div.addEventListener('click', () => game('box19'));
    box20_div.addEventListener('click', () => game('box20'));
    box21_div.addEventListener('click', () => game('box21'));
    box22_div.addEventListener('click', () => game('box22'));
    box23_div.addEventListener('click', () => game('box23'));
    box24_div.addEventListener('click', () => game('box24'));
}
main();