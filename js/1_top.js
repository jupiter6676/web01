$(document).ready(function ()
{
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 100)
        {
            $(".top_btn").fadeIn(500);
        }

        else
        {
            $(".top_btn").fadeOut('slow');
        }
    });

    $(".top_btn").click(function ()
    {
        $("html, body").animate({scrollTop: 0}, 400);

        return false;
    });
});