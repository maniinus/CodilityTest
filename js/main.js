
$(document).ready(function () {
        var displayResources = $('.gtd-article');

        displayResources.text('Loading data from JSON source...');

        $.ajax({
            type: "GET",
            url: "resources.json",
            success: function(result)
            {
                console.log(result);
                var output='';
                for (var i in result)
                {
                    output+="<h3>" + result[i].title + "</h3> <p>" + result[i].data + "</p></tr>";
                }

                displayResources.html(output);
            }
        });
});
