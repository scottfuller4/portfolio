const App = {};

$(function () {
    App.init();
});

App.init = function () {
    App.menu();
    App.menuClick();
    App.contact();
    App.scroll();
};

App.menu = function () {
    $(".hamburgerNav").on("click", function () {
        $(".pageNav").toggleClass("menuHide");
        $(".hamburger").toggleClass("hidden");
        $(".close").toggleClass("hidden");
    })
}

App.menuClick = function () {
    $(".pageNav a").on("click", function () {
        $(".pageNav").toggleClass("menuHide");
        $(".close").toggleClass("hidden");
        $(".hamburger").toggleClass("hidden");
    })
}

App.contact = function () {
    $(".contactButton").on("click", function () {
        $(".contactForm").removeClass("menuHide");
        $("#rotate").rotate({ angle: 0, animateTo: 90, duration: 500 });
        $("html, body").animate({
            scrollTop: $(".contactForm").offset().top
        }, 1000);
    })
}

App.scroll = function () {
    $("a").on('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
}