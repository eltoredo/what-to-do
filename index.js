fetch('https://ravixpywjjdzjcdzkokp.supabase.co')
  .then(response => response.json())
  .then(data => console.log(data));

var request = new XMLHttpRequest();
request.open('GET', 'https://ravixpywjjdzjcdzkokp.supabase.co', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    var data = JSON.parse(this.response);
    console.log(data);
  }
  else {
    console.log("It didn't work out :(");
  }
};


request.send();