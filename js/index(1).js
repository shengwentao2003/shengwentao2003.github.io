window.onload = function() {
    let ContentList = document.querySelector('div.ContentList');
    // li下每一个图片
    let img = ContentList.querySelectorAll('img');
    console.log(img);
    console.log(ContentList);
    let List = ContentList.querySelector('ul').querySelectorAll('li');
    console.log(List);
    let personageShow_img = document.querySelector('.personageShow').querySelector('img');
    let DList = document.querySelector('.List').querySelectorAll('img');

    let btnLeft = document.querySelector('.btnLeft');
    console.log(btnLeft);
    let btnRight = document.querySelector('.btnRight');
    console.log(btnRight);



    // CV高亮
    let imgCV = [{
        url: './images/chieseCv.png',
    }, {
        url: './images/CVTwo.png',
    }, ];
    // CV 
    let CV = [{
        url: './images/中文CV.png'
    }, {
        url: './images/日文CV.png'
    }, ];

    // 将人物头像 高亮 和 未高亮图片的地址存储到数组对象中
    // 小人物卡片高亮
    let cardURL_G = [{
        url: './images/1角特.png',
    }, {
        url: './images/2角特.png',
    }, {
        url: './images/3角特.png',
    }, {
        url: './images/4角特.png',
    }, ];
    // 小人物卡片
    let cardURL = [{
        url: './images/1角.png',
    }, {
        url: './images/2角.png',
    }, {
        url: './images/3角.png',
    }, {
        url: './images/4角.png',
    }, ];
    // 人物背景图
    let personage = [{
        url: './images/bg-1角.png',
    }, {
        url: './images/bg-2角.png',
    }, {
        url: './images/bg-3角.png',
    }, {
        url: './images/bg-4角.png',
    }, ];
    var flag = true; // 声明一个布尔值来判断
    let indexOver = 0; // 接收鼠标经过 每个img元素的索引
    let indexDown = 0; // 接收鼠标点击 每一个img元素的索引
    img[0].src = cardURL_G[indexDown].url; // 默认第一个img元素也就是第一个人物头像处于高亮状态
    for (let i = 0; i < List.length; i++) {
        // 设置自定义属性
        img[i].setAttribute('index', i);
        // 给每一个img元素设置鼠标经过事件
        img[i].onmouseover = function() {
            // 鼠标经过获取到当前img标签的自定义属性（也就是索引值）然后将值保存到indexOver变量中
            indexOver = this.getAttribute('index');
            // 得到的索引值也就是哪个元素节点触发了事件，所以直接给img标签当索引用， 然后将数组元素中对应的那个元素地址给当前触发的元素
            img[indexOver].src = cardURL_G[indexOver].url;
            // 判断条件 因为点击事件要让人物头像一直处于高亮状态，不设置判断条件下面的鼠标离开事件被把点击事件的高亮状态干掉
            // 当 移动事件的索引值 和 点击事件的索引值不相等的时候 将flag改为真释放离开事件程序运行
            if (indexOver != indexDown) {
                flag = true;
                // else 当 移动事件和 点击事件的索引值相等的时候 也要将flag重新赋值为false不然点击事件又被干掉了
            } else {
                flag = false; 
            }
        };
        // 默认人物背景图 等于点击事件索引下的图片地址
        personageShow_img.src = personage[indexDown].url;
        // 给每一个img元素添加鼠标离开事件
        img[i].onmouseout = function() {
            // flag 用来判断一下程序是否运行 
            if (flag) {
                // 鼠标离开得到当前元素的索引值
                indexOver = this.getAttribute('index');
                // 将 不是高亮状态的图片赋值给 当前元素
                img[indexOver].src = cardURL[indexOver].url;
            }
        };
        // 给每个img元素添加鼠标点击事件
        img[i].onmousedown = function() {
            // 每次点击的时候将flag 改为 假 这样就不会 触发鼠标离开下的程序，点击人物头像高亮状态也不会被干掉
            flag = false;
            // 排他思想 每次点击的时候将 所有处于高亮状态下的人物头像更改为 不是高亮状态下的图片
            for (let j = 0; j < List.length; j++) {
                img[j].src = cardURL[j].url;
            }
            // 然后将点击得到的索引值保存在 indexDown 变量中
            indexDown = this.getAttribute('index');
            // 将点击事件下得到的索引值给 当前元素 
            img[indexDown].src = cardURL_G[indexDown].url;
            // 人物背景也随着点击事件得到的索引值做出改变从数组对象中获取到变换的图片路径
            personageShow_img.src = personage[indexDown].url;
        };
    }




    // CV高亮
    for (let i = 0; i < DList.length; i++) {
        DList[i].id = i;
        DList[i].onmouseover = function() {
            this.src = imgCV[this.id].url;
        }
        DList[i].onmouseout = function() {
            this.src = CV[this.id].url;
        }
    }



    let focusW = document.querySelector('.focus');
    let W = focusW.offsetWidth;
    let num = 0;
    console.log(W);
    let focusUl = focusW.querySelector('ul');
    // 轮播图部分

    btnLeft.onclick = function() {
        num++;
        if (num >= focusUl.children.length) {
            num = 1;
            focusUl.style.left = 0;
        }
        animate(focusUl, -num * W);
        console.log(num);
    }

    btnRight.onclick = function() {

        if (num <= 0) {
            num = focusUl.children.length - 1; // 3
            focusUl.style.left = -num * W + 'px';
        }
        num--;
        animate(focusUl, -num * W);

    }

    // 视频播放显示隐藏
    let btnVideo = document.querySelector('.btnVideo');
    let btnImg = btnVideo.children;
    console.log(btnImg);
    let BoxVideo = document.querySelector('#video');

    console.log(BoxVideo);
    let mask = document.getElementById('mask');
    let jsmodern_video = document.querySelector('.jsmodern-video');



    let sum = 0;
    document.onclick = function(ev) {
        let e = ev || window.event;
        if (e.target === btnImg[0]) {
            if (sum == 0) {
                BoxVideo.style.display = 'block';
                BoxVideo.style.visibility = 'none';
                console.log(jsmodern_video);
                animateWidth(BoxVideo, 777, 437);
                animateWidth(jsmodern_video, 777, 437, function() {
                    BoxVideo.style.className = 'visibilityNone';
                    console.log('回调');
                });
                mask.style.display = 'block';
                sum++;
            }
        }
        if (e.target === mask) {
            if (sum == 1) {
                animateWidth(BoxVideo, 0, 0);
                animateWidth(jsmodern_video, 0, 0, function() {
                    BoxVideo.style.display = 'none';
                });
                jsmodern_video.display = 'none';

                mask.style.display = 'none';
                sum = 0;
            }
        }
        console.log(e.target);
    }
}