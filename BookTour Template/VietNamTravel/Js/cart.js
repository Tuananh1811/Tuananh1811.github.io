// @ts-nocheck
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var todayDate = String(date.getDate()).padStart(2, '0');
var datePattern = year + '-' + month + '-' + todayDate;
// @ts-ignore
document.getElementById("date-picker").value = datePattern;
var dateSelect = document.getElementById("date-picker");

document.getElementsByClassName('block-input-group-time')[0].value = datePattern;

dateSelect.addEventListener('change', function(e) {
    e.preventDefault();
    document.getElementsByClassName('block-input-group-time')[0].value = dateSelect.value;

})
var count = document.getElementsByClassName('count');
console.log(count);
var btnPlus = document.getElementsByClassName("btn-plus");
var btnMinus = document.getElementsByClassName("btn-minus");

for (let index = 0; index < btnPlus.length; index++) {
    const element = btnPlus[index];
    btnPlus[index].addEventListener("click", function(e) {
        e.preventDefault();
        count[index].value = parseInt(count[index].value) + 1;

    })
}

for (let index = 0; index < btnPlus.length; index++) {
    const element = btnMinus[index];
    btnMinus[index].addEventListener("click", function(e) {
        e.preventDefault();
        if (count[index].value <= 0) {
            alert("Số lượng người tham gia không thể nhỏ hơn 0");
        } else {

            count[index].value = parseInt(count[index].value) - 1;
        }
    })
}