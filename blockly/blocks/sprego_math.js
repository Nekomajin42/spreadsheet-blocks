"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

Blockly.Blocks["sprego_sum/avg/count/product"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_sum/avg/count/product");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c1);
	}
};

Blockly.Blocks["sprego_min/max"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_min/max");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("ARRAY");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c1);
	}
};

Blockly.Blocks["sprego_small/large"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_small/large");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("ARRAY");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c1);
	}
};

Blockly.Blocks["sprego_round/rounddown/roundup"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_round/rounddown/roundup");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("VALUE");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c2);
	}
};

Blockly.Blocks["sprego_mod/pow"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_mod/pow");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("VALUE");
		this.appendValueInput("N");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c3);
	}
};

Blockly.Blocks["sprego_sqrt/abs/fact"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_sqrt/abs/fact");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown(locale.name), "NAME");
		this.appendValueInput("VALUE");
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c4);
	}
};

Blockly.Blocks["sprego_rand"] =
{
	init: function()
	{
		var locale = getBlockLocale("sprego_rand");
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput("")
			.appendField(locale.name);
		this.setTooltip(locale.help);
		this.setColour(spregoBlocks.colors.blue.c5);
	}
};