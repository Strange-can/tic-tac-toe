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
    }

    return { action }
}
)()

gameBoard.setBoard()
console.log(boardArray)
