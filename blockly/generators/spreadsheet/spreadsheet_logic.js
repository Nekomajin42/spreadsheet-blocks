"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_if"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_if");
	
	var expression = Blockly.JavaScript.valueToCode(block, "EXPRESSION", Blockly.JavaScript.ORDER_NONE || "");
	var iftrue = Blockly.JavaScript.valueToCode(block, "VALUE_IF_TRUE", Blockly.JavaScript.ORDER_NONE || "");
	var iffalse = Blockly.JavaScript.valueToCode(block, "VALUE_IF_FALSE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + expression + separator + iftrue + separator + iffalse + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_and/or"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_and/or", block.getFieldValue("NAME"));
	
	var expression1 = Blockly.JavaScript.valueToCode(block, "EXPRESSION1", Blockly.JavaScript.ORDER_NONE || "");
	var expression2 = Blockly.JavaScript.valueToCode(block, "EXPRESSION2", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + expression1 + separator + expression2 + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_not"] = function(block)
{
	var name = getFunctionName("spreadsheet_not");
	
	var expression = Blockly.JavaScript.valueToCode(block, "EXPRESSION", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + expression + ")", Blockly.JavaScript.ORDER_NONE];
};