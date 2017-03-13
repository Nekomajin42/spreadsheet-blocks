"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_and/or"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "AND") ? "és" : "vagy";
	var statement = Blockly.JavaScript.valueToCode(block, "STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + statement + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_not"] = function(block)
{
	var statement = Blockly.JavaScript.valueToCode(block, "STATEMENT", Blockly.JavaScript.ORDER_NONE || "");
	return ["nem(" + statement + ")", Blockly.JavaScript.ORDER_NONE];
};