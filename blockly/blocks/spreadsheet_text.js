"use strict";

goog.provide("Blockly.Blocks.spreadsheet");

goog.require("Blockly.Blocks");

Blockly.Blocks["spreadsheet_left/right"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_left/right");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("TEXT");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.orange.c1);
	}
};

Blockly.Blocks["spreadsheet_length"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_length");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("TEXT");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.orange.c2);
	}
};

Blockly.Blocks["spreadsheet_search"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_search");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("FIND");
		this.appendValueInput("TEXT");
		this.appendValueInput("START");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.orange.c3);
	}
};

Blockly.Blocks["spreadsheet_substitute"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_substitute");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("TEXT");
		this.appendValueInput("OLD_TEXT");
		this.appendValueInput("NEW_TEXT");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.orange.c3);
	}
};