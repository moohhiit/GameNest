type Choose = 'stone' | 'paper' | 'scissors' | 'Questionmark'


export const getSPSGameResult = (player1: Choose, player2: Choose)=>{
    if (player1 == player2) {
        return 'Tie'
    }
    const winMap: Record<Choose, Choose> = {
        stone: 'scissors',
        paper: 'stone',
        scissors: 'paper',
        Questionmark:'Questionmark'
    }
    const whoWin = winMap[player1] === player2;
    // if WhoWin is True Its Means Player1 Win Else Player2 Win
    return whoWin
}

