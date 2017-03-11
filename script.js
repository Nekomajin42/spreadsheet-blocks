window.addEventListener("DOMContentLoaded", function()
{
	var workspace = Blockly.inject("blockly",
	{
		toolbox: document.getElementById("toolbox"),
		comments: true,
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
	
	var xml_text = "<xml><block type='sprego_start' x='0' y='100'></block></xml>";
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
});