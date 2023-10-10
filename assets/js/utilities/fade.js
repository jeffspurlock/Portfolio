function fadeIn(element, timeToWait, speedOfFade){
    setTimeout(function(){
        var time = 0;
        setInterval(function(){
            var per = time/100;
            if (per <1.01){ 
                element.style.opacity = per;
            };
            time += 2;
        }, speedOfFade/.05)
    }, timeToWait)
}

function fadeOut(element, timeToWait, speedOfFade){
    setTimeout(function(){
        var time = 0;
        setInterval(function(){
            var per = time/100;
            if (per <1.01){ 
                element.style.opacity = 1 - per;
            };
            time += 2;
        }, speedOfFade/.05)
    }, timeToWait)
}