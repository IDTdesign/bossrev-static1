function getTagNameElements( parentElem, tagName )
{
    var elements;
    try 
    { 
        elements = parentElem.getElementsByTagName( tagName ); 
    }
    catch( e ) 
    { 
        elements = [];
        getElementsByTagNameInternal( parentElem, tagName, elements ); 
    }
    return elements;
}

function getElementsByTagNameInternal ( parentElem, tagName, collection )
{
    var activeElem;
    for( var x = 0; x < parentElem.childNodes.length; x++ )
    {
        activeElem = parentElem.childNodes[x];
        if( activeElem.tagName === tagName ) { collection.push( activeElem ); }
        if( activeElem.childNodes.length > 0 && activeElem.nodeType == 1 )
        { this._getElementsByTagNameInternal( activeElem, tagName, collection ); }
    }
}
 
function SelectAccNum(ddl,dvStr)
{
    if (ddl == null || ddl.selectedIndex < 1)
        return;
    var dvAccNum = document.getElementById(dvStr);
    var annNums = getTagNameElements(dvAccNum,'div');
    for (var i=0;i<annNums.length;i++)
    {      
        if(annNums[i].getAttribute("name").toUpperCase().replace(/^s+|s+$/g,"") == ddl.options[ddl.selectedIndex].value.toUpperCase().replace(/^s+|s+$/g,""))
            annNums[i].style.display="block";
        else
            annNums[i].style.display="none";
    }
}

function SelectAccNumStr(ddlStr)
{
    var ddl = document.getElementById(ddlStr);
    SelectAccNum(ddl,'dvWrap');
}

function FillAccNum(ddlState,ddlANStr,ddlANHidnStr)
{
    if (ddlState == null || ddlState.selectedIndex < 1)
        return;
        
    var ddlAccNum = document.getElementById(ddlANStr);
    var ddlANHidn = document.getElementById(ddlANHidnStr);
    
    ddlAccNum.selectedIndex = 0;
    
    var length = ddlAccNum.length;
    for (var i=1;i<length;i++)
        ddlAccNum.remove(1);
    for (var i=1;i<ddlANHidn.length;i++)
    {
        if(ddlANHidn.options[i].value.toUpperCase().replace(/^s+|s+$/g,"") == ddlState.options[ddlState.selectedIndex].value.toUpperCase().replace(/^s+|s+$/g,""))
        {
            o = document.createElement('option');
            o.text=ddlANHidn.options[i].text;
            o.value=ddlANHidn.options[i].value;
            try
            {
                ddlAccNum.add(o,null); // standards compliant
            }
            catch(ex)
            {
                ddlAccNum.add(o); // IE only
            }
        }
    }
    
    
}

function FillAccNumStr(ddlStStr,ddlAnStr,ddlANHidnStr)
{
    var ddlState = document.getElementById(ddlStStr);
    var ddlAccNum = document.getElementById(ddlAnStr);
    var ddlAccNumHdn = document.getElementById(ddlANHidnStr);
    if (ddlState == null || ddlAccNum==null)
        return;
    FillAccNum(ddlState,ddlAnStr,ddlANHidnStr);
}

function SelectAni(dll,txtStr)
{
    var txtAni = document.getElementById(txtStr);
    if (dll.selectedIndex > 0)
        txtAni.value = dll.options[dll.selectedIndex].text;
    else
        txtAni.value = "";
}

function SelectAN(num,txtBoxId)
{
    var txtBx = document.getElementById(txtBoxId);
    if (txtBx != null)
        txtBx.value = num;
}