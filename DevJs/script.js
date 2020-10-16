// Function to change buttons colors onclick
$(document).ready(function(){
    $("#pryChange").click(function(){
    $("#pryCh").removeClass("bg-primary").addClass("bg-success");
    });
});

$(document).ready(function(){
    $("#dangChange").click(function(){
    $("#dangCh").removeClass("bg-danger").addClass("bg-light");
    });
});

$(document).ready(function(){
    $("#warnChange").click(function(){
    $("#warnCh").removeClass("bg-warning").addClass("bg-secondary");
    });
});

$(document).ready(function(){
    $("#ligChange").click(function(){
    $("#pryCh").removeClass("bg-primary").addClass("bg-danger"),
    $("#dangCh").removeClass("bg-danger").addClass("bg-dark"),
    $("#warnCh").removeClass("bg-warning").addClass("bg-info");
    });

});


// Function to hide colors onclick
$(document).ready(function() {
     $("#hidChange").click(function(){
         $("#pryCh").hide();
     })      
});

$(document).ready(function() {
    $("#gerChange").click(function(){
        $("#dangCh").hide();
    })      
});

$(document).ready(function() {
    $("#ingChange").click(function(){
        $("#warnCh").hide();
    })      
});

$(document).ready(function() {
    $("#ghChange").click(function(){
        $("#pryCh").hide();
        $("#dangCh").hide();
        $("#warnCh").hide();
    })      
});

// funtion to reset all the buttonc colors
$(document).ready(function() {
    $("#reset").click(function(){
        // $("#pryCh").addClass("bg-primary");
        // $("#dangCh").addClass("bg-danger");
        // $("#warnCh").addClass("bg-warning");

    $("#pryCh").removeClass("bg-danger").addClass("bg-primary"),
    $("#dangCh").removeClass("bg-dark").addClass("bg-danger"),
    $("#warnCh").removeClass("bg-info").addClass("bg-warning");

    $("#pryCh").removeClass("bg-success").addClass("bg-primary"),
    $("#dangCh").removeClass("bg-light").addClass("bg-danger"),
    $("#warnCh").removeClass("bg-warning").addClass("bg-warning");
    })      
});


// Function to show all buttons onclick
$(document).ready(function() {
    $("#show").click(function(){
        $("#pryCh").show();
        $("#dangCh").show();
        $("#warnCh").show();
    })      
});
