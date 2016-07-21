# h5
## 1.fullpage
[reference](https://github.com/alvarotrigo/fullPage.js)

1. Mainly use the basic fullpage function.
2. Use lazyload 
like 
'''<img data-src="image.png">
<video>
    <source data-src="video.webm" type="video/webm" />
    <source data-src="video.mp4" type="video/mp4" />
</video>
'''<audio data-autoplay>
    <source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
'''<audio data-keepplaying>
    <source src="http://metakoncept.hr/horse.ogg" type="audio/ogg">
</audio>
3. use the attribute:
continuousVertical: (default false) Defines whether scrolling down in the last section should scroll down to the first one or not, and if scrolling up in the first section should scroll up to the last one or not. Not compatible with loopTop or loopBottom.