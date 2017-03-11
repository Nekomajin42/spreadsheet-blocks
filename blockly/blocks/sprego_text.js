"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

Blockly.Blocks["sprego_left"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("TEXT")
			.appendField("bal(");
		this.appendValueInput("N")
			.appendField("; ");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("BAL függvény");
		this.setColour(160);
	}
};

Blockly.Blocks["sprego_right"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("TEXT")
			.appendField("jobb(");
		this.appendValueInput("N")
			.appendField("; ");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("JOBB függvény");
		this.setColour(160);
	}
};

Blockly.Blocks["sprego_length"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("TEXT")
			.appendField("hossz(");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("HOSSZ függvény");
		this.setColour(160);
	}
};