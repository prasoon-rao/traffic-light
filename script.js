const redLight=document.querySelector('.red');
const yellowLight=document.querySelector('.yellow');
    const greenLight=document.querySelector('.green');
        function changeLights(){
            setTimeout(()=>{
                redLight.style.backgroundColor='red';
                yellowLight.style.backgroundColor='transparent';
                greenLight.style.backgroundColor='transparent';

                setTimeout(()=>{
                    redLight.style.backgroundColor='transparent';
                    yellowLight.style.backgroundColor='yellow';
                    greenLight.style.backgroundColor='transparent';

                    setTimeout(()=>{
                        redLight.style.backgroundColor='transparent';
                        yellowLight.style.backgroundColor='transparent';
                        greenLight.style.backgroundColor='green';

                        changeLights();
            },1000);/*green light for 2s*/
        },1000);
    },1000);
}
changeLights();