function sub(channel){
    console.log(` Subscribe to ${channel}`);
}

let timer = setInterval(sub,3000,'JAVASCRIPT');

const clear = () => {
clearInterval(timer);
console.log(`clearInternel() stopped the timer`);
}

const btn = document.getElementById('btn').addEventListener('click',clear);


