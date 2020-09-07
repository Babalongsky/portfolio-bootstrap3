// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

    // ambil isi href
    const tujuan = $(this).attr('href');
    // tangkap element tersebut

    const elemenTujuan = $(tujuan);

    // console.log($('html, body').scrollTop());

    // pindahkan scroll

    // $('html, body').scrollTop(elemenTujuan.offset().top);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1250, 'easeInOutExpo');
    e.preventDefault();

});



// Parallax
// about
$(window).on('load', function () {
    $('.pKiri').addClass('pMuncul');
    $('.pKanan').addClass('pMuncul');
});

$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    // jumbotron

    $('.jumbotron img').css({
        'transform': 'translate(0px,  ' + wScroll / 3.5 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px,  ' + wScroll / 1.9 + '%)'
    });

    $('.jumbotron p').css({
        'transform': 'translate(0px,  ' + wScroll / 1 + '%)'
    });

    // portfolio
    if (wScroll > $('.portfolio').offset().top - 700) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
            }, 500 * (i + 1));
        })


    }


});