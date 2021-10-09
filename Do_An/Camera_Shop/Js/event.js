// @ts-nocheck
// const listProduct = document.querySelector('.list_product');
// const imgs = listProduct.querySelectorAll('img');

// for (let i = 0; i < imgs.length; i++) {
//     const img = imgs[i];
//     console.log(img);
//     img.addEventListener('mouseover', function(e) {
//         e.preventDefault();

//         img.setAttribute('src', './Images/img-3.jpg');

//     })
//     img.addEventListener('mouseout', function(e) {
//         e.preventDefault();

//         img.setAttribute('src', './Images/img-8.jpg');
//     })

// }
// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// });
// $(document).ready(function() {
//     $('[data-toggle="tooltip"]').tooltip();
// })
$('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 4
});

var filtered = false;

$('.js-filter').on('click', function() {
    if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});