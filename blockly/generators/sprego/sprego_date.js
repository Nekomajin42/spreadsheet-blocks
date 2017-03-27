"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_date/time"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("sprego_date/time", block.getFieldValue("NAME"));
	
	var index1 = Blockly.JavaScript.valueToCode(block, "INDEX1", Blockly.JavaScript.ORDER_NONE || "");
	var index2 = Blockly.JavaScript.valueToCode(block, "INDEX2", Blockly.JavaScript.ORDER_NONE || "");
	var index3 = Blockly.JavaScript.valueToCode(block, "INDEX3", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index1 + separator + index2 + separator + index3 + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_year/month/day"] = function(block)
{
	var name = getFunctionName("sprego_year/month/day", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_hour/minute/second"] = function(block)
{
	var name = getFunctionName("sprego_hour/minute/second", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_today/now"] = function(block)
{
	var name = getFunctionName("sprego_today/now", block.getFieldValue("NAME"));
	
	return [name + "()", Blockly.JavaScript.ORDER_NONE];
};