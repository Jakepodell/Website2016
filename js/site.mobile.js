/*  ----------------------------------------------

 jakepodell.com Mobile JS File
 AUTHOR: Jake Podell| jhp246@cornell.edu
 FILE CREATED: 1/6/16
 REQUIRES: JQUERY 1.7+

 ----------------------------------------------  */

var Site = Site || {};

Site.mobile = {

    $nav_button: $("#mobile_nav_button"),
    $nav_bar   : $("#mobile_nav_bar"),


    /**
     * initialize the header of the site, including image and text
     */
    init: function () {

        $(document).click(function(e){
            if(Site.mobile.$nav_button.is(e.target)){
                Site.mobile.$nav_bar.removeClass("hidden");
                Site.mobile.$nav_bar.addClass("visible");
            }
            else if(!Site.mobile.$nav_bar.is(e.target)
            && Site.mobile.$nav_bar.has(e.target).length === 0
            && Site.mobile.$nav_bar.hasClass("visible")){
                Site.mobile.$nav_bar.removeClass("visible");
                Site.mobile.$nav_bar.addClass("hidden");
            }
        })
    },


}

$(document).ready(function()
{
    Site.mobile.init();

});

window.trace = function(arg){
    if(this.console){
        console.log(arg);
    }
};

