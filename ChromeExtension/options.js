let page = document.getElementById('BackgroundbuttonDiv');
const kButtonColors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#000000'];

function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function () {
            chrome.storage.sync.set({
                color: item
            }, function () {
                console.log('main background color is ' + item);
            })
        });
        page.appendChild(button);
    }
}
constructOptions(kButtonColors);

let textpage = document.getElementById('TextcolorbuttonDiv');
const kButtonTextColors = ['#ff0000', '#ffff00', '#00ff00', '#0000ff', '#000000'];

function textconstructOptions(kButtonTextColors) {
    for (let textitem of kButtonTextColors) {
        let textbutton = document.createElement('button');
        textbutton.style.backgroundColor = textitem;
        textbutton.addEventListener('click', function () {
            chrome.storage.sync.set({
                textcolor: textitem
            }, function () {
                console.log('text color is ' + textitem);
            })
        });
        textpage.appendChild(textbutton);
    }
}
textconstructOptions(kButtonTextColors);

let fontpage = document.getElementById('FontbuttonDiv');
const kfontSpacing = ['-1px', '2px', '3px', '4px'];

function fontOptions(kfontSpacing) {
    for (let fontitem of kfontSpacing) {
        let fontspacing = document.createElement('button');
        var t = document.createTextNode(fontitem);
        fontspacing.appendChild(t);
        fontspacing.addEventListener('click', function () {
            chrome.storage.sync.set({
                fontspacing: fontitem
            }, function () {
                console.log('font spacing is ' + fontitem);
            })
        });
        fontpage.appendChild(fontspacing);
    }
}
fontOptions(kfontSpacing);

let fontstylepage = document.getElementById('FontstylebuttonDiv');
const kFontstyle = ['serif', 'sans-serif', 'monospace'];

function fontstyleOptions(kFontstyle) {
    for (let fontstyleitem of kFontstyle) {
        let fontstyle = document.createElement('button');
        var t = document.createTextNode(fontstyleitem);
        fontstyle.appendChild(t);
        fontstyle.addEventListener('click', function () {
            chrome.storage.sync.set({
                fontstyle: fontstyleitem
            }, function () {
                console.log('font style is ' + fontstyleitem);
            })
        });
        fontstylepage.appendChild(fontstyle);
    }
}
fontstyleOptions(kFontstyle);


let fontsizepage = document.getElementById('FontsizebuttonDiv');
const kFontsize = ['small', 'medium', 'large'];

function fontsizeOptions(kFontsize) {
    for (let fontsizeitem of kFontsize) {
        let fontsize = document.createElement('button');
        var t = document.createTextNode(fontsizeitem);
        fontsize.appendChild(t);
        fontsize.addEventListener('click', function () {
            chrome.storage.sync.set({
                fontsize: fontsizeitem
            }, function () {
                console.log('font size is ' + fontsizeitem);
            })
        });
        fontsizepage.appendChild(fontsize);
    }
}
fontsizeOptions(kFontsize);

let linespacingpage = document.getElementById('LinespacingDiv');
const kLinespacing = ['normal', '1.5', '2.0'];

function linespacingOptions(kLinespacing) {
    for (let linespacingitem of kLinespacing) {
        let linespacing = document.createElement('button');
        var t = document.createTextNode(linespacingitem);
        linespacing.appendChild(t);
        linespacing.addEventListener('click', function () {
            chrome.storage.sync.set({
                linespacing: linespacingitem
            }, function () {
                console.log('line sapcing is ' + linespacingitem);
            })
        });
        linespacingpage.appendChild(linespacing);
    }
}
linespacingOptions(kLinespacing);
