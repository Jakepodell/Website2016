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

            $(".work_item").each(function(){
                var $image = $(this).find(".work_image");
                var $hr = $(this).find(".work_item_divider");
                var $description = $(this).find(".work_description");
                var image_scroll_top = $image.position().top;
                var vertical_scroll_position = $(document).scrollTop()+(window.innerHeight*0.5);
                var offset_difference = vertical_scroll_position - (image_scroll_top - parseInt(Site.work.$work.css("padding-top")));
                if (offset_difference >= 0 && offset_difference <= 100) {
                    $image.css("opacity" , ""+offset_difference*0.01);
                    $image.css("transform" , "translateX("+((offset_difference/2-25)*($image.hasClass("slide_from_left") ? 1 : -1))+"px)"); //25 =initial transform
                }
                else if(offset_difference<0){
                    $image.css("opacity" , "0");
                    $image.css("transform" , "translateX("+($image.hasClass("slide_from_left") ? -2 : 2)+"5px)");
                    $hr.css("opacity","0");
                }
                else if(offset_difference>100){
                    $image.css("opacity" , "1");
                    $image.css("transform" , "translateX("+($image.hasClass("slide_from_left") ? 2 : -2)+"5px)");
                    $hr.css("opacity","0.5");
                }
                $description.css("opacity","" + offset_difference>100 ? 1 : 0);
                $description.css("transform","translateY(" + (offset_difference>100 ? 0 : 15) + "px)");
            })

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

