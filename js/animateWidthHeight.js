function animateWidth(obj, W, H, callback) {

    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var stepW = (W - obj.offsetWidth) / 10;
        var stepH = (H - obj.offsetHeight) / 10;

        stepW = stepW > 0 ? Math.ceil(stepW) : Math.floor(stepW);
        stepH = stepH > 0 ? Math.ceil(stepH) : Math.floor(stepH);
        if (obj.offsetWidth == W && obj.offsetHeight == H) {
            clearInterval(obj.timer);
            callback && callback();
        }
        obj.style.width = obj.offsetWidth + stepW + 'px';
        obj.style.height = obj.offsetHeight + stepH + 'px';
    }, 8);
}