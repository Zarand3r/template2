$(document).ready(function() {
  function dotest() {
    $.ajax({
        type: "post",
        url: "/test",
        dataType: "json",
        contentType: "application/json; charset=UTF-8",
        data:  JSON.stringify({name: "Richard", address: {city: "Phoenix", country: "USA"}})
    }).done(function (data) {
        $("#content").html(data);
    });
  }

    $("#btn").click(function(){
        dotest();
    });
});
