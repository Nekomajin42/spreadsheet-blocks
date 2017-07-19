"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

Blockly.Blocks["sprego_iserror/isblank"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_iserror/isblank");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.grey.c2);
	}
};

Blockly.Blocks["sprego_isnumber/islogical/istext"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_isnumber/islogical/istext");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.grey.c2);
	}
};