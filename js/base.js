// ハンバーガー
$(function() {
    $("#hamburger").on("click", function() {
        $(this).toggleClass("active");
        $("header#header > nav").toggleClass("active");
    });
});


// photo swiper
const photoSwiper = new Swiper('.photo.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1000,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
});


// popup
const items = document.querySelectorAll('section.graphic .box .item');

items.forEach(item => {

	item.addEventListener('click', () => {

		// クリックされたitemを複製
		const popupItem = item.cloneNode(true);

		// ポップアップ用の親要素を作成
		const popup = document.createElement('div');
		popup.classList.add('item-popup');

		// itemを入れる
		popup.appendChild(popupItem);

		// bodyに追加
		document.body.appendChild(popup);

		// 少し遅らせて表示
		requestAnimationFrame(() => {
			popup.classList.add('is-active');
		});

		// 背景クリックで閉じる
		popup.addEventListener('click', (e) => {

		if (
			e.target === popup ||
			e.target.classList.contains('back')
		) {
			popup.classList.remove('is-active');

			setTimeout(() => {
				popup.remove();
			}, 300);
		}

	});

	});

});