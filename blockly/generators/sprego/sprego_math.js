"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_sum"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return ["szum(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_avg"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return ["átlag(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_min"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return ["min(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_max"] = function(block)
{
	var body = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return ["max(" + body + ")", Blockly.JavaScript.ORDER_NONE];
};