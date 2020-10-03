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

// Context menu disable initial and allow on phone and custom functions

if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    
}else{
    document.getElementById("DOM").addEventListener("contextmenu", function(e) 
    {
        e.preventDefault();
    }, false);
}

//-

function copyText()
{
    var preselection = window.getSelection();
    var selection = preselection.toString();
    document.execCommand('copy');
}

function pasteClipboard()
{
    document.execCommand('paste');
}


let TOUDOM = `<!DOCTYPE html> <html lang="en"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <link href='https://fonts.googleapis.com/css?family=Roboto Condensed' rel='stylesheet'> <title>Terms of Use</title> <style> body { margin: 0; background-color: rgb(0, 140, 255); font-family: 'Roboto Condensed', Arial, Helvetica, sans-serif; color: white; } h1 { text-align: center; text-decoration: underline; font-size: 40px; } .terms-container { width: 95%; margin-left: auto; margin-right: auto; font-size: 25px; } footer { width: 100%; height: 500px; background-color: rgb(0, 104, 189); text-align: center; font-size: 30px; font-weight: bold; background-image: url('https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1333&q=80'); background-repeat: no-repeat; background-position: center; background-size: cover; } </style> </head> <body> <h1>Terms of Use</h1> <br/> <div class="terms-container"> <p> 1. Authorized personnal are <strong>FOBBIDEN</strong> to share the password, or any content inside the repository. Those who break this term will be punished severely. </p> <p> 2. All unauthorized people who use this repository or attempt to bypass the security of this repository will be subject to punishment by <strong>death</strong>. </p> <p> 3. The Emperor of Bluegaria has full right to give access to the repository for anyone he desires. </p> </div> <footer> <br/> <br/> Bluegarian Advanced Technologies is the proud source of nearly all of The Empire of Bluegaria's technology for nearly all of The Empire's existence. </footer> </body> </html>`;
let TOUWin;

function openTOU() {
    TOUWin = window.open("", "TOSWin", "width=800,height=600,top=100,left=450");
    TOUWin.document.write(TOUDOM);
}

//Change entryImg height to full screen height

let windowHeight = window.innerHeight;
document.getElementById('entryImg').style.height = windowHeight + 'px';

// Password system of Advanced Technologies

let passwordTimeout = 0;

document.getElementById('askPass').addEventListener('click', function()
{
    var passwordInputed = document.getElementById('passwordInput').value;
    if (passwordInputed === 'glorytothebluegarianempire')
        {
            observerGlobal.disconnect();
      //      document.getElementById('DOM').removeEventListener("contextmenu", );
            
            alert('Correct password, now initiating second factor authentication...');

            document.getElementById('passwordInput').value = '';

            document.getElementById('secondFactorAuth').style.display = 'block';
            document.getElementById('secondFactorAuth').scrollIntoView();

            setTimeout(function(){
                observerGlobal.disconnect();
                document.getElementById('meme').style.cursor = 'pointer';

                document.getElementById('meme').addEventListener('click', function()
                {
                    document.getElementById('secondFactorAuth').style.display = 'none';
                    document.getElementById('login').style.display = 'none';
                    document.getElementById('entryImg').style.display = 'none';
                    document.getElementById('files').style.display = 'block';

                    // Context menu enable custom on desktop/laptop and disable custom on phone

                    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                    {

                      }else{
                        window.addEventListener("contextmenu",function(event)
                        {
                            event.preventDefault();
                            var contextElement = document.getElementById("context-menu");
                            contextElement.style.top = event.offsetY + "px";
                            contextElement.style.left = event.offsetX + "px";
                            contextElement.classList.add("active");
                        });
                      } 

                    window.addEventListener("click",function(){
                        document.getElementById("context-menu").classList.remove("active");
                    });
                })
            }, 1500);
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

// Observe DOM and prevent changes to attributes and tags using mutation observer

let observerGlobal;
let targetNodeGlobal;
let configGlobal;

function overWriteDOM() 
{
    document.write('<h1 style="color:red;text-align:center;font-weight:bold;font-size:70px;display:block;background-color:yellow;">INVALID OPERATION! YOU ARE NOT ALLOWED TO MODIFY THE DOM!</h1>');
}

setTimeout(function()
{
const targetNode = document.getElementById('DOM');
const config = { attributes: true, childList: true, subtree: true };

const callback = function(mutationsList, observer)
    {
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') 
        {
            overWriteDOM();
        }   else if (mutation.type === 'attributes')
            {
                overWriteDOM();
            }   else if (mutation.type === 'subtree')
                {
                    overWriteDOM();
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

document.getElementById('backTopBtn').addEventListener('click', function()
{
    window.scrollTo(0,0)
});