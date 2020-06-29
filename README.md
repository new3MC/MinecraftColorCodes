# MinecraftColorCodes
Minecraft has it's own Color Code system, in which they use § characters.
This JS library I made will translate all color codes into HTML, so you can insert it in your website.


##Installation
Download this as a zip, and open the zip.
Place MinecraftColorCodes.js in the directory you want.
In the webpage you have the string want to translate, link the JS file in your ``` head ``` tag.
Like so:
```
<head>
<script src="MinecraftColorCodes.js"></script>
</head>
```
You can also link the JS file at the bottom of the webpage, right before the ```body``` tag. 
<body>
...
<script src="MinecraftColorCodes_new3.js"></script>
</body>
Now you can use it!

##Usage
It will find HTML element that has className of "MOTD" and translate its text inside of it.
Example:
```
    <script src="MinecraftColorCodes.js"></script>
    <script>
        var old_MOTD = document.getElementById("MOTD");
        var new_MOTD = old_MOTD.replaceColorCodes();
        old_MOTD.replaceChild(new_MOTD, old_MOTD.childNodes[0]);
    </script>
```
Simple enough. Get your string, attach the function at the end (Don't forget the brackets, they are essential) and voila! You can then do whatever you like with it!
Unlike original version replaceColorCodes method is of Object method, not String method.


##Legal
You can modify this file in any way, but if you want, create a pull request so I can have a look. Also, try not sell this file/work for a price. I mean come on, if you really want money, go get a proper job. Thirdly and lastly, you can not give away this file/work without giving credit to me, and possibly giving the URL to this Github page. Due to the informality of this piece of text, you could ignore this if you want to.
