"use strict";

goog.provide('Blockly.JavaScript.sprego');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["sprego_index"] = function(block)
{
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var row = Blockly.JavaScript.valueToCode(block, "ROW", Blockly.JavaScript.ORDER_NONE || "");
	var column = Blockly.JavaScript.valueToCode(block, "COLUMN", Blockly.JavaScript.ORDER_NONE || "");
	return ["index(" + array + "; " + row +  "; " + column + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_match"] = function(block)
{
	var value = Blockly.JavaScript.valueToCode(block, "VALUE", Blockly.JavaScript.ORDER_NONE || "");
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	var type = Blockly.JavaScript.valueToCode(block, "TYPE", Blockly.JavaScript.ORDER_NONE || "");
	return ["hol.van(" + value + "; " + array +  "; " + type + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_row/column"] = function(block)
{
	var name = (block.getFieldValue("NAME") === "ROW") ? "sor" : "oszlop";
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	return [name + "(" + index + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_offset"] = function(block)
{
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	var rows = Blockly.JavaScript.valueToCode(block, "ROWS", Blockly.JavaScript.ORDER_NONE || "");
	var columns = Blockly.JavaScript.valueToCode(block, "COLUMNS", Blockly.JavaScript.ORDER_NONE || "");
	var hight = Blockly.JavaScript.valueToCode(block, "HEIGHT", Blockly.JavaScript.ORDER_NONE || "");
	var width = Blockly.JavaScript.valueToCode(block, "WIDTH", Blockly.JavaScript.ORDER_NONE || "");
	return ["eltolás(" + index + "; " + rows + "; " + columns + "; " + height + "; " + width + ")", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["sprego_transpose"] = function(block)
{
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	return ["transzponálás(" + array + ")", Blockly.JavaScript.ORDER_NONE];
};