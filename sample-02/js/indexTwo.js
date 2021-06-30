function onLoad() {
    //console.log("Second page ");
    var responseData = localStorage.getItem('pageOneData');
    var formResponse = document.querySelector('#formResponse');

    //Inject the data coming from form page
    document.querySelector('#responseData').innerHTML = responseData;
    formResponse.style.display = 'block';
}
onLoad();