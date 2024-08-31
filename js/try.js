document.querySelector(".hamburger").onclick = function() {
    document.querySelector(".menu").classList.toggle("active");
    } 

    document.addEventListener('DOMContentLoaded', function() {
        const text = "A Web Developer";
        const typingElement = document.getElementById('typing');
        let index = 0;
        const typingSpeed = 300; // Speed of typing
        const delayBeforeRestart = 3500; // Delay before restarting the typing effect
    
        function typeLetter() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeLetter, typingSpeed);
            } else {
                setTimeout(() => {
                    typingElement.textContent = '';
                    index = 0;
                    setTimeout(typeLetter, typingSpeed);
                }, delayBeforeRestart);
            }
        }
    
        typeLetter();
    });
    
    