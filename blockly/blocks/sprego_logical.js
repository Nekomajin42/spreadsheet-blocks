"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_logical = 210;

Blockly.Blocks["sprego_and"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("STATEMENT")
			.appendField("és");
		this.setTooltip("Ha minden paramétere igaz, akkor IGAZ értéket ad, egyébként HAMIS-at.\n\n=és(kifejezés1; [kifejezés2]; ...)");
		this.setColour(color_logical);
	}
};

Blockly.Blocks["sprego_or"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("STATEMENT")
			.appendField("vagy");
		this.setTooltip("Ha legalább egy paramétere igaz, akkor IGAZ értéket ad, egyébként HAMIS-at.\n\n=vagy(kifejezés1; [kifejezés2]; ...)");
		this.setColour(color_logical);
	}
};

Blockly.Blocks["sprego_not"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("STATEMENT")
			.appendField("nem");
		this.setTooltip("A paraméterként kapott logikai kifejezés eredményét IGAZ-ról HAMIS-ra, HAMIS-ról IGAZ-ra változtatja.\n\n=nem(kifejezés)");
		this.setColour(color_logical);
	}
};