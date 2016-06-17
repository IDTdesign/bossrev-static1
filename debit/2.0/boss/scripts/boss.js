function resizewin()
{
    window.resizeTo(800,500);
}

function printPage() 
{
    window.print();
}

function SetControlFocus(controlId)
{
    var cntl=document.getElementById(controlId);
    cntl.focus();
}

function CallPrint(width,height)
  {
      var WinPrint = window.open('print.aspx','','letf=0,top=0,width='+width+',height='+height+',toolbar=0,scrollbars=0,status=0');
      if (WinPrint != null)
        WinPrint.focus();
}

function PrintSnapshot(strid,site,width,height)
{
	PrintSnapshot(strid,site,width,height,false);
}
function PrintSnapshot(strid,site,width,height, customCss)
{
    var prtContent = document.getElementById(strid);

    var strOldOne=prtContent.innerHTML;
    var WinPrint = window.open('','','left=0,top=0,width='+width+',height='+height+',toolbar=0,scrollbars=0,status=0');
    if (WinPrint != null)
    {
        WinPrint.document.writeln('<head>');
	WinPrint.document.writeln(' <meta http-equiv="X-UA-Compatible" content="IE=7"/>');	
        WinPrint.document.writeln('</head>');
        WinPrint.document.writeln('<body>');
	if(customCss)
    	{

		WinPrint.document.writeln('<link href="https://bosswebqa:4446/debit/2.0/'+site+'/css/printcss.css" rel="stylesheet" type="text/css" />');
	}
	else
	{
	
		WinPrint.document.writeln('<link href="/debit/2.0/'+site+'/css/Bossrev.css" rel="stylesheet" type="text/css" />');
	        WinPrint.document.writeln('<link href="/debit/2.0/'+site+'/retailers/inc/style.css" rel="stylesheet" type="text/css" />');
	        WinPrint.document.writeln('<link href="/debit/2.0/controls/inc/debit.css" rel="stylesheet" type="text/css" />');
	}
	
        WinPrint.document.writeln(prtContent.innerHTML);
        WinPrint.document.writeln('</body>');
        WinPrint.document.close();
        WinPrint.focus();
      //  WinPrint.print();
//        WinPrint.close();
    }
}

function PrintPrompt(strid,site,width,height)
{
	PrintPrompt(strid,site,width,height,false);
}
function PrintPrompt(strid,site,width,height,customCss)
{
    var prtContent = document.getElementById(strid);

    var strOldOne=prtContent.innerHTML;
    var WinPrint = window.open('','','left=0,top=0,width='+width+',height='+height+',toolbar=0,scrollbars=1,status=0');
    if (WinPrint != null)
    {
         	WinPrint.document.writeln(' <meta http-equiv="X-UA-Compatible" content="IE=7"/>');	
	    if(customCss)
	    {
		WinPrint.document.writeln('<link href="https://bosswebqa:4446/debit/2.0/'+site+'/css/printcss.css" rel="stylesheet" type="text/css" />');
	    }
	    else
	    {
	        WinPrint.document.writeln('<link href="/debit/2.0/'+site+'/css/Bossrev.css" rel="stylesheet" type="text/css" />');
	        WinPrint.document.writeln('<link href="/debit/2.0/'+site+'/retailers/inc/style.css" rel="stylesheet" type="text/css" />');
	        WinPrint.document.writeln('<link href="/debit/2.0/controls/inc/debit.css" rel="stylesheet" type="text/css" />');
		}
	        WinPrint.document.writeln(prtContent.innerHTML);
	        WinPrint.document.close();
	        WinPrint.focus();
	    }
}

function SetReasonPnl(ddl,txtId,valId,cValId)
{
    var txt = document.getElementById(txtId);
    var val = document.getElementById(valId);
    var cval = document.getElementById(cValId);
    var dvOpt = document.getElementById('dvOptions');
    if (ddl.options[ddl.selectedIndex].value == "yes")
    {
        txt.value="";
        txt.style.display="block";
        ValidatorEnable(val,true);
        dvOpt.style.display="none";
    }
    else
    {
        
        if (ddl.selectedIndex == 4 || ddl.selectedIndex == 5 || ddl.selectedIndex == 9)
        {
            ValidatorEnable(cval,true);
            dvOpt.style.display="block";
        }
        else
        {
            ValidatorEnable(cval,false);
            dvOpt.style.display="none";
        }
        txt.style.display="none";
        ValidatorEnable(val,false);
    }
}

function ShowMsgSplash(TitId,dtId,bodyId)
{
    var msgDate = document.getElementById(dtId);
    var msgBody = document.getElementById(bodyId);
    var msgTitle = document.getElementById(TitId);
    var dvDate = document.getElementById("dvDate");
    var dvTitle = document.getElementById("dvTitle");
    var dvBody = document.getElementById("dvBody");
    if (msgDate!=null && msgBody!=null && dvDate!=null && dvTitle!=null && dvBody!=null && msgTitle!=null)
    {
        dvDate.innerHTML=msgDate.innerHTML;
        dvTitle.innerHTML=msgTitle.innerHTML;
        dvBody.innerHTML=msgBody.innerHTML;
    }
}

var selectedMsgId = ""; 
function ShowMsg(dtId,titleId,bodyId,selectedId)
{
    var msgDate = document.getElementById(dtId);
    var msgTitle = document.getElementById(titleId);
    var msgBody = document.getElementById(bodyId);
    var dvDate = document.getElementById("dvDate");
    var dvTitle = document.getElementById("dvTitle");
    var dvBody = document.getElementById("dvBody");
    
    if (msgDate!=null && msgTitle!=null && msgBody!=null && dvDate!=null && dvTitle!=null && dvBody!=null)
    {
        dvDate.innerHTML=msgDate.innerHTML;
        dvTitle.innerHTML=msgTitle.innerHTML;
        dvBody.innerHTML=msgBody.innerHTML;
    }
    var oldRow = document.getElementById("selectedMsgId");
    if (oldRow !=null)
        oldRow.styles.backgroundcolor = "";
    var NewRow = document.getElementById("selectedId");
    if (NewRow !=null)
        NewRow.styles.backgroundcolor = "red";
    selectedMsgId = selectedId;
}

function CheckVal(obj, evt) {
    var IE = (evt) ? false : true;
    var keyCode = evt.keyCode;
    var IsNumPad = (keyCode >= 96 && keyCode <= 105);
    var IsNumBoard = (keyCode >= 48 && keyCode <= 57);
    var IsOk = (keyCode == 8 || keyCode == 9 || keyCode == 37 || keyCode == 39 || keyCode == 38 || keyCode == 40 || keyCode == 46)

    // window.status = 'IE: ' + IE + ' keyCode:' + keyCode + 'IsNumPad: ' + IsNumPad + ', IsNumBoard: ' + IsNumBoard + ' IsOk: ' + IsOk;

    if (!(IsNumBoard || IsNumPad || IsOk))
        return false;
}


var isNN = (navigator.appName.indexOf("Netscape") != -1);

function autoTab(input, len, e) {
    var keyCode = (isNN) ? e.which : e.keyCode;
    var filter = (isNN) ? [0, 8, 9] : [0, 8, 9, 16, 17, 18, 37, 38, 39, 40, 46];
    var obj;

    if (input.value.length >= len && !containsElement(filter, keyCode)) {

        input.value = input.value.slice(0, len);

        obj = input.form[(getIndex(input) + 1) % input.form.length];
        if (obj.type != "hidden")
            obj.focus();

    }

    function containsElement(arr, ele) {
        var found = false, index = 0;
        while (!found && index < arr.length)
            if (arr[index] == ele)
                found = true;
            else
                index++;
        return found;
    }

    function getIndex(input) {
        var index = -1, i = 0, found = false;
        while (i < input.form.length && index == -1)
            if (input.form[i] == input)
                index = i;
            else i++;
        return index;
    }

    return true;
}

function showAutoHideMessage(msg) {
    //document.getElementById('spnMessageText').innerText = msg;
    document.getElementById('divAutoHideMessage').style.display = '';    
}

function hideMessage(e) {
    var src;
    if (typeof (e) != "undefined" && e.target)
        src = e.target;
    if (!src && typeof (event) != "undefined" && event != null)
        src = event.srcElement;
    if (src) {
        // make sure source was not success div itself
        while (src) {
            //alert(src.parentNode || src.parentElement);
            if (src.id == 'divAutoHideMessage')
                return;

            if (src.id == 'imgHide')
                break; // 'x' image is within div, but need it to do the hide

            src = src.parentNode || src.parentElement;
        }
    }
    var div = document.getElementById('divAutoHideMessage');
    if (div && div.style.display == '') {
        div.style.display = 'none';        
        cbDetachEvent(document.body, 'onclick', hideMessage);
    }
}

function isMessageShowing() {
    var div = document.getElementById('divAutoHideMessage');
    
    if (div && div.style.display == '')    
        return true;
    else
        return false;
}

function hideEmptyMessage() {
    var div = document.getElementById('divAutoHideMessage');

    if (div && div.style.display == '') {
        var msg = (div.innerText || div.textContent).trim();
        //alert(msg.length);
        if (!msg) {            
            div.style.display = 'none';
        }
    }
}

// cross-browser attach event handler
function cbEventHandler(obj, evt, func) {
    if (obj.attachEvent)
        obj.attachEvent(evt, func);
    else
        obj.addEventListener(evt.slice(2), func, false);
}

// cross-browser detachEvent
function cbDetachEvent(obj, event, func) {
    if (obj.removeEventListener)
        obj.removeEventListener(event.slice(2), func, 0);
    else
        obj.detachEvent(event, func);
}

function messageSetup() {
    hideEmptyMessage();
    if (isMessageShowing()) {
        cbEventHandler(document.body, 'onclick', hideMessage);
    }
}

window.setTimeout("messageSetup()", 1000);

function validateDomesticPhone(phoneNumber)
{
  var phone = getStrDigits(phoneNumber);
  return (phone.length == 10)
}

function getStrDigits(str)
{
  var strOutput = '';
 
  for (i = 0; i < str.length; i++)  
    if (isCharDigit(str.charAt(i)))    
      strOutput += '' + str.charAt(i);       
        
  return strOutput;
}

function isCharDigit(n)
{
  return !isNaN(parseFloat(n)) && isFinite(n);
}