console.log("11111111111");
console.log("11111111111");
console.log("11111111111");
console.log("11111111111");
let sec = 0
const timeId = setInterval(() => {
    sec++;
    console.log("i will call after 1s repeadetly", sec);
    if (sec > 15) {
        // for stoping interval we have to give the interval id which returning this funciton
        clearInterval(timeId);
    }
}, 1000)
console.log("11111111111");
console.log("11111111111");