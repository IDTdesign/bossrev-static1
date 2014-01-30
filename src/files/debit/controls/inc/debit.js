if(typeof(lang) == "undefined")
  	var lang = "English";
switch (lang){
   case "spanish":
		var lngjs_enterstartdate = "Por favor entre fecha de comienzo.";
		var lngjs_enterenddate = "Por favor entre fecha de terminacion.";
		var lngjs_valstartdate = "Por favor entre fecha valida de comienzo.";
		var lngjs_valenddate = "Por favor entre fecha valida de terminacion.";
		var lngjs_startbefenddate = "Fecha de comienzo debe ser antes de la fecha de terminacion.";
		var lngjs_restrictbill = "Usted solamente puede ver transacciones por un periodo de 1 mes a la vez.";
		var lngjs_restrictcall = "Usted solamente puede ver llamadas por un periodo de 1 mes a la vez.";
		var lngjs_insertaccount = "Por favor entre numero de cuenta.";
		var lngjs_insertpin = "Por favor elija su numero de identificacion personal (PIN)de 4 digitos.";
		break;
   default: 
		var lngjs_enterstartdate = "Please insert start date."
		var lngjs_enterenddate = "Please insert end date."
		var lngjs_valstartdate = "Please insert a valid start date."
		var lngjs_valenddate = "Please insert a valid end date."
		var lngjs_startbefenddate = "Start date should be before End date"
		var lngjs_restrictbill = "You may only view transactions for a 1 month period at a time"
		var lngjs_restrictcall = "You may only view calls for a 1 month period at a time"
		var lngjs_insertaccount = "Please insert your account number."
		var lngjs_insertpin = "Please insert a 4 digits PIN number."
}

  function validateDates()
  {
  	var sDate , eDate;
	if(document.forms[0].trans_startdate.value == "")
	{
		alert(lngjs_enterstartdate);
		document.forms[0].trans_startdate.focus();
		return(false); 	
	}	
	if(document.forms[0].trans_enddate.value == "")
	{
		alert(lngjs_enterenddate);
		document.forms[0].trans_enddate.focus();
		return(false); 	
	}	
	sDate = new Date(document.forms[0].trans_startdate.value);
	eDate = new Date(document.forms[0].trans_enddate.value);
			
	if(isNaN(sDate.valueOf()) || !dateVerified(document.forms[0].trans_startdate.value))
	{
		alert(lngjs_valstartdate);
		document.forms[0].trans_startdate.focus();
		return(false); 	
	}	
	if(isNaN(eDate.valueOf()) || !dateVerified(document.forms[0].trans_enddate.value))
	{
		alert(lngjs_valenddate);
		document.forms[0].trans_enddate.focus();
		return(false); 	
	}				
	if(sDate > eDate)
	{
		alert(lngjs_startbefenddate);
  		return false;			
	}
	if((eDate - sDate) > 2678400000)
	{
		if (page == 'bills')
			alert(lngjs_restrictbill);
		else
			alert(lngjs_restrictcall);	
  		return false;
	}
	return(true);
}

function changeSortingGif(ParentId, PageName, type, loc, picNum, sort)
{
	for(var i=1 ; i <= picNum ; i++)
	{
		document.getElementById("plus" + i).src = "/debit/images/plus_off.gif";
		document.getElementById("minus" + i).src = "/debit/images/minus_off.gif";

		//eval('document.forms[0].plus' + i + '.src="/debit/images/plus_off.gif"');
		//eval('document.forms[0].minus' + i + '.src="/debit/images/minus_off.gif"');
	}
			
	// alert(type + loc);
	document.getElementById(type + loc).src = "/debit/images/" + type + "_on.gif";

	//eval('document.forms[0].' + type + loc + '.src="/debit/images/' + type + '_on.gif"');
	
	PageTo(ParentId, PageName,1,sort);
}

 function newSearch()
 {
 	if(navigator.appName == 'Netscape')
	{
		makeDates();
	}	
	document.forms[0].direction.value="n";
	document.forms[0].results.value = "";
	document.forms[0].page.value = "";
 }
 
 function fillHidden(val)
 {
 	document.forms[0].direction.value="r";
 	document.forms[0].sortBy.value=val;
	document.forms[0].submit();
 }
 
  function JumpToPage(pageNum)
 {
	document.location.href="test.aspx?p=" + pageNum;
 }
  function GoToPage(pageNum,sort)
 {
	document.location.href="trans.aspx?p=" + pageNum + "&s=" + sort + "&sdate=" + document.forms[0].trans_startdate.value + "&edate="+document.Form1.trans_enddate.value;
 }
 
 
function PageTo(ParentId, PageName, pageNum, sort)
 {
	var startDate = document.getElementById(ParentId + '_startdate');
	var endDate = document.getElementById(ParentId + '_enddate');

	// alert("Start Date:" + startDate.value + "\nEnd Date:" + endDate.value);

	document.location.href = PageName +'.aspx?p=' + pageNum + '&s=' + sort + '&sdate=' + startDate.value + '&edate=' + endDate.value;
 }
 
function clearRow(startwith,img)
{
	var iname = 'txt' + img.name.substring(6,img.name.length);
	var val = new String(eval('document.getElementById(\'' + startwith + iname +'\')').value);
	
	eval('document.getElementById(\'' + startwith + iname +'\')').value = '';
}	
	
function clearphone(parent, name)
{
	var obj = document.getElementById(parent + "_" + name);
	obj.value = "";
}	

// Modified 16-Mar-2008, Rael 
// --------------------------
// Function to ignore readonly items (following the change in having the pin 
// registered as an ANI number
function clearphones(parent, num)
{
	var objItem;
	
	for(var i=1;i<=num;i++)
	{
		objItem = document.getElementById(parent + "_txtANI" + i);
		
		if(!objItem.readOnly)
			objItem.value = "";
	}	
	return false;
}	


// Modified 16-Mar-2008, Rael 
// --------------------------
// Function to ignore readonly items (following the change in having the pin 
// registered as an ANI number
function clearUSphones(parent, num)
{
	var objItem1,objItem2,objItem3;
	
	for(var i=1;i<=num;i++)
	{
		objItem1 = document.getElementById(parent + '_txtANI' + i + '_0');
		objItem2 = document.getElementById(parent + '_txtANI' + i + '_1');
		objItem3 = document.getElementById(parent + '_txtANI' + i + '_2');

		if(objItem1.readOnly)
		continue;

		objItem1.value = '';
		objItem2.value = '';
		objItem3.value = '';
	}
	return false;
}	

function clearUSphone(parent, name)
{
	document.getElementById(parent + "_" + name + "_0").value = "";
	document.getElementById(parent + "_" + name + "_1").value = "";
	document.getElementById(parent + "_" + name + "_2").value = "";
}	

 function clearRowUS(startwith,img)
{

	var iname = 'txt' + img.name.substring(7,img.name.length);
	
	eval('document.getElementById(\'' + startwith + iname +'_0\')').value = '';
	eval('document.getElementById(\'' + startwith + iname +'_1\')').value = '';
	eval('document.getElementById(\'' + startwith + iname +'_2\')').value = '';
	
}	
 function clearDialCode(iname)
{
	alert(iname);
	var startwith = 'DialCodes:txtTelNo';
	
	eval('document.getElementById(\'' + 'DialCodes_txtTelNo_' + iname +'\')').value = '';
	eval('document.getElementById(\'' + 'DialCodes_txtDesc_' + iname +'\')').value = '';
}	


function handleEnter(btn,evt)
{
		  
		  var keyCode = evt.which ? evt.which : evt.keyCode;
		  if (keyCode == 13) {
		    document.getElementById(btn).click();
		    return false;
		  }
		  else
		    return true;
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
		MatchControlsVal(1,'update_txtFirstName','update_txtCCFirstName');	
		MatchControlsVal(1,'update_txtLastName','update_txtCCLastName');	
		MatchControlsVal(1,'update_txtAddress1','update_txtCCAddress1');	
		MatchControlsVal(1,'update_txtAddress2','update_txtCCAddress2');	
		MatchControlsVal(1,'update_txtCity','update_txtCCCity');	
		MatchControlsVal(2,'update_drpState','update_drpCCState');	
		MatchControlsVal(2,'update_drpProvince','update_drpCCProvince');	
		MatchControlsVal(2,'update_drpCountry','update_drpCCCountry');	
		MatchControlsVal(1,'update_txtZip','update_txtCCZip');	
	}
}

function moveFocus(pMoveTo,pElem,pLen) 
{
		if(pElem.value.length == pLen)
		try
		{document.getElementById(pMoveTo).focus();}
		catch(e){}
			}

function ShowCallInfo(refid,num)
{
	var tHeight = num *70;
	//window.open('callinfo.aspx?refid=' +refid,'','toolbar,width=150,height=100');
	window.open('callinfo.aspx?refid=' +'0001','','toolbar=no,width=300,height='+ tHeight);
	
}
			
function popUp(url) {
sealWin=window.open(url,"win",'toolbar=0,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=0,width=600,height=450');
self.name = "mainWin";
}

// Added 14-May-2008
function ValidateNumericKeyPress(obj,evt, bAllowDecimals)
{
    var IE = (evt)?false:true;
    var keyCode = evt.keyCode;
    var IsNumPad = (keyCode>=96 && keyCode <=105);
    var IsNumBoard = (keyCode>=48 && keyCode <=57);
	var IsDecimalPoint  = (keyCode == 190 || keyCode == 110);
	
	var currValue = new String(obj.value);
	var IsDecimalOk = (IsDecimalPoint && bAllowDecimals && (currValue.indexOf(".",0) == -1));
    var IsOk = (keyCode == 8 || keyCode == 9 || keyCode == 37 || keyCode ==39  || keyCode == 38 || keyCode == 40 || keyCode==46)
    
    // window.status = 'IE: ' + IE + ' keyCode:' + keyCode + 'IsNumPad: ' + IsNumPad + ', IsNumBoard: ' + IsNumBoard + ' IsOk: ' + IsOk + " Decimal:" + IsDecimalPoint ;
    
    if(!(IsNumBoard || IsNumPad || IsOk || IsDecimalOk ))
        return false;
}

// use this line to generate a postback 
// __doPostBack("btnSend","");
function DisableEnterKeyPress(obj,evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;
	
	if(keyCode==13)
		return false; 
	else
		return true;
}


/*******************************************************************************************
 The scripts here are both IE and Firefox complient
 Author: Rael Kahn
 
 List of function
 *******************************************************************************************
 1.	function handleUSPhone(obj, evt)

 	<input type="text" id="txt1_0" maxlength="3" onkeydown="return handleUSPhone(this,event)" />
	<input type="text" id="txt1_1" maxlength="3" onkeydown="return handleUSPhone(this,event)" />
	<input type="text" id="txt1_2" maxlength="4" onkeydown="return handleUSPhone(this,event)" />
	
	Note!
	The suffix of each of these objects must be _<item index> starting with 0
 
 2. function handlePhone(obj, evt, sMask) 	
 	
 	<input type="text" id="txtPhone" onkeydown="return handlePhone(this,event,'(###) ### - ####');" /><br />
 	
 	Note!
 	This version contains only a numerical text replacment defined with the the # sign
 
 3. function IsNumeric(obj,evt, bAllowDecimals, bAllowNegative)
 
 	<input type="text" id="txtPhoneChar" onkeydown="return IsNumeric(this, event, false, true);" /><br />
 
 4. function IsValidPhoneCharacter(obj,evt)
 
 	<input type="text" id="txtPhoneChar" onkeydown="return IsValidPhoneCharacter(this,event);" /><br />
  
 5. function IsTab(obj,evt)
 
 6. function IsSpecial(obj, evt)
 
 7. function IsSelectedText()
 
 8. function setCursorAtEnd(sTextboxID)
 
 9. function doGetCaretPosition (obj) 
 
 10. function disableEnterKey(obj,evt)
 

*******************************************************************************************/

// Consts

var CONST_ARROW_LEFT = 37;
var CONST_ARROW_UP = 38;
var CONST_ARROW_RIGHT = 39; 
var CONST_ARROW_DOWN = 40;

var CONST_SPACE = 32;
var CONST_BACKSPACE = 8;
var CONST_DELETE = 46;
var CONST_TAB = 9;



/*******************************************************************************************
 The scripts here are both IE and Firefox complient
 Author: Rael Kahn
 Date:	03-June-2008
    
 Sample Uses
 *******************************************************************************************
<input type="text" id="txt1_0" maxlength="3" onkeydown="return handleUSPhone(this,event)" />
<input type="text" id="txt1_1" maxlength="3" onkeydown="return handleUSPhone(this,event)" />
<input type="text" id="txt1_2" maxlength="4" onkeydown="return handleUSPhone(this,event)" />

NOTE!!!
This will not work properly with indexes starting from any other value other than 0!

*******************************************************************************************/
function handleUSPhone(obj, evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;
    var bIsNumeric = IsNumeric(obj,evt, false, false);
	var bIsSpecial = IsSpecial(obj, evt);
	var value = new String(obj.value);
	var iPosition = doGetCaretPosition (obj);
	var sSelectedText = IsSelectedText();
	var bIsSelectedText = (sSelectedText!=""?true:false);
	var bIsTab = IsTab(obj,evt);
	var maxlength = obj.maxLength;
	
	//window.status = "keyCode [" + keyCode + "] bIsSelectedText:" + bIsSelectedText ;
	
	if(!(bIsNumeric || bIsSpecial || bIsTab )) return false;
	
	
	if(bIsTab) return true; // Allow the tab key stroke to work as usual

	if(bIsSelectedText && bIsNumeric && !bIsSpecial)
	{
		obj.value = value.replace(sSelectedText,"");
		return true;
	}

	// Get the current id
	var id = obj.id;
	var currObj = id.split("_");
	var index  = new Number(currObj[currObj.length-1]);
	var baseObj = id.replace("_" + index,"");
	
	


	// Check if to back tab! (backspace)
    var bIsBackSpace =  (value.length==0) && (index.valueOf() > 0) && (bIsSpecial);
    
    var offset = 0;
    if(IsNumeric)
        offset = 0;
        
    //var bIsTabForward =  (value.length==maxlength-offset) && (index.valueOf() < 2) && (bIsNumeric) && (!bIsSpecial);
    
    // window.status = "bIsBackSpace: " + bIsBackSpace + " bIsTabForward: " + bIsTabForward + " Position: "  + iPosition;
	
	
	if(
	    !(keyCode==CONST_DELETE) &&  
	    !(keyCode==CONST_ARROW_RIGHT) && 
	    (bIsBackSpace || (iPosition==0 && index.valueOf() > 0 && keyCode == CONST_ARROW_LEFT) )
    )
	{
	    var objId = baseObj + "_" + (index.valueOf()-1);
	    //window.status = "1." + objId;
	    
	    var x = document.getElementById(objId);
	    evt.cancelBubble = true;
	    try{x.select();}catch(e){}
	    x.focus();
	    return false; 
	}
	
	
	// Forward Motion
	if(
	    (iPosition==maxlength && keyCode==CONST_ARROW_RIGHT && index.valueOf() < 2 ) ||
	    (iPosition==0 && value.length==0 && keyCode==CONST_ARROW_RIGHT && index.valueOf() < 2 )
    )
	{
	    var objId = baseObj + "_" + (index.valueOf()+1);
	    var x = document.getElementById(objId);

	    //window.status = "2." + objId;
	    
	    try{x.select();}catch(e){}
	    x.focus();
	    return false; 
	}
}

function CheckKeyUp(obj, evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;
    var value = new String(obj.value);
    var bIsNumeric = IsNumeric(obj,evt, false, false);
	var bIsSpecial = IsSpecial(obj, evt);
    var maxlength = obj.maxLength;
    
    var id = obj.id;
	var currObj = id.split("_");
	var index  = new Number(currObj[currObj.length-1]);
	var baseObj = id.replace("_" + index,"");

    var bIsTabForward =  (value.length==maxlength) && (index.valueOf() < 2) && (bIsNumeric) && (!bIsSpecial);
    
    //window.status = value.length + "Move to next object : " + bIsTabForward;
    
    if(!bIsTabForward) return;
    
    var objId = baseObj + "_" + (index.valueOf()+1);
	    var x = document.getElementById(objId);

	    //window.status = "2." + objId;
	    
	    try{x.select();}catch(e){}
	    x.focus();
	    return false; 
    
}



/*******************************************************************************************
 The scripts here are both IE and Firefox complient
 Author: Rael Kahn
 Date:	29-May-2008
 
 Sample Uses
 *******************************************************************************************
 Phone validation
 <input type="text" id="txtPhone" 
	onkeydown="return handlePhone(this,event,'(###) ### - ####');" /><br />

*******************************************************************************************/
function handlePhone(obj, evt, sMask)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;
	var bIsSpecial = IsSpecial(obj,evt);

	//window.status = "keyCode [" + keyCode + "] IsSpecial [" + bIsSpecial + "]" ;

	if(!IsNumeric(obj,evt,false,false)) return false;
	if(bIsSpecial) return true;
	if(IsValidPhoneCharacter(obj,evt)) return false;

	var strPhone = new String(obj.value);
	var iLength = new Number(strPhone.length);

	// window.status = iLength + " - " + sMask.length + (iLength < sMask.length );

	if(iLength > sMask.length -1)
	{
		evt.cancelBubble = true;
		return false;
	}
	
	var sCharAt = sMask.charAt(iLength);
	while( sCharAt!="#" && (iLength < sMask.length-1 ))
	{
		strPhone = strPhone + sCharAt;
		iLength = strPhone.length;
		sCharAt = sMask.charAt(iLength);
	}

	obj.value = strPhone;
}


/*******************************************************************************************
 The scripts here are both IE and Firefox complient
 Author: Rael Kahn
 Date:	29-May-2008
 
 Sample Uses
 *******************************************************************************************

 Numeric validation
 <input type="text" id="txtId" 
 	onkeydown="return IsNumeric(this,event,false,false);" />

*******************************************************************************************/
function IsNumeric(obj,evt, bAllowDecimals, bAllowNegative)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");

	var keyCode = evt.keyCode;
	var IsNumPad = (keyCode>=96 && keyCode <=105);
	var IsNumBoard = (keyCode>=48 && keyCode <=57);
	var IsShift = evt.shiftKey;
	var IsOk = IsSpecial(obj,evt);
	var IsDecimalPoint  = (keyCode == 190 || keyCode == 110); // Not yet used
    

	// Get the first character of the number
	var sNumber = new String(obj.value);
	var FirstCharacter = sNumber.charAt(0);
	var IsNegative =  (FirstCharacter=="-"?true:false);

	if(bAllowNegative && (keyCode == 109 || keyCode==189))
	{
		if(!IsNegative)
			obj.value = "-" + obj.value;
		else
			obj.value = sNumber.substring(1);
		return false;
	}

	if(IsShift && IsNumBoard)
	    return false;


	var currValue = new String(obj.value);
	var IsDecimalOk = (IsDecimalPoint && bAllowDecimals && (currValue.indexOf(".",0) == -1));

	// window.status = "1. [" + keyCode + "] IsNumPad: " + IsNumPad + ", IsNumBoard: " + IsNumBoard + " IsOk: " + IsOk + " Decimal:" + IsDecimalPoint + " IsShift:" + IsShift ;

	if(!(IsNumBoard || IsNumPad || IsOk || IsDecimalOk  ))
		return false;
	else
		return true;

}

// Allow numbers & / ( - ) and spaces
function IsValidPhoneCharacter(obj,evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	evt.cancelBubble = true;

	var IsShift = evt.shiftKey;
	var keyCode = evt.keyCode;

	var IsDash = ((keyCode == 109 || keyCode==189));
	var IsSpace = (keyCode == 32);
	var IsBracket = ((keyCode==48 && IsShift) || (keyCode==57  && IsShift ));
	var IsSlash = (keyCode == 191);

	//var IsLeftBracket = (keyCode==48 && IsShift);
	//var IsRightBracket = (keyCode==57  && IsShift );

	// var IsSpecial = (IsDash || IsSpace || IsBracket || IsSlash );

	if(IsDash || IsSpace || IsBracket || IsSlash )
		return true;
	else
		return false;
}

function IsTab(obj,evt)
{
    evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;
	
	if((keyCode==9) || (keyCode==9 && evt.shiftKey ))
	    return true;
    else
        return false;
}


// Catches arrow keys, backspaces delete etc
function IsSpecial(obj, evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;
	var IsShift = evt.shiftKey;
	return (IsShift==false) && (keyCode == CONST_BACKSPACE || keyCode == 9 || keyCode == CONST_ARROW_LEFT || keyCode == CONST_ARROW_UP  || keyCode == CONST_ARROW_RIGHT || keyCode == CONST_ARROW_DOWN || keyCode==CONST_DELETE);
}

function IsSelectedText()
{
	var txt = '';
	if (window.getSelection)
		txt = window.getSelection();
	else if (document.getSelection)
		txt = document.getSelection();
	else if (document.selection)
		txt = document.selection.createRange().text;
	else return;

	return txt;

}


function setCursorAtEnd(sTextboxID) 
{ 
    var oTextbox = document.all.item(sTextboxID); 
    if (oTextbox .createTextRange) 
    { 
        var r = (oTextbox.createTextRange()); 
        r.moveStart('character', (oTextbox.value.length)); 
        r.collapse(); 
        r.select(); 
    }
}


///
function doGetCaretPosition (obj) 
{	
    var CaretPos = 0;	// IE Support	
    if (document.selection) 
    {		
        obj.focus ();		
        var Sel = document.selection.createRange ();		
        Sel.moveStart ('character', -obj.value.length);		
        CaretPos = Sel.text.length;	
    }	// Firefox support	
    else 
    if (obj.selectionStart || obj.selectionStart == '0')		
        CaretPos = obj.selectionStart;	return (CaretPos);
}


// __doPostBack(obj, "");
function disableEnterKey(obj,evt)
{
	evt = (evt) ? evt : ((window.event) ? window.event : "");
	var keyCode = evt.keyCode;

	if(keyCode==13)
		return false;
	else
		return true;
}

function checkState(ddCountry, ddState, ddProvince, valState, valZip, star, evt)
			{
				evt = (evt) ? evt : ((window.event) ? window.event : "");
				var oSrcElement;
				if (evt)
				  oSrcElement = evt.srcelement? evt.srcelement : evt.target; 

				var oDDCountry = document.getElementById(ddCountry);
				var oDDState = document.getElementById(ddState);
				var oDDProvince = document.getElementById(ddProvince);
				var oValState = document.getElementById(valState);
				var oValZip = document.getElementById(valZip);

                if (!oDDCountry || !oDDState || !oDDProvince)
                    return;

				var selectedCountry = new String(oDDCountry.options[oDDCountry.selectedIndex].value);
				var selectedState = new String(oDDState.options[oDDState.selectedIndex].value);

				if(oSrcElement==oDDState && oSrcElement.selectedIndex >-1 )
				{
					// Set country dropdown to US
					evt.cancelBubble = true;
					oDDCountry.value = 'US';
					if(oDDCountry.selectedIndex==-1) oDDCountry.value = 'USA';
				  selectedCountry = 'US';
				}
				

				if(selectedCountry=='USA' || selectedCountry=='US')
				{
					ValidatorEnable(oValState, true);
					ValidatorEnable(oValZip, true);
					oValState.controltovalidate = ddState;
					oValZip.validationexpression = '\\s*\\d{5}(-\\d{4})?\\s*';

					oDDState.style.display = '';
					oDDProvince.style.display = 'none';
					oDDProvince.selectedIndex = 0;
					document.getElementById(ddProvince).value = '';

					if(document.getElementById(star) != null)
						document.getElementById(star).style.display = '';
				}
				else if(selectedCountry=='CA')
				{
					ValidatorEnable(oValState, true);
					ValidatorEnable(oValZip, true);
					oValState.controltovalidate = ddProvince;
					oValZip.validationexpression = '\\s*[a-zA-Z][0-9][a-zA-Z]\\s?[0-9][a-zA-Z][0-9]\\s*';

					oDDState.style.display = 'none';
					oDDState.selectedIndex = 0;			// Reset state item
					document.getElementById(ddState).value = '';
					oDDProvince.style.display = '';

					if(document.getElementById(star) != null)
						document.getElementById(star).style.display = '';
				}
				else
				{
					oDDState.selectedIndex = 0;			// Reset state item
					oDDProvince.selectedIndex = 0;
					ValidatorEnable(oValState, false);
					ValidatorEnable(oValZip, false);

					if(document.getElementById(star) != null)
						document.getElementById(star).style.display = 'none';

					document.getElementById(ddState).value = '';
					document.getElementById(ddProvince).value = '';
				}

				return false;
			}
