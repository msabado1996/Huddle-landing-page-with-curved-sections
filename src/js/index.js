const subscribeBtn = document.getElementById("subscribe-btn");
const msgError = document.querySelector(".msg-error");
const subscribeInput = document.getElementById("subscribe-input");



subscribeBtn.addEventListener('click', function() {
    const inputValue = subscribeInput.value;
    if (inputValue === null || inputValue.trim() === '' || !inputValue.includes('@gmail.com')) {
        msgError.innerHTML = "Check your email please yameteh";
        msgError.style.display = 'flex';
        setTimeout(function() {
            msgError.style.display = 'none';
        }, 3000); // 2000 milliseconds (2 seconds)
    } else {
        msgError.innerHTML = "Email Subscribed";
        msgError.style.color = "blue";
        msgError.style.display = 'flex';
        setTimeout(function() {
            msgError.style.display = 'none';
        }, 3000); // 2000 milliseconds (2 seconds)
    }
    
    setTimeout(function() {
        subscribeInput.value = "";
    }, 3000); // 2000 milliseconds (2 seconds)
});