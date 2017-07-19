"use strict";

/**
 * Config object for UI locale, colors, etc.
 */
var spregoBlocks = {
	lang: undefined,
	settings: undefined,
	colors: {
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
	}
};

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
	// load settings and UI strings
	spregoBlocks.lang = getBrowserLocale();
	spregoBlocks.settings = (window.localStorage.settings) ? JSON.parse(window.localStorage.settings) : {lang: spregoBlocks.lang, 
																										refstyle: "a1", 
																										software: "mse"};
	setUILocale(spregoBlocks.lang);
	
	// config the workspace
	var workspace = Blockly.inject("blockly",
	{
		toolbox: document.getElementById("toolbox").textContent,
		collapse: false,
		comments: false,
		horizontalLayout: true,
		media: "blockly/media/",
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
	
	// auto backup
	var save = window.setInterval(function()
	{
		window.localStorage.autoSave = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
	}, 10000);
	
	// make the Create button work
	document.getElementById("create-button").addEventListener("click", function()
	{
		// get the code (only inside the start block)
		var code = Blockly.JavaScript.blockToCode(workspace.getBlockById("sprego_start"));
		
		// fill the output field
		var output = document.getElementById("output");
		output.value = (code === "=") ? "" : code; // clear the output if the start block is empty
		output.select();
		
		if (code !== "=" && document.execCommand("copy")) // the start block is not empty AND clipboard write is supported
		{
			window.getSelection().removeAllRanges();
			output.blur();
			
			// animate output
			document.querySelector("label[for='output']").classList.add("copy");
			window.setTimeout(function(output)
			{
				document.querySelector("label[for='output']").classList.remove("copy");
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
		try
		{
			var file = new Blob([xml_text], {type: "text/xml;charset=utf-8"});
			saveAs(file, "code.sb", true);
		}
		catch (e)
		{
			console.error(e);
			window.alert(getErrorLocale("error-feature"));
		}
	});
	
	// open the workspace from XML
	document.getElementById("open").addEventListener("click", function()
	{
		try
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
		}
		catch (e)
		{
			console.error(e);
			window.alert(getErrorLocale("error-feature"));
		}
	});
	
	// clear the workspace
	document.getElementById("clear").addEventListener("click", function()
	{
		Blockly.mainWorkspace.clear(); // clear the workspace
		var xml_text = "<xml><block type='sprego_start' id='sprego_start' x='0' y='100'></block></xml>";
		var xml = Blockly.Xml.textToDom(xml_text);
		Blockly.Xml.domToWorkspace(xml, workspace);
	});
	
	// create screenshot
	document.getElementById("screenshot").addEventListener("click", function()
	{
		try
		{
			saveSvgAsPng(document.querySelector(".blocklySvg"), "sprego_blocks.png", {encoderOptions: 1});
		}
		catch (e)
		{
			console.error(e);
			window.alert(getErrorLocale("error-feature"));
		}
	});
	
	// open and manage Settings
	document.getElementById("sets").addEventListener("click", function()
	{
		// load saved settings
		document.getElementById("settings-lang").value = spregoBlocks.settings.lang || spregoBlocks.lang;
		document.getElementById("settings-refstyle").value = spregoBlocks.settings.refstyle || "a1";
		document.getElementById("settings-software").value = spregoBlocks.settings.software || "mse";
		
		document.getElementById("settings-window").classList.add("open");
	});
	document.getElementById("settings-cancel").addEventListener("click", function(e)
	{
		document.getElementById("settings-window").classList.remove("open");
	});
	document.getElementById("settings-ok").addEventListener("click", function(e)
	{
		spregoBlocks.settings.lang = document.getElementById("settings-lang").value;
		spregoBlocks.settings.refstyle = document.getElementById("settings-refstyle").value;
		spregoBlocks.settings.software = document.getElementById("settings-software").value;
		
		window.localStorage.settings = JSON.stringify(spregoBlocks.settings);
		
		location.reload();
	});
	
	// open Help
	document.getElementById("help").addEventListener("click", function()
	{
		window.open("https://github.com/Nekomajin42/sprego-blocks/tree/master/help");
	});
});

/**
 * These functions return or set the localized strings of UI elements, blocks and generators
 * @default: The language of the browser
 * @optional: The language selected by the user
 * @fallback: English (en)
 */
function getBrowserLocale()
{
	if (window.localStorage.settings) // load from saved settings
	{
		for (var key in lang_data.meta.supported)
		{
			if (key === JSON.parse(window.localStorage.settings).lang)
			{
				return key;
			}
		}
	}
	
	for (var key in lang_data.meta.supported) // find browser locale
	{
		if (lang_data.meta.supported[key].indexOf(navigator.language) !== -1)
		{
			return key;
		}
	}
	
	// default
	return "en";
}
 
function setUILocale(lang)
{
	// append Blockly locale file to HEAD
	var script = document.createElement("script");
	script.src = "blockly/msg/js/" + spregoBlocks.lang + ".js";
	script.type = "text/javascript";
	document.head.appendChild(script);
	
	// controls, menu, settings
	var elements = document.querySelectorAll("input[data-locale]");
	for (var i=0; i<elements.length; i++)
	{
		elements[i].value = lang_data.gui[elements[i].dataset.locale][spregoBlocks.lang].value;
		elements[i].title = lang_data.gui[elements[i].dataset.locale][spregoBlocks.lang].title;
	}
	elements = document.querySelectorAll("h1[data-locale], label[data-locale]");
	for (var i=0; i<elements.length; i++)
	{
		elements[i].innerText = lang_data.gui[elements[i].dataset.locale][spregoBlocks.lang].label;
	}
	elements = document.querySelectorAll("select[data-locale]");
	for (var i=0; i<elements.length; i++)
	{
		for (var j=0; j<elements[i].options.length; j++)
		{
			elements[i].options[j].innerText = lang_data.gui[elements[i].dataset.locale][spregoBlocks.lang][elements[i].options[j].value];
		}
	}
	
	// Blockly toolbox
	var toolbox = new DOMParser().parseFromString(document.getElementById("toolbox").textContent, "application/xml");
	elements = toolbox.querySelectorAll("category");
	for (var i=0; i<elements.length; i++)
	{
		elements[i].setAttribute("name", lang_data.gui[elements[i].getAttribute("locale")][spregoBlocks.lang].name);
	}
	document.getElementById("toolbox").textContent = new XMLSerializer().serializeToString(toolbox);
}

function getErrorLocale(error)
{
	return lang_data.gui[error][spregoBlocks.lang].message;
}

function getBlockLocale(block)
{
	return lang_data.blocks[block][spregoBlocks.lang];
}

function getFunctionName(block, name)
{
	if (name === undefined)
	{
		return lang_data.blocks[block][spregoBlocks.lang].name;
	}
	else
	{
		for (var i=0; i<lang_data.blocks[block][spregoBlocks.lang].name.length; i++)
		{
			if (lang_data.blocks[block][spregoBlocks.lang].name[i][1] === name)
			{
				return lang_data.blocks[block][spregoBlocks.lang].name[i][0];
			}
		}
	}
}

function getSeparatorLocale()
{
	if (window.localStorage.settings && JSON.parse(window.localStorage.settings).software === "loc") // LO style
	{	
		return ";";
	}
	
	return lang_data.meta.separator[spregoBlocks.lang]; // MS style
}