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
    // 给每一个li元素设置鼠标经过事件
    var flag = true;
    let indexOver = 0;
    let indexDown = 0;
    img[0].src = cardURL_G[indexDown].url;
    for (let i = 0; i < List.length; i++) {
        // 设置自定义属性
        // 经过事件
        img[i].setAttribute('index', i);

        img[i].onmouseover = function() {

            indexOver = this.getAttribute('index');
            img[indexOver].src = cardURL_G[indexOver].url;
            if (indexOver != indexDown) {
                flag = true;
                console.log(flag);
            } else {
                flag = false;
            }
        };



        personageShow_img.src = personage[indexDown].url;

        img[i].onmouseout = function() {
            if (flag) {
                indexOver = this.getAttribute('index');
                img[indexOver].src = cardURL[indexOver].url;
            }

        };
        // 点击事件
        img[i].onmousedown = function() {
            flag = false;
            for (let j = 0; j < List.length; j++) {
                img[j].src = cardURL[j].url;
            }
            indexDown = this.getAttribute('index');
            img[indexDown].src = cardURL_G[indexDown].url;
            console.log(flag);
            personageShow_img.src = personage[indexDown].url;
        };
    }

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