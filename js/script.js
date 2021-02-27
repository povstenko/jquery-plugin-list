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