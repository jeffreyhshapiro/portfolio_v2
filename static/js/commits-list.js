$(document).ready(function(){
  $(document).on("click", ".collection-item", function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits){
        $("tbody").empty();

        for(var i = 0; i < commits.length; i++){
          $("tbody").append(buildTableRow(commits[i]));
        }
      },

      error: function(jqXHR, textStatus, errorThrown){
        console.log(jqXHR)
        console.log(textStatus)
        console.log(errorThrown)
      }

    });

    function buildTableRow(commitData){
      var messageTd = $("<td>").append(commitData.commit.message);
      var authorTd = $("<td>").append(commitData.author.login);
      var dateTd = $("<td>").append(commitData.commit.author.date);

      return $("<tr>").append(messageTd)
              .append(authorTd)
              .append(dateTd);
    };

  });
  
});