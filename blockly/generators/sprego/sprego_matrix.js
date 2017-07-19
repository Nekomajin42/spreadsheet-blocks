"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_index"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_index");
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var row = Blockly.JavaScript.valueToCode(block, "ROW", Blockly.JavaScript.ORDER_NONE || "");
	var column = Blockly.JavaScript.valueToCode(block, "COLUMN", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + separator + row +  separator + column + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_match"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_match");
	
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + value + separator + array +  separator + type + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_row/column"] = function(block)
{
	var name = getFunctionName("sprego_row/column", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_offset"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_offset");
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	var rows = Blockly.JavaScript.valueToCode(block, "ROWS", Blockly.JavaScript.ORDER_NONE || "");
	var columns = Blockly.JavaScript.valueToCode(block, "COLUMNS", Blockly.JavaScript.ORDER_NONE || "");
	var hight = Blockly.JavaScript.valueToCode(block, "HEIGHT", Blockly.JavaScript.ORDER_NONE || "");
	var width = Blockly.JavaScript.valueToCode(block, "WIDTH", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + separator + rows + separator + columns + separator + height + separator + width + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_transpose"] = function(block)
{
	var name = getFunctionName("sprego_transpose");
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_indirect"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_indirect");
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + text + separator + type + ")", Blockly.JavaScript.ORDER_NONE];
};