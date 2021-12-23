function animate(obj, moveX, success) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        step = (moveX - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == moveX) {
            obj.style.left = moveX + 'px';
            clearInterval(obj.time);
            if (success) {
                success();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 13);
}