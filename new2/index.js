const popup = {
  init: function () {
    $('figure').on('click', function () {
      popup.open($(this));
    });

    $(document)
      .on('click', '.popup img', function (e) {
        e.stopPropagation(); // Чтобы не закрывалось при клике на изображение
      })
      .on('click', '.popup', function () {
        popup.close();
      });
  },

  open: function ($figure) {
    $('.gallery').addClass('pop');

    const $popup = $('<div class="popup" />').appendTo('body');
    const $fig = $figure.clone().appendTo($popup);

    const src = $fig.find('img').attr('src');
    const captionText = $figure.attr('data-caption') || '';

    const $bg = $('<div class="bg" />').appendTo($popup).css({
      backgroundImage: `url(${src})`,
    });

    const $close = $(`
      <div class="close">
        <svg><use xlink:href="#close"></use></svg>
      </div>
    `).appendTo($fig);

    const $shadow = $('<div class="shadow" />').appendTo($fig).css({
      backgroundImage: `url(${src})`,
    });

    // Добавляем описание справа от увеличенной картинкой
    const $caption = $(`
      <figcaption>${captionText}</figcaption>
    `).appendTo($fig);

    setTimeout(() => {
      $popup.addClass('pop');
    }, 10);
  },

  close: function () {
    $('.gallery, .popup').removeClass('pop');
    setTimeout(() => {
      $('.popup').remove();
    }, 100);
  },
};

popup.init();
