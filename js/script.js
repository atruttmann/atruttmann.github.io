// Google Analytics
$(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-106349175-1', 'auto');
ga('send', 'pageview');

// Modal fix for Internet Explorer
$(function () {
    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    if (isIE) {
        $('.modal').removeClass('fade');
    }
});

// PlanIt Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-planit');
    $('#caption-planit span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-planit');
        $('#caption-planit span').html(caption.html());
        caption.css('display','none');
    });
});

// WACM Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-wacm');
    $('#caption-wacm span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-wacm');
        $('#caption-wacm span').html(caption.html());
        caption.css('display','none');
    });
});

// Draw3D Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-draw3D');
    $('#caption-draw3D span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-draw3D');
        $('#caption-draw3D span').html(caption.html());
        caption.css('display','none');
    });
});

// Photo Booth Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-photobooth');
    $('#caption-photobooth span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-photobooth');
        $('#caption-photobooth span').html(caption.html());
        caption.css('display','none');
    });
});

// Intuit Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-intuit');
    $('#caption-intuit span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-intuit');
        $('#caption-intuit span').html(caption.html());
        caption.css('display','none');
    });
});

// Microsoft Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-microsoft');
    $('#caption-microsoft span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-microsoft');
        $('#caption-microsoft span').html(caption.html());
        caption.css('display','none');
    });
});