//efficient calling version of promise
const paySuccess = true;
const marks = 80;

function enroll(){
    console.log("Course enrollment in progress...");

    const promise = new Promise(function(resolve,reject){
        
    setTimeout(
        function(){
            if(paySuccess){
                resolve();
            }
            else{
                reject("Payment failed!");
            }
        },2000
    );
    });

        return promise;
}

function progress(){
    console.log("Coure on progress...")

    const promise = new Promise(function(resolve,reject){
        setTimeout(function(){
            if(marks >= 80){
                resolve();
            } else{
                reject("Not Enough marks");
            };
        },3000);
    });

    return promise;
}

//the work is finished here, that's why we didn't declare any parameter
function getCertificate(){
    console.log("Preparing certificate...");

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("You got the certificate :)");
        },1000);
    });

  return promise;
}

//--------------calling---------------//
async function course(){
    try
    {
    await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
    }
    catch(err)
    {
        console.log(err);
    }
};

course();

 
// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })