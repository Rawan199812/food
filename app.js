console .log ('welcome to Food');
var message='';

alert('welcome to Food');
var age=prompt('How old are you?');
if (age<=18){ 
    message='You needs1800 Calories To Eat Every Day ';
}else if (age>=19){
    message='You Need 2000 Calories To Eat Every Day';

}
document.write('<h2>'+ message +'</h2>');

confirm('Do You Like Our services? ')
alert('Have A Nice Day');


var order = prompt('Do you take care of your body and health?');
while(order!=='Yes'&&order!=='No'){
    order = prompt('please write only Yes or No');
}

var health = '';
if (order ==='Yes'){
    health = '<img src="https://i.pinimg.com/originals/8c/64/37/8c64373f1a8c571bb2f29854016673e2.jpg "/>';
   

}else if (order ==='No'){
   health = '<img src="https://i.pinimg.com/originals/af/d4/0d/afd40d2b3db03c20092f65c8988d45c1.jpg"/>';
}
document.write(health);
var result = '';
var numStars=prompt('What star rating would you give?');

for(var i=0 ; i<numStars ;i++){
    // console.log(i);
    result =result+ numStars;
}
document.write(result);
