/*
	Hi Brent!  Great job on the homework!  The choice to use the lowercase version of the
	city abbreviations is very clever.  Fantastic job with commenting your code too - it made
	it immediately obvious what all of your code is doing.

	Also... love the checkIdle function.  That definitely made me smile.

	I have a couple of comments inline below, but they are pretty minor.
*/

$(document).ready(function () {
	// Initialize the array with the city names
	var cityArray = ["NYC", "SF", "LA", "ATX", "SYD"];
	var userIdle = true;  // flag to check if user not selected anything in 5 secs

	// Add all of the cities into the select drop down menu
	for (i = 0; i < cityArray.length; i++) {
		$('#city-type').append("<option value='" + cityArray[i].toLowerCase() + "'>" + cityArray[i] + "</option>");
	}
	
	/* Delay this code from running for 5 seconds. If after 5 seconds the user hasn't
	   selected an option then let them know that the dropdown menu will change the
	   background image. */
	setTimeout(checkIdle, 5000);

	/* Check if the user selected something...if not then display hint to user
	   to click on the select box to change the background */
	function checkIdle () {
		console.log('inside function');
		if (userIdle) {
			/* If the user is idle then display prompt */
			$('form').after('<p class="prompt">Please select a city in the drop-down menu to change the background.</p>')
		} else {
			/*
				If you are doing nothing if the conditional in the if statement is false,
				you do not need to include the else {} block.
			*/

			/* Do nothing because the user interacted with the dropdown menu */
		}
	}
	
	$('#city-type').change(function () {
		userIdle = false;
		// Store the selected option in a variable
		var selectedOption = $(this).val();
		
		// Change the class of the body to change the background of the page

		/* 
			The rubric asks to use an if/else if/ else statement to change the body class, but 
			I like this solution much better - it is much more efficient.
		*/
		
		$("body").attr("class", selectedOption);

		/* If the prompt exists then at this point remove it */
		if ($('.prompt').length) {
			$('.prompt').remove();
		}
	});
});