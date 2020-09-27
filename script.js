'use strict'; 

// Alert on entry
/*
let termsConfirmationMsg = `WARNING! Unauthorized use of this repository is a federal level offence and is subject to punishment by death! If you understand this term, type "yes". If you do not agree to this term, click cancel.`
let termsConfirmation = prompt(termsConfirmationMsg);

if (termsConfirmation === 'yes' || termsConfirmation === 'Yes' || termsConfirmation === 'YES') 
{
    alert('You have confirmed that you understand the term of use.')
}else {
    window.location.href = 'https://bluegarian-advanced-technologies.github.io/Connection-Terminated/';
}
*/
//Change entryImg height to fullscreen and keep checking for screen size changes

let windowHeight = window.innerHeight;
document.getElementById('entryImg').style.height = windowHeight + 'px';

// Make sure only way to get into files is doing the password

let files = document.getElementById('mainFiles');

// Ask for password

let passwordTimeout = 0;
let verfTime = document.getElementById('verfTimer');
let time = 6;

document.getElementById('askPass').addEventListener('click', function()
{
    var passwordInputed = document.getElementById('passwordInput').value;
    if (passwordInputed === 'glorytothebluegarianempire')
        {
            observerGlobal.disconnect();
            
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

        } else if (passwordInputed === '')
        {
            alert('No password given');
        } else 
            {
                observerGlobal.disconnect();

                alert('INCORRECT PASSWORD!');
                console.log('The password was incorrect');
                passwordTimeout++;

                function playIncorrectSound()
                {
                    let incSoundSrc = document.getElementById('incorrectPassword');
                    incSoundSrc.play();
                }playIncorrectSound();

                document.getElementById('login').style.backgroundColor = 'red';
                setTimeout(function()
                {
                    document.getElementById('login').style.backgroundColor = 'transparent';
                }, 550);

                setTimeout(function()
                {
                    observerGlobal.observe(targetNodeGlobal, configGlobal);
                }, 600)
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
            };
});

let observerGlobal;
let targetNodeGlobal;
let configGlobal;

setTimeout(function()
{
const targetNode = document.getElementById('document');
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer)
    {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') 
        {
        document.write('<h1 style="color:red;text-align:center;font-weight:bold;font-size:70px;display:block;">INVALID OPERATION! YOU ARE NOT ALLOWED TO MODIFY THE DOM!</h1>');
        }   else if (mutation.type === 'attributes')
            {
            document.write('<h1 style="color:red;text-align:center;font-weight:bold;font-size:70px;display:block;">INVALID OPERATION! YOU ARE NOT ALLOWED TO MODIFY THE DOM!</h1>');
            }   else if (mutation.type === 'subtree')
                {
                    document.write('<h1 style="color:red;text-align:center;font-weight:bold;font-size:70px;display:block;">INVALID OPERATION! YOU ARE NOT ALLOWED TO MODIFY THE DOM!</h1>');
                };
    };
};

const observer = new MutationObserver(callback);
observer.observe(targetNode, config);

observerGlobal = observer;
targetNodeGlobal = targetNode;
configGlobal = config;
}, 100);

// -------------- Main files folders JS ------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

document.getElementById('backTopBtn').addEventListener('click', function()
{
    window.scrollTo(0,0)
});

// Section Space Veh
const spaceVehContent = document.getElementById('space-veh-content');

function revealSpaceVeh() 
{
    if (spaceVehContent.style.display === 'none')
    {
        spaceVehContent.style.display = 'block';
    }else
     {
        spaceVehContent.style.display = 'none';
     };
};

// Section Land Veh
const landVehContent = document.getElementById('land-veh-content');

function revealLandVeh()
{
    {
        if (landVehContent.style.display === 'none')
        {
            landVehContent.style.display = 'block';
        }else
         {
            landVehContent.style.display = 'none';
         };
    };
};

// Section Planets

const planetsContent = document.getElementById('planets-content');

function revealPlanets()
{
    if (planetsContent.style.display === 'none')
    {
        planetsContent.style.display = 'block';
    }else
     {
        planetsContent.style.display = 'none';
     };
};