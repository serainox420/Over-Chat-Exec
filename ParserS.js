const str = Chat.getHistory().getRecvLine(0).getText().getString()    
const words = str.split(' ')
var NICK = '<Serainox420> '
var PFIX = '% '
var SGL = words[2]// + " " + words[3]// + " " + words[4]
var CMD = words[0] + words[1] // nick + prefix


 Client.waitTick(5)
 Chat.log("[EXECUTING] ~ ~ ~ ~")// ~ [ "+DBL+" ] ")
 
 Chat.log("[ "+NICK+""+PFIX+"]")
 Chat.log("[ "+SGL+" ]")
 Client.waitTick(5)
 Chat.log(" ")
 Client.waitTick(5)
 Chat.say(SGL)
