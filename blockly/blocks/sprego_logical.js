"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_logical = 210;

Blockly.Blocks["sprego_if"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField("ha");
		this.appendValueInput("LOGICAL_STATEMENT");
		this.appendValueInput("VALUE_IF_TRUE");
		this.appendValueInput("VALUE_IF_FALSE");
		this.setTooltip("Ha az első paraméterként megadott logikai kifejezés igaz, akkor a második, ha hamis, akkor a harmadik paramétert írja a cellába.\n\n=ha(logikai_kifejezés; [érték_ha_igaz]; [érték_ha_hamis])");
		this.setColour(color_logical);
	}
};

Blockly.Blocks["sprego_and/or"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["és", "AND"],
						   ["vagy", "OR"]
						]), "NAME");
		this.appendValueInput("STATEMENT");
		this.setTooltip("Elvégzi a logikai ÉS illetve VAGY műveletet.\n\n=és(kifejezés1; [kifejezés2]; ...)\n=vagy(kifejezés1; [kifejezés2]; ...)");
		this.setColour(color_logical);
	}
};

Blockly.Blocks["sprego_not"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField("nem");
		this.appendValueInput("STATEMENT");
		this.setTooltip("A paraméterként kapott logikai kifejezés eredményét IGAZ-ról HAMIS-ra, HAMIS-ról IGAZ-ra változtatja.\n\n=nem(kifejezés)");
		this.setColour(color_logical);
	}
};