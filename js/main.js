lightGallery(document.getElementById('ul-li'), {
  download: false,
    height: '770px',
    width: '1000px',
});
lightGallery(document.getElementById('captions'));

let $search = $('#search_box');
    let $imgs = $('li')

    $search.keyup(event => {
      let value = $search.val().toLowerCase();
      $imgs.show();
      if (value !== '') {
        $imgs.not('[data-sub-html*="' + value + '"]').hide();
      }
    });

//   .getAttribute
