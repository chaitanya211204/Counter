console.log("Namaste");
const body = document.querySelector("body");
const buttons = document.querySelectorAll("button");
let value = document.querySelector(".zero");

let count = 0;

buttons.forEach(function (buttons) {
   buttons.addEventListener("click", function(e){
        if(e.target.id == "decrease"){
            console.log("count is decreased");
            count--;
            if(count < 0){
                document.body.style.backgroundColor ="burlywood";
            }
            value.textContent = count;
        }
        if(e.target.id == "reset"){
            console.log("count is reset");
            count = 0;
            document.body.style.backgroundColor ="black";
            value.textContent = count;
        }
        if(e.target.id == "increase"){
            count++;
            if(count > 0){
                document.body.style.backgroundColor ="chocolate";
            }
            console.log("count is increased");
            value.textContent = count;
        }
   }); 
});