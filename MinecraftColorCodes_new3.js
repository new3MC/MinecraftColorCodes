var colorMap = {
    '§4': 'font-weight:normal;text-decoration:none;color:#be0000',
    '§c': 'font-weight:normal;text-decoration:none;color:#fe3f3f',
    '§6': 'font-weight:normal;text-decoration:none;color:#d9a334',
    '§e': 'font-weight:normal;text-decoration:none;color:#fefe3f',
    '§2': 'font-weight:normal;text-decoration:none;color:#00be00',
    '§a': 'font-weight:normal;text-decoration:none;color:#3ffe3f',
    '§b': 'font-weight:normal;text-decoration:none;color:#3ffefe',
    '§3': 'font-weight:normal;text-decoration:none;color:#00bebe',
    '§1': 'font-weight:normal;text-decoration:none;color:#0000be',
    '§9': 'font-weight:normal;text-decoration:none;color:#3f3ffe',
    '§d': 'font-weight:normal;text-decoration:none;color:#fe3ffe',
    '§5': 'font-weight:normal;text-decoration:none;color:#be00be',
    '§f': 'font-weight:normal;text-decoration:none;color:#ffffff',
    '§7': 'font-weight:normal;text-decoration:none;color:#bebebe',
    '§8': 'font-weight:normal;text-decoration:none;color:#3f3f3f',
    '§0': 'font-weight:normal;text-decoration:none;color:#000000',
}

var styleMap = {
    '§l': 'font-weight:bold',
    '§n': 'text-decoration:underline;text-decoration-skip:spaces',
    '§o': 'font-style:italic',
    '§m': 'text-decoration:line-through;text-decoration-skip:spaces',
}

function obfuscate() {
    obf = document.getElementsByClassName("obfuscated");
    for (node of obf) {
        var length = node.innerText.length;
        node.innerText = createRandString(length)
    }

    function randInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createRandString(len) {
        var randString = '';
        for (var i = 0; i < len; i++) {
            randString += String.fromCharCode(randInt(0x00c0, 0x00f6));
            // some random alphabets with diacritics, their widths are same.
        }
        return randString;
    }
}

Object.prototype.replaceColorCodes = function() {
    var raw_text = this.innerText;
    var parsed_html = document.createElement('span');

    if (raw_text.indexOf('\\n') > -1) {
        var lines = raw_text.split('\\n');
    } else if (raw_text.indexOf('\n') > -1) {
        var lines = raw_text.split('\n');
    }
    var color = null;
    var style = null;
    var isSecondLine = false;
    for (var line of lines) {
        var idx = lines.indexOf(line);
        var blocks = line.match(/(§[0-9a-fk-or]){1,}[^§]+/g);
        for (var block of blocks) {
            var elem = document.createElement('span');

            tags = block.match(/(§[0-9a-fk-or])/g);
            for (var tag of tags) {
                if (colorMap[tag] != undefined) {
                    color = colorMap[tag];
                } else if (styleMap[tag] != undefined) {
                    style = styleMap[tag];
                } else if (tag === '§r') {
                    color = null;
                    style = null;
                } else if (tag === '§k') {
                    elem.className = 'obfuscated';
                }
                block = block.replace(tag, '');
            }
            elem.style.cssText += color + ';';
            elem.style.cssText += style + ';';
            elem.innerText = block;
            parsed_html.appendChild(elem);

        }
        var br = document.createElement('br');
        parsed_html.appendChild(br);
        isSecondLine = true;

    }
    var randomize_obfuscated = setInterval(obfuscate, 50);
    return parsed_html;
}