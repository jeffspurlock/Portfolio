function getObjectsDesktop(element, endCoords) {
    var navyEnd = { left: -30, top: 0 };
    var slateEnd = { left: 120, top: 40 };
    var mustardEnd = { left: 56, top: -75 };
    var nameEnd = { left: 0, top: 0};
    var rectangleNavy = document.getElementById("rectangle-navy");
    var rectangleSlate = document.getElementById("rectangle-slate");
    var rectangleMustard = document.getElementById("rectangle-mustard");
    var name = document.getElementById("brand");
    var collection = { 
            navy : {
                element: rectangleNavy,
                endCoord: navyEnd,
             },
            slate: {
                element: rectangleSlate,
                endCoord: slateEnd,
            },
            mustard:
            {
                element: rectangleMustard,
                endCoord: mustardEnd,
            }
        }
    var package = [];
    collection.foreach(rectangle => {
        package.push(package(rectangle.element, rectangle.endCoord));
    })
    return package;
};

function package(element, endCoords) {
    const left = $(element).css("left").substring(0, $(element).css("left").length - 2)*100/($(window).width());
    const top = $(element).css("top").substring(0, $(element).css("top").length - 2)*100/($(window).width());
    return { rectangle: element, left: left, top: top, leftEnd: endCoords.left, topEnd: endCoords.top }
}
    

async function animate(event, package){
   
   
    package.foreach(item =>{
     item.rectangle.style.left = (item.leftEnd - item.left) * percent + item.left + "vw";
     item.rectangle.style.top = (item.topEnd - item.top) * percent + item.top + "vw";
   })
  
    if(percent == 1){
      document.getElementById("gradient").style.display = "inline";
    }
    if(percent < 1){
      document.getElementById("gradient").style.display = "none";
    }
}
