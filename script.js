window.addEventListener("DOMContentLoaded", function()
{
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
	
	var xml_text = "<xml><block type='sprego_start'></block></xml>";
	var xml = Blockly.Xml.textToDom(xml_text);
	Blockly.Xml.domToWorkspace(xml, workspace);

	workspace.addChangeListener(Blockly.Events.disableOrphans);
	
	document.getElementById("generate").addEventListener("click", function()
	{
		var code = Blockly.JavaScript.workspaceToCode(workspace);
		document.getElementById("output").value = code;
	});
	
	document.getElementById("output").addEventListener("click", function()
	{
		this.select();
	});
	
	document.getElementById("help").addEventListener("click", function()
	{
		window.open("https://github.com/Nekomajin42/sprego-blocks");
	});
});