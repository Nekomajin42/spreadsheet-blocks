"use strict";

goog.provide("Blockly.Blocks.sprego");

goog.require("Blockly.Blocks");

var color_search = 150;

Blockly.Blocks["sprego_index"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField("index");
		this.appendValueInput("ARRAY");
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
		this.appendDummyInput()
			.appendField("hol.van");
		this.appendValueInput("VALUE");
		this.appendValueInput("ARRAY");
		this.appendValueInput("TYPE");
		this.setTooltip("Visszaadja, hogy a keresett érték egy oszlop tartománynak hanyadik sorában, vagy egy sor tartománynak hanyadik oszlopában van.\n\n=hol.van(keresett_érték; tartomány; [egyezés_típusa])");
		this.setColour(color_search);
	}
};

Blockly.Blocks["sprego_row/column"] =
{
	init: function()
	{
		this.setInputsInline(true);
		this.setOutput(true);
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([
						   ["sor", "ROW"],
						   ["oszlop", "COLUMN"]
						]), "NAME");
		this.appendValueInput("INDEX");
		this.setTooltip("Visszaadja egy cella sorszámát vagy oszlopszámát.\n\n=sor(cellahivatkozás)\n=oszlop(cellahivatkozás)");
		this.setColour(color_search);
	}
};