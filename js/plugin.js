$.fn.CreateList = function (options) {
    let settings = $.extend({
        openTrigger: '#open',
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

$.fn.CreateTable = function (options) {
    let settings = $.extend({
        columns: ['col1', 'col2'],
        data: [['test1', 'test1'], ['test2', 'test2']],
        tableClass: '',
        theadClass: '',
        textAlign: 'left'
    }, options);

    let table = $('<table class="' + settings.tableClass + ' text-' + settings.textAlign + '">');

    // columns names on table header
    let theadtr = $('<tr>');
    $.each(settings.columns, function (i, item) {
        theadtr.append($('<th>').append(item));
    });
    table.append($('<thead class="' + settings.theadClass + '">').append(theadtr));

    // rows on table body
    let tbody = $('<tbody>');
    $.each(settings.data, function (i, row) {
        let tbodytr = $('<tr>');
        $.each(row, function (i, item) {
            tbodytr.append($('<td>').append(item));
        });
        tbody.append(tbodytr);
    });
    table.append(tbody);

    this.append(table);
}