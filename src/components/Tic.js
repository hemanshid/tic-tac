import React, { useState } from 'react'

const Tic = () => {

    let [ticItem, setTicItem] = useState(['', '', '', '', '', '', '', '', '',])

    let [player, setPlayer] = useState(true)

    const checkwinner = (ticItem) => {
        const win = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for (let i = 0; i < win.length; i++) {
            const [a, b, c] = win[i];
            if (ticItem[a] && ticItem[a] === ticItem[b] && ticItem[a] === ticItem[c]) return ticItem[a];
        }
        return

    };

    const handleGame = (i) => {
        if (checkwinner(ticItem) || ticItem[i]) {
            return
        }

        let temp = [...ticItem];
        ticItem[i] = player ? "x" : "o";

        setTicItem(ticItem)
        setPlayer(!player)
    }
    const winner = checkwinner(ticItem);
    let status;
    if (winner === 'x' || winner === 'o') {
        status = `Winner: ${winner}`;
    } else {
        status = ''; // No status for other conditions
    }
    // const handleRestart = () =>{
    //     setPlayer(true)
    //     setTicItem = (['', '', '', '', '', '', '', '', '',])
    // }

    const resetGame = () => {
        setTicItem(['', '', '', '', '', '', '', '', '']);
        setPlayer(true);
    };
    return (
        <div>
            <h1 style={{ textAlign: 'center', marginTop: '50px' }}>TIC TAC TOE</h1>
            <div className="box">
                <div className="row">
                    <input type="button" className="box1" onClick={() => handleGame(0)} value={ticItem[0]} />
                    <input type="button" className="box1" onClick={() => handleGame(1)} value={ticItem[1]} />
                    <input type="button" className="box1" onClick={() => handleGame(2)} value={ticItem[2]} />
                </div>
                <div className="row">
                    <input type="button" className="box1" onClick={() => handleGame(3)} value={ticItem[3]} />
                    <input type="button" className="box1" onClick={() => handleGame(4)} value={ticItem[4]} />
                    <input type="button" className="box1" onClick={() => handleGame(5)} value={ticItem[5]} />
                </div>
                <div className="row">
                    <input type="button" className="box1" onClick={() => handleGame(6)} value={ticItem[6]} />
                    <input type="button" className="box1" onClick={() => handleGame(7)} value={ticItem[7]} />
                    <input type="button" className="box1" onClick={() => handleGame(8)} value={ticItem[8]} />
                </div>
            </div>
            <div className='status' style={{ textAlign: 'center' }}>{status}</div>
            <div style={{ textAlign: 'center' }}>
                <button className="reset" onClick={resetGame}>RESET</button>
            </div>
        </div>



    )
}


export default Tic

