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
};