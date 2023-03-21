const hasTooltip = document.querySelectorAll('.has-tooltip');
const newTooltip = document.createElement('div');
newTooltip.setAttribute('class', 'tooltip');

function showTooltip(tip) {
	newTooltip.innerText = tip.title;
	let tipPosition = tip.getBoundingClientRect();
	newTooltip.style.left = tip.offsetLeft + 'px';
	newTooltip.style.top = (tipPosition.y+tip.offsetHeight) + 'px';
	newTooltip.classList.add('tooltip_active');
}

[...hasTooltip].forEach((e) => {
    e.insertAdjacentElement('afterend', newTooltip);
    e.onclick = (event) => {
        if (newTooltip.classList.contains('tooltip_active')) {
            if(newTooltip.innerText == e.title) {
                newTooltip.classList.remove('tooltip_active');
            } else {
                showTooltip(e);
            }
        } else {
            showTooltip(e);
        }
        event.preventDefault();
    }
}) 