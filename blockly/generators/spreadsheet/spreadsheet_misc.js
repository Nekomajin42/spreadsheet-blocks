"use strict";

goog.provide('Blockly.JavaScript.spreadsheet');

goog.require('Blockly.JavaScript');

Blockly.JavaScript["spreadsheet_start"] = function(block)
{
	var formula = Blockly.JavaScript.valueToCode(block, "FORMULA", Blockly.JavaScript.ORDER_NONE || "");
	formula = "=" + formula;
	return formula;
};

Blockly.JavaScript["spreadsheet_expression"] = function(block)
{
	var separator = getSeparatorLocale() + " ";
	
	var statement = block.getFieldValue("STATEMENT");
	var next = Blockly.JavaScript.valueToCode(block, "NEXT", Blockly.JavaScript.ORDER_NONE || "");
	next = (next=="") ? next : separator + next;
	
	return [statement + next, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_mathops"] = function(block)
{
	var parenthesis = (block.getParent() != null && (block.getParent().type === "spreadsheet_mathops" || block.getParent().type === "spreadsheet_logicops")) ? true : false;
	var operator = block.getFieldValue("OPERATOR");
	var left = Blockly.JavaScript.valueToCode(block, "LEFT", Blockly.JavaScript.ORDER_NONE || "");
	left = (parenthesis) ? "(" + left : left;
	var right = Blockly.JavaScript.valueToCode(block, "RIGHT", Blockly.JavaScript.ORDER_NONE || "");
	right = (parenthesis) ? right + ")" : right;
	
	return [left + operator + right, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_relops"] = function(block)
{
	var parenthesis = (block.getParent() != null && (block.getParent().type === "spreadsheet_mathops" || block.getParent().type === "spreadsheet_logicops")) ? true : false;
	var operator = block.getFieldValue("OPERATOR");
	var left = Blockly.JavaScript.valueToCode(block, "LEFT", Blockly.JavaScript.ORDER_NONE || "");
	left = (parenthesis) ? "(" + left : left;
	var right = Blockly.JavaScript.valueToCode(block, "RIGHT", Blockly.JavaScript.ORDER_NONE || "");
	right = (parenthesis) ? right + ")" : right;
	
	return [left + operator + right, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_concat"] = function(block)
{
	var first = Blockly.JavaScript.valueToCode(block, "FIRST", Blockly.JavaScript.ORDER_NONE || "");
	var second = Blockly.JavaScript.valueToCode(block, "SECOND", Blockly.JavaScript.ORDER_NONE || "");
	
	return [first + "&" + second, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_array"] = function(block)
{
	var start = Blockly.JavaScript.valueToCode(block, "START", Blockly.JavaScript.ORDER_NONE || "");
	var end = Blockly.JavaScript.valueToCode(block, "END", Blockly.JavaScript.ORDER_NONE || "");
	
	return [start + ":" + end, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_absoluteref"] = function(block)
{
	var which = block.getFieldValue("WHICH");
	var index = Blockly.JavaScript.valueToCode(block, "INDEX", Blockly.JavaScript.ORDER_NONE || "");
	
	var column, row;
	var indexes = index.split(":");
	for (var i=0; i<indexes.length; i++)
	{
		column = (which === "COLUMN" || which === "BOTH") ? "$" + indexes[i].match(/\D+/)[0] : indexes[i].match(/\D+/)[0];
		row = (which === "ROW" || which === "BOTH") ? "$" + indexes[i].match(/\d+/)[0] : indexes[i].match(/\d+/)[0];
		indexes[i] = column + row;
	}
	index = indexes.join(":");
	
	return [index, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript["spreadsheet_externalref"] = function(block)
{
	var worksheet = Blockly.JavaScript.valueToCode(block, "WORKSHEET", Blockly.JavaScript.ORDER_NONE || "");
	var array = Blockly.JavaScript.valueToCode(block, "ARRAY", Blockly.JavaScript.ORDER_NONE || "");
	
	return ["'" + worksheet + "'!" + array, Blockly.JavaScript.ORDER_NONE];
};