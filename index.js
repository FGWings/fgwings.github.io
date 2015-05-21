Parse.initialize("2x8254fp9pMyvtmPqdVEkdFDgVnVUY7FqihnSW5Y", "GNYbujib1bUEgUx6SzjeeMY4I9SajlPlBfHwv7DR");

$( "#submit" ).click(function() {
    var AddRequest = Parse.Object.extend("AddRequest");
    var addrequest = new AddRequest();
    var url = $('#giturl').val();
    addrequest.set("giturl", url);

    addrequest.save(null, {
      success: function(addrequest) {
        $('#successalert').html("URL " + url + " submitted succesfully");
        $('#successalert').removeClass("hidden");
        $('#failurealert').addClass("hidden");
      },
      error: function(addrequest, error) {
        $('#failurealert').html("URL " + url + " was not submitted succesfully");
        $('#failurealert').removeClass("hidden");
        $('#successalert').addClass("hidden");
      }
    });
});
