'use strict'; 

// Alert on entry

alert('WARNING! Unauthorized use of this repository is a federal level offence and is subject to punishment by death!');

//Change entryImg height to fullscreen and keep checking for screen size changes

function checkScreenChange() 
{
let windowHeight = window.innerHeight;
document.getElementById('entryImg').style.height = windowHeight + 'px';

    setTimeout(function() 
    {
        checkScreenChange();
    }, 2000);
}checkScreenChange();

// Make sure only way to get into files is doing the password

let files = document.getElementById('mainFiles');

// Prevent modifing the DOM



// Ask for password

let givenPassword;
let passwordTimeout = 0;
let verfTime = document.getElementById('verfTimer');
let time = 6;

document.getElementById('askPass').addEventListener('click', function()
{
    givenPassword = prompt('Enter password below');
        if (givenPassword === 'glorytothebluegarianempire')
        {
            alert('Correct password, now initiating second factor authentication...');
            document.getElementById('secondFactorAuth').style.display = 'block';

            var timer = setInterval(initVerf, 1000);
            function initVerf()
            {
                verfTime.innerHTML = 'Verification timer: ' + time;
                time--;

                if (time === 0)
                {
                    clearInterval(timer);
                }
            }
            initVerf();

            setTimeout(function() {
                document.getElementById('secondFactorAuth').style.display = 'none';
                document.getElementById('login').style.display = 'none';
                document.getElementById('entryImg').style.display = 'none';
                document.getElementById('files').style.display = 'block';
            }, 6000);
        }   else if (givenPassword === null)
            {
                alert('Cancelled');
            }   else 
                {
                    alert('INCORRECT PASSWORD!');
                    console.log('The password was incorrect');
                    passwordTimeout++;

                    function playIncorrectSound()
                    {
                        let incSoundSrc = document.getElementById('incorrectPassword');
                        incSoundSrc.play();
                    }playIncorrectSound();

                    document.getElementById('login').style.backgroundColor = 'red'
                    setTimeout(function()
                    {
                        document.getElementById('login').style.backgroundColor = 'transparent'
                    }, 1100)
                };
    
        if (passwordTimeout > 1)
        {
            document.getElementById('if2Fails').innerHTML = '(Last attempt at password)';
        }

        if (passwordTimeout > 2) 
        {
            alert('YOU HAVE FAILED ALL 3 ATTEMPS AT THE PASSWORD! MTF TEAMS ARE ENROUTE TO YOUR LOCATION NOW! PREPARE TO BE TERMINATED YOU DISGRACE!');
            document.querySelector('body').style = 'background-color: red;';
            document.getElementById('login').style.display = 'none';
            document.getElementById('entryImg').style.display = 'none';
            document.querySelector('footer').style.display = 'none';
        }
});