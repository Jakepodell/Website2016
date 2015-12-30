/*  ----------------------------------------------

 jakepodell.com WORK JS File
 AUTHOR: Jake Podell| jhp246@cornell.edu
 FILE CREATED: 12/29/15
 REQUIRES: JQUERY 1.7+

 ----------------------------------------------  */

var Site = Site || {};

Site.work = {

    $iphone: $("#iphone"), // init these in an array and do them all simultaneously
    $iphonr_text: $("#iphone_text"),
    $work: $("#work"),


    /**
     * initialize the work section of the site, including image and text
     */
    init: function () {
        this.init_iphone_scroll();
    },

    /**
     * initialize the onScroll function for the work preview animations
     */
    init_iphone_scroll: function () {
        window.onscroll = function() {
            var iphone_scroll_top = Site.work.$iphone.position().top;
            var vertical_scroll_position = $(document).scrollTop()+(window.innerHeight*0.5);
            var offset_difference = vertical_scroll_position - (iphone_scroll_top - parseInt(Site.work.$work.css("padding-top")));
            if (offset_difference >= 0 && offset_difference <= 100) {
                Site.work.$iphone.css("opacity" , ""+offset_difference*0.01);
                Site.work.$iphone.css("transform" , "translateX("+(offset_difference/2-25)+"px)"); //25 =initial transform
            }
            else if(offset_difference<0){
                Site.work.$iphone.css("opacity" , "0");
                Site.work.$iphone.css("transform" , "translateX(-25px");
            }
            else if(offset_difference>100){
                Site.work.$iphone.css("opacity" , "1");
                Site.work.$iphone.css("transform" , "translateX(25px)");
            }
            Site.work.$iphonr_text.css("opacity","" + offset_difference>100 ? 1 : 0);
            Site.work.$iphonr_text.css("transform","translateY(" + (offset_difference>100 ? 65 : 75) + "px)");
        }
    },
}

$(document).ready(function()
{
    Site.work.init();

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

