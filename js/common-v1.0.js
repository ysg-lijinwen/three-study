function goToHome() {
    history.go(-1)
}

//用到此函数的页面请在引入common.js之前引入jquery，否则无法使用。
//展开收起ul
function unfoldAndFoldUl(ulId) {
    $("ul#" + ulId).toggle();
}