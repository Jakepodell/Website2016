/*  ----------------------------------------------

 jakepodell.com Header JS File
 AUTHOR: Jake Podell| jhp246@cornell.edu
 FILE CREATED: 8/3/15
 REQUIRES: JQUERY 1.7+

 ----------------------------------------------  */

var Site = Site || {};

Site.header = {

    $header_image: $("#header_img"),
    $header_text: $("#header_text"),
    $header_svg: $("#header_svg"),
    $header_container: $("#header_container"),


    /**
     * initialize the header of the site, including image and text
     */
    init: function () {
        this.init_image_size();
        //this.init_image_blur();
        //setTimeout(function(){
            Site.header.init_text_entry();
        //},1000); //text fades in after image blur has occurred

        window.onresize = function() {
            Site.header.init_image_size(); //re-initialize the image size on window size changes
        };
    },

    /**
     * The width of the image depends on the height, so adjust the height based on
     * the width of the screen
     * REQUIRES: svg has width = screenWidth
     *
     */
    init_image_size: function () {
        var image_aspect_ratio = 1080/1920;
        var blur_offset = 25; //keeps the edges from blurring
        this.$header_svg.height((this.$header_svg.width()*image_aspect_ratio)+blur_offset);
        /* If the image is smaller than the screen, contain the header to the height of the image
           If the image is taller than the screen, contain the header to the height of the screen */
        this.$header_container.height(Math.min(this.$header_svg.height(),window.innerHeight *.95));
        this.$header_image.css("opacity","1"); //image invisible before initial sizing.

    },

    /**
     * Blur the header image by changing the stdDeviation of the svg filter
     */
    init_image_blur: function () {
        var std =0; //blur intensity
        var std_inc_rate = 10;
        var std_incrementent = 0.2;
        var final_std = 8;
        blur();
        function blur(){
            std+=std_incrementent;
            document.getElementById("blurE").setAttribute("stdDeviation", ""+std);
            if(std<final_std)setTimeout(blur,std_inc_rate);

        }

    },

    /**
     * Fade the text in and ease into visible
     */
    init_text_entry: function () {
        this.$header_text.removeClass("header_text_low");
        this.$header_text.addClass("header_text_raised");
    }
}

$(document).ready(function()
{
    Site.header.init();

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

