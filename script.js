$(document).ready(function() {

    //dölj alla sidor-funktion
    function hidePageSections() { 
        $("#Hem-Page").hide();
        $("#Tjänster-Page").hide();
        $("#Om-Page").hide();
        $("#Kontakt-Page").hide();
    }

    //döljer sidor och visar startsidan
    hidePageSections();
    $("#Hem-Page").show(); 
    $("#Hem-Page").animate({opacity: '1'}, 1000); 

    
    /*    <~~~ Navigering start ~~~~   */

        //funktion som anropas när man klickar på olika navigeringslänkar, döljer alla sidor, uppdaterar vilken sida som är aktiv just nu,
        //visar och uppdaterar Page-Title i mobilvyn visar och döljer navbar i mobilvyn
        function loadPage(clickedId){ 
            hidePageSections(); 
            $('#' + clickedId + '-Page').show();
            $('.menuBtn').removeClass('activePage');
            $('#'+clickedId).addClass('activePage');

            $('#navBar-pageTitle').html(clickedId);
            classToggle();
        }

        //klick på Hem
        $('#Hem').click(function (event) {
            event.preventDefault();
            loadPage('Hem');
            // $("#Hem").css({"opacity": "0"});
            // $("#Hem").animate({opacity: '1'}, 1500);
        });

        //funktion som används när vi klickar på loggan i mobile eller desktop läge. 
        function loadLogoHemPage() {
            hidePageSections(); 
            $('#Hem-Page').show();
            $('.menuBtn').removeClass('activePage');
            $('#Hem').addClass('activePage');

            $('#navBar-pageTitle').html('Hem');
            $('nav').removeClass('navBar-show');
            // $("#Hem").css({"opacity": "0"});
            // $("#Hem").animate({opacity: '1'}, 1500);
        }

        //klick på logga
        $('#header-logo').click(function (event) {
            event.preventDefault();
            loadLogoHemPage();
        });

        //klick på logga mobilversion
        $('#header-logo-mobile').click(function (event) {
            event.preventDefault();
            loadLogoHemPage();
        });

        //klick på tjänster
        $('#Tjänster').click(function (event) {
            event.preventDefault();
            loadPage('Tjänster');
        });

        //klick på om
        $('#Om').click(function (event) {
            event.preventDefault();
            loadPage('Om');

            //laddar in från jsonfil
            // $.getJSON(
            //     'res/about-data.json',
            //     function (data) {
            //         displayAbout(data.person);
            //     }
            // );
        });

        //funktion som anropas när man klickar på Contact
        $('#Kontakt').click(function (event) {
            event.preventDefault();
            loadPage('Kontakt');
            //tömma formulär
            $('#contactSubmitMessage').text("");
        });

        //lägger till/tar bort navBar-show, dvs. döljer eller visar navigerings-menyn
        // function classToggle() {
        //     const navs = document.querySelectorAll('nav');
        //     navs.forEach(nav => nav.classList.toggle('navBar-show'));
        // }
        
        // //klickar på hamburgermenu-knappen i mobil-vy, så anropas funktionen ovanför som visar/döljer navigeringen
        // document.querySelector('#navButton-toggle').addEventListener('click', classToggle);

    /*    ~~~~ Navigering end ~~~>   */


    /*    <~~~ Hem start ~~~~   */

        //tjänster-knappen klick
        // $('#tjänstknapp').click(function (event) {
        //     event.preventDefault();
        //     loadPage('Tjänster');
        // });

        $('#divknapptjänst').click(function (event) {
            event.preventDefault();
            loadPage('Tjänster');
        });
        $('#divknappom').click(function (event) {
            event.preventDefault();
            loadPage('Om');
        });
        $('#divknappkontakt').click(function (event) {
            event.preventDefault();
            loadPage('Kontakt');
        });

        //kontaktknapp klick
        // $('#kontaktknapp').click(function (event) {
        //     event.preventDefault();
        //     loadPage('Kontakt');

        //     //ladda json
        //     // $.getJSON(
        //     //     'res/about-data.json',
        //     //     function (data) {
        //     //         displayAbout(data.person);
        //     //     }
        //     // );
        // });
        
    /*    ~~~~ Hem end ~~~>   */

    
});