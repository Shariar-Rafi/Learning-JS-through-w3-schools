function myMove(){
    const anime = document.getElementById("anime");
    let pos = 0;
    const interval = setInterval(frame, 5);
    function frame(){
        if(pos<350){
            pos++;
            anime.style.top = pos+"px";
            anime.style.left = pos+"px";
    }
    else{
        clearInterval(interval)
    }
}
};