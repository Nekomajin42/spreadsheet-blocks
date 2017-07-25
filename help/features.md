# Features

## Inline help
Each block has its own Help with a short description and the syntax. (Parameters in square brackets are optional.)
You can read them in a tooltip when hovering the blocks with the mouse.

## Copy to clipboard
When you click on the *Create* button, the formula will be created from the blocks inside the "=" block.
If you see the green sign appear next to the button, the formula is automatically copied to the clipboard.
No need for `Ctrl+C`, you can just paste it to Excel.

If your browser does not support clipboard access, you won't see the green sign, so you have to copy the highlighted output manually.
(Just use `Ctrl+C`, since the text is already selected.)

## Export and import
You can save the entire workspace to XML (`.sb`) and open from XML (`.sb`) via the menu in the top right corner.
These files can be moved online or with external storage.

## Screenshot
You can create a screenshot via the menu in the top right corner.
The application will automatically save the screenshot into an image file (`.png`).

## Reset
You can remove every block (except the "=" block) from the workspace via the menu in the top right corner.
This action is reversible with two *Undo* operations from the context menu.

## Backup and restore
The entire workspace is automatically saved into the local storage of the browser in every 10 seconds.
The previous workspace will be restored on the next page load.
This feature is intended to protect your work from accidents (window close, system failure, etc.)
**Do not** rely on this feature to save your code for later use!
