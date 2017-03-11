"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

Blockly.Blocks["sprego_start"] =
{
	init: function()
	{
		this.deletable = false;
		this.setInputsInline(true);
		this.appendValueInput("START")
			.appendField("=");
		this.setTooltip("Itt kezdődik a kód");
		this.setColour(270);
	}
};

Blockly.Blocks["sprego_if"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LOGICAL_STATEMENT")
			.appendField("ha(");
		this.appendValueInput("VALUE_IF_TRUE")
			.appendField("; ");
		this.appendValueInput("VALUE_IF_FALSE")
			.appendField("; ");
		this.appendDummyInput("")
			.appendField(")");
		this.setTooltip("HA függvény");
		this.setColour(120);
	}
};

Blockly.Blocks["sprego_statement"] =
{
	init: function()
	{
		this.setOutput(true);
		this.appendDummyInput("")
			.appendField(new Blockly.FieldTextInput("kifejezés"), "STATEMENT");
		this.setTooltip("Tetszőleges kifejezés");
		this.setColour(180);
	}
};