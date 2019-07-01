//on click event
$(document.body).on("click", ".topic", function () {
    //clear gifs on button click
    $("#gifView").empty();
    //create variable based on attribute of which button was pressed
    var person = $(this).attr("data-person");
    //create url with name of the person
        //limit AJAX responses to 1
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=burger&api_key=oZLjfolRARt1FqSzbHu9yHOboMpJ0CT7&limit=1";

    // cal AJAX method and send URL to giphy
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data comes back from the API
        .then(function (response) {
            // Storing an array of results in the results variable
            results = response.data;

            // Looping over every result item
            for (var q = 0; q < results.length; q++) {

                // Push to html
                var gifDiv = $("#gifView");

                // Storing the result item's rating
                var rating = results[q].rating;

                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);

                // Creating an image tag
                var personImage = $("<img>");

                // Giving the image tag an src attribute of a proprty pulled off the
                // result item
                personImage.attr("src", results[q].images.fixed_height.url);

                //give image tag a class for styling
                personImage.addClass("gifImage");

                personImage.attr("data-state", "still");

                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(personImage);

                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                $("#gifs-appear-here").prepend(gifDiv);
            }
        });

});