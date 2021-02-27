$.fn.CreateList = function (options) {
    let settings = $.extend({
        data: ['test', 'test'],
        listTag: 'ul',
        listClass: '',
        itemClass: '',
        color: 'blue',
        fontSize: '16px',
        textdecoration: 'none'
    }, options);

    let l = $('<' + settings.listTag + ' class="' + settings.listClass + '">');

    $.each(settings.data, function (i, item) {
        $(l).append($('<li class="' + settings.itemClass + '">').append(item));
    });

    this.append(l.css({
        'color': settings.color,
        'font-size': settings.fontSize,
        'text-decoration': settings.textdecoration
    }));
}