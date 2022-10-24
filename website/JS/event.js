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
// var exampleModal = document.getElementById('exampleModal')
// exampleModal.addEventListener('show.bs.modal', function(event) {
//     // Button that triggered the modal
//     var button = event.relatedTarget
//         // Extract info from data-bs-* attributes
//     var recipient = button.getAttribute('data-bs-whatever')
//         // If necessary, you could initiate an AJAX request here
//         // and then do the updating in a callback.
//         //
//         // Update the modal's content.
//     var modalTitle = exampleModal.querySelector('.modal-title')
//     var modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = 'New message to ' + recipient
//     modalBodyInput.value = recipient
// })