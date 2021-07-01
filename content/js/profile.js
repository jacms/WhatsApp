var profile = new function () {
    "use strict";
    var self = this;
    function _show() {
        $(".image_container").on({
            click: function () {
                var container = $(this),
                    image = container.children("img").attr("src"),
                    name = container.parent().find(".user_name name").text();
                $(".profile_name").text(name);
                $(".profile_image img").attr("src", image);
                let $profile = $(".profile");
                $profile.css("display", "flex");
                $profile.animate({
                    opacity: 1
                }, 600);
                $(".profile_container").show("slow");
            }
        });
    }
    function _hide() {
        $(".profile").on({
            click: function (e) {
                if ($(e.target).attr("class") == "profile"){
                    let container = $(this);
                    container.animate({opacity:0},600);
                    $(".profile_container").hide("slow");
                    setTimeout(function(){
                        container.css("display","none");
                    },700);
                }
            }
        });
    }
    self.init = function () {
        _show();
        _hide();
    }
};