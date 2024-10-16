// using plain js
// const btn = document.getElementsByClassName('btn');
//
// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', function() {
//         this.classList.toggle('active');
//         const content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         }else{
//             content.style.maxHeight = content.scrollHeight + 'px';
//         }
//     })
// }


// using Jquery
$(".btn").click(function () {
    $content = $(this).next();
    $content.slideToggle(400);
});