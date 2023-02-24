rotate = function(images){
  $(function(){
    $.each(images, function(i,v){
      $('.js-rotatebox .rotate__images').append('<img src="' + v + '" data-nth="' + i + '" />');
    });
    $('.js-rotatebox .rotate__images img').css('opacity', '0');
    $('.js-rotatebox .rotate__images img').first().css('opacity', '1');

    $('.js-rotatebox .rotate__slider').on('change', targetImage);
    $('.js-rotatebox .rotate__slider').on('input', targetImage);

    function targetImage() {
      let target = $(this).val();
      $('.js-rotatebox .rotate__images img').css('opacity', '0');
      $('.js-rotatebox .rotate__images img[data-nth=' + target + ']').css('opacity', '1');
    }

    const rotateSection = $('.rotate');
    const sectionHeight = rotateSection.outerHeight();

    
  });
};