
const inviaElement = document.querySelector('#invia');

const userdateElement = document.querySelector('#userdate')

inviaElement.addEventListener('click', function(){
    
    // selezionare la data 
    var countDownDate = new Date("12 feb, 2024 9:30:00").getTime();

    // diminusice il conutdown di 1 secondo
    var x = setInterval(function() {

    // data odierna
    var now = new Date().getTime();

    // calcolo della data scelta con quella odienra per vedere quanto manca
    var distance = countDownDate - now;
    }, 1000);
    
})