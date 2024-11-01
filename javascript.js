const gameBoard = (function () {
    let gameField = document.querySelector('.game-field')
    let boardArray = []

    let count = 0

    const setBoard = function () {
        for (let i = 0; i < 9; i++ ) {
            boardArray.push( '' )
            const square = document.createElement("div")
            square.classList.add('square')
            square.classList.add(`square${i}`)
            gameField.appendChild(square)
            square.addEventListener( "click", function inputAction() {
                let position = Number(square.classList.toString().charAt(13))
                if ( game.checkStatus() === true ) {
                    return
                }
                if ( count % 2 === 0 && boardArray[position] === '' && game.checkStatus() !== true ) {
                    count++
                    boardArray[position] = 'x'
                    const play = document.createElement("p")
                    play.textContent = 'x'
                    square.appendChild(play)
                    console.log(boardArray)
                    console.log(count)
                }
                else if ( count % 2 !== 0 && boardArray[position] === '' && game.checkStatus() !== false ) {
                    count++
                    boardArray[position] = 'o'
                    const play = document.createElement("p")
                    play.textContent = 'o'
                    square.appendChild(play)
                    console.log(boardArray)
                    console.log(count)
                    }
                game.checkStatus()
            })
        }
    }

    const getBoardArray = function () {
        return boardArray
    }

    return { setBoard, getBoardArray }
}
)()

const game = ( function () {
    function checkForDraw(array) {
        if (array.includes('')) {
            return false
        }
        else {
            return true
        }
    }

    function checkStatus () {
        const boardArray = gameBoard.getBoardArray()

        const scoreMessage = document.getElementById("score-msg")
        
        const player1Score = document.getElementById("player1-score")
        let player1CurrentScore = 0

        const tieScore = document.getElementById("tie-score")
        let tieCurrentScore = 0

        const player2Score = document.getElementById("player2-score")
        let player2CurrentScore = 0

        if ( (boardArray[0] === 'x' && boardArray[1] === 'x' && boardArray[2] === 'x') 
              || (boardArray[3] === 'x' && boardArray[4] === 'x' && boardArray[5] === 'x') 
              || (boardArray[6] === 'x' && boardArray[7] === 'x' && boardArray[8] === 'x') 
              || (boardArray[0] === 'x' && boardArray[3] === 'x' && boardArray[6] === 'x') 
              || (boardArray[1] === 'x' && boardArray[4] === 'x' && boardArray[7] === 'x') 
              || (boardArray[2] === 'x' && boardArray[5] === 'x' && boardArray[8] === 'x') 
              || (boardArray[0] === 'x' && boardArray[4] === 'x' && boardArray[8] === 'x') 
              || (boardArray[2] === 'x' && boardArray[4] === 'x' && boardArray[6] === 'x') ) {
            console.log("x wins")
            scoreMessage.textContent = `player1 wins!`
            player1CurrentScore++
            player1Score.textContent = player1CurrentScore
            return true
        }
        else if ( (boardArray[0] === 'o' && boardArray[1] === 'o' && boardArray[2] === 'o') 
              || (boardArray[3] === 'o' && boardArray[4] === 'o' && boardArray[5] === 'o') 
              || (boardArray[6] === 'o' && boardArray[7] === 'o' && boardArray[8] === 'o') 
              || (boardArray[0] === 'o' && boardArray[3] === 'o' && boardArray[6] === 'o') 
              || (boardArray[1] === 'o' && boardArray[4] === 'o' && boardArray[7] === 'o') 
              || (boardArray[2] === 'o' && boardArray[5] === 'o' && boardArray[8] === 'o') 
              || (boardArray[0] === 'o' && boardArray[4] === 'o' && boardArray[8] === 'o') 
              || (boardArray[2] === 'o' && boardArray[4] === 'o' && boardArray[6] === 'o') ) {
            console.log('o wins')
            scoreMessage.textContent = `player2 wins!`
            player2CurrentScore++
            player2Score.textContent = player2CurrentScore
            return true
        }
        
        else if (checkForDraw(boardArray)) {
            console.log('It\'s a tie!')
            scoreMessage.textContent = `It's a tie!`
            tieCurrentScore++
            tieScore.textContent = tieCurrentScore
            return true
        }
    }

    return { checkStatus }
}
)()

gameBoard.setBoard()
