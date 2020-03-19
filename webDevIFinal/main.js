/* Home image modal */
var myImgHome = document.getElementById("myImgHome");
if(myImgHome !==null) {
    myImgHome.addEventListener('click', function()  {
        document.querySelector(".bg-modal").style.display = 'flex';
    })
}
/*document.getElementById("myImgHome").addEventListener('click', function()   {
    document.querySelector(".bg-modal").style.display = 'flex';
})*/ 

var close = document.querySelector('.close');
if(close!==null)    {
    document.querySelector('.close').addEventListener('click', function()   {
        document.querySelector('.bg-modal').style.display = 'none';
    })
}

var myImgBio = document.getElementById("myImgBio");
if(myImgBio!==null)    {
    myImgBio.addEventListener('click', function()    {
        document.querySelector(".bg-modal").style.display = 'flex';
    })
}

var stamp1 = document.getElementById("stamp1square");
if(stamp1!==null)   {
    stamp1.addEventListener('click', function() {
        document.querySelector(".bg-modal-stamp1").style.display = 'flex';
    })
}
var closeStamp1 = document.querySelector('.closeStamp1');
if(closeStamp1!==null)    {
    document.querySelector('.closeStamp1').addEventListener('click', function()   {
        document.querySelector('.bg-modal-stamp1').style.display = 'none';
    })
}

var stamp2 = document.getElementById("stamp2square");
if(stamp2!==null)   {
    stamp2.addEventListener('click', function() {
        document.querySelector(".bg-modal-stamp2").style.display = 'flex';
    })
}
var closeStamp2 = document.querySelector('.closeStamp2');
if(closeStamp2!==null)    {
    document.querySelector('.closeStamp2').addEventListener('click', function()   {
        document.querySelector('.bg-modal-stamp2').style.display = 'none';
    })
}

var stamp3 = document.getElementById("stamp3square");
if(stamp3!==null)   {
    stamp3.addEventListener('click', function() {
        document.querySelector(".bg-modal-stamp3").style.display = 'flex';
    })
}
var closeStamp3 = document.querySelector('.closeStamp3');
if(closeStamp3!==null)    {
    document.querySelector('.closeStamp3').addEventListener('click', function()   {
        document.querySelector('.bg-modal-stamp3').style.display = 'none';
    })
}

var stamp5 = document.getElementById("stamp5square");
if(stamp5!==null)   {
    stamp5.addEventListener('click', function() {
        document.querySelector(".bg-modal-stamp5").style.display = 'flex';
    })
}
var closeStamp5 = document.querySelector('.closeStamp5');
if(closeStamp5!==null)    {
    document.querySelector('.closeStamp5').addEventListener('click', function()   {
        document.querySelector('.bg-modal-stamp5').style.display = 'none';
    })
}

var stamp6 = document.getElementById("stamp6square");
if(stamp6!==null)   {
    stamp6.addEventListener('click', function() {
        document.querySelector(".bg-modal-stamp6").style.display = 'flex';
    })
}
var closeStamp6 = document.querySelector('.closeStamp6');
if(closeStamp6!==null)    {
    document.querySelector('.closeStamp6').addEventListener('click', function()   {
        document.querySelector('.bg-modal-stamp6').style.display = 'none';
    })
}

var stamp7 = document.getElementById("stamp7square");
if(stamp7!==null)   {
    stamp7.addEventListener('click', function() {
        document.querySelector(".bg-modal-stamp7").style.display = 'flex';
    })
}
var closeStamp7 = document.querySelector('.closeStamp7');
if(closeStamp7!==null)    {
    document.querySelector('.closeStamp7').addEventListener('click', function()   {
        document.querySelector('.bg-modal-stamp7').style.display = 'none';
    })
}


var fine1 = document.getElementById("fine1");
if(fine1!==null)   {
    fine1.addEventListener('click', function() {
        document.querySelector(".bg-modal-fine1").style.display = 'flex';
    })
}
var closeFine1 = document.querySelector('.closeFine1');
if(closeFine1!==null)    {
    document.querySelector('.closeFine1').addEventListener('click', function()   {
        document.querySelector('.bg-modal-fine1').style.display = 'none';
    })
}

var fine2 = document.getElementById("fine2");
if(fine2!==null)   {
    fine2.addEventListener('click', function() {
        document.querySelector(".bg-modal-fine2").style.display = 'flex';
    })
}
var closeFine2 = document.querySelector('.closeFine2');
if(closeFine2!==null)    {
    document.querySelector('.closeFine2').addEventListener('click', function()   {
        document.querySelector('.bg-modal-fine2').style.display = 'none';
    })
}

var fine3 = document.getElementById("fine3");
if(fine3!==null)   {
    fine3.addEventListener('click', function() {
        document.querySelector(".bg-modal-fine3").style.display = 'flex';
    })
}
var closeFine3 = document.querySelector('.closeFine3');
if(closeFine3!==null)    {
    document.querySelector('.closeFine3').addEventListener('click', function()   {
        document.querySelector('.bg-modal-fine3').style.display = 'none';
    })
}

var fine4 = document.getElementById("fine4");
if(fine4!==null)   {
    fine4.addEventListener('click', function() {
        document.querySelector(".bg-modal-fine4").style.display = 'flex';
    })
}
var closeFine4 = document.querySelector('.closeFine4');
if(closeFine4!==null)    {
    document.querySelector('.closeFine4').addEventListener('click', function()   {
        document.querySelector('.bg-modal-fine4').style.display = 'none';
    })
}

var fine5 = document.getElementById("fine5");
if(fine5!==null)   {
    fine5.addEventListener('click', function() {
        document.querySelector(".bg-modal-fine5").style.display = 'flex';
    })
}
var closeFine5 = document.querySelector('.closeFine5');
if(closeFine5!==null)    {
    document.querySelector('.closeFine5').addEventListener('click', function()   {
        document.querySelector('.bg-modal-fine5').style.display = 'none';
    })
}

var fine6 = document.getElementById("fine6");
if(fine6!==null)   {
    fine6.addEventListener('click', function() {
        document.querySelector(".bg-modal-fine6").style.display = 'flex';
    })
}
var closeFine6 = document.querySelector('.closeFine6');
if(closeFine6!==null)    {
    document.querySelector('.closeFine6').addEventListener('click', function()   {
        document.querySelector('.bg-modal-fine6').style.display = 'none';
    })
}




/* Title screen logo */
var screenLogo = document.getElementById("titleScreenLogo");
if(screenLogo!==null)   {
    screenLogo.onclick = function ()    {
        location.href = 'home.html';
    }
    screenLogo.onmouseover = function() {
        this.style.cursor='pointer';
    } 
}


var fullName = document.getElementById('fullname');
var message = document.getElementById('message');
var email = document.getElementById('email');
var form = document.getElementById('contactForm');
var checkBox = document.getElementById('consent');
var errors = document.getElementById('errors');

if(fullName!==null) {
    fullName.addEventListener('focus', function(){
        if(this.value == '')    {
            this.value = "full name";
        }
    });
}

if(message!==null)  {
    message.addEventListener('focus', function(){
        if(fullName.value != '')    {
            this.value = "Hello " + fullName.value + "! How can I help you today?";   
        } 
            else  {
                this.value = "Please tell me who you are first. Enter your first name in the name field.";
        }

    });
}

if(form!==null) {
    form.addEventListener('submit', function(e) {
        var stopSubmit = false;

        if (!checkBox.checked)   {
            errors.innerHTML = "<p>You must consent to receiving emails!</p>"
            e.preventDefault();
            stopSubmit = true;
        }

        if (fullName.value == '')   {
            errors.innerHTML += "<p>You must enter your name!</p>";
            stopSubmit = true;

        }

        if (stopSubmit) {
            e.preventDefault();
        }
    })
}
    
/*email.addEventListener('focus', function(){});

fullName.addEventListener('blur', function(){});

message.addEventListener('blur', function(){});

email.addEventListener('blur', function(){}); */


