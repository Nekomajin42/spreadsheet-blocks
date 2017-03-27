"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_misc = "#008000";

Blockly.Blocks["sprego_start"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_start");
		this.setDeletable(false);
		this.setInputsInline(true);
		this.appendValueInput("FORMULA")
			.appendField("=");
		this.setTooltip(locale.help);
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_expression"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_expression");
		this.setOutput(true);
		this.appendValueInput("NEXT")
			.appendField(new Blockly.FieldTextInput(locale.name), "STATEMENT");
		this.setTooltip(locale.help);
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_mathops"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_mathops");
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
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_relops"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_relops");
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
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_concat"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_concat");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("FIRST");
		this.appendDummyInput()
			.appendField("&");
		this.appendValueInput("SECOND");
		this.setTooltip(locale.help);
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_array"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_array");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("START");
		this.appendDummyInput()
			.appendField(":");
		this.appendValueInput("END");
		this.setTooltip(locale.help);
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_absoluteref"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_absoluteref");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "WHICH");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_externalref"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_externalref");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("WORKSHEET");
		this.appendDummyInput()
			.appendField("!");
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(color_misc);
	}
};