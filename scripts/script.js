const App = {};

$(function () {
    App.init();
});

App.init = function () {
    App.menu();
    App.contact();
    App.scroll();
};

App.menu = function () {
    $(".hamburger").on("click", function () {
        $(".pageNav").toggleClass("menuHide");
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