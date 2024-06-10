const d = document.getElementsByClassName("draggable");

for (let i = 0; i < d.length; i++) {
    d[i].style.position = "relative";
}

function filter(e) {
    let target = e.target;

    if (!target.classList.contains("draggable")) {
        return;
    }

    target.moving = true;

    target.oldX = e.clientX;
    target.oldY = e.clientY;

    target.oldLeft = window.getComputedStyle(target).getPropertyValue('left').split('px')[0] * 1;
    target.oldTop = window.getComputedStyle(target).getPropertyValue('top').split('px')[0] * 1;

    document.onmousemove = dr;

    function dr(event) {
        event.preventDefault();

        if (!target.moving) {
            return;
        }

        target.distX = event.clientX - target.oldX;
        target.distY = event.clientY - target.oldY;

        target.style.left = target.oldLeft + target.distX + "px";
        target.style.top = target.oldTop + target.distY + "px";
    }

    function endDrag() {
        target.moving = false;
        document.onmousemove = null;
    }
    target.onmouseup = endDrag;
}
document.onmousedown = filter;