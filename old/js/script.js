// Modal fix for iOS and Internet Explorer
$(function () {
    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIE || iOS) {
        $('.modal').removeClass('fade');
    }
});

// Calf Tracker Captions
$(function() {
    $('.carousel').carousel();
    var caption = $('div.item:nth-child(1) .caption-calftracker');
    $('#caption-calftracker span').html(caption.html());
    caption.css('display','none');
    $(".carousel").on('slide.bs.carousel', function(evt) {
        var caption = $('div.item:nth-child(' + ($(evt.relatedTarget).index()+1) + ') .caption-calftracker');
        $('#caption-calftracker span').html(caption.html());
        caption.css('display','none');
    });
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