var obj = {
    one: {
        somth: "kjdhfkjshd djfh sd f",
        objECT: {
            qwe: "djsjfhs",
            q: "skjhdhfjks"
        }
    },
    somth: "1jdshfsd",
    two: {
        q: "4",
        q1: "5",
        q2: "7",
        q3: "9",
    }
}


function first(object){
    console.log("Выполнение first функции");
    console.log(object);
    let promise = new Promise(function(resolve,reject){
        setTimeout(function(){
        Math.random() > 0 ? resolve(object.one) : reject("error");
    },2000);
    });
    return promise;
}
function second(obj1){
    console.log("Выполнение second функции");
    console.log(obj1);
    return new Promise(function(resolve,rejact){
        setTimeout( function(){resolve(obj1)},2000);
    })
}
function third(obj2){ 
    console.log("Выполнение third функции");
    console.log(obj2.objECT);
    return new Promise(function(resolve,rejact){
    setTimeout(function(){ resolve(obj2.objECT)},1000);    
    });  
}
function fourth(obj3){
   console.log("Выполнение fourth функции ");
   console.log(obj3.qwe);
    return Promise.resolve(obj3);
}

first(obj).then(second)
    .then (third)
    .then (fourth)
    .catch(function(){console.log('error')})
;






























//function aplayForVisa(documents,resolve,reject){
//    console.log("obrabotka documentow");
//    setTimeout(function(){
//        Math.random() > .5 ? resolve({}) : reject("error");
//    },2000);
//    
//}
//
//function bookhotel(){
//    
//}
//
//function buyTickets(){
//    
//}
//
//aplayForVisa({}, function(visa){
//    console.log("visa aplay");
//    var i = 0;
//    
//    bookhotel(visa, function(reservation){
//        console.log(reservation)
//        buyTickets(reservation, function(OK){
//            console.log("Ok")
//        }, function(errorTicket){
//            console.log("No");
//        })
//    },
//    function (errorReservation){
//        console.log("errorReservation");
//    }
//    )
//}, 
//function(reson){
//    console.log(reson);
//});
//



