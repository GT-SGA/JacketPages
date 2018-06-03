function calculateTotal() {
  var cost = document.getElementById('cost').value;
  var quant = document.getElementById('quantity').value;
  if (cost != null && quant != null) {
    document.getElementById('totalCost').value = cost * quant;
    document.getElementById('request').value = cost * quant;
  }
}

//define template
var template = $('#lineItems .section:first').clone();

//define counter
var itemsCount = 1;

//add new section
$('body').on('click', '.addsection', function() {

    //increment
    itemsCount++;

    //loop through each input
    var section = template.clone().find(':input').each(function(){

        //set id to store the updated section number
        var newId = this.id + itemsCount;

        //update for label
        $(this).prev().attr('for', newId);

        //update id
        this.id = newId;

    }).end()

    //inject new section
    .appendTo('#lineItems');
    return false;
});

//remove section
$('#lineItems').on('click', '.remove', function() {
    //fade out section
    $(this).parent().fadeOut(300, function(){
        //remove parent element (main section)
        $(this).parent().parent().empty();
        return false;
    });
    return false;
});
