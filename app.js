const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
let select = document.getElementById("mySelect");
let p1Live = 0;
let p2Live = 0;
let winningNum = 0;

p1Button.addEventListener('click', () => {
    winningNum = Number(select.value);
    p1Live++;
    p1Score.textContent = p1Live

    if (p1Live === winningNum) {
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
        disabledButtons();
    }
})

p2Button.addEventListener('click', () => {
    winningNum = Number(select.value);
    p2Live++;
    p2Score.textContent = p2Live

    if (p2Live === winningNum) {
        p1Score.style.color = 'red';
        p2Score.style.color = 'green';
        disabledButtons();
    }
})

select.addEventListener('change', resetButtons);

reset.addEventListener('click', resetButtons);

function disabledButtons() {
    p1Button.disabled = true;
    p2Button.disabled = true;
}

function resetButtons() {
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Score.textContent = 0;
    p2Score.textContent = 0;
    p1Live = 0;
    p2Live = 0;
    p1Score.style.color = 'black';
    p2Score.style.color = 'black';
}
