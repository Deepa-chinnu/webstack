function parseXML(xmlString) {
    var parser = new DOMParser();
    var docError = parser.parseFromString('INVALID', 'text/xml');
    var parsererrorNS = docError.getElementsByTagName("parsererror")[0].namespaceURI;
    var doc = parser.parseFromString(xmlString, 'text/xml');
    if (doc.getElementsByTagNameNS(parsererrorNS, 'parsererror').length > 0) {
        throw new Error('Error parsing XML');
    }
    return doc;
}
 
// XML String:
var xmlString = "<?xml version = '1.0'?>" +
    "<rental> " +
    "   <vehicle number= 'KA 05 4453'> " +
    "      <vehiclename>Swift</vehiclename> " +
    "      <contactnumber>8756423456</contactnumber> " +
    "      <rent>1000</rent> " +
    "   </vehicle> "
 
    +
    "   <vehicle number= 'KA 07 3215'> " +
    "      <vehiclename>Etios</vehiclename> " +
    "      <contactnumber>7760453756</contactnumber> " +
    "      <rent>1500</rent> " +
    "   </vehicle> "
 
    +
    " <vehicle number= 'KA 05 5438'> " +
    "      <vehiclename>verito</vehiclename> " +
    "      <contactnumber>9066107717</contactnumber> " +
    "      <rent>1200</rent> " +
    "   </vehicle> "+
    "</rental>";
 
 
function clickHandler(evt) {
 
    console.log(xmlString);
    var doc;
 
    try {
        doc = parseXML(xmlString);
        console.log(doc.documentElement);
    } catch (e) {
        alert(e);
        return;
    }
    resetLog();
 
    var rootElement = doc.documentElement;
    //
    var children = rootElement.childNodes;
 
    for(var i =0; i< children.length; i++) {
       var child = children[i];
       if(child.nodeType == Node.ELEMENT_NODE)  {
           var number = child.getAttribute("number");
           var vehiclenameElement = child.getElementsByTagName("vehiclename")[0];
           var contactnumberElement = child.getElementsByTagName("contactnumber")[0];
           var rentElement = child.getElementsByTagName("rent")[0];
 
           var vehiclename = vehiclenameElement.textContent;
           var contactnumber = contactnumberElement.textContent;
           var rent = rentElement.textContent;
 
           appendLog("number: " + number);
           appendLog("vehiclename: " + vehiclename);
           appendLog("contactnumber: " + contactnumber);
           appendLog("rent: " + rent);
       }
    }
 
}
 
 
function resetLog() {
    document.getElementById('textarea-log').value = "";
}
 
function appendLog(msg) {
    document.getElementById('textarea-log').value += "\n" + msg;
}