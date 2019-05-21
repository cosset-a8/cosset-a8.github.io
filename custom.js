// CUSTOM THEME //
function getid(a) {
    return document.getElementById(a);
}

document.body.style.display = "none";
window.onload = function() {
  if (window.location.href == "https://cpanel.hosting-ssl.ml/panel/indexpl.php" || window.location.href.includes("https://cpanel.hosting-ssl.ml/panel/indexpl.php?id=")) {
    if (getid("masterAppContainer")) {document.body.appendChild(getid("masterAppContainer"));}
    if (getid("imgLogo")) {getid("imgLogo").src = "https://cdn.hosting-ssl.ml/image/logo.png";}
    if (getid("btnUserPref")) {getid("btnUserPref").remove();}
    if (getid("sidebar")) {getid("sidebar").remove();}
    if (getid("imgPoweredByCpanel")) {getid("imgPoweredByCpanel").remove();}
    if (getid("boxes")) {getid("boxes").remove();}
    if (getid("item_two_factor_authentication")) {getid("item_two_factor_authentication").innerText = "Shop";}
    if (getid("masterAppContainer")) {getid("masterAppContainer").appendChild(getid("jump-search"))};
    if (getid("jump-search")) {getid("jump-search").remove()}
    // FONT //
    document.body.innerHTML += '<style>@font-face {font-family: OpenRegular;src: url(https://cdn.hosting-ssl.ml/font/OpenSans-Regular.ttf);}@font-face {font-family: OpenSemibold;src: url(https://cdn.hosting-ssl.ml/font/OpenSans-Semibold.ttf);}@font-face {font-family: OpenBold;src: url(https://cdn.hosting-ssl.ml/font/OpenSans-Bold.ttf);}@font-face {font-family: OpenItalic;src: url(https://cdn.hosting-ssl.ml/font/OpenSans-Italic.ttf);}</style>';

    // STYLES //
    document.body.innerHTML += '<style>.navbar-brand-logo {padding: 8px;max-height: none;width: 48px;height: 48px;margin-left: 48px;}</style>';
    document.body.innerHTML += '<style>#masterAppContainer {z-index: 0;position: fixed;top: 0px;left: 0px;right: 0px;height: auto;}</style>';
    document.body.innerHTML += '<style>.navbar-cpanel {background-color: #333333;border-bottom: 2px solid #1b1b1b;box-shadow: none;position: relative;height: auto;z-index: 0;}</style>';
    document.body.innerHTML += '<style>header .navbar-header .navbar-brand, header .navbar-header .navbar-brand:hover {padding: 0px;width: auto;height: auto;}</style>';
    document.body.innerHTML += '<style>.hidden-inline-xs {display: inline;font-family: OpenSemibold;font-size: 13px;padding-left: 16px; text-transform: none;}</style>';
    document.body.innerHTML += '<style>#cpanel_body {max-width: none;background-color: #31708f;}</style>';
    document.body.innerHTML += '<style>#main {padding: 0px; width: 70%;}</style>';
    document.body.innerHTML += '<style>#wrap {padding: 0px;position: relative;width: 100%;margin: 0px;}</style>';
    document.body.innerHTML += '<style>#content {padding: 0px;padding-left: 10%;padding-right: 10%;}</style>';
    document.body.innerHTML += '<style>.row {margin-left: -15px;margin-right: -15px;position: relative;}</style>';
    document.body.innerHTML += '<style>#stats {float:right;padding: 0px;margin: 0px;}</style>';
    document.body.innerHTML += '<style>.widget-heading {border: 0px;background-color: #316f8f;color: #fff;text-transform: none;font-family: OpenBold;font-size: 14px;border-radius: 0px;}</style>';
    document.body.innerHTML += '<style>.icon-menu-section {margin-bottom: 5px;box-shadow: none;}</style>';
    document.body.innerHTML += '<style>.panel-widget {border-radius: 0px;box-shadow: none;height: auto;border: 0;margin-bottom: 15px;display: table;width: 100%;max-width: 100%;background-color: transparent;}</style>';
    document.body.innerHTML += '<style>#jump-search {margin-bottom: 0px;position: fixed;top: 10px;right: 10%;z-index: 1;}</style>';
    document.body.innerHTML += '<style>.form-control {border: 2px solid #484848;background-color: #1d1d1d;color: #FFF;font-family: OpenBold;font-size: 13px;height: 32px;border-radius: 1px;}.form-control:focus {outline: 0;-webkit-box-shadow: none;box-shadow: none;border-color: #484848;}</style>';
    document.body.innerHTML += '<style>.icon-container-body {padding-left: 15px;padding-top: 15px;clear: both;margin-left: 0;margin-right: 0;overflow: hidden;width: 100%;background-color: #1d4458;border-radius: 2px;border: 2px solid #0b1b23;}</style>';
    document.body.innerHTML += '<style>.item {float: left;height: 60px;padding: 0;text-align: left;background-color: rgba(0, 0, 0, 0.68);margin: 4px;border-radius: 1px;padding: 16px;border: 2px solid #000;height: auto;}</style>';
    document.body.innerHTML += '<style>.itemTextWrapper {padding: 10px 0 10px 5px;display: inline-block;vertical-align: middle;width: 200px;color: #FFF;font-family: OpenBold;padding-left: 16px;}</style>';
    document.body.innerHTML += '<style>table#stats {background-color: #1e4458;border: 2px solid #0b1b24;border-radius: 2px;color: #FFF;font-family: OpenSemiBold;font-size: 14px;} .table>tbody>tr>td {border:0px;}.btn-info {color: #fff;background-color: #1D1D1D;border: 2px solid #000;font-family: OpenBold;font-size: 13px;height: auto;width: auto;}</style>';
    getid("content").style.paddingLeft = "10%";
    getid("content").style.paddingRight = "10%";
  }
    document.body.style.display = "block";
}
