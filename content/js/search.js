var search = new function () {
    "use strict";
    var self = this;

    function _init() {
        $(".icon_container div:nth-child(2) img").on({
            click: function () {
                let searchBar = $(".search_bar"),
                    back = $(".back_trigger"),
                    title = $(".title_bar");

                searchBar.css("display", "block");
                searchBar.animate({
                    opacity: 1,
                    width: "100%"
                }, 600);
                back.css("display", "block");
                title.animate({
                    marginTop: "-80px"
                }, 300);
                searchBar.focus();
            }
        });
    }

    function _back() {
        $(".back_trigger").on({
            click: function () {
                let searchBar = $(".search_bar"),
                    back = $(".back_trigger"),
                    title = $(".title_bar");
                searchBar.val("");
                searchBar.keyup();
                searchBar.animate({
                    opacity: 0
                }, 600);
                back.css("display", "none");
                title.animate({
                    marginTop: "0px"
                }, 300);
                setTimeout(() => {
                    searchBar.css("display", "none");
                }, 600);
            }
        });
    }

    function _search() {
        $("body").on("change, keyup", ".search_bar", function () {

            let value = $(this).val().toLowerCase(),
                lenght = $(this).val().lenght;

            $(".single_chat").each(function () {
                let chat = $(this)
                name = chat.find(".user_name name").text().toLowerCase();

                if (name.indexOf(value) < 0) {
                    chat.hide("slow");
                } else {
                    chat.show("slow");
                }

            });
        });
    }



    self.init = function () {
        _init();
        _back();
        _search();

    };
};