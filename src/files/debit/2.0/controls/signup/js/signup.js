
function clearUSphone(name)
{
	eval('document.getElementById(\'' + name + '_0\')').value = '';
	eval('document.getElementById(\'' + name + '_1\')').value = '';
	eval('document.getElementById(\'' + name + '_2\')').value = '';
	
}	

 function clearRowUS(startwith,img)
{
	var iname = 'txt' + img.name.substring(7,img.name.length);
	
	eval('document.getElementById(\'' + startwith + iname +'_0\')').value = '';
	eval('document.getElementById(\'' + startwith + iname +'_1\')').value = '';
	eval('document.getElementById(\'' + startwith + iname +'_2\')').value = '';
	
}	

function clearRow(startwith,img)
{
	
	var iname = 'txt' + img.name.substring(6,img.name.length);
	var val = new String(eval('document.getElementById(\'' + startwith + iname +'\')').value);
	
	eval('document.getElementById(\'' + startwith + iname +'\')').value = '';
	
}	

function MatchControlsVal(ctype,s,d)
{
	var sElem  = document.getElementById(s);
	var dElem  = document.getElementById(d);
	
	if(sElem == null || dElem == null)
		return;
	
	switch(ctype)
	{
		case 1:dElem.value = sElem.value;
				break;
		case 2:dElem.selectedIndex = sElem.selectedIndex;
				break;
	}
	
}
function fillBillInfo(c)
{
	if(c.checked)
	{
		MatchControlsVal(1,'signup_txtFirstName','signup_txtFirstNameCC');	
		MatchControlsVal(1,'signup_txtLastName','signup_txtLastNameCC');	
		MatchControlsVal(1,'signup_txtAddress1','signup_txtAddress1CC');	
		MatchControlsVal(1,'signup_txtAddress2','signup_txtAddress2CC');	
		MatchControlsVal(1,'signup_txtCity','signup_txtCityCC');	
		MatchControlsVal(2,'signup_drpState','signup_drpStateCC');	
		MatchControlsVal(2,'signup_drpCountry','signup_drpCountryCC');	
		MatchControlsVal(1,'signup_txtZip','signup_txtZipCC');	
		
		//document.getElementById('signup_txtFirstNameCC').value = document.getElementById('signup_txtFirstName').value;
	}
}

	// Sample: 
	// name = ctl00$CPH$ctrlSignup$txtHomePhone_1
	// Id	= ctl00_CPH_ctrlSignup_txtHomePhone_1
	//
	function moveFocus(pMoveToId, pElem, pLen) 
	{
		// Get the current Item Id
		var currObjId = new String(pElem.id);
		var currObjParts = currObjId.split("_");
		var currObjIndex = currObjParts.length-1;
		
		var sToObjId = currObjId.replace("_" + currObjIndex,"_" + pMoveToId);
		var objToElement = document.getElementById(sToObjId);
		
		if(pElem.value.length == pLen)
			objToElement.focus();
		
	}
