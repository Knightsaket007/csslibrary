
var elements = document.querySelectorAll('[class^="sz-h-"], [class^="sz-w-"], [class^="color-"], [class^="cen"], [class^="t-"], [class^="r-"], [class^="b-"], [class^="l-"], [class^="bd-radius"], [class^="op-color-"], [class^="btn"], [class^="txt-"], [class^="flexbox"]');

var bestColor = {
    "orange": "rgb(241, 134, 84)",
    "banana": "rgb(239, 255, 18)",
    "grape": "rgb(18, 223, 46)",
    "strawberry": "rgb(205, 31, 228)",
    "berry": "rgb(18, 182, 223)",
    "danger": "#dc3545",
    "success": "#28a745",
    "alert": "rgb(239, 243, 18)",
    "warn": "#d8a305",
    "dark": "rgb(5, 5, 5)",
    "grey": "rgb(90, 94, 90)",
    "prime": "#007bff",
    "blackCurrent":"#978499",
  
}

var pos = {
    lt: "left",
    rt: "right",
    cen: "center",

}

var bestColor_fade = {
    "orange": "rgb(224, 120, 72",
    "banana": "rgb(191, 201, 61)",
    "grape": "rgb(12, 156, 31)",
    "strawberry": "rgb(174, 49, 190)",
    "berry": "rgb(21, 155, 189)",
    "danger": "#cc2a3a",
    "success": "rgb(14, 136, 69)",
    "alert": "rgb(193, 196, 16)",
    "warn": "#9c7708",
    "dark": "rgb(31, 29, 29)",
    "grey": "rgb(82, 83, 82)",
    "prime": "#055fbe",
    "blackCurrent":"#79607c",
}

var flexPos = {
    "baseline": "baseline",
    "cen": "center",
    "end": "end",
    "start": "start",
    "space-around": "space-around",
    " space-between": " space-between",
}

elements.forEach(function (element) {
    var classes = element.classList;
    for (var i = 0; i < classes.length; i++) {
        if (classes[i].startsWith("sz-h-")) {
            var height = classes[i].replace("sz-h-", "");
            //   element.classList.add("custom-height");
            element.style.height = height + "px";
        }

        if (classes[i].startsWith("sz-w-")) {
            var width = classes[i].replace("sz-w-", "");
            //   element.classList.add("custom-width");
            element.style.width = width + "px";
        }

        if (classes[i].startsWith("color-")) {
            var col = classes[i].replace("color-", "");
            element.style.backgroundColor = col;
        }

        if (classes[i].startsWith("cen")) {
            element.style.margin = "0 auto";
        }
        if (classes[i].startsWith("t-")) {
            var t = classes[i].replace("t-", "");
            element.style.marginTop = t + "px";
        }
        if (classes[i].startsWith("r-")) {
            var r = classes[i].replace("r-", "");
            element.style.marginTop = r + "px";
        }

        if (classes[i].startsWith("b-")) {
            var b = classes[i].replace("b-", "");
            element.style.marginTop = b + "px";
        }

        if (classes[i].startsWith("l-")) {
            var l = classes[i].replace("l-", "");
            element.style.marginTop = l + "px";
        }

        if (classes[i].startsWith("bd-radius-")) {
            var rad = classes[i].replace("bd-radius-", "");
            element.style.borderRadius = rad+ "px";
        }
        if (classes[i].startsWith("flex-")) {
            var flex = classes[i].replace("flex-", "");
            element.style.borderRadius = flex + "px";
        }

        if (classes[i].startsWith("op-color-")) {
            var opcolor = classes[i].replace("op-color-", "");
            element.style.backgroundColor = bestColor[opcolor];
        }

        if (classes[i].startsWith("txt-")) {
            var p = classes[i].replace("txt-", "");
            if (pos[p] == undefined) {
                element.style.color = bestColor[p];
            }

            element.style.textAlign = pos[p];

        }


        if (classes[i].startsWith("btn-") || classes[i].startsWith("btn")) {
            element.style.cssText = 'min-height: 40px; min-width: 80px; border-radius: 4px; font-size: 15px; border: none; cursor: pointer; color: white; font-family: \'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"\';  padding:0px 12px;';

            var button = classes[i].replace("btn-", "");
            if (button.startsWith("filled-") || button.startsWith("filled")) {
                var col = classes[i].replace("btn-filled-", "")
                element.style.backgroundColor = bestColor[col]
                element.addEventListener("mouseenter", function () {
                    element.style.backgroundColor = bestColor_fade[col];
                    // element.style.cssText = "background-color:`${bestColor[col]}`";
                    element.style.zoom = "99%";
                    element.style.transition = "color .15s cubic-bezier(0.9, -0.06, 0.3, 0.45),background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out";

                });

                element.addEventListener("mouseleave", function () {
                    element.style.backgroundColor = bestColor[col];
                    element.style.zoom = "100%";
                    //   element.style.color="white";
                });

                element.addEventListener("click", function () {
                    element.classList.add("shadow");
                    element.style.outline = "2px solid " + bestColor_fade[col];
                    element.style.boxShadow = bestColor_fade[col] + " 1px 1px 20px 1px"
                });

                document.addEventListener("click", function (event) {
                    if (!element.contains(event.target)) {
                        element.classList.remove("shadow");
                        element.style.boxShadow = "none";
                    }
                });
            }


            if (button.startsWith("outline-") || button.startsWith("outline")) {
                var col = classes[i].replace("btn-outline-", "")
                element.style.backgroundColor = "transparent";
                element.style.outline = "3px solid " + bestColor_fade[col];
                element.addEventListener("mouseenter", function () {
                    element.style.backgroundColor = bestColor_fade[col];
                    // element.style.cssText = "background-color:`${bestColor[col]}`";
                    element.style.zoom = "99%";
                    element.style.transition = "color .15s cubic-bezier(0.9, -0.06, 0.3, 0.45),background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out";

                });

                element.addEventListener("mouseleave", function () {
                    element.style.backgroundColor = "transparent";
                    element.style.zoom = "100%";
                    //   element.style.color="white";
                });

                element.addEventListener("click", function () {
                    element.classList.add("shadow");
                    element.style.outline = "2px solid " + bestColor_fade[col];
                    element.style.boxShadow = bestColor_fade[col] + " 1px 1px 20px 1px"
                });

                document.addEventListener("click", function (event) {
                    if (!element.contains(event.target)) {
                        element.classList.remove("shadow");
                        element.style.boxShadow = "none";
                    }
                });
            }


        }


        if (classes[i].startsWith("flexbox")) {
            element.style.cssText = "display: flex;  flex-direction: row; flex-flow: wrap;";
            // var gp=classes[i].replace("flexbox-", "")
            // element.style.gap=gp+"px";
            var values = classes[i].split("-");
            var secVal = values[1];
            element.style.justifyContent = flexPos[secVal];
            
            var thirdVal = values[2];
            element.style.gap=thirdVal+ "px";
           
           
        }


    }
});


