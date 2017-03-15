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
	//workspace.addChangeListener(Blockly.Events.disableOrphans);
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
	
	// make the help button work
	document.getElementById("help").addEventListener("click", function()
	{
		window.open("https://github.com/Nekomajin42/sprego-blocks");
	});
});