let openBoard = document.querySelector('.board'),
    boardclose = document.querySelector('.boardclose'),
    list = document.querySelector('.boardclose');


openBoard.addEventListener('click', function() {
    list.style.display = 'block';
    list.classList.add('listt');
    document.body.style.overflow = 'hidden';
});

boardclose.addEventListener('click', function() {
    list.style.display = 'none';
    list.classList.remove('listt');
    document.body.style.overflow = '';
});





































/* let company = function () {
    nameTile = [],
    Tax = [],
    price = [],
    rent = [];

}
function Cinema(nameTile, Tax, price, rent) {
    nameTile = document.body.classList.add('cinema');
    nameTile.style.width = 50 + 'px'; 

} 
document.white(Cinema()) */