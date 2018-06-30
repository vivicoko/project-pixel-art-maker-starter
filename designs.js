// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
$('#sizePicker').on('submit',function(event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  color=$('#colorPicker').val();
  makeGrid(height, width);

});

function makeGrid(num, y) {
  $('tr').remove();
  for (var a=1; a<=num; a++){
  $('#pixelCanvas').append('<tr id=table'+a+'></tr>');
    for (b=1; b<=y; b++){
      $('tr'),filter(':last').append('<td></td>');
    }
  }

$('td').click(function addColor(){
  color = $('#colorPicker').val();
  if ($(this).attr('style')){
  $(this).removeAttr('style')
  } else{
    $(this).css('background-color', color);
               
  
}
                 
  }

});

}
