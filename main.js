// Collego le variabili JavaScript agli elementi HTML tramite i loro ID
const btnStart = document.getElementById('btnStart');
const btnPause = document.getElementById('btnPause');
const btnStop = document.getElementById('btnStop');
const spinnerBox = document.getElementById('spinnerBox');
const audioPlayer = document.getElementById('audioPlayer');

// start
btnStart.addEventListener('click', function() {
    
    audioPlayer.play(); // Avvia la riproduzione del file audio
    spinnerBox.className = "spinner-container mx-auto mb-4 rotate";// Aggiunge la classe CSS "rotate" al box per far partire l'animazione di rotazione
    // Gestione dello stato dei bottoni: disabilita Start, abilita Pause e Stop
    btnStart.disabled = true;
    btnPause.disabled = false;
    btnStop.disabled = false;

});

// stop
btnStop.addEventListener('click', function() {
    
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    spinnerBox.className = "spinner-container mx-auto mb-4";
    btnStart.disabled = false;
    btnPause.disabled = false;
    btnStop.disabled = true;

});

// pausa
btnPause.addEventListener('click', function() {
    
    audioPlayer.pause();
    spinnerBox.className = "spinner-container mx-auto mb-4";
    btnStart.disabled = false;
    btnStop.disabled = true;

});