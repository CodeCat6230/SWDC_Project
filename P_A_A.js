

function sleep(t){
    return new Promise(a=>setTimeout(a,t));
}

(async function(){
    console.log('0 second');
    await sleep(10000)
    console.log("10 second")
})();
