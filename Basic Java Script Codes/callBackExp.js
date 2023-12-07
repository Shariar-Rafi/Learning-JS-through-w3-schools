// The confusing callback pattern for 
const paySuccess = true;
const marks = 80;

function enroll(callback){
    console.log("Course enrollment in progress...");
    setTimeout(
        function(){
            if(paySuccess){
                callback();
            }
            else{
                console.log("Payment failed!");
            }
        },2000
    );

}


function progress(callback){
    console.log("Coure on progress...")

    setTimeout(function(){
        if(marks >= 80){
            callback();
        } else{
            console.log("Not Enough marks");
        };
    },3000);
}


function getCertificate(){
    console.log("Preparing certificate...");
    setTimeout(function(){
        console.log("You got the certificate :)");
    },1000);
}


enroll(function(){
    progress(getCertificate);
});


