// @ts-nocheck
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