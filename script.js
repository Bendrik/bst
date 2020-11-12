$(document).ready(function() { //JavaScriptet nedan körs när HTML-sidan har laddat klart. 

    //funktion som döljer alla sidor
    function hidePageSections() { 
        $("#Startsida").hide();
        /* $("#Portfolio-Page").hide();
        $("#About-Page").hide();
        $("#Contact-Page").hide(); */
    }

    hidePageSections(); //vid första laddning av webbsidan, döljs alla sidor med funktionen ovan
    $("#Startsida").show(); //visar startsida vid första laddning
    $("#Startsida").animate({opacity: '1'}, 1500); //animera fram "Welcome" vid första laddning

    
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

        //funktion som anropas när man klickar på Hem
        $('#Hem').click(function (event) {
            event.preventDefault();
            loadPage('Hem');
            $("#Startsida").css({"opacity": "0"});
            $("#Startsida").animate({opacity: '1'}, 1500);
        });

        //funktion som används när vi klickar på loggan i mobile eller desktop läge. 
        function loadLogoHemPage() {
            hidePageSections(); 
            $('#Startsida').show();
            $('.menuBtn').removeClass('activePage');
            $('#Hem').addClass('activePage');

            $('#navBar-pageTitle').html('Hem');
            $('nav').removeClass('navBar-show');
            $("#Startsida").css({"opacity": "0"});
            $("#Startsida").animate({opacity: '1'}, 1500);
        }

        //funktion som anropas när man klickar på loggan, dock mera hårdkodad.
        $('#header-logo').click(function (event) {
            event.preventDefault();
            loadLogoHemPage();
        });

        //funktion som anropas när man klickar på loggan, dock mera hårdkodad.
        $('#header-logo-mobile').click(function (event) {
            event.preventDefault();
            loadLogoHemPage();
        });

        //funktion som anropas när man klickar på Portfolio
        $('#Portfolio').click(function (event) {
            event.preventDefault();
            loadPage('Portfolio');
        });

        //funktion som anropas när man klickar på About us
        $('#About').click(function (event) {
            event.preventDefault();
            loadPage('About');

            //laddar in utvecklarna
            $.getJSON(
                'res/about-data.json',
                function (data) {
                    displayAbout(data.person);
                }
            );
        });

        //funktion som anropas när man klickar på Contact
        $('#Contact').click(function (event) {
            event.preventDefault();
            loadPage('Contact');
            $('#contactSubmitMessage').text("");
        });

        //funktion som lägger till respektive tar bort navBar-show, dvs. döljer eller visar navigerings-menyn
        function classToggle() {
            const navs = document.querySelectorAll('nav');
            navs.forEach(nav => nav.classList.toggle('navBar-show'));
        }
        
        //När man klickar på hamburgermenu-knappen i mobil-vy, så anropas funktionen ovanför som visar/döljer navigeringen
        document.querySelector('#navButton-toggle').addEventListener('click', classToggle);

    /*    ~~~~ Navigering end ~~~>   */


    /*    <~~~ Startsida start ~~~~   */

        //funktion som visar Portfolio när man klickat på knappen på Startsidan
        /* $('#startProjects').click(function (event) {
            event.preventDefault();
            loadPage('Portfolio');
        });

        //funktion som visar About us när man klickat på knappen på Startsidan
        $('#startUs').click(function (event) {
            event.preventDefault();
            loadPage('About');

            //laddar in utvecklarna
            $.getJSON(
                'res/about-data.json',
                function (data) {
                    displayAbout(data.person);
                }
            );
        }); */
        
    /*    ~~~~ Startsida end ~~~>   */

    
});