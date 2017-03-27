"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_iserror/isblank"] = function(block)
{
	var name = getFunctionName("sprego_iserror/isblank", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_isnumber/islogical/istext"] = function(block)
{
	var name = getFunctionName("sprego_isnumber/islogical/istext", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};