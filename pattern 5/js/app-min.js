$(function(){$(".menu-button").on("click",function(n){n.preventDefault(),$("body").toggleClass("menu-opened")}),$(".offcanvas li.has-submenu a").on("click",function(n){var e=$(this);n.preventDefault(),e.parent().toggleClass("opened"),e.siblings("ul").slideToggle()})});