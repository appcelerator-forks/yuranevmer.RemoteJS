var myModule = {};

(function() {
    function open(params) {
        win.open(params);
        alert(123);
    }
    var win = Ti.UI.createWindow({
        backgroundColor: "blue"
    });
    win.addEventListener("singletap", function() {
        win.close();
    });
    myModule = {
        open: open
    };
})();

Ti.API.info("module loaded");