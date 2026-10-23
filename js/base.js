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

        // クリックしたアイテムを複製
        const popupItem = item.cloneNode(true);

        // ポップアップを作成
        const popup = document.createElement('div');
        popup.classList.add('item-popup');

        // 複製したアイテムを追加
        popup.appendChild(popupItem);

        // BACK要素を作成
        const back = document.createElement('h4');
        back.classList.add('pup', 'back');
        back.textContent = 'BACK';

        // ポップアップにBACKを追加
        popup.appendChild(back);

        // bodyにポップアップを追加
        document.body.appendChild(popup);

        // 表示アニメーション
        requestAnimationFrame(() => {
            popup.classList.add('is-active');
        });

        // ポップアップを閉じる処理
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



// btn

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn > span');

    const contents = {
        graphic: document.querySelector('.graphic'),
        web: document.querySelector('.web'),
        movie: document.querySelector('.movie')
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {

            // すべてのコンテンツを非表示
            Object.values(contents).forEach(content => {
                content.style.display = 'none';
            });

            // すべてのボタンの選択状態を解除
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            // クリックしたボタンに対応するコンテンツを表示
            if (button.classList.contains('btn_graphic')) {
                contents.graphic.style.display = 'block';
            } else if (button.classList.contains('btn_web')) {
                contents.web.style.display = 'block';
            } else if (button.classList.contains('btn_movie')) {
                contents.movie.style.display = 'block';
            }

            // クリックしたボタンを選択状態にする
            button.classList.add('active');
        });
    });
});
