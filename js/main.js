(function() {
    var flags = document.getElementsByClassName('js-logo');
    var screen = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    };

    var currentFlag = 0;
    (function process(flag) {
        sendOnMerryWay(flags[currentFlag]);
        currentFlag += 1;
        if(currentFlag < flags.length) {
            setTimeout(process, 500);
        }
    }());

    function sendOnMerryWay(flag) {
        var transform = new WebKitCSSMatrix(window.getComputedStyle(flag).webkitTransform);
        flag.animate([
            {
                opacity: 0.1,
                transform: transform.scale(0.1)
            },
            {
                opacity: 1.0,
                transform: transform
                    .translate(_.random(-screen.width, screen.width, false), _.random(-screen.height, screen.height, false))
                    .scale(1)
            }
        ], {
            easing: "ease-in",
            duration: 5000,
            iterations: Infinity
        });
    }

}());
