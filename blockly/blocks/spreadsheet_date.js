"use strict";

goog.provide("Blockly.Blocks.spreadsheet");

goog.require("Blockly.Blocks");

Blockly.Blocks["spreadsheet_date/time"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_date/time");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX1");
		this.appendValueInput("INDEX2");
		this.appendValueInput("INDEX3");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.red.c1);
	}
};

Blockly.Blocks["spreadsheet_year/month/day"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_year/month/day");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.red.c2);
	}
};

Blockly.Blocks["spreadsheet_hour/minute/second"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_hour/minute/second");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.red.c2);
	}
};

Blockly.Blocks["spreadsheet_weekday/weeknum"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_weekday/weeknum");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("DATE");
		this.appendValueInput("TYPE");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.red.c3);
	}
};

Blockly.Blocks["spreadsheet_today/now"] =
{
	init: function()
	{
		var locale = getBlockLocale("spreadsheet_today/now");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.setTooltip(locale.help);
		this.setColour(spreadsheetBlocks.colors.red.c3);
	}
};