// Modal fix for Internet Explorer
$(function () {
    var isIE = window.ActiveXObject || "ActiveXObject" in window;
    if (isIE) {
        $('.modal').removeClass('fade');
    }
});

// Modal fix for iOS
$(function () {
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (iOS) {
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