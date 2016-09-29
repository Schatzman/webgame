var display = document.getElementsByClassName("display")[0];

function getUrl(url) {
  return fetch(url)
  .then(
    function(response) {
      return response.text();
    })
  .then(
    function(myResp) {
      console.log(myResp)
      display.innerHTML = myResp;
    })
}

function postGrossPerson() {
  var url = "/report-gross-person"
  // var data = $("#postData").val();
  var data = {
    "firstname": $("#firstname").val(),
    "lastname": $("#lastname").val()
  };
  var postHeaders = new Headers({
    'Content-Type': 'application/json',
    'X-My-Custom-Header': 'CustomValue'
  });

  console.log(data);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    // body: data,
    headers: postHeaders
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ console.log( JSON.stringify(data) ) })
}
