"use strict";

/**
 * Stuff to do on page load:
 * - Load UI locale strings
 * - Inject and config Blockly
 * - Implement auto backup and restore
 * - Make the Create button work
 * - Make the menu work
 */
window.addEventListener("DOMContentLoaded", function()
{
	// load UI strings
	getBrowserLocale();
	getUILocale();
	
	// config the workspace
	var workspace = Blockly.inject("blockly",
	{
		toolbox: document.getElementById("toolbox").textContent,
		collapse: false,
		comments: false,
		horizontalLayout: true,
		scrollbars: true,
		sounds: false,
		trashcan: true,
		zoom:
		{
			controls: true,
			startScale: 1.0,
			wheel: false
		}
	});
	Blockly.BlockSvg.START_HAT = true;
	Blockly.Flyout.prototype.autoClose = false;
	Blockly.Tooltip.LIMIT = 500;
	Blockly.Tooltip.HOVER_MS = 200;
	
	// auto backup
	var save = window.setInterval(function()
	{
		window.localStorage.autoSave = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
	}, 10000);
	
	// restore
	if (window.localStorage.autoSave == null) // no session found, create START block
	{
		var xml_text = "<xml><block type='sprego_start' id='sprego_start' x='0' y='100'></block></xml>";
		var xml = Blockly.Xml.textToDom(xml_text);
		Blockly.Xml.domToWorkspace(xml, workspace);
	}
	else // restore previous session
	{
		Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(window.localStorage.autoSave), workspace);
	}
	
	// make the Create button work
	document.getElementById("generate").addEventListener("click", function()
	{
		// get the code (only inside the start block)
		var code = Blockly.JavaScript.blockToCode(workspace.getBlockById("sprego_start"));
		
		// fill the output field
		var output = document.getElementById("output");
		output.value = code;
		
		if (code !== "") // no need to copy an empty string
		{
			// copy to clipboard
			output.select();
			document.execCommand("copy");
			
			// animate output
			output.classList.add("copy");
			window.setTimeout(function(output)
			{
				document.getElementById("output").classList.remove("copy");
			}, 1000);
		}
	});
	
	// make the menu work
	document.getElementById("menu-button").addEventListener("click", function()
	{
		document.getElementById("menu").classList.add("open");
	});
	document.body.addEventListener("click", function(e)
	{
		if (e.target.id !== "menu-button")
		{
			document.getElementById("menu").classList.remove("open");
		}
	});
	
	// save the workspace to XML
	document.getElementById("save").addEventListener("click", function()
	{
		var xml = Blockly.Xml.workspaceToDom(workspace);
		var xml_text = Blockly.Xml.domToPrettyText(xml);
		var file = new File([xml_text], "code.sb", {type: "text/xml;charset=utf-8"});
		saveAs(file, "code.sb", true);
	});
	
	// open the workspace from XML
	document.getElementById("open").addEventListener("click", function()
	{
		// create input and load file(s)
		var input = document.createElement("input");
		input.type = "file";
		input.accept = ".sb";
		input.multiple = false;
		input.click();
		input.addEventListener("change", function(e)
		{
			var reader = new FileReader();
			reader.onload = function(e)
			{
				Blockly.mainWorkspace.clear(); // clear the workspace
				var xml_text = e.target.result; // load new code
				var xml = Blockly.Xml.textToDom(xml_text);
				Blockly.Xml.domToWorkspace(xml, workspace);
			}
			reader.readAsText(input.files[0], "utf-8");
		});
	});
	
	// create data URL
	/*document.getElementById("url").addEventListener("click", function()
	{
		var xml = Blockly.Xml.workspaceToDom(workspace);
		var xml_text = Blockly.Xml.domToPrettyText(xml);
		console.log(xml_text.length, xml_text);
	});*/
	
	// open Help
	document.getElementById("help").addEventListener("click", function()
	{
		window.open("https://github.com/Nekomajin42/sprego-blocks/tree/master/help");
	});
});

/**
 * These functions return the localized strings of UI elements, blocks and generators
 * @default: The language of the browser
 * @fallback: English (en)
 */
var sprego_locale = "en";
function getBrowserLocale()
{
	for (var key in lang_data.meta.supported)
	{
		if (lang_data.meta.supported[key].indexOf(navigator.language) !== -1)
		{
			sprego_locale = key;
		}
	}
}
 
function getUILocale()
{
	// menu
	var elements = document.querySelectorAll("input[data-locale]");
	for (var i=0; i<elements.length; i++)
	{
		elements[i].value = lang_data.gui[elements[i].dataset.locale][sprego_locale].value;
		elements[i].title = lang_data.gui[elements[i].dataset.locale][sprego_locale].title;
	}
	
	// Blockly toolbox
	var toolbox = new DOMParser().parseFromString(document.getElementById("toolbox").textContent, "application/xml");
	elements = toolbox.querySelectorAll("category");
	for (var i=0; i<elements.length; i++)
	{
		elements[i].setAttribute("name", lang_data.gui[elements[i].getAttribute("locale")][sprego_locale].name);
	}
	document.getElementById("toolbox").textContent = new XMLSerializer().serializeToString(toolbox);
}

function getBlockLocale(block)
{
	return lang_data.blocks[block][sprego_locale];
}

function getFunctionName(block, name)
{
	if (name === undefined)
	{
		return lang_data.blocks[block][sprego_locale].name;
	}
	else
	{
		for (var i=0; i<lang_data.blocks[block][sprego_locale].name.length; i++)
		{
			if (lang_data.blocks[block][sprego_locale].name[i][1] === name)
			{
				return lang_data.blocks[block][sprego_locale].name[i][0];
			}
		}
	}
}

function getSeparatorLocale()
{
	return lang_data.meta.separator[sprego_locale];
}

/**
 * Define colors for blocks
 */
var sprego_color = {
	grey: {
		c1: "#424242",
		c2: "#616161",
		c3: "#757575"
	},
	green: {
		c1: "#1B5E20",
		c2: "#2E7D32",
		c3: "#388E3C",
		c4: "#43A047",
		c5: "#4CAF50"
	},
	blue: {
		c1: "#0D47A1",
		c2: "#1565C0",
		c3: "#1976D2",
		c4: "#1976D2",
		c5: "#2196F3"
	},
	bluegrey: {
		c1: "#263238",
		c2: "#37474F",
		c3: "#455A64",
		c4: "#546E7A",
		c5: "#607D8B"
	},
	orange: {
		c1: "#BF360C",
		c2: "#D84315",
		c3: "#E64A19",
		c4: "#F4511E",
		c5: "#FF5722"
	},
	red: {
		c1: "#B71C1C",
		c2: "#C62828",
		c3: "#D32F2F",
		c4: "#E53935",
		c5: "#F44336"
	},
	teal: {
		c1: "#004D40",
		c2: "#00695C",
		c3: "#00796B",
		c4: "#00897B",
		c5: "#009688"
	}
};