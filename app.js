document.addEventListener('DOMContentLoaded', ()=> {
    let platform = navigator.platform;
    let location = window.location;
    let userAgent = navigator.userAgent
    dupa.innerHTML = 'platform and loaction ' + platform + ' ' + userAgent + ' ' + location;
})