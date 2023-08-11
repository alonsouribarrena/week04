$('img').click(function() {
  var altImg = $(this).attr('alt-pic');
  $(this).hide();
  $(this).before($(`img[src='${altImg}']`).show())
});