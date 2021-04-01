

function restart()
{
    location.reload();
}
//////////////////////navnext start here////////////////////////////////////

function navNext0()
{
document.getElementById("canvas0").style.visibility="hidden";

document.getElementById("canvas1").style.visibility="visible";

}

function navNext1()
{
document.getElementById("canvas1").style.visibility="hidden";

document.getElementById("canvas1a").style.visibility="visible";

}

function navNext1a()
{
document.getElementById("canvas1a").style.visibility="hidden";

document.getElementById("canvas1b").style.visibility="visible";

}

function navNext1b()
{
document.getElementById("canvas1b").style.visibility="hidden";

document.getElementById("canvas1c").style.visibility="visible";


}


function navNext1c()
{
document.getElementById("canvas1c").style.visibility="hidden";

document.getElementById("canvas2").style.visibility="visible";


}

function navNext2()
{
document.getElementById("canvas2").style.visibility="hidden";

document.getElementById("canvas3").style.visibility="visible";

  setTimeout(function()

{$("#note2").delay(400).slideDown("slow");
document.getElementById("re_arw").style.visibility="visible";
document.getElementById("restart").style.visibility="visible";
},2000);
}

// function restart()
// {

// 	 location.reload();
// }


function add_stand()
{

document.getElementById('arw1').style.visibility="hidden";
document.getElementById('add_stand').style.visibility="hidden";
document.getElementById('stand_canvas1').style.visibility="visible";
document.getElementById('stand_canvas1').style.animation="stand 2s forwards";

  setTimeout(function()

	{
document.getElementById('s1_1').style.visibility="hidden";
document.getElementById('s1_2').style.visibility="visible";
document.getElementById('arw2').style.visibility="visible";
document.getElementById('add_aluminium_bar').style.visibility="visible";

	},2000);

}

function add_aluminium_bar()
{
document.getElementById('arw2').style.visibility="hidden";
document.getElementById('add_aluminium_bar').style.visibility="hidden";
document.getElementById('aluminium_canvas1').style.visibility="visible";
document.getElementById('aluminium_canvas1').style.animation="aluminium_canvas1 1s forwards";

  setTimeout(function()

	{
document.getElementById('s1_2').style.visibility="hidden";
document.getElementById('s1_3').style.visibility="visible";
document.getElementById('arw3').style.visibility="visible";
document.getElementById('add_cellotap').style.visibility="visible";

	},1000);

}

function add_cellotap()
{
document.getElementById('arw3').style.visibility="hidden";
document.getElementById('add_cellotap').style.visibility="hidden";
document.getElementById('cellotap_canvas1').style.visibility="visible";
document.getElementById('cellotap_canvas1').style.animation="cellotap_canvas1 1s forwards";
document.getElementById('paper_cutter_canvas1').style.visibility="visible";
document.getElementById('paper_cutter_canvas1').style.animation="paper_cutter_canvas1 1s forwards";
  setTimeout(function()

	{
document.getElementById('trans_tap_canvas1').style.visibility="visible";
document.getElementById('ar1_canvas1').style.visibility="visible";
document.getElementById('s1_3').style.visibility="hidden";
document.getElementById('s1_4').style.visibility="visible";

},1000);
}


function trans_tap()
{
document.getElementById('trans_tap_canvas1').style.visibility="hidden";
document.getElementById('ar1_canvas1').style.visibility="hidden";
document.getElementById('cellotap_canvas1').style.animation="cellotap_stick1_canvas1 0.5s forwards";

setTimeout(function()
{
document.getElementById('div_tap').style.visibility="visible";
document.getElementById('cellotap_canvas1').style.visibility="hidden";
document.getElementById('cellotap1_canvas1').style.visibility="visible";
document.getElementById('cellotap1_canvas1').style.animation="cellotap_stick2_canvas1 1s forwards";
document.getElementById('div_tap').style.animation="div_tap 1s forwards";
setTimeout(function()
{

document.getElementById('trans_cutter_canvas1').style.visibility="visible";
document.getElementById('ar2_canvas1').style.visibility="visible";
document.getElementById('s1_4').style.visibility="hidden";
document.getElementById('s1_5').style.visibility="visible";

},1000);
},1000);
}

function trans_cutter()
{
document.getElementById('ar2_canvas1').style.visibility="hidden";
document.getElementById('trans_cutter_canvas1').style.visibility="hidden";
document.getElementById('paper_cutter_canvas1').style.visibility="hidden";
document.getElementById('paper_cutter_hand').style.visibility="visible";
document.getElementById('paper_cutter_hand').style.animation="paper_cutter_hand 2s forwards";
document.getElementById('div_tap').style.animation="div_tap_back 2.3s forwards";
setTimeout(function()
{
document.getElementById('cellotap1_canvas1').style.visibility="hidden";
document.getElementById('cellotap2_canvas1').style.visibility="visible";
document.getElementById('paper_cutter_hand').style.animation="paper_cutter_hand1 1s forwards";
setTimeout(function()
{
document.getElementById('paper_cutter_hand').style.visibility="hidden";
document.getElementById('paper_cutter2_canvas1').style.visibility="visible";
document.getElementById('trans_tap_back').style.visibility="visible";
document.getElementById('ar3_canvas1').style.visibility="visible";
document.getElementById('s1_5').style.visibility="hidden";
document.getElementById('s1_6').style.visibility="visible";

},1000);
},2000);
}

function trans_tap_back()

{
document.getElementById('ar3_canvas1').style.visibility="hidden";
document.getElementById('trans_tap_back').style.visibility="hidden";
document.getElementById('cellotap2_canvas1').style.animation="cellotap_stick3_canvas1 1s forwards";
setTimeout(function()
{
document.getElementById('arw4').style.visibility="visible";
document.getElementById('add_pzt').style.visibility="visible";

document.getElementById('s1_6').style.visibility="hidden";
document.getElementById('s1_7').style.visibility="visible";
},1000);
}


function add_pzt()
{
document.getElementById('arw4').style.visibility="hidden";
document.getElementById('add_pzt').style.visibility="hidden";
document.getElementById('pzt1_canvas1').style.visibility="visible";
document.getElementById('pzt1_canvas1').style.animation="pzt1_canvas1 1.5s forwards";
setTimeout(function()
{
document.getElementById('arw6').style.visibility="visible";
document.getElementById('add_bond').style.visibility="visible";	
document.getElementById('s1_7').style.visibility="hidden";
document.getElementById('s1_8').style.visibility="visible";
},1500);
}


function add_bond()
{
document.getElementById('arw6').style.visibility="hidden";
document.getElementById('add_bond').style.visibility="hidden";	
document.getElementById('bond').style.visibility="visible";	
document.getElementById('bond').style.animation="bond_add 1s forwards";
document.getElementById('brushfill').style.visibility="visible";	
document.getElementById('brushfill').style.animation="brushfill_add 1s forwards";
setTimeout(function()
{
document.getElementById('trans_brush').style.visibility="visible";
document.getElementById('ar4_canvas1').style.visibility="visible";
document.getElementById('s1_8').style.visibility="hidden";
document.getElementById('s1_9').style.visibility="visible";
},1000);
}

function trans_brush()
{
document.getElementById('trans_brush').style.visibility="hidden";
document.getElementById('ar4_canvas1').style.visibility="hidden";
document.getElementById('brushfill').style.visibility="hidden";
document.getElementById('brushfill_hand').style.visibility="visible";

document.getElementById('brushfill_hand').style.animation="brushfill_animate 1s forwards";

setTimeout(function()
{
document.getElementById('brushfill_hand').style.animation="brushfill_animate1 1s forwards";
document.getElementById('greaseeffect').style.visibility="visible";	
document.getElementById('greaseeffect').style.animation="greese_effect 1s forwards";
setTimeout(function()
{
document.getElementById('brushfill_hand').style.animation="brushfill_animate2 1s forwards";
setTimeout(function()
{
	document.getElementById('brushfill_hand').style.visibility="hidden";
	document.getElementById('brushfill_vis').style.visibility="visible";
	document.getElementById('trans_pzt1_canvas1').style.visibility="visible";
	document.getElementById('ar5_canvas1').style.visibility="visible";
	document.getElementById('s1_9').style.visibility="hidden";
    document.getElementById('s1_10').style.visibility="visible";
},1000);
},1000);

},1000);

}

function trans_pzt1()
{   document.getElementById('ar5_canvas1').style.visibility="hidden";
	document.getElementById('trans_pzt1_canvas1').style.visibility="hidden";
	document.getElementById('pzt1_canvas1').style.animation="top_pzt1_canvas1 1s forwards";

setTimeout(function()
{
document.getElementById('arrow1').style.visibility="visible";
document.getElementById('nextButton1').style.visibility="visible";
document.getElementById('s1_10').style.visibility="hidden";
document.getElementById('s1_11').style.visibility="visible";

},1000);
}

////////////////canvas1a
function add_rod()

{
document.getElementById('arw1_canvas1a').style.visibility="hidden";
document.getElementById('add_rod').style.visibility="hidden";
document.getElementById('rod_wire').style.visibility="visible";
document.getElementById('soldrod').style.visibility="visible";
document.getElementById('soldstand').style.visibility="visible";
document.getElementById('rod_wire').style.animation="rod_wire_add 1s forwards";
document.getElementById('soldrod').style.animation="soldrod_add 1s forwards";
document.getElementById('soldstand').style.animation="soldstand_add 1s forwards";

setTimeout(function()
{

document.getElementById('arw2_canvas1a').style.visibility="visible";
document.getElementById('add_wire').style.visibility="visible";
document.getElementById('s2_1').style.visibility="hidden";
document.getElementById('s2_2').style.visibility="visible";
},1000);
}	

function add_wire()
{

document.getElementById('arw2_canvas1a').style.visibility="hidden";
document.getElementById('add_wire').style.visibility="hidden";
document.getElementById('wire1').style.visibility="visible";
document.getElementById('wire1').style.animation="wire1 2s forwards";
document.getElementById('hand_left').style.visibility="visible";
document.getElementById('hand_left').style.animation="hand_left 2s forwards";
document.getElementById('wire2').style.visibility="visible";
document.getElementById('wire2').style.animation="wire2 2s forwards";
document.getElementById('hand_right').style.visibility="visible";
document.getElementById('hand_right').style.animation="hand_right 2s forwards";

setTimeout(function()
{
document.getElementById('trans_wire1').style.visibility="visible";
document.getElementById('ar1_canvas1a').style.visibility="visible";
document.getElementById('s2_2').style.visibility="hidden";
document.getElementById('s2_3').style.visibility="visible";
document.getElementById('hand_right').style.visibility="hidden";
document.getElementById('hand_left').style.visibility="hidden";
},2000);
}

function trans_wire1()
{
document.getElementById('trans_wire1').style.visibility="hidden";
document.getElementById('ar1_canvas1a').style.visibility="hidden";
document.getElementById('wire1').style.animation="wire1_attach 1s forwards";	
document.getElementById('hand_left1').style.visibility="visible";
document.getElementById('hand_left1').style.animation="hand_left_attach 1s forwards";

setTimeout(function()
{
document.getElementById('hand_left1').style.visibility="hidden";
document.getElementById('trans_wire2').style.visibility="visible";
document.getElementById('ar2_canvas1a').style.visibility="visible";
document.getElementById('s2_3').style.visibility="hidden";
document.getElementById('s2_4').style.visibility="visible";
},1000);
}

function trans_wire2()

{
document.getElementById('trans_wire2').style.visibility="hidden";
document.getElementById('ar2_canvas1a').style.visibility="hidden";
document.getElementById('wire2').style.animation="wire2_attach 1s forwards";
document.getElementById('hand_right1').style.visibility="visible";	
document.getElementById('hand_right1').style.animation="hand_right1_attach 1s forwards";

setTimeout(function()
{
document.getElementById('hand_right1').style.visibility="hidden";
document.getElementById('trans_wire1_click').style.visibility="visible";
document.getElementById('ar3_canvas1a').style.visibility="visible";
document.getElementById('s2_4').style.visibility="hidden";
document.getElementById('s2_5').style.visibility="visible";
},1000);
}

function trans_wire1_click()
{
document.getElementById('trans_wire1_click').style.visibility="hidden";
document.getElementById('ar3_canvas1a').style.visibility="hidden";
document.getElementById('zoom1').style.visibility="visible";
document.getElementById('trans_soldrod').style.visibility="visible";
document.getElementById('ar4_canvas1a').style.visibility="visible";
document.getElementById('s2_5').style.visibility="hidden";
document.getElementById('s2_6').style.visibility="visible";
}

function trans_soldrod()
{
document.getElementById('trans_soldrod').style.visibility="hidden";
document.getElementById('ar4_canvas1a').style.visibility="hidden";
document.getElementById('rod_wire').style.visibility="hidden";
document.getElementById('soldrod').style.visibility="hidden";
document.getElementById('handrod_wire').style.visibility="visible";
document.getElementById('handrod_wire').style.visibility="visible";
document.getElementById('handrod_wire').style.animation="handrod_wire1_zoom1 2s forwards";
document.getElementById('silverhand').style.visibility="visible";
document.getElementById('silverhand').style.animation="silverhand_wire1_zoom1 2.2s forwards";

setTimeout(function()
{
document.getElementById('soldering_image1').style.visibility="visible";

document.getElementById('handrod_wire').style.animation="handrod_wire2_zoom1 2s forwards";
document.getElementById('silverhand').style.animation="silverhand_wire2_zoom1 2s forwards";

setTimeout(function()
{
document.getElementById('soldering_image2').style.visibility="visible";
document.getElementById('handrod_wire').style.animation="handrod_wire2_back 2s forwards";
document.getElementById('silverhand').style.animation="silverhand_wire2_back 2s forwards";
setTimeout(function()
{
document.getElementById('handrod_wire').style.visibility="hidden";
document.getElementById('silverhand').style.visibility="hidden";
document.getElementById('rod_wire').style.visibility="visible";	
document.getElementById('soldrod').style.visibility="visible";	
document.getElementById('zoom1').style.visibility="hidden";
document.getElementById('soldering_image1').style.visibility="hidden";
document.getElementById('soldering_image2').style.visibility="hidden";
document.getElementById('soldering_image3').style.visibility="visible";
document.getElementById('soldering_image4').style.visibility="visible";

document.getElementById('s2_6').style.visibility="hidden";
document.getElementById('s2_7').style.visibility="visible";

document.getElementById('arrow1a').style.visibility="visible";
document.getElementById('nextButton1a').style.visibility="visible";
},2000);
},3500);
},4000);
}

//////////////////canvas1b

function add_pzt2()
{
document.getElementById('arw1_canvas1b').style.visibility="hidden";
document.getElementById('add_pzt2').style.visibility="hidden";
document.getElementById('pzt2_canvas1b').style.visibility="visible";
document.getElementById('pzt2_canvas1b').style.animation="pzt2_canvas1 1.5s forwards";
setTimeout(function()
{
document.getElementById('trans_brush1').style.visibility="visible";
document.getElementById('ar1_canvas1b').style.visibility="visible";
document.getElementById('s3_1').style.visibility="hidden";
document.getElementById('s3_2').style.visibility="visible";

},1500);
}


function trans_brush1()
{
document.getElementById('trans_brush1').style.visibility="hidden";
document.getElementById('ar1_canvas1b').style.visibility="hidden";
document.getElementById('brushfill_canvas1b').style.visibility="hidden";
document.getElementById('brushfill_hand_canvas1b').style.visibility="visible";

document.getElementById('brushfill_hand_canvas1b').style.animation="brushfill_animate_canvas1b 1s forwards";

setTimeout(function()
{
document.getElementById('brushfill_hand_canvas1b').style.animation="brushfill_animate1_canvas1b 1s forwards";
document.getElementById('greaseeffect_canvas1b').style.visibility="visible";	
document.getElementById('greaseeffect_canvas1b').style.animation="greese_effect_canvas1b 1s forwards";
setTimeout(function()
{
document.getElementById('brushfill_hand_canvas1b').style.animation="brushfill_animate2_canvas1b 1s forwards";
setTimeout(function()
{
	document.getElementById('brushfill_hand_canvas1b').style.visibility="hidden";
	document.getElementById('brushfill_vis_canvas1b').style.visibility="visible";
	document.getElementById('trans_pzt2_canvas1b').style.visibility="visible";
	document.getElementById('ar2_canvas1b').style.visibility="visible";
	document.getElementById('s3_2').style.visibility="hidden";
	document.getElementById('s3_3').style.visibility="visible";
},1000);
},1000);

},1000);
}

function trans_pzt2()
{
	document.getElementById('trans_pzt2_canvas1b').style.visibility="hidden";
	document.getElementById('ar2_canvas1b').style.visibility="hidden";
	document.getElementById('pzt2_canvas1b').style.animation="bottom_pzt2_canvas1b 1s forwards";

setTimeout(function()
{
document.getElementById('arw2_canvas1b').style.visibility="visible";
document.getElementById('add_wire_canvas1b').style.visibility="visible";
document.getElementById('s3_3').style.visibility="hidden";
document.getElementById('s3_4').style.visibility="visible";

},1000);
}


function add_wire_canvas1b()
{

document.getElementById('arw2_canvas1b').style.visibility="hidden";
document.getElementById('add_wire_canvas1b').style.visibility="hidden";
document.getElementById('wire1_canvas1b').style.visibility="visible";
document.getElementById('wire1_canvas1b').style.animation="wire1 2s forwards";
document.getElementById('hand_left_canvas1b').style.visibility="visible";
document.getElementById('hand_left_canvas1b').style.animation="hand_left_canvas1b 2s forwards";
document.getElementById('wire2_canvas1b').style.visibility="visible";
document.getElementById('wire2_canvas1b').style.animation="wire2_canvas1b 2s forwards";
document.getElementById('hand_right_canvas1b').style.visibility="visible";
document.getElementById('hand_right_canvas1b').style.animation="hand_right_canvas1b 2s forwards";

setTimeout(function()
{
document.getElementById('trans_wire1_canvas1b').style.visibility="visible";
document.getElementById('ar3_canvas1b').style.visibility="visible";
document.getElementById('s3_4').style.visibility="hidden";
document.getElementById('s3_5').style.visibility="visible";
document.getElementById('hand_right_canvas1b').style.visibility="hidden";
document.getElementById('hand_left_canvas1b').style.visibility="hidden";
},2000);
}

function trans_wire1_canvas1b()
{
document.getElementById('trans_wire1_canvas1b').style.visibility="hidden";
document.getElementById('ar3_canvas1b').style.visibility="hidden";
document.getElementById('wire1_canvas1b').style.animation="wire1_attach_canvas1b 1s forwards";	
document.getElementById('hand_left1_canvas1b').style.visibility="visible";
document.getElementById('hand_left1_canvas1b').style.animation="hand_left_attach_canvas1b 1s forwards";
setTimeout(function()
{
document.getElementById('hand_left1_canvas1b').style.visibility="hidden";
document.getElementById('trans_wire2_canvas1b').style.visibility="visible";
document.getElementById('ar4_canvas1b').style.visibility="visible";
document.getElementById('s3_5').style.visibility="hidden";
document.getElementById('s3_6').style.visibility="visible";
},1000);
}

function trans_wire2_canvas1b()

{
document.getElementById('trans_wire2_canvas1b').style.visibility="hidden";
document.getElementById('ar4_canvas1b').style.visibility="hidden";
document.getElementById('wire2_canvas1b').style.animation="wire2_attach_canvas1b 1s forwards";
document.getElementById('hand_right1_canvas1b').style.visibility="visible";	
document.getElementById('hand_right1_canvas1b').style.animation="hand_right1_attach_canvas1b 1s forwards";

setTimeout(function()
{
document.getElementById('hand_right1_canvas1b').style.visibility="hidden";
document.getElementById('trans_wire1_click_canvas1b').style.visibility="visible";
document.getElementById('ar5_canvas1b').style.visibility="visible";

document.getElementById('s3_6').style.visibility="hidden";
document.getElementById('s3_7').style.visibility="visible";
},1000);
}

function trans_wire1_click_canvas1b()
{
document.getElementById('trans_wire1_click_canvas1b').style.visibility="hidden";
document.getElementById('ar5_canvas1b').style.visibility="hidden";
document.getElementById('zoom1_canvas1b').style.visibility="visible";
document.getElementById('trans_soldrod_canvas1b').style.visibility="visible";
document.getElementById('ar6_canvas1b').style.visibility="visible";
document.getElementById('s3_7').style.visibility="hidden";
document.getElementById('s3_8').style.visibility="visible";
}


function trans_soldrod_canvas1b()
{
document.getElementById('trans_soldrod_canvas1b').style.visibility="hidden";
document.getElementById('ar6_canvas1b').style.visibility="hidden";
document.getElementById('rod_wire_canvas1b').style.visibility="hidden";
document.getElementById('soldrod_canvas1b').style.visibility="hidden";
document.getElementById('handrod_wire_canvas1b').style.visibility="visible";
document.getElementById('handrod_wire_canvas1b').style.animation="handrod_wire1_zoom1_canvas1b 2s forwards";
document.getElementById('silverhand_canvas1b').style.visibility="visible";
document.getElementById('silverhand_canvas1b').style.animation="silverhand_wire1_zoom1_canvas1b 2.2s forwards";

setTimeout(function()
{
document.getElementById('soldering_image1_canvas1b').style.visibility="visible";

document.getElementById('handrod_wire_canvas1b').style.animation="handrod_wire2_zoom1_canvas1b 2s forwards";
document.getElementById('silverhand_canvas1b').style.animation="silverhand_wire2_zoom1_canvas1b 2s forwards";

setTimeout(function()
{
document.getElementById('soldering_image2_canvas1b').style.visibility="visible";
document.getElementById('handrod_wire_canvas1b').style.animation="handrod_wire2_back_canvas1b 2s forwards";
document.getElementById('silverhand_canvas1b').style.animation="silverhand_wire2_back_canvas1b 2s forwards";
setTimeout(function()
{
document.getElementById('handrod_wire_canvas1b').style.visibility="hidden";
document.getElementById('silverhand_canvas1b').style.visibility="hidden";
document.getElementById('rod_wire_canvas1b').style.visibility="visible";	
document.getElementById('soldrod_canvas1b').style.visibility="visible";	
document.getElementById('zoom1_canvas1b').style.visibility="hidden";
document.getElementById('soldering_image1_canvas1b').style.visibility="hidden";
document.getElementById('soldering_image2_canvas1b').style.visibility="hidden";
document.getElementById('soldering_image3_canvas1b').style.visibility="visible";
document.getElementById('soldering_image4_canvas1b').style.visibility="visible";
document.getElementById('s3_8').style.visibility="hidden";
document.getElementById('s3_9').style.visibility="visible";
document.getElementById('arrow1b').style.visibility="visible";
document.getElementById('nextButton1b').style.visibility="visible";
},2000);
},3500);
},4000);
}


function add_lcr()
{
document.getElementById('arw1_canvas1c').style.visibility="hidden";
document.getElementById('add_lcr').style.visibility="hidden";
document.getElementById('lcr_canvas1c').style.visibility="visible";
document.getElementById('lcr_canvas1c').style.animation="lcr 2s forwards";

document.getElementById('off_screen').style.visibility="visible";
document.getElementById('off_screen').style.animation="off_screen 2s forwards";

document.getElementById('black_wire_lcr1').style.visibility="visible";
document.getElementById('black_wire_lcr1').style.animation="black_wire_lcr1 2s forwards";

document.getElementById('blackclipclose1').style.visibility="visible";
document.getElementById('blackclipclose1').style.animation="blackclipclose1 2s forwards";

document.getElementById('blackclipclose2').style.visibility="visible";
document.getElementById('blackclipclose2').style.animation="blackclipclose2 2s forwards";

document.getElementById('blackclipclose3').style.visibility="visible";
document.getElementById('blackclipclose3').style.animation="blackclipclose3 2s forwards";

document.getElementById('blackclipclose4').style.visibility="visible";
document.getElementById('blackclipclose4').style.animation="blackclipclose4 2s forwards";

setTimeout(function()
{
document.getElementById('trans_fullimage').style.visibility="visible";
document.getElementById('ar1_canvas1c').style.visibility="visible";
document.getElementById('s4_1').style.visibility="hidden";
document.getElementById('s4_2').style.visibility="visible";
},2000);
}

function full_image()
{
document.getElementById('trans_fullimage').style.visibility="hidden";
document.getElementById('ar1_canvas1c').style.visibility="hidden";
document.getElementById('full_image').style.animation="full_image 2s forwards";
document.getElementById('hand').style.animation="hand 2s forwards";
setTimeout(function()
{
document.getElementById('handfinger_left').style.visibility="visible";
document.getElementById('handfinger_left').style.animation="handfinger_left 3s forwards";

setTimeout(function()
{
document.getElementById('handfinger_left').style.visibility="hidden";
document.getElementById('hand').style.visibility="hidden";

document.getElementById('black_color1').style.visibility="visible";
document.getElementById('black_color2').style.visibility="visible";
document.getElementById('black_color3').style.visibility="visible";
document.getElementById('black_color4').style.visibility="visible";

document.getElementById('trans_pin1').style.visibility="visible";	
document.getElementById('ar2_canvas1c').style.visibility="visible";
document.getElementById('s4_2').style.visibility="hidden";
document.getElementById('s4_3').style.visibility="visible";
},3000);
},2000);
}
function pin1()
{
document.getElementById('trans_pin1').style.visibility="hidden";
document.getElementById('ar2_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose1').style.animation="blackclipclose1_move 2s forwards";
document.getElementById('black_color1').style.animation="black_color1 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose1').style.visibility="hidden";
document.getElementById('blackclipopen1').style.visibility="visible";	

document.getElementById('blackclipopen1').style.animation="blackclipopen1_move 1s forwards";
document.getElementById('black_color1').style.animation="black_color1_again 1s forwards";	

setTimeout(function()
{
document.getElementById('blackclipopen1').style.visibility="hidden";
document.getElementById('blackclipclose11').style.visibility="visible";	
document.getElementById('trans_pin2').style.visibility="visible";
document.getElementById('ar3_canvas1c').style.visibility="visible";	

},1000);
},2000);
}

function pin2()
{
document.getElementById('trans_pin2').style.visibility="hidden";
document.getElementById('ar3_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose2').style.animation="blackclipclose2_move 2s forwards";
document.getElementById('black_color2').style.animation="black_color2 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose2').style.visibility="hidden";
document.getElementById('blackclipopen2').style.visibility="visible";	

document.getElementById('blackclipopen2').style.animation="blackclipopen2_move 1s forwards";	
setTimeout(function()
{
document.getElementById('blackclipopen2').style.visibility="hidden";
document.getElementById('blackclipclose21').style.visibility="visible";	
document.getElementById('trans_pin3').style.visibility="visible";
document.getElementById('ar4_canvas1c').style.visibility="visible";	

},1000);
},2000);
}


function pin3()
{
document.getElementById('trans_pin3').style.visibility="hidden";
document.getElementById('ar4_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose3').style.animation="blackclipclose3_move 2s forwards";
document.getElementById('black_color3').style.animation="black_color3 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose3').style.visibility="hidden";
document.getElementById('blackclipopen3').style.visibility="visible";	

document.getElementById('blackclipopen3').style.animation="blackclipopen3_move 1s forwards";	
setTimeout(function()
{
document.getElementById('blackclipopen3').style.visibility="hidden";
document.getElementById('blackclipclose31').style.visibility="visible";	
document.getElementById('trans_pin4').style.visibility="visible";
document.getElementById('ar5_canvas1c').style.visibility="visible";	
	
},1000);
},2000);
}

function pin4()
{
document.getElementById('trans_pin4').style.visibility="hidden";
document.getElementById('ar5_canvas1c').style.visibility="hidden";
document.getElementById('blackclipclose4').style.animation="blackclipclose4_move 2s forwards";
document.getElementById('black_color4').style.animation="black_color4 2s forwards";	

setTimeout(function()
{
document.getElementById('blackclipclose4').style.visibility="hidden";
document.getElementById('blackclipopen4').style.visibility="visible";	

document.getElementById('blackclipopen4').style.animation="blackclipopen4_move 1s forwards";	
setTimeout(function()
{
document.getElementById('blackclipopen4').style.visibility="hidden";
document.getElementById('blackclipclose41').style.visibility="visible";	
document.getElementById('trans_lcron').style.visibility="visible";
document.getElementById('ar6_canvas1c').style.visibility="visible";
document.getElementById('s4_3').style.visibility="hidden";
document.getElementById('s4_4').style.visibility="visible";
	
},1000);
},2000);
}


function lcr_on()
{
document.getElementById('trans_lcron').style.visibility="hidden";
document.getElementById('off_screen').style.visibility="hidden";
document.getElementById('ar6_canvas1c').style.visibility="hidden";


document.getElementById('arrow1c').style.visibility="visible";
document.getElementById('nextButton1c').style.visibility="visible";		

document.getElementById('s4_4').style.visibility="hidden";
document.getElementById('s4_5').style.visibility="visible";

}



function submit()
{

var from= document.getElementById('val1').value;
var to= document.getElementById('val2').value;
var interval= document.getElementById('val3').value;
// console.log(from);
// console.log(to);
// console.log(interval);

if(from == "frm1" && to == "frm2" && interval == "frm3")
{

document.getElementById('submit').style.visibility="hidden";
document.getElementById("select_abc").innerHTML="";
document.getElementById('transwhite').style.visibility="visible";
document.getElementById('graph1').style.visibility="visible";
document.getElementById('graph2').style.visibility="visible";

$("#note1").delay(400).slideDown("slow");
 setTimeout(function()
{
  document.getElementById("n_a_1").style.visibility="visible";
  document.getElementById('ok').style.visibility="visible";
  document.getElementById('s5_1').style.visibility="hidden";
  document.getElementById('s5_2').style.visibility="visible";

},500);

}

else
{
 document.getElementById("select_abc").style.visibility="visible";

}




}

function ok()
{
document.getElementById('ok').style.visibility="hidden";

document.getElementById('n_freq').style.visibility="visible";
  document.getElementById('s5_2').style.visibility="hidden";
  document.getElementById('s5_3').style.visibility="visible";
document.getElementById('arrow2').style.visibility="visible";
document.getElementById('nextButton2').style.visibility="visible";

}

