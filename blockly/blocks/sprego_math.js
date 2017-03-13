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
		this.appendDummyInput()
			.appendField("szum");
		this.appendValueInput("ARRAY");
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
		this.appendDummyInput()
			.appendField("átlag");
		this.appendValueInput("ARRAY");
		this.setTooltip("Kiszámítja a paraméterként megadott tartomány(ok) értékeinek átlagát.\n\n=átlag(tartomány1; [tartomány2]; ...)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_min/max"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["min", "MIN"],
						   ["max", "MAX"]
						]), "NAME");
		this.appendValueInput("ARRAY");
		this.setTooltip("Megkeresi a paraméterként megadott tartomány(ok) legkisebb vagy legnagyobb értékét.\n\n=min(tartomány1; [tartomány2]; ...)\n=max(tartomány1; [tartomány2]; ...)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_small/large"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["kicsi", "SMALL"],
						   ["nagy", "LARGE"]
						]), "NAME");
		this.appendValueInput("ARRAY");
		this.appendValueInput("N");
		this.setTooltip("Megkeresi a paraméterként megadott tartomány valahanyadik legkisebb vagy legnagyobb értékét.\n\n=kicsi(tartomány; hanyadik)\n=nagy(tartomány; hanyadik)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_round/rounddown/roundup"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["kerekítés", "ROUND"],
						   ["kerek.le", "ROUNDDOWN"],
						   ["kerek.fel", "ROUNDUP"]
						]), "NAME");
		this.appendValueInput("VALUE");
		this.appendValueInput("N");
		this.setTooltip("A paraméterként megadott számot kerekíti a matematika szabályai szerint vagy az alulról vagy felülről legközelebb eső számra.\n\n=kerekítés(érték, hány_számjegyre)\n=kerek.le(érték, hány_számjegyre)\n=kerek.fel(érték, hány_számjegyre)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_sqrt"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField("gyök");
		this.appendValueInput("VALUE");
		this.setTooltip("Kiszámolja a paraméterként megadott szám négyzetgyökét.\n\n=gyök(érték)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_rand"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput("")
			.appendField("vél");
		this.setTooltip("0 <= X < 1 véletlen számot ad vissza.\n\n=vél()");
		this.setColour(color_math);
	}
};