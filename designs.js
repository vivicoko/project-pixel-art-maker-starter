// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
$('#sizePicker').submit(function(event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width = $('#inputWeight').val();
  makeGride(height, width);

});

function makeGrid(num, y) {
  
  for (var x=1; x<=num; x++){
  $('#pixelCanvas').append('<td></td>');
  }
}
$('td').click(function addColor(){
  color = $('#colorPicker').val();
  if ($(this).attr('style')){
  $(this).removeAttr('style')
  } else{
    $(this).attr('style', 'background-color:' + color);
               
    
                 }
  }

});

}
