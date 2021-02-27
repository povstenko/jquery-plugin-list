let arr = ['elements', 'for', 'testing', 'jQuery', 'plugin'];

$('#result1').CreateList({
    data: arr,
    listTag: 'ol',
    color: 'green',
    fontSize: '30px',
    textdecoration: 'underline'
});

$('#result2').CreateList({
    data: arr,
    listClass: 'list-group',
    itemClass: 'list-group-item'
});

let cols = ['a', 'b'];
let rows = [['one', 'one'], ['two', 'two']];

$('#result3').CreateTable({
    columns: cols,
    data: rows
});

$('#result4').CreateTable({
    columns: cols,
    data: rows,
    tableClass: 'table table-striped table-bordered',
    theadClass: 'table-dark',
    textAlign: 'center',
});