$(".btn").click(function () {
    $button = $(this);
    $content = $button.next();
    $content.slideToggle(300);
});