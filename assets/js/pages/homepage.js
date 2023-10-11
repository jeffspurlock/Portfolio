function getObjects(layout) {
    if(layout == "desktop"){
        var navyEnd = { left: -30, top: 0 };
        var slateEnd = { left: 120, top: 40 };
        var mustardEnd = { left: 56, top: -75 };
        var brandEnd = { left: 0, top: 0, font: "3" };
    } else if(layout == "mobile") {
        var navyEnd = { left: -30, top: 0 };
        var slateEnd = { left: 120, top: 40 };
        var mustardEnd = { left: 56, top: -75 };
        var brandEnd = { left: 0, top: 0, font: "3" };
    };
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
    var rectPackage = [];
    collection.forEach(rectangle => {
        console.log(rectangle.element);
        rectPackage.push(packageUp(rectangle.element, rectangle.endCoord));
    })

    var name = document.getElementById("brand");
    var brand = {
        element: name,
        top: $(name).css("top").substring(0, $(name).css("top").length - 2)*100/($(window).width()),
        left: $(name).css("left").substring(0, $(name).css("left").length - 2)*100/($(window).width()),
        topEnd: brandEnd.top,
        leftEnd: brandEnd.left,
        font: $(name).css("font-size").substring(0, $(name).css("font-size").length - 2)*100/($(window).width()),
        fontEnd: brandEnd.font
    }

    function packageUp(element, endCoords) {
        console.log(element);
        const left = $(element).css("left").substring(0, $(element).css("left").length - 2)*100/($(window).width());
        const top = $(element).css("top").substring(0, $(element).css("top").length - 2)*100/($(window).width());
        return { rectangle: element, left: left, top: top, leftEnd: endCoords.left, topEnd: endCoords.top }
    }

    var package = { rectPackage: rectPackage, brand: brand };
    console.log(package);
    return package;
};
    

async function animate(event, package){
    var total = 200;
    var current = window.scrollY;
    var percent = (current / total);
    if (current >= total){
      percent = 1;
    }
   
    package.rectPackage.forEach(item =>{
     item.rectangle.style.left = (item.leftEnd - item.left) * percent + item.left + "vw";
     item.rectangle.style.top = (item.topEnd - item.top) * percent + item.top + "vw";
   })
    
    package.brand.element.style.left = (package.brand.leftEnd - package.brand.left) * percent + package.brand.left + "vw";
    package.brand.element.style.top = (package.brand.topEnd - package.brand.top) * percent + package.brand.top + "vw";
    package.brand.element.style.fontSize = (package.brand.fontEnd - package.brand.font) * percent + package.brand.font + "vw";
  
    if(percent == 1){
      document.getElementById("gradient").style.display = "inline";
    }
    if(percent < 1){
      document.getElementById("gradient").style.display = "none";
    }
}
