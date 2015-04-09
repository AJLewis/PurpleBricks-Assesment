// JavaScript Document

$(function() {
    
	function toggleBoxes() {
		$('.showHide').on("click", function (e) {
			e.preventDefault();
			var link = $(this);
			var spec = link.parentsUntil('section').next('.toggleThis');
			$(spec).toggleClass('hide');
            $(link).html($(this).text() == 'Show' ? 'Hide' : 'Show');
            $(link).siblings('h2').toggleClass('marginKill');
		});
	};
    
    
    $('#submitOffer').on('click', function(e) {
        e.preventDefault();
        var numberOutput = $('#number').val();
        console.log(numberOutput);
    });
    
    
    $('#number').autoNumeric('init');
    
    
// Validation via Jquery 
    $( "#priceSubmit" ).validate({
      rules: {
        number: {
          required: true,
          number: true
        }
      }
    });

    
// Initialise Functions
    toggleBoxes();
});