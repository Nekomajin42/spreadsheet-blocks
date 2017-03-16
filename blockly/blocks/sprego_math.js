"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_math = 240;

Blockly.Blocks["sprego_sum/avg/count/product"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["szum", "SUM"],
						   ["átlag", "AVG"],
						   ["darab", "COUNT"],
						   ["szorzat", "PRODUCT"]
						]), "NAME");
		this.appendValueInput("ARRAY");
		this.setTooltip("Kiszámítja a paraméterként megadott tartomány(ok) értékeinek összegét, átlagát, nem üres celláinak számát vagy szorzatát.\n\n=szum(tartomány1; [tartomány2]; ...)\n=átlag(tartomány1; [tartomány2]; ...)\n=darab(tartomány1; [tartomány2]; ...)\n=szorzat(tartomány1; [tartomány2]; ...)");
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

Blockly.Blocks["sprego_mod/pow"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["maradék", "MOD"],
						   ["hatvány", "POWER"]
						]), "NAME");
		this.appendValueInput("VALUE");
		this.appendValueInput("N");
		this.setTooltip("Visszaadja a paraméterként megadott szám n-nel való osztási maradékát vagy n-edik hatványát.\n\n=maradék(szám; n)\n=hatvány(szám; n)");
		this.setColour(color_math);
	}
};

Blockly.Blocks["sprego_sqrt/abs/fact"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["gyök", "SQRT"],
						   ["abs", "ABS"],
						   ["fakt", "FACT"]
						]), "NAME");
		this.appendValueInput("VALUE");
		this.setTooltip("Kiszámolja a paraméterként megadott szám négyzetgyökét, abszolút értékét vagy faktoriálisát.\n\n=gyök(érték)\n=abs(érték)\n=fakt(érték)");
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