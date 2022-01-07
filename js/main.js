$(document).ready(function(){

    const mobileBtn = document.getElementById('mobile-cta');
    nav = document.querySelector('nav');
    mobileBtnExit = document.getElementById('mobile-exit');

    mobileBtn.addEventListener('click', () => {
        nav.classList.add('menu-btn');
    });

    mobileBtnExit.addEventListener('click', () => {
        nav.classList.remove('menu-btn');
    });

    //Contact Form in PHP
    $('form.ajax').on('submit',function(){

        statusTxt.style.color = "rgb(4, 4, 37)";
        statusTxt.style.display = "block";
        statusTxt.innerText = "Sending your message...";
        form.classList.add("disabled");

        var that = $(this),
            url = that.attr('action'),
            type = taht.attr('method'),
            data = {};

        that.find('[name]').each(function(index, value) {
            var that = $(this),
                name = that.attr('name'),
                value = that.val();
            
            data[name] = value;
        });

        $.ajax({
            url: url,
            type: type,
            data: data,

            success: function(response) {
                console.log(response);
            }
        });

        return false;
    });


    // const form = document.querySelector("form"),
    // statusTxt = form.querySelector(".button-area span");
    // form.onsubmit = (e)=>{
    //     e.preventDefault();
    //     statusTxt.style.color = "rgb(4, 4, 37)";
    //     statusTxt.style.display = "block";
    //     statusTxt.innerText = "Sending your message...";
    //     form.classList.add("disabled");

    //     let xhr = new XMLHttpRequest();
    //     xhr.open("POST", "message.php", true);
    //     xhr.onload = ()=>{
    //         if(xhr.readyState == 4 && xhr.status == 200){
    //         let response = xhr.response;
    //         if(response.indexOf("required") != -1 || response.indexOf("valid") != -1 || response.indexOf("failed") != -1){
    //             statusTxt.style.color = "red";
    //         }else{
    //             form.reset();
    //             setTimeout(()=>{
    //             statusTxt.style.display = "none";
    //             }, 3000);
    //         }
    //         statusTxt.innerText = response;
    //         form.classList.remove("disabled");
    //         }
    //     }
    //     let formData = new FormData(form);
    //     xhr.send(formData);
    // }
});