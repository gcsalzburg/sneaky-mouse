$(function(){

    var old_bg_color;
    var hover_styles = {
        backgroundColor : "rgba(92,199,21,0.4)",
        cursor: "default",
    };

    // Main flag for editing items
    $("H1, H2, H3, H4, H5, H6, P").hover(
        function(){
            old_bg_color = $(this).css('background-color');
            $(this).css(hover_styles);
        },
        function(){
            $(this).css('background-color', old_bg_color);
        }
    ).mouseup(function(){
        // Set to editable and apply focus
        $(this).attr("contentEditable",true).focus();
    }).blur(function(){
        $(this).attr("contentEditable",false);        
    });
});