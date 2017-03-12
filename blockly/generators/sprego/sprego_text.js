"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_left"] = function(block)
{
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return ["bal(" + text + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_right"] = function(block)
{
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return ["jobb(" + text + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_length"] = function(block)
{
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	return ["hossz(" + text + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_search"] = function(block)
{
	var find = Blockly.JavaScript.valueToCode(block, "FIND", Blockly.JavaScript.ORDER_NONE || "");
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var start = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	return ["szöveg.keres(" + find + "; " + text + "; " + start + ")", Blockly.JavaScript.ORDER_NONE];
};