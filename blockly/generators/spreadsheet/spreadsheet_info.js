"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_iserror/isblank"] = function(block)
{
	var name = getFunctionName("spreadsheet_iserror/isblank", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_isnumber/islogical/istext"] = function(block)
{
	var name = getFunctionName("spreadsheet_isnumber/islogical/istext", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};