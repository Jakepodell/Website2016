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

    init: function (site) {
        this.init_image_blur();
        setTimeout(function(){site.init_text_entry()},1000);
    },

    init_image_blur: function () {
        //this.$header_image.addClass("blur");
        //this.$header_image.css("width" , "110%");

        var std =0;
        blur();
        function blur(){
            std+=.2;
            document.getElementById("blurE").setAttribute("stdDeviation", ""+std);
            if(std<8)setTimeout(blur,20);

        }

    },

    init_text_entry: function () {
        this.$header_text.css("opacity","1");
        this.$header_text.css("transform" , "translateY(90%)");
    }
}

$(document).ready(function()
{
    Site.header.init(Site.header);

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

