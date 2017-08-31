
for(var i = 100;i <1000 ; i++){
    var hundred = Math.floor(i / 100);
    var ten = Math.floor((i-hundred*100)/10);
    var k = (i - hundred*100 - ten * 10);
    var number = Math.pow(hundred,3) + Math.pow(ten,3) + Math.pow(k,3)
    if(i === number){
        console.log(i);
    }
}