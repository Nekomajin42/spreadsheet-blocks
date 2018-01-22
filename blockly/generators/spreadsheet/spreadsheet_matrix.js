"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_index"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_index");
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var row = Blockly.JavaScript.valueToCode(block, "ROW", Blockly.JavaScript.ORDER_NONE || "");
	var column = Blockly.JavaScript.valueToCode(block, "COLUMN", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + separator + row +  separator + column + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_match"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_match");
	
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + value + separator + array +  separator + type + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_row/column"] = function(block)
{
	var name = getFunctionName("spreadsheet_row/column", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_offset"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_offset");
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	var rows = Blockly.JavaScript.valueToCode(block, "ROWS", Blockly.JavaScript.ORDER_NONE || "");
	var columns = Blockly.JavaScript.valueToCode(block, "COLUMNS", Blockly.JavaScript.ORDER_NONE || "");
	var hight = Blockly.JavaScript.valueToCode(block, "HEIGHT", Blockly.JavaScript.ORDER_NONE || "");
	var width = Blockly.JavaScript.valueToCode(block, "WIDTH", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + separator + rows + separator + columns + separator + height + separator + width + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_transpose"] = function(block)
{
	var name = getFunctionName("spreadsheet_transpose");
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_indirect"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_indirect");
	
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + text + separator + type + ")", Blockly.JavaScript.ORDER_NONE];
};