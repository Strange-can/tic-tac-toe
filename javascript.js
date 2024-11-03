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
                if ( count % 2 === 0 && boardArray[position] === '' ) {
                    count++
                    boardArray[position] = 'x'
                    const play = document.createElement("p")
                    play.textContent = 'x'
                    square.appendChild(play)
                    console.log(boardArray)
                    console.log(count)
                }
                else if ( count % 2 !== 0 && boardArray[position] === '' ) {
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
            console.log('o wins')
            scoreMessage.textContent = `${name2} wins!`
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

const customName = ( function () {
    const player1Name = document.getElementById("player1-name")

    const player2Name = document.getElementById("player2-name")

    function changePlayer1 (name) {
    player1Name.textContent = name
    }

    return { changePlayer1 }
}
)()

gameBoard.setBoard()

const player1Section = document.getElementById("player1")
let player1Name = document.getElementById("player1-name")
let scoreName1 = document.getElementById("score-name1")
let name1 = 'player1'

const player2Section = document.getElementById("player2")
let player2Name = document.getElementById("player2-name")
let scoreName2 = document.getElementById("score-name2")
let name2 = 'player2'

const rename1 = document.getElementById("rename1")
rename1.addEventListener("click", () => {
    player1Name.remove()
    const input1 = document.createElement("input")
    input1.setAttribute("id", "input1")
    player1Section.prepend(input1)

    rename1.remove()
    const confirm1 =  document.createElement("button")
    confirm1.textContent = 'CONFIRM'
    confirm1.addEventListener("click", () => {
        if (input1.value === '') {
            return
        }
        else {
        name1 = input1.value
        scoreName1.textContent = `${name1}(x)`
        game.checkStatus()
        //player1Name = name1
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
            return
        }
        else {
        name2 = input2.value
        scoreName2.textContent = `${name2}(o)`
        game.checkStatus()
        }
    })
    player2Section.append(confirm2)
})
