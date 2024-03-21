'use strict'

let paral1 = document.querySelector('.parallax1');
            let paral2 = document.querySelector('.parallax2');
            let paral3 = document.querySelector('.parallax3');
            let paral4 = document.querySelector('.parallax4');
            window.addEventListener('mousemove', function(e) {
            let x = e.clientX / window.innerWidth;
            let y = e.clientY / window.innerHeight;  
            paral1.style.transform = 'translate(-' + x * 70 + 'px, -' + y * 70 + 'px)';
            paral2.style.transform = 'translate(-' + x * 120 + 'px, -' + y * 120 + 'px)';
            paral3.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
            paral4.style.transform = 'translate(-' + x * 65 + 'px, -' + y * 65 + 'px)';
});