let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let exitbtn = document.querySelector(".exit-btn");
let win_player = document.querySelector("#winner");
let turnO = true;
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO == true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X"
            turnO = true;

        }
        //disable user interactoin 
        box.style.pointerEvents = "none";

        winner();


    })
})

let winner = () => {

    for (let pattern of winpattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != "" && pos2 != "" && pos3 != "") {

            if (pos1 == pos2 && pos2 == pos3) {

                win_player.innerText += "Winner is " + pos1;

                boxes.forEach((box) => {
                    box.style.pointerEvents = "none";
                })

            }


            //.every() checks if every box satisfies the condition (box.innerText !== "").

            // It returns true only if all boxes are filled.
            let iswinner = false;
            let allfilled = [...boxes].every((box) => {
               return box.innerText !== "";
            })

            if(!iswinner && allfilled){
                win_player.innerText="DRAW!!"
            }
        }
    }
}


// Event listeners for button
resetbtn.addEventListener("click",()=>{
      boxes.forEach((box) => {
        box.innerText = "";
        box.style.pointerEvents = "auto";
    });
    win_player.innerText = "";
    turnO = true;
});

exitbtn.addEventListener("click", ()=>{
    document.body.innerHTML = "<h1>Thanks for playing!</h1><p>You may now close this tab.</p>";

});


