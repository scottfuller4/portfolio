const App = {};

$(function () {
    App.init();
});

App.init = function () {
    App.menu();
    App.contact();
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

// $("html, body").animate(
//     {
//         scrollTop: $(`#qa${bombApp.questionCount}`).offset().top
//     },
//     1000);