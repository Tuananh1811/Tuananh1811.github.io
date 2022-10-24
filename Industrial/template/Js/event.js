const smallImgs = document.querySelectorAll('.small-img');
const bigImg = document.getElementById('big-img');
// @ts-ignore
const length = smallImgs.length;
console.log(smallImgs);
for (let i = 0; i < length; i++) {
    const smallImg = smallImgs[i];
    smallImg.addEventListener("click", function(e) {
        e.preventDefault();

        bigImg.src = smallImg.src;
    })

}
$(document).ready(function() {

        $("#nav-link-dropdown").click(function() {
            $(".menu-cap-2").slideDown("slow");
        })

        $(".menu-cap-2>li").click(function() {
            if ($(this).hasClass("active")) {
                $(this).children(".menu-cap-3").slideUp();
                $(".menu-cap-3").slideUp();
            } else {
                $('.menu-cap-3').slideUp();
                $(this).children(".menu-cap-3").slideDown("slow");

            }
        })

    })
    // var button_show_menu = document.getElementsByClassName('nav-menu-item-dropdown-submenu');
    // var div_sub_menu = document.getElementsByClassName('sub-menu');
    // for (let i = 0; i < button_show_menu.length; i++) {
    //     const btn = button_show_menu[i];
    //     btn.addEventListener('click', function(e) {
    //         e.preventDefault();

//         div_sub_menu[i].style.display = "block";
//     })
// }