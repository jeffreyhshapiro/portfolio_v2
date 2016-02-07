$(document).ready(function(){
  //Get github repo name
  $.ajax({
    type: "GET",
    url: "https://api.github.com/users/jeffreyhshapiro/repos",
    success: function(repos){
      for (i = 0; i < repos.length; i++){
        var newListItem = buildListGroup(repos[i])
        $(".collection").append(newListItem);
      }
    },
    error: function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR);
      console.log(textStatus);
      console.log(errorThrown);
    }

  });

  function buildListGroup(repoData){
    var commitsApiUrl = "https://api.github.com/repos/";
    commitsApiUrl += repoData.full_name + "/commits";

    var newLink = $("<a>")
      .attr("href", commitsApiUrl)
      .addClass("collection-item")
      .append(repoData.full_name);

    return newLink;

  }

});

