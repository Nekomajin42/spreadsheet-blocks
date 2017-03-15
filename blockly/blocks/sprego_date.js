"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_date = 150;

Blockly.Blocks["sprego_date/time"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["dátum", "DATE"],
						   ["idő", "TIME"]
						]), "NAME");
		this.appendValueInput("INDEX1");
		this.appendValueInput("INDEX2");
		this.appendValueInput("INDEX3");
		this.setTooltip("A paraméterként megadott számokból érvényes dátumot vagy időt állít össze.\n\n=dátum(cellahivatkozás; cellahivatkozás; cellahivatkozás)\n=idő(cellahivatkozás; cellahivatkozás; cellahivatkozás)");
		this.setColour(color_date);
	}
};

Blockly.Blocks["sprego_year/month/day"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["év", "YEAR"],
						   ["hónap", "MONTH"],
						   ["nap", "DAY"]
						]), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip("A paraméterként megadott dátumértékből visszaadja az év, a hónap vagy a nap sorszámát.\n\n=év(cellahivatkozás)\n=hónap(cellahivatkozás)\n=nap(cellahivatkozás)");
		this.setColour(color_date);
	}
};

Blockly.Blocks["sprego_hour/minute/second"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["óra", "HOUR"],
						   ["percek", "MINUTE"],
						   ["mperc", "SECOND"]
						]), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip("A paraméterként megadott időértékből visszaadja az óra, perc vagy másodperc értékét.\n\n=óra(cellahivatkozás)\n=perc(cellahivatkozás)\n=mperc(cellahivatkozás)");
		this.setColour(color_date);
	}
};

Blockly.Blocks["sprego_today/now"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["ma", "TODAY"],
						   ["most", "NOW"]
						]), "NAME");
		this.setTooltip("Visszaadja a mai dátumot, vagy a pontos időt.\n\n=ma()\n=most()");
		this.setColour(color_date);
	}
};