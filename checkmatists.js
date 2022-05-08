// We have number of chess players and some finished matches,
// you should write a function and find out which players should play together


// For chessPlayers = 4 and finishedMatches = [[0, 1], [1, 2], [2, 0]]

// solution(chessPlayers, finishedMatches) = [[0, 3], [1, 3], [2, 3]]

const solution = (chessPlayers, finishedMatches) => {
    const playedGames = [...finishedMatches]
    const games = []
    for(let i = 0; i < chessPlayers;i ++){
        for(let j = i + 1; j < chessPlayers; j++){
            if(playedGames.findIndex(el => el.sort()[0] === i && el[1]===j) < 0){
                games.push([i,j])
            }
        }
    }

    return games
};



const chessPlayers = 4
const finishedMatches = [[0, 1], [1, 2], [2, 0]]


console.log(solution(chessPlayers,finishedMatches))