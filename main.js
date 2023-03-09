var a = +prompt( 'Введите первое число')
var b = +prompt( 'Введите второе число')
var c = +prompt( 'Введите третье число')


if(isNaN(a) || b > a && a > c || c > a && a > b ){
    alert( 'Число ' + a + ' по середине трех чисел');
}else if(a > b && b > c || c > b && b > a){
    alert( 'Число ' + b + ' по середине трех чисел');
}else if(a > c && c > b || b > c && c > a){
    alert( 'Число ' + c + ' по середине трех чисел');
}else{
    alert("Вы ввели не то")
}