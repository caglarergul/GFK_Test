 var firstURL = "http://cdn.gfkdaphne.com/tests/async.php?a=1";
 var secondURL = "http://cdn.gfkdaphne.com/tests/async.php?a=2";
 var responseString = "";

 function ajaxCallback(URL) {

     $.ajax({
         async: true,
         url: URL,

         error: function() {
             $("#result").html("<p>An error has occurred</p>");
         },
         dataType: "text",
         success: function(data) {
             console.log("success");
             concatanate(data);

         },
         complete: function(data) {
             console.log(data.responseText);
         },
         type: "GET"
     });

     return ajaxCallback;

 }

 function concatanate(string) {
     if (responseString != "") {
         responseString = responseString + " " + string;
     } else {
         responseString = string;
     }

     $("#result").html(responseString);
 }



 $(document).ready(function() {
     responseString = "";
     ajaxCallback(firstURL)(secondURL);
     console.log(responseString);
 });