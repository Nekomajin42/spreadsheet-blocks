"use strict";

goog.provide("Blockly.Blocks.spreadsheet");

goog.require("Blockly.Blocks");

Blockly.Blocks["spreadsheet_sum/avg/count/product"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_sum/avg/count/product");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c1);
	}
};

Blockly.Blocks["spreadsheet_min/max"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_min/max");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c1);
	}
};

Blockly.Blocks["spreadsheet_small/large"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_small/large");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("ARRAY");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c1);
	}
};

Blockly.Blocks["spreadsheet_round/rounddown/roundup"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_round/rounddown/roundup");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("VALUE");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c2);
	}
};

Blockly.Blocks["spreadsheet_mod/pow"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_mod/pow");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("VALUE");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c3);
	}
};

Blockly.Blocks["spreadsheet_sqrt/abs/fact"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_sqrt/abs/fact");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("VALUE");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c4);
	}
};

Blockly.Blocks["spreadsheet_rand"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_rand");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput("")
			.appendField(locale.name);
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.blue.c5);
	}
};