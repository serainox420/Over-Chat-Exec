// Set Splitter.js as "RecvMessage" event in "Events"
// Keep in main macro directory or modify path
// Enable this macro as "RecvMessage" Event in JSM

const str = Chat.getHistory().getRecvLine(0).getText().getString()    
const words = str.split(' ')

var NICK1 = '<Serainox420> ' // Master nick
var PFX1 = '% ' // prefix for worker 1

if (event.text.getString().includes(NICK1 + PFX1))  
// <Serainox420> % <command_to_run_as_worker>
JsMacros.runScript("ParserS.js")
