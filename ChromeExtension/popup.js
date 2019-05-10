'use strict';

let bgchangeColor = document.getElementById('bgchangeColor');
chrome.storage.sync.get('color', function (backgrounddata) {
    bgchangeColor.style.backgroundColor = backgrounddata.color;
    bgchangeColor.setAttribute('value', backgrounddata.color);
});

bgchangeColor.onclick = function (mainelement) {
    let color = mainelement.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (maintabs) {
        chrome.tabs.executeScript(
            maintabs[0].id, {
                code: 'var all = document.getElementsByTagName("*"); for (var i=0, max=all.length; i < max; i++) { all[i].style.backgroundColor = "' + color + '";}'
            });
    });
};

let textchangeColor = document.getElementById('textchangeColor');
chrome.storage.sync.get('textcolor', function (textdata) {
    textchangeColor.style.backgroundColor = textdata.textcolor;
    textchangeColor.setAttribute('value', textdata.textcolor);
});

textchangeColor.onclick = function (mainelement) {
    let textcolor = mainelement.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var all = document.getElementsByTagName("*"); for (var i=0, max=all.length; i < max; i++) { all[i].style.color = "' + textcolor + '";}'
            });
    });
};

extractText.onclick = function (mainelement) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var all = document.querySelectorAll("a, img, ul, h2, input"); for (var i=0, max=all.length; i < max; i++) { while (all[i].firstChild){all[i].removeChild(all[i].firstChild);} ;}'
            });
    });
};

let changeLetterSpacing = document.getElementById('letterSpacing');
chrome.storage.sync.get('fontspacing', function (spacingfunction) {
    changeLetterSpacing.setAttribute('value', spacingfunction.fontspacing);
    changeLetterSpacing.style.backgroundColor = '#000';
    var text = document.createTextNode(spacingfunction.fontspacing)
    changeLetterSpacing.appendChild(text)
});

letterSpacing.onclick = function (mainelement) {
    let fontspacing = mainelement.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var all = document.getElementsByTagName("*"); for (var i=0, max=all.length; i < max; i++) { all[i].style.letterSpacing="' + fontspacing + '";}'
            });
    });
};

let changeFontstyle = document.getElementById('fontStyle');
chrome.storage.sync.get('fontstyle', function (stylefunction) {
    changeFontstyle.setAttribute('value', stylefunction.fontstyle);
    changeFontstyle.style.backgroundColor = '#000';
    var text = document.createTextNode(stylefunction.fontstyle)
    changeFontstyle.appendChild(text)
});

fontStyle.onclick = function (mainelement) {
    let fontstyle = mainelement.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var all = document.getElementsByTagName("*"); for (var i=0, max=all.length; i < max; i++) { all[i].style.fontFamily="' + fontstyle + '";}'
            });
    });
};

let changeFontsize = document.getElementById('fontSize');
chrome.storage.sync.get('fontsize', function (sizefunction) {
    changeFontsize.setAttribute('value', sizefunction.fontsize);
    changeFontsize.style.backgroundColor = '#000';
    var text = document.createTextNode(sizefunction.fontsize)
    changeFontsize.appendChild(text)
});

fontSize.onclick = function (mainelement) {
    let fontsize = mainelement.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var all = document.getElementsByTagName("*"); for (var i=0, max=all.length; i < max; i++) { all[i].style.fontSize="' + fontsize + '";}'
            });
    });
};

let changeLineSpace = document.getElementById('lineSpace');
chrome.storage.sync.get('linespacing', function (linespaceFunction) {
    changeLineSpace.setAttribute('value', linespaceFunction.linespacing);
    changeLineSpace.style.backgroundColor = '#000';
    var text = document.createTextNode(linespaceFunction.linespacing)
    changeLineSpace.appendChild(text)
});

lineSpace.onclick = function (mainelement) {
    let linespacingitem = mainelement.target.value;
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id, {
                code: 'var all = document.getElementsByTagName("*"); for (var i=0, max=all.length; i < max; i++) { all[i].style.lineHeight ="' + linespacingitem + '";}'
            });
    });
};
