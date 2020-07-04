# MinecraftColorCodes
Minecraft has it's own Color Code system, in which they use § characters.
This JS library I made will translate all color codes into HTML, so you can insert it in your website.

Original version is made by FoxinFlame(https://github.com/FoxInFlame/MinecraftColorCodes), I copied his(her) idea and some css resources but rewrote html-making parts.

#### Why rewrite?

Original version of FoxinFlame(https://github.com/FoxInFlame/MinecraftColorCodes) is working well, but I found two bugs handling 'obfuscated' tag. One is minor(the width of obfuscated characters was not constant even when using monospace fonts), but the other one is more critical('obfuscated' tag in rightmost part of first line affected second line as well). As Javascript baby I couldn't understand the original code so couldn't fix it (sadly), and decided to rewrite the script.

Unlike original version replaceColorCodes method is Object method, not String method. Also you can see html tags that script created using Chrome DevTools or similar tools in other browsers.

#### Installation
Download this as a zip, and open the zip.
Place MinecraftColorCodes.js in the directory you want.
In the webpage you have the string want to translate, link the JS file in your ``` head ``` tag.
Like so:

```html
<head>
<script src="MinecraftColorCodes.js"></script>
</head>
```

You can also link the JS file at the bottom of the webpage, right before the ```body``` tag. 

```html
<body>
...
<script src="MinecraftColorCodes.js"></script>
</body>
```

Now you can use it!

#### Usage
It will find HTML elements that their Ids are  "MOTD" and convert their text inside of them with colors and styles of Minecraft.
Example:

```javascript
<body>
...
<span id="MOTD" class="minecraft">§aYour §m§0MOTD §8here.§kasdf</span>
</body>
<script src="MinecraftColorCodes.js"></script>
<script>
    var old_MOTD = document.getElementById("MOTD").innerText;
    var new_MOTD = old_MOTD.replaceColorCodes();
    document.getElementById("MOTD").innerHTML = new_MOTD;
</script>
```
Simple enough. Get your string, attach the function at the end (Don't forget the brackets, they are essential) and voila! You can then do whatever you like with it!

It is advisable to use monospace fonts(including Minecraft font, for sure) and dark background for the element that contains MOTD text. For example you can use a css style like below.

```html
<head>
    <style>
    .minecraft {
        background-color: black;
        color: #AAAAAA;
        display: inline-block;
        font-family: Minecraft, monospace;
        font-size: 90%;
        letter-spacing: 1px;
        padding: 5px;
        white-space: pre;
    }
    </style>

</head>
```

#### Legal
You can modify this file in any way, but if you want, create a pull request so I can have a look. Also, try not sell this file/work for a price. I mean come on, if you really want money, go get a proper job. Thirdly and lastly, you can not give away this file/work without giving credit to me, and possibly giving the URL to this Github page. Due to the informality of this piece of text, you could ignore this if you want to.
