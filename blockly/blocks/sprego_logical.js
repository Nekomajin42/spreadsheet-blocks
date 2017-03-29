"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

Blockly.Blocks["sprego_if"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_if");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("EXPRESSION");
		this.appendValueInput("VALUE_IF_TRUE");
		this.appendValueInput("VALUE_IF_FALSE");
		this.setTooltip(locale.help);
		this.setColour(sprego_color.bluegrey.c1);
	}
};

Blockly.Blocks["sprego_and/or"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_and/or");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("EXPRESSION1");
		this.appendValueInput("EXPRESSION2");
		this.setTooltip(locale.help);
		this.setColour(sprego_color.bluegrey.c2);
	}
};

Blockly.Blocks["sprego_not"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_not");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("EXPRESSION");
		this.setTooltip(locale.help);
		this.setColour(sprego_color.bluegrey.c3);
	}
};