"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_left/right"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "LEFT") ? "bal" : "jobb";
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + text + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript["sprego_substitute"] = function(block)
{
	var text = Blockly.JavaScript.valueToCode(block, "TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var old_text = Blockly.JavaScript.valueToCode(block, "OLD_TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var new_text = Blockly.JavaScript.valueToCode(block, "NEW_TEXT", Blockly.JavaScript.ORDER_NONE || "");
	var n = Blockly.JavaScript.valueToCode(block, "N", Blockly.JavaScript.ORDER_NONE || "");
	return ["helyette(" + text + "; " + old_text + "; " + new_text + "; " + n + ")", Blockly.JavaScript.ORDER_NONE];
};