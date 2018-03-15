$(function(){

    $("#screenshot_btn").click(function(e){
        e.preventDefault();

        $(this).text("Creating screenshot...");

        chrome.tabs.captureVisibleTab(null, {
            format : "png",
            quality : 100
        },function(img) {
            $("#screenshot_btn").text("Copied!");
            var screenshotdata = img;
        });
    });
   
});