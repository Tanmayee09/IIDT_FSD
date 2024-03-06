const colorBox = document.getElementById('colorBox');
const colorBtn = document.getElementById('colorBtn');
const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33DD', '#33DDFF', '#FFD700', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF'];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

colorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
});
