const gameBoard = (function () {
    let gameField = document.querySelector('.game-field')
    let boardArray = []

    let count = 0

    const setBoard = function () {
        boardArray.splice( 0, boardArray.length )
        gameField.textContent = ''
        count = 0
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
                if ( count % 2 === 0 && boardArray[position] === '' ) {
                    count++
                    boardArray[position] = 'x'
                    const play = document.createElement("p")
                    play.textContent = 'x'
                    square.appendChild(play)
                }
                else if ( count % 2 !== 0 && boardArray[position] === '' ) {
                    count++
                    boardArray[position] = 'o'
                    const play = document.createElement("p")
                    play.textContent = 'o'
                    square.appendChild(play)
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

    const player1Score = document.getElementById("player1-score")
    let player1CurrentScore = 0

    const tieScore = document.getElementById("tie-score")
    let tieCurrentScore = 0

    const player2Score = document.getElementById("player2-score")
    let player2CurrentScore = 0

    const scoreMessage = document.getElementById("score-msg")

    function checkStatus () {
        const boardArray = gameBoard.getBoardArray()

        if ( (boardArray[0] === 'x' && boardArray[1] === 'x' && boardArray[2] === 'x') 
              || (boardArray[3] === 'x' && boardArray[4] === 'x' && boardArray[5] === 'x') 
              || (boardArray[6] === 'x' && boardArray[7] === 'x' && boardArray[8] === 'x') 
              || (boardArray[0] === 'x' && boardArray[3] === 'x' && boardArray[6] === 'x') 
              || (boardArray[1] === 'x' && boardArray[4] === 'x' && boardArray[7] === 'x') 
              || (boardArray[2] === 'x' && boardArray[5] === 'x' && boardArray[8] === 'x') 
              || (boardArray[0] === 'x' && boardArray[4] === 'x' && boardArray[8] === 'x') 
              || (boardArray[2] === 'x' && boardArray[4] === 'x' && boardArray[6] === 'x') ) {
            name1 = customName.getName1()
            scoreMessage.textContent = `${name1} wins!`
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
            name2 = customName.getName2()
            scoreMessage.textContent = `${name2} wins!`
            player2CurrentScore++
            player2Score.textContent = player2CurrentScore
            return true
        }
        
        else if (checkForDraw(boardArray)) {
            scoreMessage.textContent = `It's a tie!`
            tieCurrentScore++
            tieScore.textContent = tieCurrentScore
            return true
        }
    }
    const reset = document.getElementById("reset")
    const rematch = document.getElementById("rematch")
    function enableGameOptions() {
        reset.addEventListener( "click", () => {
            gameBoard.setBoard()
            scoreMessage.textContent = 'Who will reign victorious?'
            player1CurrentScore = 0
            player1Score.textContent = player1CurrentScore
            tieCurrentScore = 0
            tieScore.textContent = tieCurrentScore
            player2CurrentScore = 0
            player2Score.textContent = player2CurrentScore
        })
        rematch.addEventListener("click", () => {
            gameBoard.setBoard()
            scoreMessage.textContent = 'Who will reign victorious?'
        })
    }

    return { checkStatus, enableGameOptions }
}
)()

const customName = ( function () {
    const player1Section = document.getElementById("player1")
    let player1Name = document.getElementById("player1-name")
    let scoreName1 = document.getElementById("score-name1")
    let name1 = 'player1'

    const player2Section = document.getElementById("player2")
    let player2Name = document.getElementById("player2-name")
    let scoreName2 = document.getElementById("score-name2")
    let name2 = 'player2'
    
    function enableNameChange () {
        const rename1 = document.getElementById("rename1")
        rename1.addEventListener("click", () => {
            player1Name.remove()
            const input1 = document.createElement("input")
            player1Section.prepend(input1)
        
            rename1.remove()
            const confirm1 =  document.createElement("button")
            confirm1.textContent = 'CONFIRM'
            confirm1.addEventListener("click", () => {
                if (input1.value === '') {
                    input1.remove()
                    confirm1.remove()
                    player1Section.append(player1Name)
                    player1Section.append(rename1)
                    return
                }
                else {
                name1 = input1.value
                scoreName1.textContent = `${name1}(x)`
                game.checkStatus()
                player1Name.textContent = name1
                input1.remove()
                confirm1.remove()
                player1Section.append(player1Name)
                player1Section.append(rename1)
                }
            })
            player1Section.append(confirm1)
        })
        
        const rename2 = document.getElementById("rename2")
        rename2.addEventListener("click", () => {
            player2Name.remove()
            const input2 = document.createElement("input")
            input2.setAttribute("id", "input2")
            player2Section.prepend(input2)
        
            rename2.remove()
            const confirm2 =  document.createElement("button")
            confirm2.textContent = 'CONFIRM'
            confirm2.addEventListener("click", () => {
                if (input2.value === '') {
                    input2.remove()
                    confirm2.remove()
                    player2Section.append(player2Name)
                    player2Section.append(rename2)
                    return
                }
                else {
                name2 = input2.value
                scoreName2.textContent = `${name2}(o)`
                game.checkStatus()
                player2Name.textContent = name2
                input2.remove()
                confirm2.remove()
                player2Section.append(player2Name)
                player2Section.append(rename2)
                }
            })
            player2Section.append(confirm2)
        })
    }

    function getName1() {
        return name1
    }

    function getName2() {
        return name2
    }

    return { enableNameChange, getName1, getName2 }
}
)()

gameBoard.setBoard()
game.enableGameOptions()
customName.enableNameChange()
