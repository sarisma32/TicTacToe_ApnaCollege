let boxes=document.querySelectorAll(".box");
let newGameButton=document.getElementById("newGame-button");
let resetButton=document.getElementById("reset-button");
let messageContainer=document.querySelector(".message-container");
let message=document.getElementById("msg");

let turnX=true;

const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disableButton=()=>{
    for (let val of boxes){
        val.disabled=true;
    }
}

const enableButton=()=>{
    for(let val of boxes){
        val.disabled=false;
        val.innerText="";
    }
}

const reset =()=>{
    turnX=true;
    enableButton();
    messageContainer.classList.add("hide");
}


boxes.forEach((val)=>{
    // console.log(val);
    val.addEventListener("click",()=>{
        console.log("Box was clicked");

        if(turnX===true){
            val.innerText="X";
             turnX=false;
        }
        else{
            val.innerText="0";
            turnX=true;
        }
        val.disabled=true;
        checkWinner();
    });
})


const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    messageContainer.classList.remove("hide");
    disableButton();
}

const checkWinner=()=>{
    for (let val of winningPattern){
        let pos1Val=boxes[val[0]].innerText;
        let pos2Val=boxes[val[1]].innerText;
        let pos3Val=boxes[val[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }    
}



newGameButton.addEventListener("click",reset);
resetButton.addEventListener("click",reset);


