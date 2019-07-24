$('.menu-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu-active');
    $('.content').toggleClass('content-active');
})

//end of right menu

$(document).ready(function(){
	$(".hamburger").click(function(){
		$(this).toggleClass("open");
	});
});

// modal 
var modal = document.querySelector('.modal');
var overflow = document.createElement('div');
function openWin() {
        overflow.className = "overflow";
        document.body.appendChild(overflow);
        var height = modal.offsetHeight;
        modal.style.marginTop = - height / 2 + "px";
        modal.style.top = "50%";
}

if (!Element.prototype.remove) {
        Element.prototype.remove = function remove() {
                if (this.parentNode) {
                        this.parentNode.removeChild(this);
                }
        };
}

overflow.onclick = function () {
        modal.style.top = "-100%";
        overflow.remove();
}