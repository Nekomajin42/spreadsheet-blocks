"use strict";

goog.provide("Blockly.Blocks.spreadsheet");

goog.require("Blockly.Blocks");

Blockly.Blocks["spreadsheet_iserror/isblank"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_iserror/isblank");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.grey.c2);
	}
};

Blockly.Blocks["spreadsheet_isnumber/islogical/istext"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_isnumber/islogical/istext");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.grey.c2);
	}
};