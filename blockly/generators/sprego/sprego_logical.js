"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_and"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	return ["és(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_or"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	return ["vagy(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_not"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	return ["nem(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};