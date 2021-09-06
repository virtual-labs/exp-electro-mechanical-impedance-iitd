

//////////////////////navnext start here////////////////////////////////////

function navNext0()
{

document.getElementById("canvas0").style.visibility="hidden";

document.getElementById("canvas1").style.visibility="visible";

}

function navNext1()
{

document.getElementById("canvas1").style.visibility="hidden";

document.getElementById("canvas2").style.visibility="visible";

}

function navNext2()
{

document.getElementById("canvas2").style.visibility="hidden";

document.getElementById("canvas3").style.visibility="visible";

setTimeout(function()
{
	graph_show()
},1000);

}

function navNext3()
{

document.getElementById("canvas3").style.visibility="hidden";

document.getElementById("canvas4").style.visibility="visible";

}



function add_blocks()

{

document.getElementById("addblocks").style.visibility="hidden";
document.getElementById("arw1").style.visibility="hidden";

document.getElementById("leftblock").style.visibility="visible";
document.getElementById("leftblock").style.animation="block1_add 1s forwards";

document.getElementById("rightblock").style.visibility="visible";
document.getElementById("rightblock").style.animation="block2_add 1s forwards";  

setTimeout(function()
{

document.getElementById("leftblock").style.visibility="visible";
document.getElementById("rightblock").style.visibility="visible";

document.getElementById("leftblock_hand").style.visibility="hidden";
document.getElementById("rightblock_hand").style.visibility="hidden";

document.getElementById("tb_block1").style.visibility="visible";
document.getElementById("arwtb_block1").style.visibility="visible";

document.getElementById("step1").style.visibility="hidden";
document.getElementById("step2").style.visibility="visible";

},1000);
}



function block1_fix()

{

document.getElementById("tb_block1").style.visibility="hidden";
document.getElementById("arwtb_block1").style.visibility="hidden";

document.getElementById("leftblock").style.visibility="hidden";
document.getElementById("leftblock_hand").style.visibility="visible";

document.getElementById("leftblock_hand").style.animation="block1_fix 1.5s forwards"; 

setTimeout(function()
{

document.getElementById("leftblock2").style.visibility="visible";
document.getElementById("leftblock_hand").style.visibility="hidden";

document.getElementById("tb_block2").style.visibility="visible";
document.getElementById("arwtb_block2").style.visibility="visible";

document.getElementById("step2").style.visibility="hidden";
document.getElementById("step3").style.visibility="visible";

},1500);
}

function block2_fix()

{

document.getElementById("tb_block2").style.visibility="hidden";
document.getElementById("arwtb_block2").style.visibility="hidden";

document.getElementById("rightblock").style.visibility="hidden";
document.getElementById("rightblock_hand").style.visibility="visible";

document.getElementById("rightblock_hand").style.animation="block2_fix 1.5s forwards"; 

setTimeout(function()
{

document.getElementById("rightblock2").style.visibility="visible";
document.getElementById("rightblock_hand").style.visibility="hidden";

document.getElementById("addshaker").style.visibility="visible";
document.getElementById("arw3").style.visibility="visible";

document.getElementById("step3").style.visibility="hidden";
document.getElementById("step4").style.visibility="visible";

},1500);
}

function add_shaker()

{

document.getElementById("addshaker").style.visibility="hidden";
document.getElementById("arw3").style.visibility="hidden";

document.getElementById("shaker").style.visibility="visible";
document.getElementById("shaker_wire").style.visibility="visible";

document.getElementById("shaker").style.animation="shaker_add 1.5s forwards";
document.getElementById("shaker_wire").style.animation="shaker_wire_add 1.5s forwards";

setTimeout(function()
{

document.getElementById("tb_shaker").style.visibility="visible";
document.getElementById("arwtb_shaker").style.visibility="visible";

document.getElementById("shaker").style.visibility="hidden";
document.getElementById("shaker2").style.visibility="visible";

document.getElementById("step4").style.visibility="hidden";
document.getElementById("step5").style.visibility="visible";

},1500);
}

function shaker_fix()

{

document.getElementById("tb_shaker").style.visibility="hidden";
document.getElementById("arwtb_shaker").style.visibility="hidden";

document.getElementById("shaker").style.visibility="visible";
document.getElementById("shaker2").style.visibility="hidden";
document.getElementById("shaker").style.animation="shaker_fix 2s forwards";
document.getElementById("shaker_wire").style.animation="shaker_wire_fix 2s forwards";

setTimeout(function()
{

document.getElementById("addbeam").style.visibility="visible";
document.getElementById("arw4").style.visibility="visible";

document.getElementById("shaker").style.visibility="hidden";
document.getElementById("shaker3").style.visibility="visible";

document.getElementById("step5").style.visibility="hidden";
document.getElementById("step6").style.visibility="visible";


},2000);
}

function add_beam()

{

document.getElementById("addbeam").style.visibility="hidden";
document.getElementById("arw4").style.visibility="hidden";

document.getElementById("beam_hand").style.visibility="visible";
document.getElementById("beam_hand").style.animation="beam_add 3s forwards";

setTimeout(function()
{

document.getElementById("beam_hand").style.visibility="hidden";
document.getElementById("beam").style.visibility="visible";

document.getElementById("arw5").style.visibility="visible";
document.getElementById("addbond").style.visibility="visible";

document.getElementById("step6").style.visibility="hidden";
document.getElementById("step7").style.visibility="visible";

},3000);
}

function add_bond()

{

document.getElementById("arw5").style.visibility="hidden";
document.getElementById("addbond").style.visibility="hidden";

document.getElementById("bond").style.visibility="visible";
document.getElementById("brushfill").style.visibility="visible";

document.getElementById("bond").style.animation="bond_add 1s forwards";
document.getElementById("brushfill").style.animation="brushfill_add 1s forwards";

setTimeout(function()
{

document.getElementById("tb_brushfill").style.visibility="visible";
document.getElementById("arwtb_brushfill").style.visibility="visible";

document.getElementById("step7").style.visibility="hidden";
document.getElementById("step8").style.visibility="visible";

},1000);
}

function bond_apply()

{

document.getElementById("tb_brushfill").style.visibility="hidden";
document.getElementById("arwtb_brushfill").style.visibility="hidden";

document.getElementById("brushfill").style.visibility="hidden";
document.getElementById("brushfill_hand").style.visibility="visible";

document.getElementById("brushfill_hand").style.animation="apply_bond 2.5s forwards";

setTimeout(function()
{
document.getElementById("greaseeffect").style.visibility="visible";
document.getElementById("greaseeffect").style.animation="greaseeffect 0.5s forwards";

},2000);

setTimeout(function()
{
document.getElementById("brushfill_hand").style.visibility="hidden";
document.getElementById("brush_hand").style.visibility="visible";
document.getElementById("brush_hand").style.animation="brush_handback 1.5s forwards";
},2500);

setTimeout(function()
{
document.getElementById("brush_hand").style.visibility="hidden";
document.getElementById("brush").style.visibility="visible";

document.getElementById("arw6").style.visibility="visible";
document.getElementById("addpzt").style.visibility="visible";

document.getElementById("step8").style.visibility="hidden";
document.getElementById("step9").style.visibility="visible";
},4000);
}


function add_pzt()

{

document.getElementById("arw6").style.visibility="hidden";
document.getElementById("addpzt").style.visibility="hidden";

document.getElementById("pzt").style.visibility="visible";
document.getElementById("pzt").style.animation="pzt_add 1s forwards";

setTimeout(function()
{

document.getElementById("tb_pzt").style.visibility="visible";
document.getElementById("arwtb_pzt").style.visibility="visible";

document.getElementById("step9").style.visibility="hidden";
document.getElementById("step10").style.visibility="visible";

},1000);
}

function pzt_fix()

{

document.getElementById("tb_pzt").style.visibility="hidden";
document.getElementById("arwtb_pzt").style.visibility="hidden";

document.getElementById("pzt").style.animation="pzt_fix 2s forwards";

setTimeout(function()
{

document.getElementById("tb_bond").style.visibility="visible";
document.getElementById("arwtb_bond").style.visibility="visible";

document.getElementById("step10").style.visibility="hidden";
document.getElementById("step11").style.visibility="visible";

},2000);
}

function bond_back()

{

document.getElementById("tb_bond").style.visibility="hidden";
document.getElementById("arwtb_bond").style.visibility="hidden";

document.getElementById("brush").style.animation="brush_back 0.7s forwards";
document.getElementById("bond").style.animation="bond_back 0.7s forwards";

setTimeout(function()
{

document.getElementById("brush").style.visibility="hidden";
document.getElementById("bond").style.visibility="hidden";

document.getElementById("arw7").style.visibility="visible";
document.getElementById("addwires").style.visibility="visible";

document.getElementById("step11").style.visibility="hidden";
document.getElementById("step12").style.visibility="visible";

},700);
}

function add_wires()

{

document.getElementById("arw7").style.visibility="hidden";
document.getElementById("addwires").style.visibility="hidden";

document.getElementById("pzt_black").style.visibility="visible";
document.getElementById("pzt_red").style.visibility="visible";

document.getElementById("pzt_black").style.animation="pzt_black_add 1s forwards";
document.getElementById("pzt_red").style.animation="pzt_red_add 1s forwards";

setTimeout(function()
{

document.getElementById("arw8").style.visibility="visible";
document.getElementById("addsoldrod").style.visibility="visible";

document.getElementById("step12").style.visibility="hidden";
document.getElementById("step13").style.visibility="visible";

},1000);
}

function add_soldrod()

{

document.getElementById("arw8").style.visibility="hidden";
document.getElementById("addsoldrod").style.visibility="hidden";

document.getElementById("soldrod").style.visibility="visible";
document.getElementById("soldstand").style.visibility="visible";
document.getElementById("rod_wire").style.visibility="visible";

document.getElementById("soldrod").style.animation="soldrod_add 1s forwards";
document.getElementById("soldstand").style.animation="soldstand_add 1s forwards";
document.getElementById("rod_wire").style.animation="rod_wire_add 1s forwards"; 

setTimeout(function()
{

document.getElementById("tb_pztblack").style.visibility="visible";
document.getElementById("arwtb_pztblack").style.visibility="visible";

document.getElementById("step13").style.visibility="hidden";
document.getElementById("step14").style.visibility="visible";


},1000);
}


function pztblack_fix()

{

document.getElementById("tb_pztblack").style.visibility="hidden";
document.getElementById("arwtb_pztblack").style.visibility="hidden";

document.getElementById("pzt_black").style.animation="pzt_blackfix 1.5s forwards";

setTimeout(function()
{

document.getElementById("tb_pztred").style.visibility="visible";
document.getElementById("arwtb_pztred").style.visibility="visible";

document.getElementById("step14").style.visibility="hidden";
document.getElementById("step15").style.visibility="visible";

},1000);
}



function pztred_fix()

{

document.getElementById("tb_pztred").style.visibility="hidden";
document.getElementById("arwtb_pztred").style.visibility="hidden";

document.getElementById("pzt_red").style.animation="pzt_redfix 1.5s forwards";

setTimeout(function()
{

document.getElementById("tb_zoom").style.visibility="visible";
document.getElementById("arwtb_zoom").style.visibility="visible";

document.getElementById("step15").style.visibility="hidden";
document.getElementById("step16").style.visibility="visible";

},1500);
}

function zoomview()

{

document.getElementById("tb_zoom").style.visibility="hidden";
document.getElementById("arwtb_zoom").style.visibility="hidden";

document.getElementById("zoom_img").style.visibility="visible";

document.getElementById("tb_soldrod").style.visibility="visible";
document.getElementById("arwtb_soldrod").style.visibility="visible";

document.getElementById("step16").style.visibility="hidden";
document.getElementById("step17").style.visibility="visible";

}
// $("#smoke1").fadeOut(1000);
// $("#smoke2").fadeIn(1000);
function soldring()
{
document.getElementById("tb_soldrod").style.visibility="hidden";
document.getElementById("arwtb_soldrod").style.visibility="hidden";
document.getElementById("rod_wire").style.visibility="hidden";
document.getElementById("soldrod").style.visibility="hidden";
document.getElementById("handrod_wire").style.visibility="visible";
document.getElementById("handrod_wire").style.animation="soldring 2s forwards";
document.getElementById("silverhand_canvas1").style.visibility="visible";
document.getElementById("silverhand_canvas1").style.animation="silverhand_canvas1 2.2s forwards";

setTimeout(function()
{
$("#smoke1").fadeIn(1000);
},1200);

setTimeout(function()
{
document.getElementById("soldering_image1").style.visibility="visible";
$("#smoke1").fadeOut(1000);
setTimeout(function()
{
$("#smoke2").fadeIn(1000);
},1200);
document.getElementById("handrod_wire").style.animation="soldring_red 2s forwards";
document.getElementById("silverhand_canvas1").style.animation="silverhand_canvas1_red 2s forwards";
setTimeout(function()
{
document.getElementById("soldering_image2").style.visibility="visible";
$("#smoke2").fadeOut(1000);
document.getElementById("handrod_wire").style.animation="soldring_back 2s forwards";
document.getElementById("silverhand_canvas1").style.animation="silverhand_canvas1_back 2s forwards";
setTimeout(function()
{
document.getElementById("silverhand_canvas1").style.visibility="hidden";
document.getElementById("zoom_img").style.visibility="hidden";
document.getElementById("soldering_image1").style.visibility="hidden";
document.getElementById("soldering_image2").style.visibility="hidden";
document.getElementById("soldering_image3").style.visibility="visible";
document.getElementById("soldering_image4").style.visibility="visible";
document.getElementById("handrod_wire").style.visibility="hidden";
document.getElementById("rod_wire").style.visibility="visible";
document.getElementById("soldrod").style.visibility="visible";

document.getElementById("arrow11").style.visibility="visible";
document.getElementById("nextButton11").style.visibility="visible";		
},2000);
},4000);
},4000);

}

function add_lcr()

{

document.getElementById("arw2_1").style.visibility="hidden";
document.getElementById("addlcr").style.visibility="hidden";

document.getElementById("lcrmeter").style.visibility="visible";
document.getElementById("lcr_wire").style.visibility="visible";
document.getElementById("off_screen").style.visibility="visible";
document.getElementById("lcr_black").style.visibility="visible";
document.getElementById("lcr_red").style.visibility="visible";
document.getElementById("blackclipclose").style.visibility="visible";
document.getElementById("redclipclose").style.visibility="visible";

document.getElementById("blackclipclose").style.animation="blackclipclose_add 2s forwards";
document.getElementById("redclipclose").style.animation="redclipclose_add 2s forwards";
document.getElementById("lcr_black").style.animation="lcr_black_add 2s forwards";
document.getElementById("lcr_red").style.animation="lcr_red_add 2s forwards";
document.getElementById("lcrmeter").style.animation="lcrmeter_add 2s forwards";
document.getElementById("lcr_wire").style.animation="lcr_wire_add 2s forwards";
document.getElementById("off_screen").style.animation="off_screen_add 2s forwards";

setTimeout(function()
{

document.getElementById("arw2_2").style.visibility="visible";
document.getElementById("addampli").style.visibility="visible";

document.getElementById("step2_1").style.visibility="hidden";
document.getElementById("step2_2").style.visibility="visible";

},2000);

}


// function add_ampli()

// {

// document.getElementById("arw2_2").style.visibility="hidden";
// document.getElementById("addampli").style.visibility="hidden";

// document.getElementById("amplifire").style.visibility="visible";
// document.getElementById("amplifire").style.animation="amplifire_add 1s forwards";

// document.getElementById("ampli_wire").style.visibility="visible";
// document.getElementById("ampli_wire").style.animation="ampli_wire_add 1s forwards";

// document.getElementById("gen_ampli").style.visibility="visible";
// document.getElementById("gen_ampli").style.animation="gen_ampli_add 1s forwards";

// document.getElementById("yellow_circle").style.visibility="visible";
// document.getElementById("yellow_circle").style.animation="yellow_circle_add 1s forwards";

// document.getElementById("shak_ampli").style.visibility="visible";
// document.getElementById("shak_ampli").style.animation="shak_ampli_add 1s forwards";

// document.getElementById("red_circle").style.visibility="visible";
// document.getElementById("red_circle").style.animation="red_circle_add 1s forwards";

// setTimeout(function()
// {

// document.getElementById("arw2_3").style.visibility="visible";
// document.getElementById("addgen").style.visibility="visible";



// },1000);

// }

// function add_gen()

// {

// document.getElementById("arw2_3").style.visibility="hidden";
// document.getElementById("addgen").style.visibility="hidden";

// document.getElementById("genrator").style.visibility="visible";
// document.getElementById("genrator").style.animation="genrator_add 1s forwards";

// document.getElementById("function_wire").style.visibility="visible";
// document.getElementById("function_wire").style.animation="function_wire_add 1s forwards";


// setTimeout(function()
// {

// document.getElementById("tb_blackclip").style.visibility="visible";
// document.getElementById("arwtb_blackclip").style.visibility="visible";

// },1000);

// }

function black_clipattach()

{

document.getElementById("tb_blackclip").style.visibility="hidden";
document.getElementById("arwtb_blackclip").style.visibility="hidden";

document.getElementById("line_black").style.visibility="visible";
document.getElementById("line_black").style.animation="line_black_move 0.5s forwards";

document.getElementById("blackclipclose").style.animation="blackclipclose_move 0.5s forwards";


setTimeout(function()
{

document.getElementById("blackclipclose").style.visibility="hidden";
document.getElementById("blackclipopen").style.visibility="visible";
document.getElementById("blackclipopen").style.animation="blackclipopen_move 0.3s forwards";


},500);

setTimeout(function()
{

document.getElementById("blackclipopen").style.visibility="hidden";
document.getElementById("blackclipclose2").style.visibility="visible";

document.getElementById("tb_redclip").style.visibility="visible";
document.getElementById("arwtb_redclip").style.visibility="visible";

document.getElementById("step2_6").style.visibility="hidden";
document.getElementById("step2_7").style.visibility="visible";

},800);

}

function red_clipattach()

{

document.getElementById("tb_redclip").style.visibility="hidden";
document.getElementById("arwtb_redclip").style.visibility="hidden";

document.getElementById("line_red").style.visibility="visible";
document.getElementById("line_red").style.animation="line_red_move 0.5s forwards";

document.getElementById("redclipclose").style.animation="redclipclose_move 0.5s forwards";


setTimeout(function()
{

document.getElementById("redclipclose").style.visibility="hidden";
document.getElementById("redclipopen").style.visibility="visible";


},500);

setTimeout(function()
{

document.getElementById("redclipopen").style.visibility="hidden";
document.getElementById("redclipclose2").style.visibility="visible";

document.getElementById("tb_lcron").style.visibility="visible";
document.getElementById("arwtb_lcron").style.visibility="visible";

document.getElementById("step2_7").style.visibility="hidden";
document.getElementById("step2_8").style.visibility="visible";


},800);

}

function lcr_on()
{
document.getElementById("tb_lcron").style.visibility="hidden";
document.getElementById("arwtb_lcron").style.visibility="hidden";
document.getElementById("off_screen").style.visibility="hidden";
setTimeout(function()
{
	document.getElementById("tb_genron").style.visibility="visible";
	document.getElementById("arwtb_genron").style.visibility="visible";

	document.getElementById("step2_8").style.visibility="hidden";
    document.getElementById("step2_9").style.visibility="visible";
},800);
}



// function ampli_on()
// {
// document.getElementById("tb_amplion").style.visibility="hidden";
// document.getElementById("arwtb_amplion").style.visibility="hidden";

// setTimeout(function()
// {
// 	// document.getElementById("tb_genron").style.visibility="visible";
// 	// document.getElementById("arwtb_genron").style.visibility="visible";
// },800);
// }


function genr_on()
{
document.getElementById("tb_genron").style.visibility="hidden";
document.getElementById("arwtb_genron").style.visibility="hidden";
document.getElementById("off_screen2").style.visibility="visible";
setTimeout(function()
{
	document.getElementById("off_screen3").style.visibility="visible";

},200);
setTimeout(function()
{	
	document.getElementById("can2shakar").style.visibility="hidden";
	document.getElementById("can2shakarwr").style.visibility="visible";
	document.getElementById("can2rodonly").style.visibility="visible";
	document.getElementById("can2rodonly").style.animation="shake 0.5s infinite";
	document.getElementById("vib1").style.visibility="visible";
	document.getElementById("vib1").style.animation="shake 0.5s infinite";
	document.getElementById("vib2").style.visibility="visible";
	document.getElementById("vib2").style.animation="shake 0.5s infinite";

	document.getElementById("arrow12").style.visibility="visible";
	document.getElementById("nextButton12").style.visibility="visible";

},1000);

}




function reset()
{
    location.reload();
}

function add_gen()
{
document.getElementById("arw2_3").style.visibility="hidden";
document.getElementById("addgen").style.visibility="hidden";
document.getElementById("genrator").style.visibility="visible";
document.getElementById("genrator").style.animation="genrator_add 1s forwards";
document.getElementById("function_wire").style.visibility="visible";
document.getElementById("function_wire").style.animation="function_wire_add 1s forwards";
setTimeout(function()
{
// document.getElementById("tb_blackclip").style.visibility="visible";
// document.getElementById("arwtb_blackclip").style.visibility="visible";
document.getElementById("trans_yellow_color_wire").style.visibility="visible";
document.getElementById("arwtrans_yellow_color_wire").style.visibility="visible";

document.getElementById("step2_3").style.visibility="hidden";
document.getElementById("step2_4").style.visibility="visible";
},1000);
}
function yellow_color_wire()
{
document.getElementById("trans_yellow_color_wire").style.visibility="hidden";
document.getElementById("arwtrans_yellow_color_wire").style.visibility="hidden";

document.getElementById("yellow_circle").style.animation="yellow_circle_attach 1s forwards";
document.getElementById("yellow_color_wire").style.animation="yellow_color_wire 1s forwards";
setTimeout(function()
{
document.getElementById("trans_red_color_wire").style.visibility="visible";
document.getElementById("arwtrans_red_color_wire").style.visibility="visible";

document.getElementById("step2_4").style.visibility="hidden";
document.getElementById("step2_5").style.visibility="visible";
},1000);
}

function red_color_wire()
{
document.getElementById("trans_red_color_wire").style.visibility="hidden";
document.getElementById("arwtrans_red_color_wire").style.visibility="hidden";
document.getElementById("red_circle").style.animation="red_circle_attach 1s forwards";
document.getElementById("red_color_wire").style.animation="red_color_wire 1s forwards";
setTimeout(function()
{
document.getElementById("tb_blackclip").style.visibility="visible";
document.getElementById("arwtb_blackclip").style.visibility="visible";

document.getElementById("step2_5").style.visibility="hidden";
document.getElementById("step2_6").style.visibility="visible";
},1000);

}


function add_ampli()
{
document.getElementById("arw2_2").style.visibility="hidden";
document.getElementById("addampli").style.visibility="hidden";
document.getElementById("amplifire").style.visibility="visible";
document.getElementById("amplifire").style.animation="amplifire_add 1s forwards";
document.getElementById("ampli_wire").style.visibility="visible";
document.getElementById("ampli_wire").style.animation="ampli_wire_add 1s forwards";
document.getElementById("gen_ampli").style.visibility="visible";
document.getElementById("gen_ampli").style.animation="gen_ampli_add 1s forwards";
document.getElementById("yellow_circle").style.visibility="visible";
document.getElementById("yellow_circle").style.animation="yellow_circle_add 1s forwards";
document.getElementById("shak_ampli").style.visibility="visible";
document.getElementById("shak_ampli").style.animation="shak_ampli_add 1s forwards";
document.getElementById("red_circle").style.visibility="visible";
document.getElementById("red_circle").style.animation="red_circle_add 1s forwards";
setTimeout(function()
{
//meenakshi
document.getElementById("arw2_3").style.visibility="visible";
document.getElementById("addgen").style.visibility="visible";
document.getElementById("yellow_color_wire").style.visibility="visible";
document.getElementById("red_color_wire").style.visibility="visible";

document.getElementById("step2_2").style.visibility="hidden";
document.getElementById("step2_3").style.visibility="visible";
},1000);
}

var t1;
 var f1;

function graph_show()

{
t1=document.getElementById("val1").value;
f1=document.getElementById("val2").value;

if (t1=="frm1" && f1=="frm2") 
{

document.getElementById("graph1").style.visibility="visible";

document.getElementById("graph_up1").style.animation="graph_up1 10s forwards";

document.getElementById("graph2").style.visibility="visible";

document.getElementById("graph_up2").style.animation="graph_up1 10s forwards";

document.getElementById("transwhite").style.visibility="visible";
document.getElementById("note1").style.visibility="visible";
document.getElementById("arrow_note").style.visibility="visible";
document.getElementById("arrow_note_dwld").style.visibility="visible";

document.getElementById("nextButton13").style.visibility="visible";
document.getElementById("arrow13").style.visibility="visible";
document.getElementById("select_abc").style.visibility="hidden";	
} 
else { document.getElementById("select_abc").style.visibility="visible";
}

}
