"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_date/time"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "LEFT") ? "bal" : "jobb";
	var index1 = Blockly.JavaScript.valueToCode(block, "INDEX1", Blockly.JavaScript.ORDER_NONE || "");
	var index2 = Blockly.JavaScript.valueToCode(block, "INDEX2", Blockly.JavaScript.ORDER_NONE || "");
	var index3 = Blockly.JavaScript.valueToCode(block, "INDEX3", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + index1 + "; " + index2 + "; " + index3 + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_year/month/day"] = function(block)
{
	var name = block.getFieldValue("NAME");
	name = (name === "YEAR") ? "és" : ((name === "MONTH") ? "hónap" : "nap");
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_hour/minute/second"] = function(block)
{
	var name = block.getFieldValue("NAME");
	name = (name === "HOUR") ? "óra" : ((name === "MINUTE") ? "perc" : "mperc");
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_today/now"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "TODAY") ? "ma" : "most";
	return [name + "()", Blockly.JavaScript.ORDER_NONE];
};