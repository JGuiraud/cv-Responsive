$(document).ready(function () {
    $(window).on("orientationchange", function () {
        if (window.innerWidth > window.innerHeight) {
            $("#logoJG").hide();
        }
        if (window.innerHeight > window.innerWidth) {
            $("#logoJG").show();
        }
    });
})