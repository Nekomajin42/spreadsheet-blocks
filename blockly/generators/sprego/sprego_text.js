"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_left/right"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_left/right", block.getFieldValue("NAME"));
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + text + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_length"] = function(block)
{
	var name = getFunctionName("sprego_length");
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + text + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_search"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_search");
	
	var find = Blockly.JavaScript.valueToCode(block, "FIND", Blockly.JavaScript.ORDER_NONE || "");
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var start = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + find + separator + text + separator + start + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_substitute"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_substitute");
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var old_text = Blockly.JavaScript.valueToCode(block, "OLD_TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var new_text = Blockly.JavaScript.valueToCode(block, "NEW_TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + text + separator + old_text + separator + new_text + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};