(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       
        //    click-action
        $(".header__ber").on("click", function () {
            $(".ofcanva").addClass("active");
            return false;
        });

        $(".close").on("click", function () {
            $(".ofcanva").removeClass("active");
        });




    });


    jQuery(window).load(function(){


    });


}(jQuery));	