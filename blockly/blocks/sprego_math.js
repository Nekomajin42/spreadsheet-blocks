"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_math = 240;

Blockly.Blocks["sprego_sum"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("szum");
		this.setTooltip("Összeadja a paraméterként megadott tartomány(ok) értékeit.\n\n=szum(tartomány1; [tartomány2]; ...)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_avg"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("átlag");
		this.setTooltip("Kiszámítja a paraméterként megadott tartomány(ok) értékeinek átlagát.\n\n=átlag(tartomány1; [tartomány2]; ...)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_min"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("min");
		this.setTooltip("Megkeresi a paraméterként megadott tartomány(ok) legkisebb értékét.\n\n=min(tartomány1; [tartomány2]; ...)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_max"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("max");
		this.setTooltip("Megkeresi a paraméterként megadott tartomány(ok) legnagyobb értékét.\n\n=max(tartomány1; [tartomány2]; ...)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_small"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("kicsi");
		this.appendValueInput("N")
		this.setTooltip("Megkeresi a paraméterként megadott tartomány valahanyadik legkisebb értékét.\n\n=kicsi(tartomány; hanyadik)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_large"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("nagy");
		this.appendValueInput("N")
		this.setTooltip("Megkeresi a paraméterként megadott tartomány valahanyadik legnagyobb értékét.\n\n=nagy(tartomány; hanyadik)");
		this.setColour(color_math);
	}
};