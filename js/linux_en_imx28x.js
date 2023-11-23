var DEBUG = false; // false for release


var separator = "\t";  // used for string=> multiple select list

// ====================================================== Submit Functions

function radioTable(fObj,radioObj,act_str)
{
	if (radioSelectedIndex(radioObj) > -1)
			stdAction(fObj,act_str);
	else alert("No entry selected. \nClick a radio button to select an entry.");
}

function stdAction(fObj,act_str)
{
	fObj.todo.value = act_str;
	dataToHidden(fObj);
	//submitDemo(fObj);
        fObj.submit();
}


//========================================================= Data Transfer Functions

function optionSelected(sel_obj) // return true or false
{
	return (sel_obj.selectedIndex > -1 && sel_obj.selectedIndex < sel_obj.options.length) ? true : false;
}

function getSelIndex(sel_object, sel_text)
{
	if (sel_text.length == 0)
		return 0;
	var size = sel_object.options.length;
	for (var i = 0; i < size; i++)
	{
		if ( (sel_object.options[i].text == sel_text) || (sel_object.options[i].value == sel_text) )
			return(i);
	}
	if (DEBUG)
		alert("DEBUG: " + sel_object.name + " (Select List) has invalid value " + sel_text + "  Selecting 1st item instead");
	return 0;  // if no match
}

function getSelected(sel_obj)  // single select. Returns value. If value blank, return text
{
	var index = sel_obj.selectedIndex;
	if (index >= 0)
		return (sel_obj.options[index].value != "") ? sel_obj.options[index].value : sel_obj.options[index].text;
	else return "";
}

function getMultiSelected(sel_obj)  // multi select. Always use text, not value
{
	var size = sel_obj.options.length;
	var i;
	var str = "";
	if(isNaN(size))
		return str;
	if(size == 0)
		return str;
	str = separator;
	for(i = 0; i < size; i++)
		if (sel_obj.options[i].selected)
			str+= sel_obj.options[i].text + separator;
	return str;
}


function setSelected(sel_obj,list) // list has multiple items from select obj
{
	var selSize = sel_obj.options.length;
	var startTextPos;  	var startValuePos;
	var textChar; 	        var valueChar;
	for ( var i =0 ; i < selSize; i++)
	{
		startTextPos = -1;
		startValuePos = -1;
		sel_obj.options[i].selected = false;
		startTextPos = list.indexOf(separator + sel_obj.options[i].text + separator);
		if(sel_obj.options[i].value.length > 0)
			startValuePos = list.indexOf(separator + sel_obj.options[i].value + separator);
		if (startTextPos > -1)
			sel_obj.options[i].selected = true;
		if (startValuePos > -1)
			sel_obj.options[i].selected = true;
	}
}

function radioSelectedIndex(radio_object) // index of selected item, -1 if none
{
	if (!radio_object)
		return -1;
	var size = radio_object.length;
	if(isNaN(size))
	{
		if(radio_object.checked == true)
			return 0;
		else
			return -1;
	}
	for (var i = 0; i < size; i++)
	{
		if(!(radio_object[i]))
			return (radio_object.checked) ? 0 : -1;
		if (radio_object[i].checked)
			return(i);
	}
	if(radio_object.checked == true)
		return 0;
	else
		return -1;
}


function getRadioCheckedValue(radio_object)   // value of selected item, "" if none
{
	var index = 0;
	if (!radio_object)
		return "";
	var size = radio_object.length;
	if(isNaN(size))
	{
		if (radio_object.checked == true)
			return radio_object.value;
		else
			return "";
	}
	for (var i = 0; i < size; i++)
	{
		if(!(radio_object[i]))
			continue;
		if (radio_object[i].checked == true)
			return(radio_object[i].value);
	}
	if (radio_object.checked == true)
		return radio_object.value;
	else
		return "";
}

function getRadioIndex(radio_object, checked_value)  // find index matching checkecd_value, 0 if no match
{
	if (!radio_object)
		return 0;
	if(radio_object.value == checked_value)
		return 0;
	var size = radio_object.length;
	if(isNaN(size))
		return 0;
	for (var i = 0; i < size; i++)
	{
		if(!(radio_object[i]))
			continue;
		if (radio_object[i].value == checked_value)
			return  i;
	}
	if (DEBUG)
		alert("DEBUG: " + radio_object.name + " (Radio button) has invalid value " + checked_value + "  Selecting 1st item instead");
	return  0;   // if no match
}

function getvalue(field_obj)
{
	var field_type = field_obj.type;
	if (field_type == "text" || field_type == "password" || field_type == "hidden" || field_type == "textarea")
		return field_obj.value;
	else if (field_type == "select-one")
		return getSelected(field_obj);
	else if (field_type == "select-multiple")
		return getMultiSelected(field_obj);
	else if (field_type  == "checkbox")
		return (field_obj.checked) ? "enable" : "disable" ;
	else if (field_type  == "radio")
		return getRadioCheckedValue(field_obj);
	else if (field_obj.length > 0 ) // must be radio, but type shows as undefined
		return getRadioCheckedValue(field_obj);
	else
		return field_obj.value;
}


function ip1to4(ipaddr,ip1,ip2,ip3,ip4)
{
//  alert("name: " + ipaddr.name);
	var len;
	var tmp;
	var all;
	all=ipaddr.value;

	//ip1
	len=all.length;
	tmp=all.indexOf(".");
	ip1.value=all.substring(0,tmp);

	//ip2
	all=all.substring(tmp+1,len);
	len=all.length;
	tmp=all.indexOf(".");
	ip2.value=all.substring(0,tmp);

	//ip3
	all=all.substring(tmp+1,len);
	len=all.length;
	tmp=all.indexOf(".");
	ip3.value=all.substring(0,tmp);

	//ip4
	all=all.substring(tmp+1,len);
	ip4.value=all;
 }

function ip4to1(ipaddr,ip1,ip2,ip3,ip4)
{
	if (ip1.value.length>0)
		ipaddr.value=ip1.value+"."+ip2.value+"."+ip3.value+"."+ip4.value;
	else
		ipaddr.value="";
}

function mac1to6(macaddr,mac1,mac2,mac3,mac4,mac5,mac6)
{

	var len;
	var tmp;
	var all;
	all=macaddr.value;

	//mac1
	len=all.length;
	tmp=all.indexOf(":");
	mac1.value=all.substring(0,tmp);

	//mac2
	all=all.substring(tmp+1,len);
	len=all.length;
	tmp=all.indexOf(":");
	mac2.value=all.substring(0,tmp);

	//mac3
	all=all.substring(tmp+1,len);
	len=all.length;
	tmp=all.indexOf(":");
	mac3.value=all.substring(0,tmp);

    	//mac4
	all=all.substring(tmp+1,len);
	len=all.length;
	tmp=all.indexOf(":");
	mac4.value=all.substring(0,tmp);

	//mac5
	all=all.substring(tmp+1,len);
	len=all.length;
	tmp=all.indexOf(":");
	mac5.value=all.substring(0,tmp);

	//mac6
	all=all.substring(tmp+1,len);
	mac6.value=all;
 }

function mac6to1(macaddr,mac1,mac2,mac3,mac4,mac5,mac6)
{
	if (mac1.value.length>0)
		macaddr.value=mac1.value+":"+mac2.value+":"+mac3.value+":"+mac4.value+":"+mac5.value+":"+mac6.value;
	else
		macaddr.value="";
}

function dataToVisible(form_obj)  // both hidden & visible fields in same form
{
	var form_size = form_obj.elements.length;
	var sourceField; 	var last_name; 	 var radioIndex;  var baseRef;

	for (var i = 0; i < form_size; i++)
	{
 		if (form_obj.elements[i].name.substr(0,3)=="c4_")
 		{
			baseRef = "form_obj." + form_obj.elements[i].name.substr(3);
 			ip1to4(form_obj.elements[i], eval(baseRef+"1"), eval(baseRef+"2"), eval(baseRef+"3"), eval(baseRef+"4"));
		}

		if (form_obj.elements[i].name.substr(0,3)=="c6_")
 		{
			baseRef = "form_obj." + form_obj.elements[i].name.substr(3);
 			mac1to6(form_obj.elements[i], eval(baseRef+"1"), eval(baseRef+"2"), eval(baseRef+"3"), eval(baseRef+"4"), eval(baseRef+"5"), eval(baseRef+"6"));
		}

		sourceField = eval("form_obj.h_" + form_obj.elements[i].name);
		if(!(sourceField))
			continue;
		if(sourceField.value == "")
			continue;
		if (form_obj.elements[i].type=="select-one")
			form_obj.elements[i].selectedIndex = getSelIndex(form_obj.elements[i], sourceField.value);
		if (form_obj.elements[i].type=="select-multiple")
			setSelected(form_obj.elements[i],sourceField.value);
		if (form_obj.elements[i].type == "checkbox")
			form_obj.elements[i].checked = (sourceField.value == "enable");
		if (form_obj.elements[i].type == "radio")
		{
			if (last_name == form_obj.elements[i].name)
				continue; // already done this one
			last_name = form_obj.elements[i].name;
			radioIndex = getRadioIndex(form_obj.elements[form_obj.elements[i].name],sourceField.value);
			if(form_obj.elements[form_obj.elements[i].name][radioIndex])
				form_obj.elements[form_obj.elements[i].name][radioIndex].checked = true;
			else
				form_obj.elements[form_obj.elements[i].name].checked = true;
		}
	}
}

function dataToHidden(form_obj)  // both hidden & visible fields in same form
{
	var form_size = form_obj.elements.length;
	var destField; 	var last_name; 	 var radioIndex;  var baseRef;

	for (var i = 0; i < form_size; i++)
	{
 		if (form_obj.elements[i].name.substr(0,3)=="c4_")
 		{
			baseRef = "form_obj." + form_obj.elements[i].name.substr(3);
 			ip4to1(form_obj.elements[i], eval(baseRef+"1"), eval(baseRef+"2"), eval(baseRef+"3"), eval(baseRef+"4"));
		}

		if (form_obj.elements[i].name.substr(0,3)=="c6_")
 		{
			baseRef = "form_obj." + form_obj.elements[i].name.substr(3);
 			mac6to1(form_obj.elements[i], eval(baseRef+"1"), eval(baseRef+"2"), eval(baseRef+"3"), eval(baseRef+"4"), eval(baseRef+"5"), eval(baseRef+"6"));
		}
		destField = eval("form_obj.h_" + form_obj.elements[i].name);
		if(!(destField))
			continue;
		if (form_obj.elements[i].type=="select-one")
			destField.value = getSelected(form_obj.elements[i]);
		if (form_obj.elements[i].type=="select-multiple")
			destField.value = getMultiSelected(form_obj.elements[i]);
		if (form_obj.elements[i].type == "checkbox")
			destField.value = (form_obj.elements[i].checked) ? "enable" : "disable";
		if (form_obj.elements[i].type == "radio")
		{
			if (last_name == form_obj.elements[i].name)
				continue; // already done this one
			last_name = form_obj.elements[i].name;
			destField.value =  getRadioCheckedValue(form_obj.elements[form_obj.elements[i].name]);
		}

	}
}

// =================================== Development ========================

function show_data(form_obj)
// shows form information - used only for debugging
{
    var form_size = form_obj.elements.length;
    var debug_win = window.open("","debug","width=540,height=360,menubar=yes,scrollbars=yes,resizable=yes");

    debug_win.document.open();
    debug_win.document.writeln('<html><head><title>Debugging Window</title></head>');
    debug_win.document.writeln('<body><h2>Form being submitted</h2>');
    debug_win.document.writeln('<p>Form Name: ' + form_obj.name);
    debug_win.document.writeln('<br>Form Action: ' + form_obj.action);
    debug_win.document.writeln('<br>Form Target: ' + form_obj.target);
    debug_win.document.writeln('</p><h3>Form Data</h3><p>Following table shows ALL fields, even if not submitted.</p>');
    debug_win.document.writeln('<p><table border=1><tr bgcolor="#cccccc"><th nowrap>Field Name</th><th>Type</th><th>Value</th></tr>');
    for (var i = 0; i < form_size; i++)
    {
        debug_win.document.writeln('<tr><td nowrap>' + form_obj.elements[i].name + '</td>');
        debug_win.document.writeln('<td nowrap>' + form_obj.elements[i].type + '</td>');
        debug_win.document.writeln('<td nowrap>');
        if ((form_obj.elements[i].type=="select-one") || (form_obj.elements[i].type=="select-multiple"))
            debug_win.document.writeln('Selected item: ' + form_obj.elements[i].options[form_obj.elements[i].selectedIndex].text);
        else
            debug_win.document.writeln(form_obj.elements[i].value);
        if ((form_obj.elements[i].type == "radio") && (form_obj.elements[i].checked))
            debug_win.document.write(' (Selected)');
        if ((form_obj.elements[i].type == "checkbox") && (form_obj.elements[i].checked))
            debug_win.document.writeln(' (Checked)');
        debug_win.document.writeln('</td></tr>');
    }
    debug_win.document.writeln('</table></body></html>');
    debug_win.document.close();
}

function submitDemo(form_obj)
{
    show_data(form_obj);
}

function writeForm(form_obj)
// shows form information - used for developement
{
    var form_size = form_obj.elements.length;
    var hfieldStr = ""; var hdemoStr = ""; var last_name = "";
    var i; var j;

    var debug_win = window.open("","form_def","width=680,height=360,menubar=yes,scrollbars=yes,resizable=yes");

    debug_win.document.open();
    debug_win.document.writeln('<html><head><title>Form Definition Window</title></head>');
    debug_win.document.writeln('<p>Form Name: ' + form_obj.name);
    debug_win.document.writeln('<br>Form Action: ' + form_obj.action);
    debug_win.document.writeln('<br>Form Target: ' + form_obj.target);
    debug_win.document.writeln('<p>Following table shows checkboxes, radio buttons, selects fields.</p>\n<pre>');
    for (var i = 0; i < form_size; i++)
    {
        if (form_obj.elements[i].type=="select-one")
        {
            debug_win.document.write(form_obj.elements[i].type + " : " + form_obj.elements[i].name + " &nbsp; ");
            for(j=0; j < form_obj.elements[i].options.length; j++)
                debug_win.document.write(" [" + j + "]" + form_obj.elements[i].options[j].text);
            debug_win.document.writeln();
            hfieldStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="@'+ form_obj.elements[i].name + '#">';
            hdemoStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="' + form_obj.elements[i].options[1].text + '">';
        }
        else if (form_obj.elements[i].type=="select-multiple")
        {
            debug_win.document.write(form_obj.elements[i].type + " : " + form_obj.elements[i].name + " &nbsp; ");
            for(j=0; j < form_obj.elements[i].options.length; j++)
                debug_win.document.write(" [" + j + "]" + form_obj.elements[i].options[j].text);
            debug_win.document.writeln();
            hfieldStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="@'+ form_obj.elements[i].name + '#">';
            hdemoStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="' + form_obj.elements[i].options[1].value + '">';
        }
        else if (form_obj.elements[i].type == "radio")
        {
            if (last_name == form_obj.elements[i].name)
                continue; // already done this one
            else
            {
                last_name = form_obj.elements[i].name;
                debug_win.document.write(form_obj.elements[i].type + " : " + form_obj.elements[i].name + " &nbsp; ");
                for (var j = 0; j < form_obj.elements[form_obj.elements[i].name].length; j++)
                    debug_win.document.write(" [" + j + "]" + form_obj.elements[form_obj.elements[i].name][j].value);
                debug_win.document.writeln();
                hfieldStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="@'+ form_obj.elements[i].name + '#">';
                hdemoStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="' +  form_obj.elements[form_obj.elements[i].name][1].value + '">';
            }
        }
        else if (form_obj.elements[i].type == "checkbox")
        {
            debug_win.document.writeln(form_obj.elements[i].type + " : " + form_obj.elements[i].name);
            hfieldStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="@' + form_obj.elements[i].name + '#">';
            hdemoStr += '\n<input type="hidden" name="h_' + form_obj.elements[i].name + '" value="enable">';
        }
        else ;  // no action
    }
    debug_win.document.writeln('\n<!-- DemoStart -->' + hdemoStr + '\n<!-- DemoEnd -->');
    debug_win.document.writeln('\n<!-- ServerStart\n' + hfieldStr + '\nServerEnd -->');
    debug_win.document.writeln('</pre></body></html>');
    debug_win.document.close();
}

function isMatch(str1,str2)
{
    if(str2 == "") return true;
    var index = str1.indexOf(str2);
    if(index==-1) return true;
    return false;
}

function mmLoadMenus()
{
    if (window.mm_menu_0) return;

    window.mm_menu_0 = new Menu("root",132,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_0.addMenuItem("Port Config","location='setup.cgi?next_file=speed_en.html'");
	mm_menu_0.addMenuItem("DDM","location='setup.cgi?next_file=ddm_en.html'");
    mm_menu_0.addMenuItem("Rate Control","location='setup.cgi?next_file=rate_en.html'");
    mm_menu_0.addMenuItem("Storm Control","location='setup.cgi?next_file=storm_en.html'");
    mm_menu_0.hideOnMouseOut=true;
    mm_menu_0.bgColor='#999999';
    mm_menu_0.menuBorder=1;
    mm_menu_0.menuLiteBgColor='#FFFFFF';
    mm_menu_0.menuBorderBgColor='#FFFFFF';

    window.mm_menu_1 = new Menu("root",138,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_1.addMenuItem("QoS","location='setup.cgi?next_file=qos_en.html'");
    mm_menu_1.addMenuItem("VLAN","location='setup.cgi?next_file=vlan_en.html'");
	mm_menu_1.addMenuItem("MAC VLAN","location='setup.cgi?next_file=mac_vlan_en.html'");
	mm_menu_1.addMenuItem("VLAN MAP","location='setup.cgi?next_file=vlan_map.html'");
	mm_menu_1.addMenuItem("IP VLAN","location='setup.cgi?next_file=ip_vlan_en.html'");
	mm_menu_1.addMenuItem("Pro VLAN","location='setup.cgi?next_file=pro_vlan_en.html'");
    mm_menu_1.addMenuItem("IGMP Snooping","location='setup.cgi?next_file=igmp_en.html'");
    mm_menu_1.addMenuItem("Static Multicast List","location='setup.cgi?next_file=fwd_en.html'");
	mm_menu_1.addMenuItem("LLDP","location='setup.cgi?next_file=lldp_en.html'");
	mm_menu_1.addMenuItem("Portisolate","location='setup.cgi?next_file=proport_en.html'");
	//mm_menu_1.addMenuItem("Port Protect","location='setup.cgi?next_file=backup_port_en.html'");
	mm_menu_1.addMenuItem("Black&White List","location='setup.cgi?next_file=mac_black_white_en.html'");
    mm_menu_1.hideOnMouseOut=true;
    mm_menu_1.bgColor='#999999';
    mm_menu_1.menuBorder=1;
    mm_menu_1.menuLiteBgColor='#FFFFFF';
    mm_menu_1.menuBorderBgColor='#FFFFFF';
	//mm_menu_1.MenuItem[0].style.left=20;

    window.mm_menu_2 = new Menu("root",70,20,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_2.addMenuItem("Port Trunking","location='setup.cgi?next_file=trunk_en.html'");
    mm_menu_2.addMenuItem("RSTP","location='setup.cgi?next_file=rstp_en.html'");
	mm_menu_2.addMenuItem("LACP","location='setup.cgi?next_file=lacp_en.html'");
    mm_menu_2.hideOnMouseOut=true;
    mm_menu_2.bgColor='#999999';
    mm_menu_2.menuBorder=1;
    mm_menu_2.menuLiteBgColor='#FFFFFF';
    mm_menu_2.menuBorderBgColor='#FFFFFF';

    window.mm_menu_4 = new Menu("root",126,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_4.addMenuItem("User Password","location='setup.cgi?next_file=user_en.html'");
    mm_menu_4.addMenuItem("Access Control","location='setup.cgi?next_file=access_en.html'");
    mm_menu_4.addMenuItem("Port Authentication","location='setup.cgi?next_file=auth_en.html'");
    mm_menu_4.addMenuItem("Authentication DB","location='setup.cgi?next_file=data_en.html'");
    mm_menu_4.addMenuItem("MAC Port Locking","location='setup.cgi?next_file=lock_en.html'");
	mm_menu_4.addMenuItem("MAC Learn Limit","location='setup.cgi?next_file=learn_limit_en.html'");
    mm_menu_4.hideOnMouseOut=true;
    mm_menu_4.bgColor='#999999';
    mm_menu_4.menuBorder=1;
    mm_menu_4.menuLiteBgColor='#FFFFFF';
    mm_menu_4.menuBorderBgColor='#FFFFFF';

    window.mm_menu_5 = new Menu("root",92,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_5.addMenuItem("SNMP","location='setup.cgi?next_file=snmp_en.html'");
	mm_menu_5.addMenuItem("RMON","location='setup.cgi?next_file=rmon_en.html'");
    mm_menu_5.hideOnMouseOut=true;
    mm_menu_5.bgColor='#999999';
    mm_menu_5.menuBorder=1;
    mm_menu_5.menuLiteBgColor='#FFFFFF';
    mm_menu_5.menuBorderBgColor='#FFFFFF';

    window.mm_menu_6 = new Menu("root",118,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_6.addMenuItem("Time Config","location='setup.cgi?next_file=time_en.html'");
    mm_menu_6.addMenuItem("Device Address","location='setup.cgi?next_file=ip_en.html'");
    mm_menu_6.addMenuItem("System Information","location='setup.cgi?next_file=system_en.html'");
    mm_menu_6.addMenuItem("System Log","location='setup.cgi?next_file=log_en.html'");
    mm_menu_6.addMenuItem("File Management","location='setup.cgi?next_file=config_en.html'");
    mm_menu_6.hideOnMouseOut=true;
    mm_menu_6.bgColor='#999999';
    mm_menu_6.menuBorder=1;
    mm_menu_6.menuLiteBgColor='#FFFFFF';
    mm_menu_6.menuBorderBgColor='#FFFFFF';

    window.mm_menu_7 = new Menu("root",113,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_7.addMenuItem("Port Mirroring","location='setup.cgi?next_file=mirror_en.html'");
    mm_menu_7.addMenuItem("Network Diagnosis","location='setup.cgi?next_file=diag_en.html'");
    mm_menu_7.hideOnMouseOut=true;
    mm_menu_7.bgColor='#999999';
    mm_menu_7.menuBorder=1;
    mm_menu_7.menuLiteBgColor='#FFFFFF';
    mm_menu_7.menuBorderBgColor='#FFFFFF';

    window.mm_menu_8 = new Menu("root",94,18,"����, SimSun, NSimSun",12,"#000000","#FFFFFF","#CCCCCC","#999999","left","middle",3,0,1000,-5,7,true,true,true,0,true,true);
    mm_menu_8.addMenuItem("Receive Frame","location='setup.cgi?next_file=rx_en.html'");
    mm_menu_8.addMenuItem("Send Frame","location='setup.cgi?next_file=tx_en.html'");
    mm_menu_8.addMenuItem("Sum Statistics","location='setup.cgi?next_file=status_en.html'");
    mm_menu_8.addMenuItem("MAC Address List","location='setup.cgi?next_file=mac_en.html'");
    mm_menu_8.hideOnMouseOut=true;
    mm_menu_8.bgColor='#999999';
    mm_menu_8.menuBorder=1;
    mm_menu_8.menuLiteBgColor='#FFFFFF';
    mm_menu_8.menuBorderBgColor='#FFFFFF';

    mm_menu_8.writeMenus();
} // mmLoadMenus()
//-----------Main Menu hubo --------------------------------------------//
     var className="top";
	 var class_linkName="top_link";
	 var class_subName="sub";
	 
	 //--------------- ������������ ------------//
     var mainLayer=new Array("System Status","Port Config","Link Layer","Link Backup","Access Control","Remote Monitor","Statistics","Network Diagnosis","Management");//��������Ŀ
	 var mainLayer_Link=new Array("setup.cgi?next_file=view_en.html","setup.cgi?next_file=speed_en.html","setup.cgi?next_file=qos_en.html","setup.cgi?next_file=erps_en.html","setup.cgi?next_file=user_en.html","setup.cgi?next_file=snmp_cfg_en.html","setup.cgi?next_file=rx_en.html","setup.cgi?next_file=mirror_en.html","setup.cgi?next_file=time_en.html")
	 
	 var subLayer0=new Array("");
	 var subLayerHttp0=new Array("");
	 
	 var subLayer1=new Array("Port Config","DDM", "Rate Control", "Storm Control"); 
     var subLayerHttp1=new Array("setup.cgi?next_file=speed_en.html","setup.cgi?next_file=ddm_en.html","setup.cgi?next_file=rate_en.html","setup.cgi?next_file=storm_en.html");
	 
	 var subLayer2=new Array("QoS","VLAN","MAC VLAN","VLAN MAP","IP VLAN","Pro VLAN","IGMP Snooping","Static Multicast List","LLDP","Portisolate","MAC ACL","IP ACL","Black&White Lists"); 
     var subLayerHttp2=new Array("setup.cgi?next_file=qos_en.html","setup.cgi?next_file=vlan_en.html","setup.cgi?next_file=mac_vlan_en.html","setup.cgi?next_file=vlan_map_en.html","setup.cgi?next_file=ip_vlan_en.html",
	     "setup.cgi?next_file=pro_vlan_en.html","setup.cgi?next_file=igmp_en.html","setup.cgi?next_file=fwd_en.html","setup.cgi?next_file=lldp_en.html","setup.cgi?next_file=proport_en.html",
		 "setup.cgi?next_file=mac_acl_en.html","setup.cgi?next_file=ip_acl_en.html","setup.cgi?next_file=mac_black_white_en.html");
	 
	 var subLayer3=new Array("ERPS","Port Trunking","RSTP","LACP");
     var subLayerHttp3=new Array("setup.cgi?next_file=erps_en.html","setup.cgi?next_file=trunk_en.html","setup.cgi?next_file=rstp_en.html","setup.cgi?next_file=lacp_en.html");
	 
	 var subLayer4=new Array("User Password","Access Control","Port Authentication","Authentication DB","MAC Port Locking","MAC Learn Limit"); 
     var subLayerHttp4=new Array("setup.cgi?next_file=user_en.html","setup.cgi?next_file=access_en.html","setup.cgi?next_file=auth_en.html","setup.cgi?next_file=data_en.html","setup.cgi?next_file=lock_en.html","setup.cgi?next_file=learn_limit_en.html");
	 
	 var subLayer5=new Array("SNMP Config","RMON Config"); 
     var subLayerHttp5=new Array("setup.cgi?next_file=snmp_cfg_en.html","setup.cgi?next_file=rmon_en.html");
	 	 
	 var subLayer6=new Array("Receive Frame","Send Frame","Sum Statistics","MAC Address List"); 
     var subLayerHttp6=new Array("setup.cgi?next_file=rx_en.html","setup.cgi?next_file=tx_en.html","setup.cgi?next_file=status_en.html","setup.cgi?next_file=mac_en.html");

	 var subLayer7=new Array("Port Mirroring","Network Diagnosis"); 
     var subLayerHttp7=new Array("setup.cgi?next_file=mirror_en.html","setup.cgi?next_file=diag_en.html");

	 var subLayer8=new Array("Time Config","Device Address","System Information","System Log","File Management"); 
     var subLayerHttp8=new Array("setup.cgi?next_file=time_en.html","setup.cgi?next_file=ip_en.html","setup.cgi?next_file=system_en.html","setup.cgi?next_file=log_en.html","setup.cgi?next_file=config_en.html");
	 
	 
	 function init_menu()
	 {
		
	 	document.write("<div id='navigation'>");
		document.write("<ul class='menu'>");
		for(j=0;j<mainLayer.length;j++)
		{
			createSubLayer(j);
		}
		document.write("</ul>");
		document.write("</div>");
		
		initMenu();
	 }
	 
	 function createSubLayer(num)
	 {
	    var subLayerList=eval("subLayer"+num);
        var subLayerHttpList=eval("subLayerHttp"+num);
		
	 	document.write("<li class='"+className+"'><a href='"+mainLayer_Link[num]+"' class='"+class_linkName+"'><span>"+mainLayer[num]+"</span></a>");
		if(subLayerList[0]=="")
		{
		   	document.write("</li>");
		}
		else
		{	
			document.write("<div><ul class='"+class_subName+"'>");
			for(h=0;h<subLayerList.length;h++)
			{
				document.write("<li><a href='"+subLayerHttpList[h]+"'>"+subLayerList[h]+"</a></li>");
			}
			document.write("</ul></div></li>");
		}
	 }
            
   function initMenu() 
   {
       var theUL = document.getElementById("navigation").getElementsByTagName("ul")[0];
       var theULChilds = theUL.childNodes;
  
      for (var i = 0; i < theULChilds.length; i++) 
	  {
           if (theULChilds[i].tagName == "LI"||theULChilds[i].tagName == "li") 
		   {
              var theLINode = theULChilds[i];
              if (theLINode.getElementsByTagName("ul").length > 0)
			  {
				  setMouseActions(theLINode); 
				  
              }
           }
      }
   }

   function setMouseActions(node) 
   {
         node.onmouseover = function()
		 {
             this.getElementsByTagName("ul")[0].style.display = "block";
         };
     
         node.onmouseout = function() 
		 {
             this.getElementsByTagName("ul")[0].style.display = "none";
         };
   } 

   function show_language_flag()
   {
   		var cf = document.forms[0];
		var changeLanguage = document.getElementById("changeLanguage");

		if(cf.enableEnglish.value != '2' && cf.this_file.value != "reboot_en.html")
		{
			changeLanguage.style.display = "inline-block";
		}
   }
            //-->
