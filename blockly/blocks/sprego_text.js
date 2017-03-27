"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_text = "#FF0000";

Blockly.Blocks["sprego_left/right"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_left/right");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("TEXT");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(color_text);
	}
};

Blockly.Blocks["sprego_length"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_length");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("TEXT");
		this.setTooltip(locale.help);
		this.setColour(color_text);
	}
};

Blockly.Blocks["sprego_search"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_search");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("FIND");
		this.appendValueInput("TEXT");
		this.appendValueInput("START");
		this.setTooltip(locale.help);
		this.setColour(color_text);
	}
};

Blockly.Blocks["sprego_substitute"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_substitute");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(locale.name);
		this.appendValueInput("TEXT");
		this.appendValueInput("OLD_TEXT");
		this.appendValueInput("NEW_TEXT");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(color_text);
	}
};