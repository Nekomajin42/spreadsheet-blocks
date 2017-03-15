"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_conditional = 90;

Blockly.Blocks["sprego_iserror/isblank"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["hibás", "ISERROR"],
						   ["üres", "ISBLANK"]
						]), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip("Ha a paraméterként megadott érték valamilyen hibaüzenet vagy üres cella, akkor IGAZ értéket ad, egyébként HAMIS-at.\n\n=hibás(cellahivatkozás)\n=üres(cellahivatkozás)");
		this.setColour(color_conditional);
	}
};

Blockly.Blocks["sprego_isnumber/islogical"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["szám", "INT"],
						   ["logikai", "ISLOGICAL"]
						]), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip("Ha a paraméterként megadott érték szám vagy logikai érték, akkor IGAZ értéket ad, egyébként HAMIS-at.\n\n=szám(cellahivatkozás)\n=logikai(cellahivatkozás)");
		this.setColour(color_conditional);
	}
};