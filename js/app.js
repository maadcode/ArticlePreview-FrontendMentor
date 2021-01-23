const shareBtn = document.querySelector('#share');
const insideShareBtn = document.querySelector('#insideShare');

shareBtn.addEventListener('click', toggle)
insideShareBtn.addEventListener('click', toggle)

function toggle() {
    const tooltipShare = document.querySelector('#tooltipShare');
    tooltipShare.classList.toggle('active')
}