var canvas = document.getElementById('camvas');
var ctx = canvas.getContext('2d') ;

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

ctx.fillStyle = 'green';
//왼쪽 위에~~~ 주문석이므로 작성하지 않아도 됩니다.
ctx.fillRect(10,10,100,100);
