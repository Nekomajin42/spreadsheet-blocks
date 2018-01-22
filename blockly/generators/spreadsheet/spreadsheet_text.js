"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_left/right"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_left/right", block.getFieldValue("NAME"));
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + text + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_length"] = function(block)
{
	var name = getFunctionName("spreadsheet_length");
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + text + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_search"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_search");
	
	var find = Blockly.JavaScript.valueToCode(block, "FIND", Blockly.JavaScript.ORDER_NONE || "");
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var start = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + find + separator + text + separator + start + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_substitute"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_substitute");
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var old_text = Blockly.JavaScript.valueToCode(block, "OLD_TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var new_text = Blockly.JavaScript.valueToCode(block, "NEW_TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + text + separator + old_text + separator + new_text + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};