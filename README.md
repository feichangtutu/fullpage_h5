# h5
## 1.fullpage
###fullpage git reference [address](https://github.com/alvarotrigo/fullPage.js).

1. Mainly use the basic fullpage function.
2. Use fullpage **lazyload** 
like 
```javascript
<img data-src="image.png">
<video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
</video>
```
```javascript
<audio data-autoplay>
    <source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```
```javascript
<audio data-keepplaying>
    <source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
```
3. **use the attribute:**
continuousVertical: (default false) Defines whether scrolling down in the last section should scroll down to the first one or not, and if scrolling up in the first section should scroll up to the last one or not. Not compatible with loopTop or loopBottom.
4. **anchore**
using the **anchors** option or the attribute **data-anchor** in each section), then you will be able to use anchor links also to navigate directly to a certain slide inside a section.

reference example [link]( http://alvarotrigo.com/fullPage/#secondPage/2 )


##2.preload
整个设计都是图片为主，还有一个音乐文件。需要预加载提升用户体验。
预加载参考地址 [preloadJs Module](http://createjs.com/docs/preloadjs/modules/PreloadJS.html) and [loadQueue Class](http://createjs.com/docs/preloadjs/classes/LoadQueue.html#method_loadFile).

引用相关preload.js [地址](https://code.createjs.com/preloadjs-0.6.2.min.js).

具体使用：
以下代码写在 function init(){}方法里
```javascript
            var queue = new createjs.LoadQueue();
            queue.installPlugin(createjs.Sound);
            queue.on("complete", handleComplete, this);
            queue.loadFile({id:"music", src:"./music.mp3"});
            queue.loadManifest([
                {id: "pic1", src: "images/1.jpg"},
                {id: "pic2", src: "images/2.jpg"},
                {id: "pic3", src: "images/3.jpg"},
                {id: "pic4", src: "images/4.jpg"},
                {id: "pic5", src: "images/5.jpg"},
                {id: "pic6", src: "images/6.jpg"},
                {id: "pic7", src: "images/7.jpg"},
                {id: "pic8", src: "images/8.jpg"},
                {id: "pic9", src: "images/9.jpg"},
                {id: "pic10", src: "images/10.jpg"},
                {id: "pic11", src: "images/11.jpg"},
                {id: "pic12", src: "images/12.jpg"},
                {id: "pic13", src: "images/13.jpg"},
                {id: "pic13", src: "images/chuanglian.jpg"},
                {id: "pic14", src: "images/guanzhu.jpg"}
            ]);
            ```
            ```javascript
            function handleComplete() {
                window.bar.animate(1.0, function () {
                    $(".loading").hide();
                    $('#fullpage').fullpage({
                        continuousVertical: true
                    });
                    $("#fullpage").hide();
                    window.bar.destroy();
                });
            }
        ```

##3.scratch
###刮图层触点HTML5 canvas arc() 方法
语法
```javascript
context.arc(x,y,r,sAngle,eAngle,counterclockwise);
```


















