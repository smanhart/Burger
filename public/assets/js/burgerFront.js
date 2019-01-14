$(function () {

    $(".eat_it").on("click", function (event) {
        var id = $(this).data("id");
        var eatenBurger = $(this).data("eaten");

        var newBurgerState = {
            devoured: eatenBurger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newBurgerState
        }).then(
            function () {
                console.log("changed devoured to", eatenBurger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        if ($("#burgerNew").val() == "") {
            alert("Please enter a burger name.")
        } else {

            var newBurger = {
                name: $("#burgerNew").val().trim(),
                devoured: false
            };
            console.log(newBurger)
            // Send the POST request.
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    console.log("created new burger");
                    // Reload the page to get the updated list
                    location.reload();
                }
            );

        };
    });


});