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
			/* Do nothing because the user interacted with the dropdown menu */
		}
	}
	
	$('#city-type').change(function () {
		userIdle = false;
		// Store the selected option in a variable
		var selectedOption = $(this).val();
		
		// Change the class of the body to change the background of the page
		$("body").attr("class", selectedOption);

		/* If the prompt exists then at this point remove it */
		if ($('.prompt').length) {
			$('.prompt').remove();
		}
	});
});