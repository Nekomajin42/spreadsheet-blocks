"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

Blockly.Blocks["sprego_sum"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("szum(");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("SZUM függvény");
		this.setColour(140);
	}
};

Blockly.Blocks["sprego_avg"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("átlag(");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("ÁTLAG függvény");
		this.setColour(140);
	}
};

Blockly.Blocks["sprego_min"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("min(");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("MIN függvény");
		this.setColour(140);
	}
};

Blockly.Blocks["sprego_max"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("max(");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("MAX függvény");
		this.setColour(140);
	}
};