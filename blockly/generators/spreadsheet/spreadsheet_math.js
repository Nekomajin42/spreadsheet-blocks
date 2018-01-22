"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_sum/avg/count/product"] = function(block)
{
	var name = getFunctionName("spreadsheet_sum/avg/count/product", block.getFieldValue("NAME"));
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_min/max"] = function(block)
{
	var name = getFunctionName("spreadsheet_min/max", block.getFieldValue("NAME"));
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_small/large"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_small/large", block.getFieldValue("NAME"));
	
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + array + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_round/rounddown/roundup"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_round/rounddown/roundup", block.getFieldValue("NAME"));
	
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + value + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_mod/pow"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_mod/pow", block.getFieldValue("NAME"));
	
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + value + separator + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_sqrt/abs/fact"] = function(block)
{
	var name = getFunctionName("spreadsheet_sqrt/abs/fact", block.getFieldValue("NAME"));
	
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + value + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_rand"] = function(block)
{
	var name = getFunctionName("spreadsheet_rand");
	
	return [name + "()", Blockly.JavaScript.ORDER_NONE];
};