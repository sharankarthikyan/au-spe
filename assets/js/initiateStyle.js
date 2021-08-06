if(screen.width < 420) {
    var cssFa = document.createElement("link");
    cssFa.href =
        "assets/css/mobile.css";
    cssFa.rel = "stylesheet";
    cssFa.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(cssFa);
}
else {
    var cssFa = document.createElement("link");
    cssFa.href =
        "assets/css/desktop.css";
    cssFa.rel = "stylesheet";
    cssFa.type = "text/css";
    document.getElementsByTagName("head")[0].appendChild(cssFa);
}