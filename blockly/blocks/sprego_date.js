"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_date = "#000080";

Blockly.Blocks["sprego_date/time"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_date/time");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX1");
		this.appendValueInput("INDEX2");
		this.appendValueInput("INDEX3");
		this.setTooltip(locale.help);
		this.setColour(color_date);
	}
};

Blockly.Blocks["sprego_year/month/day"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_year/month/day");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(color_date);
	}
};

Blockly.Blocks["sprego_hour/minute/second"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_hour/minute/second");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(color_date);
	}
};

Blockly.Blocks["sprego_today/now"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_today/now");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.setTooltip(locale.help);
		this.setColour(color_date);
	}
};