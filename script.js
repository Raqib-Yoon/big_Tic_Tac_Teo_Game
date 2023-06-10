const boxes = document.querySelectorAll('.box')
let turn_show = document.querySelector('#turn')
const winner = [
    [0, 1, 2, 3],
    [0, 5, 10, 15],
    [0, 6, 12, 18],
    [1, 2, 3, 4],
    [1, 7, 13, 19],
    [1, 6, 11, 16],
    [2, 7, 12, 17],
    [3, 8, 13, 18],
    [3, 7, 11, 15],
    [4, 8, 12, 16],
    [4, 9, 14, 19],
    [5, 6, 7, 8],
    [5, 11, 17, 23],
    [5, 10, 15, 20],
    [6, 7, 8, 9],
    [6, 11, 16, 21],
    [6, 12, 18, 24],
    [7, 12, 17, 22],
    [8, 13, 18, 23],
    [8, 12, 16, 20],
    [9, 14, 19, 24],
    [9, 13, 17, 21],
    [10, 11, 12, 13],
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [21, 22, 23, 24],
]

let isGameOver = false;
let turn = 'x'



turn_show.innerHTML = `<span>${turn} </span>turn`

function addValues() {
    boxes.forEach((elem) => {
        elem.addEventListener('click', () => {
            if (elem.innerText === 'x' || elem.innerText === 'o') {
                return
            }
            if (!isGameOver) {
                elem.innerText = turn;
                turn = turn == "x" ? "o" : "x"
                turn_show.innerHTML = `<span>${turn} </span>turn`
                color()
                whoIsWinner()
            }
            color()
        })
    })
}

function color() {
    boxes.forEach((element) => {
        if (element.innerText === 'x') {
            element.style.color = '#ff597b'
        } else {
            element.style.color = '#ffbf00'
        }
    })
}



function whoIsWinner() {
    winner.forEach((elem) => {
        if ((boxes[elem[0]].innerText === boxes[elem[1]].innerText) && (boxes[elem[1]].innerText === boxes[elem[2]].innerText) && (boxes[elem[2]].innerText === boxes[elem[3]].innerText) && (boxes[elem[0]].innerText !== '' && boxes[elem[1]].innerText !== '' && boxes[elem[2]].innerText !== '' && (boxes[elem[3]].innerText !== ''))) {
            if (turn === 'x') {
                turn_show.innerHTML = `😍😍<span> O </span> Win 😍😍`
            } else {
                turn_show.innerHTML = `😍😍<span> X </span> Win 😍😍`
            }
            boxes[elem[0]].style = `background-color:#096e6b`
            boxes[elem[1]].style = `background-color:#096e6b`
            boxes[elem[2]].style = `background-color:#096e6b`
            boxes[elem[3]].style = `background-color:#096e6b`
            isGameOver = !isGameOver;
            boxes.forEach((elem) => {
                elem.id = 'box_hover'
            })
        }
    })
}


addValues()