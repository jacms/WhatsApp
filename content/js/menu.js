var menu = new function () {
    "use strict";
    var self = this;

    function _show() {
        const menuHeight = "205px",
            menuWidth = "200px";
        $(".icon_container div:nth-child(1) img").on({
            click: function () {
                let dMenu = $(".dropdown_menu");

                dMenu.animate({
                    width: menuWidth,
                    height: menuHeight,
                    opacity: 1
                }, 300);

            }
        });
    }

    function _hide() {
        $("*").on({
            click: function (e) {
                let dMenu = $(".dropdown_menu");
                if (dMenu.height() > 100) {
                    if ($(e.target).attr("class") !== "dropdown_menu" || $(e.target).attr("class") !== "dropdown_item") {
                        dMenu.animate({
                            width: "0px",
                            height: "0px",
                            opacity: 1
                        }, 300);
                    }
                }
            }
        });
    }

    self.init = function () {
        _show();
        _hide();
    }
};