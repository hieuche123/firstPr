var modolElement = document.querySelector('.modol')
var loginElement = document.querySelector('.Login')
var loginNode = document.querySelector('.login')
var registerNode = document.querySelector('.register')
var submitElement = document.querySelector('.form-submit')
var submitLoginElement = document.querySelector('.form-submit-login')
var closebtnElement = document.querySelector('.close-btn')
var closebtnLoginElement = document.querySelector('.close-btn-login')
var registerElement = document.querySelector('.Register')
var iconCloseNavigation = document.querySelector('.icon-close-navigation')
var modolNavigationElement = document.querySelector('.modol-navigation')
var logoBarElement = document.querySelector('.logo-bar')
var logoSearchElement = document.querySelector('.logo-search-fas')
var logoSearchInputElement = document.querySelector('.logo-search-input')


registerElement.onclick = function () {
        loginNode.style.display = 'none'
        registerNode.style.display = 'flex'
        registerNode.classList.add('open_modol')
}
loginElement.onclick = function () {
        loginNode.style.display = 'flex'
        registerNode.style.display = 'none'
        modolElement.classList.add('open_modol')
}
submitElement.onclick = function () {
        registerNode.style.display = 'none'
}
closebtnElement.onclick = function () {
        registerNode.style.display = 'none'
}
submitLoginElement.onclick = function () {
        loginNode.style.display = 'none'
}
closebtnLoginElement.onclick = function () {
        loginNode.style.display = 'none'

}
logoBarElement.onclick = function () {
        modolNavigationElement.classList.add('active')
}
iconCloseNavigation.onclick = function () {
        modolNavigationElement.classList.remove('active')
}
var search = true;
logoSearchElement.onclick = function () {
        if(search){
                logoSearchInputElement.classList.add('active')
                search = false;
        }
        else{
                logoSearchInputElement.classList.remove('active')
                search = true;
        }
               
}
// slider ---------------------------------
var count = 1;
setInterval(function () {
    document.getElementById('radio'+ count).checked = true;
    count++;
    if(count > 4) {
        count = 1;
    }
},3000)