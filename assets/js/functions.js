
function showOverlay(){
    $("#overlay").css("display", "");
    $("#overlay").css("z-index", "1000");
    $("#sidebarToggle").css("display", "none");
}


function hideOverlay(){
    $("#overlay").css("display", "none");
    $("#overlay").css("z-index", "");
    $("#sidebarToggle").css("display", "");
}