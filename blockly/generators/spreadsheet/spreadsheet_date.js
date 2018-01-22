"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_date/time"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_date/time", block.getFieldValue("NAME"));
	
	var index1 = Blockly.JavaScript.valueToCode(block, "INDEX1", Blockly.JavaScript.ORDER_NONE || "");
	var index2 = Blockly.JavaScript.valueToCode(block, "INDEX2", Blockly.JavaScript.ORDER_NONE || "");
	var index3 = Blockly.JavaScript.valueToCode(block, "INDEX3", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index1 + separator + index2 + separator + index3 + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_year/month/day"] = function(block)
{
	var name = getFunctionName("spreadsheet_year/month/day", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_hour/minute/second"] = function(block)
{
	var name = getFunctionName("spreadsheet_hour/minute/second", block.getFieldValue("NAME"));
	
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_weekday/weeknum"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var name = getFunctionName("spreadsheet_weekday/weeknum", block.getFieldValue("NAME"));
	
	var date = Blockly.JavaScript.valueToCode(block, "DATE", Blockly.JavaScript.ORDER_NONE || "");
	var type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_NONE || "");
	
	return [name + "(" + date + separator + type + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_today/now"] = function(block)
{
	var name = getFunctionName("spreadsheet_today/now", block.getFieldValue("NAME"));
	
	return [name + "()", Blockly.JavaScript.ORDER_NONE];
};