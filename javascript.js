let boardArray = []
const gameBoard = (function () {
    const setBoard = function () {
    for (let i = 0; i < 9; i++ ) {
        boardArray.push( '' )
    }}

    return {setBoard}
}
)()

const game = ( function () {
    let count = 0
    function checkStatus () {
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
    }
    const action = function (position) {
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
        checkStatus()
    }

    return { action }
}
)()

gameBoard.setBoard()
console.log(boardArray)
