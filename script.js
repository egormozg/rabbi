$(function () {
    $(".deeplink").click(function (e) {
    e.preventDefault();
//       Detect device
    let devType = getMobileOperatingSystem();

    let android_apk_url = $(this).attr('android-apk');
    let apk_url = $(this).attr('apk');
    let siteUrl = $(this).attr('href');

//       alert(url)
    switch (devType) {
        case 'android':
        $('#app-frame').attr('src', android_apk_url);        
        $('#app-frame').ready(function() {
            return;
        });
        setTimeout(function () {
            window.location = siteUrl
        }, 700);
        break;
        default:
        $('#app-frame').attr('src', apk_url);
        $('#app-frame').ready(function() {
            return;
        });
        setTimeout(function () {
            window.location = siteUrl
        }, 700);
        break;
    }

       window.location = url;
       setTimeout(function () {
         window.location = url;
       }, 500);
    });

});
let getMobileOperatingSystem = function () {
    let userAgent = navigator.userAgent || navigator.vendor || window.opera;

//     Windows Phone must come first because its UA also contains "Android"
    if (/android/i.test(userAgent)) {
    return "android";
    }

//     iOS detection from: https://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "ios";
    }

    return "desktop";
} 
