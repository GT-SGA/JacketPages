//auto-calculate function 
function calculateTotal(arg) {
    var cost = '#cost'; 
    var quant = '#quantity'; 
    var total = '#totalCost'; 
    var request = '#request'; 
    
    var id = arg.getAttribute('id');
    var numb = id.match(/\d/g);
    if (numb != null)  {
        numb = numb.join("");
        cost = cost + numb; 
        quant = quant + numb; 
        total = total + numb; 
        request = request + numb; 
    }
    
    if ($(cost).val() != null && $(quant).val() != null) {
        $(total).val($(cost).val() * $(quant).val());
        $(request).val($(cost).val() * $(quant).val());
    }
}

//define template
var template = $('#lineItems .section:first').clone();

//define counter
var itemsCount = 1;

//add new section
$('body').on('click', '.addsection', function () {

    //increment
    itemsCount++;

    //loop through each input
    var section = template.clone().find(':input').each(function () {

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
$('#lineItems').on('click', '.remove', function () {
    //fade out section
    $(this).parent().fadeOut(300, function () {
        //remove parent element (main section)
        $(this).parent().parent().empty();
        return false;
    });
    return false;
});


