//control header scroll
var scroll = new function () {
    'use strict';
    var self = this;

    self.init = function () {
        var previousScroll = 0,
            $messageSection = $(".message_section"),
            $titleBar = $(".title_bar");
        $messageSection.scroll(function () {
            var currentScroll = $messageSection.scrollTop();
            if (currentScroll > previousScroll) {
                if (currentScroll > 0 & currentScroll <= 80) {
                    $titleBar.css("margin-top", `-${currentScroll}px`);
                } else {
                    $titleBar.css("margin-top", `-80px`);
                }
            } else {
                if (currentScroll <= 90) {
                    $titleBar.css("margin-top", `-${currentScroll}px`);
                } else {
                    $titleBar.css("margin-top", `-80px`);
                }
            }
            previousScroll = currentScroll;
        });
    }
};