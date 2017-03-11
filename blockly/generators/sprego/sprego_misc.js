"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_start"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	return "=" + body;
};

Blockly.JavaScript["sprego_if"] = function(block)
{
	var check = Blockly.JavaScript.valueToCode(block, "LOGICAL_STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	var iftrue = Blockly.JavaScript.valueToCode(block, "VALUE_IF_TRUE", Blockly.JavaScript.ORDER_NONE || "");
	var iffalse = Blockly.JavaScript.valueToCode(block, "VALUE_IF_FALSE", Blockly.JavaScript.ORDER_NONE || "");
	return ["ha(" + check + "; " + iftrue + "; " + iffalse + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_statement"] = function(block)
{
	return [block.getFieldValue("STATEMENT"), Blockly.JavaScript.ORDER_NONE];
};