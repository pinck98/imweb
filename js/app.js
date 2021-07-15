const navOpenUl = document.querySelector("#nav__open__ul").children;


$(".nav__bar__mob").click(function(){
        $("#nav__open , #nav__close").slideToggle(300);
});

$("#nav__close").click(function(){
        $("#nav__open , #nav__close").slideToggle(300);
});

$(navOpenUl).click(function(){
        $("#nav__open , #nav__close").slideToggle(300);
});

$(".team__con").mouseenter(function(){
        $(".team__con__info").show(300);

});

$(".team__con").mouseleave(function(){
        $(".team__con__info").hide(300);

});

