var iWantitAll = new Audio("sound/I Want It All.wav");;


var breakFree = new Audio("sound/break free.wav");;


var dontStopme = new Audio("sound/Don't Stop Me Now.wav");;


var bicycle = new Audio("sound/Bicycle Race.wav");;



let songs_arr = [iWantitAll, breakFree, dontStopme, bicycle];

function stop_playing() {
    songs_arr.forEach((song) => { song.pause(); } );
}

$("#i_want_it_all").click( () => {
    // e.preventDefault();
    stop_playing();
    iWantitAll.play();
    $("#gif").css({ "background": "url('img/gif4.gif')", "background-repeat": "no-repeat", "background-size": "cover"});

});

$("#break_free").click(function () {
    stop_playing();
    breakFree.play();
    $("#gif").css({ "background": "url('img/gif6.gif')", "background-repeat": "no-repeat", "background-size": "cover" });

    // var breakFree = new Audio("sound/break free.wav");;
    // breakFree.play();
})

$("#supersonic").click(function () {
    stop_playing();
    dontStopme.play();
    $("#gif").css({ "background": "url('img/gif3.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
    
})

$("#bicycle").click(function () {
    stop_playing();
    bicycle.play();
    $("#gif").css({ "background": "url('img/gif2.gif')", "background-repeat": "no-repeat", "background-size": "cover" });
})

