"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_text = 180;

Blockly.Blocks["sprego_left"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("TEXT")
			.appendField("bal");
		this.appendValueInput("N");
		this.setTooltip("Egy szöveg elejéről megadott számú karaktert ad vissza.\n\n=bal(cellahivatkozás; [karakterszám])");
		this.setColour(color_text);
	}
};

Blockly.Blocks["sprego_right"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("TEXT")
			.appendField("jobb");
		this.appendValueInput("N");
		this.setTooltip("Egy szöveg végéről megadott számú karaktert ad vissza.\n\n=jobb(cellahivatkozás; [karakterszám])");
		this.setColour(color_text);
	}
};

Blockly.Blocks["sprego_length"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("TEXT")
			.appendField("hossz");
		this.setTooltip("Megszámolja, hogy egy szöveg hány karakterből áll.\n\n=hossz(cellahivatkozás)");
		this.setColour(color_text);
	}
};

Blockly.Blocks["sprego_search"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("FIND")
			.appendField("szöveg.keres");
		this.appendValueInput("TEXT")
		this.appendValueInput("START")
		this.setTooltip("Visszaadja, hogy hanyadik karakternél kezdődik a keresett szövegdarab egy másik szövegben.\n\n=szöveg.keres(szövegdarab; szövegben; [kezdősorszám])");
		this.setColour(color_text);
	}
};