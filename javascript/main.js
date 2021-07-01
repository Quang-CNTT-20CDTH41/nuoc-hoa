// Input search
superplaceholder({
    el: timkiem,
    sentences: ['Tìm kiếm sản phẩm của bạn', 'Nước hoa dành cho Nam', 'Nước hoa dành cho Nữ'],
    options: {
        letterDelay: 80,
        loop: true,
        startOnFocus: false
    }
})
// img top những sản phẩm bán chạy nhất
window.onload = function () {
    setTimeout("switch_Image()", 4000);
}
var current = 1;
var num_image = 5;
function switch_Image() {
    current++;
    document.images['image'].src = './img/top' + current + '.png';
    if (current < num_image) {
        setTimeout("switch_Image()", 4000);
    } else if (current == num_image) {
        current = 0;
        setTimeout("switch_Image()", 4000);
    }
}
// icon messange facebook
var chatbox = document.getElementById('fb-customer-chat');
chatbox.setAttribute("page_id", "499521210580625");
chatbox.setAttribute("attribution", "biz_inbox");
window.fbAsyncInit = function () {
    FB.init({
        xfbml: true,
        version: 'v10.0'
    });
};
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

