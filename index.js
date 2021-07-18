const Player1 = "X";
const Player2 = "O";

let currentPlayer = Player1;
let moveCount = 0;
let win = false;
let board = ["","","","","","","","","",""];



function input(button_id) {
    var id = parseInt(button_id);
    if(win) {
    Reset();
    } 
    else {
        if(board[id] == "") {
            
            document.getElementById(button_id).innerText = currentPlayer;
            board[id] = currentPlayer;  
            console.log("id: " + id);
            

            if(board[4] == currentPlayer) {
                if((board[0] == board[4] && board[0] == board[8]) 
                ||(board[2] == board[4] && board[2] == board[6])) {
                    console.log("diagonal"); Win();
                }
            }
            
            for(var i=0; i<3; i++) {

                if(board[i] == currentPlayer) 
                    if(board[i] == board[i+3] && board[i] == board[i+6])
                        Win();
                    
                var ii = i*3;
                if(board[ii] == currentPlayer) 
                    if(board[ii] == board[ii+1] && board[ii] == board[ii+2])
                        Win();
                     
            }

            if(moveCount >= 8) { Win("draw"); }


            currentPlayer = currentPlayer === Player1 ? Player2 : Player1;
            moveCount++;

        }
    }
}

function Win(method) {
    win = true;
    if(method == "draw") {
    winheader.innerText = "Draw";
    } else {
        winheader.innerText = `${currentPlayer} won`;
    }

}
function Reset() {
    var b =document.getElementsByClassName("buttons");

    for(var i = 0; i < b.length; i++) {
        console.log(b[i]);
        b[i].innerText = "";
    }
     currentPlayer = Player1;
     moveCount = 0;
     win = false;
     board = ["","","","","","","","","",""];
     winheader.innerText = "alternating players";
}





