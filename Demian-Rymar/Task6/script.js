const buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('mouseover', function (event) {
        const button = event.target;
        const tooltip = button.getAttribute('title');
        button.removeAttribute('title');

        const tooltipDiv = document.createElement('div');
        tooltipDiv.className = 'tooltip';
        tooltipDiv.textContent = tooltip;

        document.body.appendChild(tooltipDiv);

        const buttonRect = button.getBoundingClientRect();
        const tooltipRect = tooltipDiv.getBoundingClientRect();

        if (buttonRect.top > tooltipRect.height) {
            tooltipDiv.style.top = (buttonRect.top - tooltipRect.height) + 'px';
        } else {
            tooltipDiv.style.top = (buttonRect.bottom) + 'px';
        }

        tooltipDiv.style.left = (buttonRect.left + (buttonRect.width / 2) - (tooltipRect.width / 2)) + 'px';
    });

    buttons[i].addEventListener('mouseout', function (event) {
        const button = event.target;
        const tooltipDiv = document.querySelector('.tooltip');
        tooltipDiv.parentNode.removeChild(tooltipDiv);
        button.setAttribute('title', tooltipDiv.textContent);
    });
}