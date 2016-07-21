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
