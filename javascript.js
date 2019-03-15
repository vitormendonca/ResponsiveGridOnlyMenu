var navwrapper = document.getElementById('navwrapper');
var containerheader = document.getElementById('containerheader');
var wrappermenuicon = document.getElementById('wrappermenuicon');
function icondisplay() {
    if (navwrapper.style.display == "grid") {
        navwrapper.style.display = "none";
        containerheader.style.gridTemplateRows = "1fr";
    }
    else {
        navwrapper.style.display = "grid";
        containerheader.style.gridTemplateRows = "130px auto"
    }


}
window.onresize = function () {
    if (window.innerWidth > 480) {
        navwrapper.style.display = 'grid';
        containerheader.style.gridTemplateRows = "1fr";
    }
    else {
        navwrapper.style.display = "none";
        containerheader.style.gridTemplateRows = "1fr";
    }

};
