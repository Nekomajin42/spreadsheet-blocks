"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_if"] = function(block)
{
	var check = Blockly.JavaScript.valueToCode(block, "LOGICAL_STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	var iftrue = Blockly.JavaScript.valueToCode(block, "VALUE_IF_TRUE", Blockly.JavaScript.ORDER_NONE || "");
	var iffalse = Blockly.JavaScript.valueToCode(block, "VALUE_IF_FALSE", Blockly.JavaScript.ORDER_NONE || "");
	return ["ha(" + check + "; " + iftrue + "; " + iffalse + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_iserror/isblank"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "ISERROR") ? "hibás" : "üres";
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_int"] = function(block)
{
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	return ["szám(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};