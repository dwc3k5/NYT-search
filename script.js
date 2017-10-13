var key = "8e62878a0155440da9132c4519278581";
var searchWord;
var beginDate;
var endDate;
var records;
var articleCounter;
var searParameters={
  'api-key': "8e62878a0155440da9132c4519278581",
  'q': searchWord,
  'begin_date': beginDate,
  'end_date': endDate,
};
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param(searchParameters
  //{}
  //'api-key': "8e62878a0155440da9132c4519278581",
  // 'q': "test",
  // 'begin_date':"yyyymmdd",
  // 'end_date':"yyyymmdd"
  //}
/*retrieve user inputs and use them to determine above values*/
);

$("#searchSubmit").click(function(){
  /*clear out html in topArticles div*/
  clear();
  /*update search parameter variables*/
  search();
});


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});

/*runs the clear function to empy the html in the topArticles div*/
$("#clearResults").click(function(){
clear();
});


/*runs a loop based on the number of records and creates a div*/
function artLoop(){
  for (var i=0; i<records; i++){
    articleCounter++;
    var wellSection = $("<div");
    sellSection.addClass('well');
    wellSection.attr('id', 'articleWell-'+articleCounter);
    $("#wellSection").append(wellSection);
  }
}
/*sets variables equal to user inputs*/
function search(){
  searchWord=$("#searchTerm").val();
  beginDate=$("#startYear").val();
  endDate=$("#endYear").val();
  records=$("#records").val();
}
/*removes divs created in the topArticles section*/
function clear(){
  $("#topArticles").html("");
}
