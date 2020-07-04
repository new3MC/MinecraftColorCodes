var colorMap = {
    '§4': 'font-weight:normal;text-decoration:none;color:#be0000;',
    '§c': 'font-weight:normal;text-decoration:none;color:#fe3f3f;',
    '§6': 'font-weight:normal;text-decoration:none;color:#d9a334;',
    '§e': 'font-weight:normal;text-decoration:none;color:#fefe3f;',
    '§2': 'font-weight:normal;text-decoration:none;color:#00be00;',
    '§a': 'font-weight:normal;text-decoration:none;color:#3ffe3f;',
    '§b': 'font-weight:normal;text-decoration:none;color:#3ffefe;',
    '§3': 'font-weight:normal;text-decoration:none;color:#00bebe;',
    '§1': 'font-weight:normal;text-decoration:none;color:#0000be;',
    '§9': 'font-weight:normal;text-decoration:none;color:#3f3ffe;',
    '§d': 'font-weight:normal;text-decoration:none;color:#fe3ffe;',
    '§5': 'font-weight:normal;text-decoration:none;color:#be00be;',
    '§f': 'font-weight:normal;text-decoration:none;color:#ffffff;',
    '§7': 'font-weight:normal;text-decoration:none;color:#bebebe;',
    '§8': 'font-weight:normal;text-decoration:none;color:#3f3f3f;',
    '§0': 'font-weight:normal;text-decoration:none;color:#000000;',
}

var styleMap = {
    '§l': 'font-weight:bold;',
    '§n': 'text-decoration:underline;text-decoration-skip:spaces;',
    '§o': 'font-style:italic;',
    '§m': 'text-decoration:line-through;text-decoration-skip:spaces;',
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

String.prototype.replaceColorCodes = function() {
    let parsed_html = document.createElement('span');
    let obfuscated = false;
    raw_text = this;
    if (raw_text.includes('\\n') == true) {
        var lines = raw_text.split('\\n');
    } else if (raw_text.includes('\n') == true) {
        var lines = raw_text.split('\n');
    } else
        var lines = [raw_text];

    for (var line of lines) {
        var color = '';
        var style = '';
        var idx = lines.indexOf(line);
        var blocks = line.match(/(§[0-9a-fk-or]){1,}[^§]+/g);
        for (var block of blocks) {
            var elem = document.createElement('span');

            tags = block.match(/(§[0-9a-fk-or])/g);
            for (var tag of tags) {
                if (colorMap[tag] != undefined) {
                    color += colorMap[tag];
                } else if (styleMap[tag] != undefined) {
                    style += styleMap[tag];
                } else if (tag === '§r') {
                    color = '';
                    style = '';
                } else if (tag === '§k') {
                    elem.className = 'obfuscated';
                    obfuscated = true;
                }
                block = block.replace(tag, '');
            }
            elem.style.cssText += color;
            elem.style.cssText += style;
            elem.innerText = block;
            console.log(elem);
            parsed_html.appendChild(elem);

        }
        var br = document.createElement('br');
        parsed_html.appendChild(br);
        var color = '';
        var style = '';
    }
    if (obfuscated) var randomize_obfuscated = setInterval(obfuscate, 50);

    return parsed_html.innerHTML;
}