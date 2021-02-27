$.fn.listThis = function (listType) {
    let l = $('<' + listType + '>');

    this.each(function (i, item) {
        $(l).append($('<li>').append(item));
    });

    return l;
}

$.fn.colorMyList = function (options) {
    let settings = $.extend({
        color: '#000',
        fontSize: '16px',
        textdecoration: 'underline'
    }, options);

    return this.css({
        'color': settings.color,
        'font-size': settings.fontSize,
        'text-decoration': settings.textdecoration
    });
}