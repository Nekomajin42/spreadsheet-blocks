"use strict";

goog.provide("Blockly.Blocks.spreadsheet");

goog.require("Blockly.Blocks");

Blockly.Blocks["spreadsheet_index"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_index");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("ARRAY");
		this.appendValueInput("ROW");
		this.appendValueInput("COLUMN");
		this.setTooltip(locale.help);
		this.setColour(spreadsheet_color.teal.c1);
	}
};

Blockly.Blocks["spreadsheet_match"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_match");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("VALUE");
		this.appendValueInput("ARRAY");
		this.appendValueInput("TYPE");
		this.setTooltip(locale.help);
		this.setColour(spreadsheet_color.teal.c2);
	}
};

Blockly.Blocks["spreadsheet_row/column"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_row/column");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spreadsheet_color.teal.c3);
	}
};

Blockly.Blocks["spreadsheet_offset"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_offset");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("INDEX");
		this.appendValueInput("ROWS");
		this.appendValueInput("COLUMNS");
		this.appendValueInput("HEIGHT");
		this.appendValueInput("WIDTH");
		this.setTooltip(locale.help);
		this.setColour(spreadsheet_color.teal.c4);
	}
};

Blockly.Blocks["spreadsheet_transpose"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_transpose");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(spreadsheet_color.teal.c4);
	}
};