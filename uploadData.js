var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
var postString = "name="+name +"&surname="+surname+"&module="+module;

function startDataUpload() {
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
var postString = "name="+name +"&surname="+surname+"&module="+module;
alert ("start data upload");
// now get the checkbox values - separate them with a | so that they can be split later on if necessary
var checkString = "";
for (var i = 1;i< 5;i++){
if (document.getElementById("check"+i).checked === true) {
checkString = checkString +
document.getElementById("check"+i).value + "||"
}
}
postString = postString + "&modulelist="+checkString;
// now get the radio button values
if (document.getElementById("morning").checked) {
postString=postString+"&lecturetime=morning";
}
if (document.getElementById("afternoon").checked) {
postString=postString+"&lecturetime=afternoon";
}
// now get the select box values
var language = document.getElementById("languageselectbox").value;
postString = postString + "&language="+language;
// pop an alert for display
alert(postString);

processData(postString);
}

var client; // the global variable that holds the request
function processData(postString) {
client = new XMLHttpRequest();
client.open('POST','http://developer.cege.ucl.ac.uk:30250/reflectData',true);
client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
client.onreadystatechange = dataUploaded;
client.send(postString);
}
// create the code to wait for the response from the data server, and process the response once it is received

function dataUploaded() {
// this function listens out for the server to say that the data is ready - i.e. has state 4
if (client.readyState == 4) {
// change the DIV to show the response
document.getElementById("dataUploadResult").innerHTML = client.responseText;
}
}