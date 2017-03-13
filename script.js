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
	workspace.addChangeListener(Blockly.Events.disableOrphans);
	
	// auto backup/restore
	var save = window.setInterval(function()
	{
		window.localStorage.autoSave = Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(workspace));
	}, 10000);
	if (window.localStorage.autoSave == null) // no session found
	{
		// insert start block
		var xml_text = "<xml><block type='sprego_start' x='0' y='100'></block></xml>";
		var xml = Blockly.Xml.textToDom(xml_text);
		Blockly.Xml.domToWorkspace(xml, workspace);
	}
	else // restore session
	{
		Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(window.localStorage.autoSave), workspace);
	}
	
	// make the generator button work
	document.getElementById("generate").addEventListener("click", function()
	{
		// get the code
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		
		// fill the output
		var output = document.getElementById("output");
		output.value = code;
		
		// copy to clipboard
		output.select();
		document.execCommand("copy");
		
		// animate output
		output.classList.add("copy");
		window.setTimeout(function(output)
		{
			document.getElementById("output").classList.remove("copy");
		}, 1000);
	});
	
	// make the help button work
	document.getElementById("help").addEventListener("click", function()
	{
		window.open("https://github.com/Nekomajin42/sprego-blocks");
	});
});