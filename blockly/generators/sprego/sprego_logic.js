"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_if"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_if");
	
	var expression = Blockly.JavaScript.valueToCode(block, "EXPRESSION", Blockly.JavaScript.ORDER_NONE || "");
	var iftrue = Blockly.JavaScript.valueToCode(block, "VALUE_IF_TRUE", Blockly.JavaScript.ORDER_NONE || "");
	var iffalse = Blockly.JavaScript.valueToCode(block, "VALUE_IF_FALSE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + expression + separator + iftrue + separator + iffalse + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_and/or"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_and/or", block.getFieldValue("NAME"));
	
	var expression1 = Blockly.JavaScript.valueToCode(block, "EXPRESSION1", Blockly.JavaScript.ORDER_NONE || "");
	var expression2 = Blockly.JavaScript.valueToCode(block, "EXPRESSION2", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + expression1 + separator + expression2 + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_not"] = function(block)
{
	var name = getFunctionName("sprego_not");
	
	var expression = Blockly.JavaScript.valueToCode(block, "EXPRESSION", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + expression + ")", Blockly.JavaScript.ORDER_NONE];
};