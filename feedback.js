
function clear()
{
	document.getElementById("first").value="";
	document.getElementById("middle").value="";
	document.getElementById("last").value="";
}
function createDiv()
{
	let div=document.createElement('div');
	div.innerText=document.getElementById("suggestions").textContent;
	document.body.appendChild(div);
}

function input()
{
	
	var status=true;
	var fname=document.getElementById("first").value;
	if ((fname=="")||(fname.length>40)||(fname==' ')) 
	{
        alert("First name must be required and less than 40 characters ");
		document.getElementById("first").focus();
		status=false;
    }
	
	
	var mname=document.getElementById("middle").value;
	if(status)
	{
		
		var lname=document.getElementById("last").value;
		if ((lname == "")||(lname.length>40))
		{
        alert("Last name must be required and less than 40 characters.");
		document.getElementById("last").focus();
		status=false;
		}
	}
	if(status)
	{
		var gender=true;
		if(document.getElementById("male").checked)
			gender="Mr.";
		else if(document.getElementById("female").checked)
			gender="Mrs.";
		if(gender==true)
		{
			alert("Please select your gender.");
			document.getElementById("male").focus();
			status=false;
		}
	}
	if(status)
	{
		var fullName= gender + " " + fname + " " + mname + " " + lname + "'s suggestion:-";
		var suggest = document.getElementById("suggestions").value;
		var feedback=document.getElementById("mytest").innerHTML;
        if(suggest=="")
		{
			alert("Please give your feedback");
			document.getElementById("suggestions").focus();
		}
		else
		{ 
			
			
	
			feedback=feedback  + fullName + "<br></br>" + suggest + "<br></br><hr>" ;
		
			document.getElementById("mytest").innerHTML=feedback;
		
			
			clear();
		}
      
	}
	
}