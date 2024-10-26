const gameBoard = (function () {
    let boardArray = []

    const setBoard = function () {
    for (let i = 0; i < 9; i++ ) {
        boardArray.push( '' )
    }}
    
    let count = 0
    const inputAction = function (position) {
        let positions = '012345678'
        if ( positions.includes(position) && count % 2 === 0 && boardArray[position] === '' ) {
            count++
            boardArray[position] = 'x'
            console.log(boardArray)
            console.log(count)
        }
        else if ( positions.includes(position) && count % 2 !== 0 && boardArray[position] === '' ) {
            count++
            boardArray[position] = 'o'
            console.log(boardArray)
            console.log(count)
            }
        game.checkStatus()
    }

    const getBoardArray = function () {
        return boardArray
    }

    return { setBoard, inputAction, getBoardArray }
}
)()

const game = ( function () {
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
            console.log("x wins")
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
        }
        
    }

    return { checkStatus }
}
)()

gameBoard.setBoard()
