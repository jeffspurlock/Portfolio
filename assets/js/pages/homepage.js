function getObjectsDesktop() {
    var navyEnd = { left: -30, top: 0 };
    var slateEnd = { left: 120, top: 40 };
    var mustardEnd = { left: 56, top: -75 };
    var rectangleNavy = document.getElementById("rectangle-navy");
    var rectangleSlate = document.getElementById("rectangle-slate");
    var rectangleMustard = document.getElementById("rectangle-mustard");  
    var collection = [ 
            {
                element: rectangleNavy,
                endCoord: navyEnd,
            },
            {
                element: rectangleSlate,
                endCoord: slateEnd,
            },
            {
                element: rectangleMustard,
                endCoord: mustardEnd,
            }
    ];
    var package = [];
    collection.forEach(rectangle => {
        console.log(rectangle.element);
        package.push(packageUp(rectangle.element, rectangle.endCoord));
    })

    function packageUp(element, endCoords) {
        console.log(element);
        const left = $(element).css("left").substring(0, $(element).css("left").length - 2)*100/($(window).width());
        const top = $(element).css("top").substring(0, $(element).css("top").length - 2)*100/($(window).width());
        return { rectangle: element, left: left, top: top, leftEnd: endCoords.left, topEnd: endCoords.top }
    }

    return package;
};
    

async function animate(event, package){
    var total = 200;
    var current = window.scrollY;
    var percent = (current / total);
    if (current >= total){
      percent = 1;
    }
   
    package.forEach(item =>{
     item.rectangle.style.left = (item.leftEnd - item.left) * percent + item.left + "vw";
     item.rectangle.style.top = (item.topEnd - item.top) * percent + item.top + "vw";
   })
   var name = document.getElementById("brand");
   var nameInit = {
    left: $(name).css("left").substring(0, $(name).css("left").length - 2)*100/($(window).width()),
    top: $(name).css("top").substring(0, $(name).css("top").length - 2)*100/($(window).width())
   }
   var nameEnd = { left: 0, top: 0};
    name.style.left = (nameEnd.left - nameInit.left) * percent + nameInit.left + "vw";
    name.style.top = (nameEnd.top - nameInit.top) * percent + nameInit.left + "vw";
  
    if(percent == 1){
      document.getElementById("gradient").style.display = "inline";
    }
    if(percent < 1){
      document.getElementById("gradient").style.display = "none";
    }
}
