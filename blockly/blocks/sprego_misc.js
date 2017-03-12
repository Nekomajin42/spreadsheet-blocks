"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_misc = 270;

Blockly.Blocks["sprego_start"] =
{
	init: function()
	{
		this.setDeletable(false);
		this.moveBy(0, 100);
		this.setInputsInline(true);
		this.appendValueInput("START")
			.appendField("=");
		this.setTooltip("Itt kezdődik a kód");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_statement"] =
{
	init: function()
	{
		this.setOutput(true);
		this.appendValueInput("NEXT")
			.appendField(new Blockly.FieldTextInput("kifejezés"), "STATEMENT");
		this.setTooltip("Tetszőleges kifejezés (tartomány, matematikai művelet, logikai vizsgálat, stb.)");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_mathops"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LEFT");
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["+", "+"],
						   ["-", "-"],
						   ["*", "*"],
						   ["/", "/"],
						   ["^", "^"],
						   ["&", "&"]
						]), "OPERATOR");
		this.appendValueInput("RIGHT");
		this.setTooltip("Elvégzi a kiválasztott matematikai műveletet a bal és jobb oldalon megadott kifejezéssel.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_logicops"] =
{
	init: function()
	{
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
		this.setTooltip("Elvégzi a kiválasztott logikai műveletet a bal és jobb oldalon megadott kifejezéssel.");
		this.setColour(color_misc);
	}
};

Blockly.Blocks["sprego_array"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("START");
		this.appendDummyInput()
			.appendField(":");
		this.appendValueInput("END");
		this.setTooltip("Kijelöl egy tartományt az első és utolsó cella hivatkozása alapján.");
		this.setColour(color_misc);
	}
};