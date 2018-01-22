"use strict";

goog.provide("Blockly.Blocks.spreadsheet");

goog.require("Blockly.Blocks");

Blockly.Blocks["spreadsheet_start"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_start");
		this.setDeletable(false);
		this.setInputsInline(true);
		this.appendValueInput("FORMULA")
			.appendField("=");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.grey.c1);
	}
};

Blockly.Blocks["spreadsheet_expression"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_expression");
		this.setOutput(true);
		this.appendValueInput("NEXT")
			.appendField(new Blockly.FieldTextInput(locale.name), "STATEMENT");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c1);
	}
};

Blockly.Blocks["spreadsheet_mathops"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_mathops");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["+", "+"],
						   ["-", "-"],
						   ["*", "*"],
						   ["/", "/"],
						   ["^", "^"]
						]), "OPERATOR");
		this.appendValueInput("RIGHT");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c2);
	}
};

Blockly.Blocks["spreadsheet_relops"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_relops");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["=", "="],
						   ["<", "<"],
						   [">", ">"],
						   ["<=", "<="],
						   [">=", ">="],
						   ["<>", "<>"]
						]), "OPERATOR");
		this.appendValueInput("RIGHT");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c2);
	}
};

Blockly.Blocks["spreadsheet_concat"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_concat");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("FIRST");
		this.appendDummyInput()
			.appendField("&");
		this.appendValueInput("SECOND");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c2);
	}
};

Blockly.Blocks["spreadsheet_array"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_array");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("START");
		this.appendDummyInput()
			.appendField(":");
		this.appendValueInput("END");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c3);
	}
};

Blockly.Blocks["spreadsheet_absoluteref"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_absoluteref");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "WHICH");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c4);
	}
};

Blockly.Blocks["spreadsheet_externalref"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_externalref");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("WORKSHEET");
		this.appendDummyInput()
			.appendField("!");
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.green.c5);
	}
};