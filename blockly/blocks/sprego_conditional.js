"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_conditional = 150;

Blockly.Blocks["sprego_if"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("LOGICAL_STATEMENT")
			.appendField("ha");
		this.appendValueInput("VALUE_IF_TRUE");
		this.appendValueInput("VALUE_IF_FALSE");
		this.setTooltip("Ha az első paraméterként megadott logikai kifejezés igaz, akkor a második, ha hamis, akkor a harmadik paramétert írja a cellába.\n\n=ha(logikai_kifejezés; [érték_ha_igaz]; [érték_ha_hamis])");
		this.setColour(color_conditional);
	}
};

Blockly.Blocks["sprego_iserror"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("VALUE")
			.appendField("hibás");
		this.setTooltip("Ha a paraméterként megadott érték valamilyen hibaüzenet, akkor IGAZ értéket ad, egyébként HAMIS-at.\n\n=hibás(érték)");
		this.setColour(color_conditional);
	}
};