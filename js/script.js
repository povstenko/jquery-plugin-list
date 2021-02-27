let arr = ['hello', 'from', 'easy', 'programming', '.net'];

$('#result').append($(arr).listThis('ul').colorMyList({
    color: 'blue',
    fontSize: '30px',
    textDecoration: 'none'
}));