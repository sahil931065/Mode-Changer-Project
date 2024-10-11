let btn = document.createElement("button");
btn.innerHTML = "Change Mode";

btn.style.color = "black";
btn.style.border = "none";
btn.style.padding = "10px 20px";
btn.style.cursor = "pointer";
btn.style.borderRadius = "30px";
btn.style.backgroundColor = "white"; // Initial background for button

let Body = document.querySelector("body");
Body.style.background = "black";
Body.append(btn);

btn.addEventListener("click", function(e) {
    if (Body.style.background == "black") {
        Body.style.background = "white";
        btn.style.backgroundColor = "black";
        btn.style.color = "white" ;
        
    } else if (Body.style.background == "white") {
        Body.style.background = "black";
        btn.style.backgroundColor = "white";
        btn.style.color =  "black";

    }
});
