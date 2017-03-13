"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_start"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	return "=" + body;
};

Blockly.JavaScript["sprego_statement"] = function(block)
{
	var statement = block.getFieldValue("STATEMENT");
	var next = Blockly.JavaScript.valueToCode(block, "NEXT", Blockly.JavaScript.ORDER_NONE || "");
	next = (next=="") ? next : "; " + next;
	return [statement + next, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_mathops"] = function(block)
{
	var operator = block.getFieldValue("OPERATOR");
	var left = Blockly.JavaScript.valueToCode(block, "LEFT", Blockly.JavaScript.ORDER_NONE || "");
	var right = Blockly.JavaScript.valueToCode(block, "RIGHT", Blockly.JavaScript.ORDER_NONE || "");
	return ["(" + left + operator + right + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_logicops"] = function(block)
{
	var operator = block.getFieldValue("OPERATOR");
	var left = Blockly.JavaScript.valueToCode(block, "LEFT", Blockly.JavaScript.ORDER_NONE || "");
	var right = Blockly.JavaScript.valueToCode(block, "RIGHT", Blockly.JavaScript.ORDER_NONE || "");
	return ["(" + left + operator + right + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_concat"] = function(block)
{
	var first = Blockly.JavaScript.valueToCode(block, "FIRST", Blockly.JavaScript.ORDER_NONE || "");
	var second = Blockly.JavaScript.valueToCode(block, "SECOND", Blockly.JavaScript.ORDER_NONE || "");
	return [first + "&" + second, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_array"] = function(block)
{
	var start = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	var end = Blockly.JavaScript.valueToCode(block, "END", Blockly.JavaScript.ORDER_NONE || "");
	return [start + ":" + end, Blockly.JavaScript.ORDER_NONE];
};