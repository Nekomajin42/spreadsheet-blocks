window.addEventListener("DOMContentLoaded", function()
{
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
	
	// auto backup/restore
	var save = window.setInterval(function()
	{
		window.localStorage.autoSave = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
	}, 10000);
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
	
	// make the generator button work
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
});