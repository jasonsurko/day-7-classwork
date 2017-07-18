
 document.getElementById("para").onclick = function(){  
 	 document.getElementById("para").innerHTML=("Im right");
};

 	 document.getElementById("para1").onclick = function(){
 		document.getElementById("para1").innerHTML=("No Im right you doof!")
 	};

document.getElementById("hoover").onmouseover = function(){
	document.getElementById("hoover").innerHTML = ("dont hoover me")
};

document.getElementById("hoover1").onmouseover = function(){
	document.getElementById("hoover1").innerHTML = ("You can kinda hoover me, but only for a lil bit")
};



document.getElementsByTagName("body")[0].onkeypress = function(event) {
	var input = event.keyCode;
  document.getElementById("secreto").innerHTML = String.fromCharCode(input)  ;
  };
// object.onkeypress = function(){myScript};

// function myFunction() {
//     var res = String.fromCharCode(74);
//     document.getElementById("secreto").innerHTML = ("J");
   
//     {
//     	if (i <= .fromCharCode(74); {
//     return  "J";

// function submitFunction(){
// 	var x = document.forms["myForm"]["username"].value; <---- code that used to work prior to the explanation. tried to copy the answer and somehow deleted some items. I'd have to re do the problem to get it again which would consume time.
// 	var y = document.forms("myForm")("pwd").value;
// 	var z = document.forms("myForm")("email").value;
// 	if(x == null || x == "" || y == null || y == ""){
// 		alert("incorrect")
// 	}
// 	else{
// 		if(x=="jason")
// 			{
// 			if(y=="12345678")
// 			{
// 				if(z=="email@email.com")
// 				{
// 					alert("Login Successful Homey!");
// 				}
// 				else{
// 					alert("Password Does Not Match Bro Bro")		
// 					}
				
// 				}
		
			

document.getElementById('submitForm').addEventListener('submit', function(e){
	var username = document.getElementById('username').value
	var password = document.getElementById('passwordSubmit').value
	var checkValues = (username.match(/[0-9]/g) != null ) && ( password == "12345678" )

	if(!checkValues) {
		alert('HEY YOU! THATS THE WRONG PASSWORD FOOL')
	}
});