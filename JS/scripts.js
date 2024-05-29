$("#menu-btn").click(clickHandler)

let countHandler = 1;
function clickHandler() {
    if (countHandler % 2 === 0) {
        offclickmenu()
        offmenublurr()
        countHandler++;
    } else {
        onclickmenu()
        onmenublurr()
        countHandler++;
    }
}
function onclickmenu() {
    showMenuOptions()
    $("#mbtn-hr2").animate({
        width: '60%'
    }, 150);
    //---------------//
    $("#mbtn-hr4").animate({
        width: '20%'
    }, 200);
    $("#menu-board").animate({
        transition: "fadein",
        marginLeft: "0vw"
    }, 500, function () {
        $(".menu-btn-hr").css(
            {
                "border": "1px solid #CEBCB2",
                "text-align": "center",
            }
        );
        menuOptionsLeft()
    });



}
function onmenublurr() {
    $("#main-content").css({ "transition": "1s" })
    $("#main-content").css({ "filter": "blur(5px)" })
    $("#header-socialmedia").css({ "transition": "1s" })
    $("#header-socialmedia").css({ "filter": "blur(5px)" })
    $("#appendMenu").css({ "z-index": "5" })
}
function offclickmenu() {
    $("#mbtn-hr2").animate({
        width: '2.5rem'
    }, 200);
    //---------------//
    $("#mbtn-hr4").animate({
        width: '2.5rem'
    }, 150);
    $("#menu-board").animate({
        transition: "fadein",
        marginLeft: "150vw"
    }, 500);
    $(".menu-btn-hr").css(
        {
            "border": "1px solid #3D3D3D",
            "text-align": "center",
            "width": "2.5rem"
        }
    );
}
function offmenublurr() {
    $("#main-content").css({ "transition": "0.8s" })
    $("#main-content").css({ "filter": "blur(0px)" })

    $("#header-socialmedia").css({ "transition": "0.8s" })
    $("#header-socialmedia").css({ "filter": "blur(0px)" })
    $("#appendMenu").css({ "z-index": "-1" })
}

function showMenuOptions() {
    $(".board-links").css({ "opacity": "0" })

}

function menuOptionsLeft() {
    $("#board-link-a1").animate({
        opacity: "1",
        marginLeft: "3vw"
    }, 200, function () {
        $("#board-link-a2").animate({
            opacity: "1",
            marginLeft: "3vw"
        }, 200, function () {
            $("#board-link-a3").animate({
                opacity: "1",
                marginLeft: "3vw"
            }, 200, function () {
                $("#board-link-a4").animate({
                    opacity: "1",
                    marginLeft: "3vw"
                }, 200)
            })
        })
    })

}

/* Animacion cambio de pagina */
document.getElementById('board-link-a1').addEventListener('click', function(event) {
    // Prevenir el comportamiento predeterminado del enlace
    event.preventDefault();
    slideLoadScreen();

    // Esperar 3 segundos antes de redirigir
    setTimeout(function() {
        window.location.href = 'aboutMe.html';
    }, 3000); // 3000 milisegundos = 3 segundos
});

function slideLoadScreen(){
    $("#loadScreen").css({"z-index":"10"})
    $("#loadScreen").animate({
        margin: "0vw"
    },700)
}