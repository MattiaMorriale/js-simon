
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

    // calcolo del tempo con giorni, ore, minuti, secondi
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // stampa su schermo il countdown
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    }, 1000);
    
})