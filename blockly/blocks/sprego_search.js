"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_search = 120;

Blockly.Blocks["sprego_index"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("ARRAY")
			.appendField("index");
		this.appendValueInput("ROW");
		this.appendValueInput("COLUMN");
		this.setTooltip("Visszadja egy oszlop valahanyadik sorában, vagy egy sor valahanyadik oszlopában található értéket.\n\n=index(tartomány; [sorszám]; [oszlopszám])");
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_match"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("VALUE")
			.appendField("hol.van");
		this.appendValueInput("ARRAY");
		this.appendValueInput("TYPE");
		this.setTooltip("Visszaadja, hogy a keresett érték egy oszlop tartománynak hanyadik sorában, vagy egy sor tartománynak hanyadik oszlopában van.\n\n=hol.van(keresett_érték; tartomány; [egyezés_típusa])");
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_row"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("INDEX")
			.appendField("sor");
		this.setTooltip("Visszaadja egy cella sorszámát.\n\n=sor(cellahivatkozás)");
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_column"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendValueInput("INDEX")
			.appendField("oszlop");
		this.setTooltip("Visszaadja egy cella oszlopszámát.\n\n=oszlop(cellahivatkozás)");
		this.setColour(color_search);
	}
};