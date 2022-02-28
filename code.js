let outputScreen= document.getElementById('outputScreen');
buttons = document.querySelectorAll('button');
let outputScreenValue='';
for(item of buttons)
{
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        //outputScreenValue +=buttonText;
        //outputScreen.value += buttonText;
        if(buttonText=='C')
        {
            outputScreen.value='';
            outputScreenValue ='';
        }
        else if(buttonText=='='){
            try {
                outputScreen.value = eval(outputScreenValue);
            } catch (e) {
                if (e instanceof SyntaxError) {
                    alert(e.message);
                    //rrorAlert('Input Error',"")
                }
            }
            
        }
        else{
            outputScreenValue+=buttonText;
            outputScreen.value=outputScreenValue;
        }
    });
}