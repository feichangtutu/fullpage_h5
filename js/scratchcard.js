/**
 * @author:chenghaolan
 * @email:lanlazy@163.com
 * @desc:刮刮卡程序 canvas html5
 * 刮刮卡元素
 * canvas 画布 宽 高
 * manifest 素材
 *
 */
(function (scratchCard) {
    var dom = document, canvas, canvasPaint, coverImg;
    var scratchCardCanvasWidth, scratchCardCanvasHeight, scratchCardWidth, scratchCardHeight, offsetX, offsetY;
    var isMouseDown = false;
    var isFirstTouch = true;
    var _defOpts = {
        width: "200px",
        height: "100px"
    }
    scratchCard.init = function (opts) {
        var ctx = this;
        ctx.opts = opts;
        ctx.$el = dom.querySelector("#" + opts.el);
        canvas = ctx.canvas = ctx.createCanvas(opts.el);
        canvasPaint = ctx.canvasPaint = ctx.getCanvasContext(canvas);
        ctx.width = scratchCardCanvasWidth = canvas.width;
        ctx.height = scratchCardCanvasHeight = canvas.height;
        //offsetX = canvas.offsetLeft;
        offsetX = ctx.$el.offsetLeft;
        //offsetY = canvas.offsetTop;
        offsetY = ctx.$el.offsetTop;

        coverImg = new Image();
        coverImg.src = opts.scrapeCoverUrl;
        coverImg.onload = function () {
            canvasPaint.fillStyle = opts.fillColor;
            canvasPaint.drawImage(coverImg, 0, 0, ctx.width, ctx.height);
            canvasPaint.globalCompositeOperation = 'destination-out';
            ctx.createBottomImg(opts.scrapePrizeUrl);
        };
        ctx.attachEvent();
    }
    /**
     * 创建canvas
     * @returns {Element}
     */
    scratchCard.createCanvas = function () {
        var ctx = this;
        var _canvas = document.createElement("canvas");
        scratchCardWidth = ctx.$el.offsetWidth;
        scratchCardHeight = ctx.$el.offsetHeight;
        _canvas.id = "ScratchCanvas"
        _canvas.width = scratchCardWidth;
        _canvas.height = scratchCardHeight;
        _canvas.style.position = "absolute";
        //_canvas.style.top = "0px";
        _canvas.style.left = "0px";
        ctx.$el.appendChild(_canvas);
        return _canvas;
    }
    /**
     * canvas下的底图 用来做奖品图层
     * @param src
     */
    scratchCard.createBottomImg = function (src) {
        var ctx = this;
        var _bottomImg = new Image();
        _bottomImg.src = src;
        _bottomImg.width = ctx.width;
        _bottomImg.height = ctx.height;
        ctx.$el.appendChild(_bottomImg);

    }
    scratchCard.getCanvas = function (id) {
        return dom.querySelector("#" + id);
    }
    scratchCard.getCanvasContext = function (_canvas) {
        if (_canvas.getContext) {
            return _canvas.getContext('2d');
        } else {
            alert("您的手机不支持HTML5绘图特性哦~跟对象要钱再买一个~")
        }
    }
    scratchCard.attachEvent = function () {
        var ctx = this;
        canvas.addEventListener('touchstart', function (e) {
            ctx.eventDown(e, ctx)
        });
        canvas.addEventListener('touchend', function (e) {
            ctx.eventUp(e, ctx.opts, ctx);
        });
        canvas.addEventListener('touchmove', ctx.eventMove);
        canvas.addEventListener('mousedown', function (e) {
            ctx.eventDown(e, ctx)
        });
        canvas.addEventListener('mouseup', function (e) {
            ctx.eventUp(e, ctx.opts, ctx);
        });
        canvas.addEventListener('mousemove', ctx.eventMove);
    }
    scratchCard.eventMove = function (e) {
        e.preventDefault();
        if (isMouseDown) {
            if (e.changedTouches) {
                e = e.changedTouches[0];
            }
            x = (e.pageX - offsetX) || 0,
                y = (e.pageY - offsetY) || 0;
            canvasPaint.beginPath();
            canvasPaint.fillStyle = "#f00";
            canvasPaint.arc(x, y, 20, 0, Math.PI*100);
            canvasPaint.fill();
        }
    }
    scratchCard.eventDown = function (e, ctx) {
        e.preventDefault();
        isMouseDown = true;
        if (isFirstTouch || ctx.opts.coustomSwitch) {
            ctx.opts.scrapeUp();
            isFirstTouch = false;
        }
    }
    scratchCard.eventUp = function (e, opts, context) {
        e.preventDefault();
        isMouseDown = false;
        var num = 0;
        var datas = canvasPaint.getImageData(0, 0, scratchCardCanvasWidth, scratchCardCanvasHeight);
        for (var i = 0; i < datas.data.length; i++) {
            if (datas.data[i] == 0) {
                num++;
            }
        }
        if (num >= datas.data.length * 0.4) {
            canvasPaint.fillRect(0, 0, scratchCardCanvasWidth, scratchCardCanvasHeight);
            opts.scrapeEnd.call(context, opts.prize);
        }
    }
}(window.scratchCard = {}));


