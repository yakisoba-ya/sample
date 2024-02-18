$(function () {
$('.hero__view__box').slick({
  fade:true,//切り替えをフェードで行う。初期値はfalse。
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 3000,//次のスライドに切り替わる待ち時間
  speed:1500,//スライドの動きのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 1,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで3枚の写真を移動して見せる
  arrows: true,//左右の矢印あり
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  dots: true,//下部ドットナビゲーションの表示
      pauseOnFocus: false,//フォーカスで一時停止を無効
      pauseOnHover: false,//マウスホバーで一時停止を無効
      pauseOnDotsHover: false,//ドットナビゲーションをマウスホバーで一時停止を無効
});

$('.main__content-04__scroll').slick({
  arrows: false,//左右の矢印はなし
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  autoplaySpeed: 0,//自動的に動き出す待ち時間。初期値は3000ですが今回の見せ方では0
  speed: 6900,//スライドのスピード。初期値は300。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  pauseOnHover: true,//オンマウスでスライドを一時停止させるかどうか。初期値はtrue。
  pauseOnFocus: false,//フォーカスした際にスライドを一時停止させるかどうか。初期値はtrue。
  cssEase: 'linear',//動き方。初期値はeaseですが、スムースな動きで見せたいのでlinear
  slidesToShow: 3,//スライドを画面に4枚見せる
  slidesToScroll: 1,//1回のスライドで動かす要素数
  responsive: [
    {
    breakpoint:1200,
    settings:{
      slidesToShow: 3,
    }
    },
    {
    breakpoint: 769,//モニターの横幅が769px以下の見せ方
    settings: {
      slidesToShow: 2,//スライドを画面に2枚見せる
    }
  },
  {
    breakpoint: 480,//モニターの横幅が426px以下の見せ方
    settings: {
      slidesToShow: 1.5,//スライドを画面に1.5枚見せる
    }
  }
]
});
// ーーーーーーーーーーーーーーーーーーーーーー
// スクロールアクション


// ーーーーーーーーーーーーーーーーーーーー
// マウスストーカー
$(function(){
  const cursor = $("#js-cursor");
  const mouse = $("#js-mouse");
  $(document).on("mousemove",function(e){
      const x=e.clientX;
      const y=e.clientY;
      cursor.css({
          "opacity": "1",
          "transform": "translate(" + x + "px," + y + "px)",
      });
      setTimeout(function(){
          mouse.css({
              "opacity": "1",
              "transform": "translate(" + x + "px," + y + "px)",
          });
      },150);
      $("a").on({
        "mouseenter": function() {
            mouse.addClass("js-hover");
            cursor.addClass("js-hover");
        },
        "mouseleave": function() {
            mouse.removeClass("js-hover");
            cursor.removeClass("js-hover");
        }
    });

  });
});
// ーーーーーーーーーーーーー
// ハンバーガーメニュー
$('#js-hunberger').on('click',function(){

  $('.g-navi').addClass('g-navi__active')
  $('.g-navi').animate({right:'0vw'});
  $('#js-hunberger').css("display","none")
});
$('.navi__xros').on('click',function(){
  $('.g-navi').toggleClass('g-navi__active')
  $('#js-hunberger').css("display","block")
});

// ----------------------------------
//     loading
$(window).on('load',function(){
  $("#splash").delay(1900).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1700).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});

// ---------------------------------
// lineスクロールトリガー
gsap.set('.main__content-01__line01', {
opacity:0,
height:5,
  });
gsap.to('.main__content-01__line01',{
  opacity:1,
  duration:7,
  height:550,
  scrollTrigger:{
    trigger:'.main__content-01',
    start:'top center'
    }
  });
gsap.set('.main__content-01__line02', {
    opacity:0,
    width:5,
      });
gsap.to('.main__content-01__line02',{
  opacity:1,
  duration:7,
  width:550,
  scrollTrigger:{
    trigger:'.main__content-01',
    start:'top center'
        }
      });

gsap.set('.main__content-02__line01', {
opacity:0,
height:5,
  });
gsap.to('.main__content-02__line01',{
  opacity:1,
  duration:7,
  height:550,
  scrollTrigger:{
    trigger:'.main__content-02',
    start:'top center'
    }
  });
gsap.set('.main__content-02__line02', {
    opacity:0,
    width:5,
      });
gsap.to('.main__content-02__line02',{
  opacity:1,
  duration:7,
  width:550,
  scrollTrigger:{
    trigger:'.main__content-02',
    start:'top center'
        }
      });

gsap.set('.main__content-03__line01', {
opacity:0,
height:5,
  });
gsap.to('.main__content-03__line01',{
  opacity:1,
  duration:7,
  height:550,
  scrollTrigger:{
    trigger:'.main__content-02',
    start:'top center'
    }
  });
gsap.set('.main__content-03__line02', {
    opacity:0,
    width:5,
      });
gsap.to('.main__content-03__line02',{
  opacity:1,
  duration:7,
  width:550,
  scrollTrigger:{
    trigger:'.main__content-03',
    start:'top center'
        }
      });
// -----------------------------

gsap.set('.page1__content-01__line01', {
opacity:0,
height:5,
  });
gsap.to('.page1__content-01__line01',{
  opacity:1,
  duration:7,
  height:550,
  scrollTrigger:{
    trigger:'.page1__content-01',
    start:'top center'
    }
  });
gsap.set('.page1__content-01__line02', {
    opacity:0,
    width:5,
      });
gsap.to('.page1__content-01__line02',{
  opacity:1,
  duration:7,
  width:550,
  scrollTrigger:{
    trigger:'.page1__content-01',
    start:'top center'
        }
      });

gsap.set('.page1__content-02__line01', {
opacity:0,
height:5,
  });
gsap.to('.page1__content-02__line01',{
  opacity:1,
  duration:7,
  height:550,
  scrollTrigger:{
    trigger:'.page1__content-02',
    start:'top center'
    }
  });
gsap.set('.page1__content-02__line02', {
    opacity:0,
    width:5,
      });
gsap.to('.page1__content-02__line02',{
  opacity:1,
  duration:7,
  width:550,
  scrollTrigger:{
    trigger:'.page1__content-02',
    start:'top center'
        }
      });
// -----------------------------------
gsap.set('.page2__content-01__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page2__content-01__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page2__content-01',
      start:'top center'
      }
    });
  gsap.set('.page2__content-01__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page2__content-01__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page2__content-01',
      start:'top center'
          }
        });

  gsap.set('.page2__content-02__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page2__content-02__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page2__content-02',
      start:'top center'
      }
    });
  gsap.set('.page2__content-02__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page2__content-02__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page2__content-02',
      start:'top center'
          }
        });
// ---------------------------------
gsap.set('.page3__content-01__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page3__content-01__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page3__content-01',
      start:'top center'
      }
    });
  gsap.set('.page3__content-01__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page3__content-01__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page3__content-01',
      start:'top center'
          }
        });

  gsap.set('.page3__content-02__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page3__content-02__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page3__content-02',
      start:'top center'
      }
    });
  gsap.set('.page3__content-02__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page3__content-02__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page3__content-02',
      start:'top center'
          }
        });
// -----------------------------------------
gsap.set('.page4__content-01__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page4__content-01__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page4__content-01',
      start:'top center'
      }
    });
  gsap.set('.page4__content-01__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page4__content-01__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page4__content-01',
      start:'top center'
          }
        });

  gsap.set('.page4__content-02__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page4__content-02__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page4__content-02',
      start:'top center'
      }
    });
  gsap.set('.page4__content-02__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page4__content-02__line02',{
    opacity:1,
    duration:7,
    width:250,
    scrollTrigger:{
      trigger:'.page4__content-02',
      start:'top center'
          }
        });
// ---------------------------------------
gsap.set('.page5__content-01__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page5__content-01__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page5__content-01',
      start:'top center'
      }
    });
  gsap.set('.page5__content-01__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page5__content-01__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page5__content-01',
      start:'top center'
          }
        });
// ---------------------------------------
gsap.set('.page6__content-01__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page6__content-01__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page6__content-01',
      start:'top center'
      }
    });
  gsap.set('.page6__content-01__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page6__content-01__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page6__content-01',
      start:'top center'
          }
        });
// ---------------------------------------
gsap.set('.page8__content-01__line01', {
  opacity:0,
  height:5,
    });
  gsap.to('.page8__content-01__line01',{
    opacity:1,
    duration:7,
    height:550,
    scrollTrigger:{
      trigger:'.page8__content-01',
      start:'top center'
      }
    });
  gsap.set('.page8__content-01__line02', {
      opacity:0,
      width:5,
        });
  gsap.to('.page8__content-01__line02',{
    opacity:1,
    duration:7,
    width:550,
    scrollTrigger:{
      trigger:'.page8__content-01',
      start:'top center'
          }
        });
//----------------------------------------------------
//                               img スクロールトリガー
gsap.set('.main__content-01__img-01',{
  opacity:0
});
gsap.to('.main__content-01__img-01',{
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:'.main__content-01',
    start:'top center'
  }
});
gsap.set('.main__content-01__img-02',{
  opacity:0
});
gsap.to('.main__content-01__img-02',{
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:'.main__content-01',
    start:'top center'
  }
});

gsap.set('.main__content-02__img',{
  opacity:0
});
gsap.to('.main__content-02__img',{
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:'.main__content-02',
    start:'top center'
  }
});

gsap.set('.main__content-03__img',{
  opacity:0
});
gsap.to('.main__content-03__img',{
  opacity:1,
  duration:5,
  scrollTrigger:{
    trigger:'.main__content-03',
    start:'top center'
  }
});

gsap.set('.main__content-05__img01',{
  opacity:0,
  x:100,
});
gsap.to('.main__content-05__img01',{
  opacity:1,
  x:15,
  duration:3,
  scrollTrigger:{
    trigger:'.main__content-05',
    start:'top center'
  }
});

gsap.set('.main__content-05__img02',{
  opacity:0,
  x:-100,
});
gsap.to('.main__content-05__img02',{
  opacity:1,
  x:0,
  duration:3,
  scrollTrigger:{
    trigger:'.main__content-05',
    start:'top center'
  }
});

gsap.set('.main__content-06',{
  opacity:0,

});
gsap.to('.main__content-06',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.main__content-06',
    start:'top center'
  }
});

gsap.set('.main__content-07',{
  opacity:0,

});
gsap.to('.main__content-07',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.main__content-07',
    start:'top center'
  }
});
// ---------------------------------------------
//                                           p1
gsap.set('.page1__content-01__container1__imgbox01',{
  opacity:0,
  x:100
});
gsap.to('.page1__content-01__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:3,
  scrollTrigger:{
    trigger:'.page1__content-01__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page1__content-01__container1__imgbox02',{
  opacity:0,

});
gsap.to('.page1__content-01__container1__imgbox02',{
  opacity:1,

  duration:3,
  scrollTrigger:{
    trigger:'.page1__content-01__container1__imgbox02',
    start:'top center'
  }
});
gsap.set('.page1__content-01__container2__imgbox01',{
  opacity:0,
  x:100
});
gsap.to('.page1__content-01__container2__imgbox01',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container2__imgbox01',
    start:'top center'
  }
});
gsap.set('.page1__content-01__container2__imgbox02',{
  opacity:0,
  x:-100
});
gsap.to('.page1__content-01__container2__imgbox02',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container2__imgbox02',
    start:'top center'
  }
});
gsap.set('.page1__content-01__container3_img',{
  opacity:0,
  x:-100
});
gsap.to('.page1__content-01__container3_img',{
  opacity:1,
  x:0,
  duration:2,
  scrollTrigger:{
    trigger:'.page1__content-01__container3_img',
    start:'top center'
  }
});
gsap.set('.page1__content-02__container__img01',{
  opacity:0,
  x:-100
});
gsap.to('.page1__content-02__container__img01',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-02__container__img01',
    start:'top center'
  }
});
gsap.set('.page1__content-02__container__img02',{
  opacity:0,
  x:100
});
gsap.to('.page1__content-02__container__img02',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-02__container__img02',
    start:'top center'
  }
});
// ----------------------------------------------
//                                           p2
gsap.set('.page2__content-01__container1__imgbox01',{
  opacity:0,
  x:100
});
gsap.to('.page2__content-01__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-01__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container1__imgbox03',{
  opacity:0,
  x:-100
});
gsap.to('.page2__content-01__container1__imgbox03',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-01__container1__imgbox03',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container2__table',{
  opacity:0,

});
gsap.to('.page2__content-01__container2__table',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__container2__table',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container3__box-img',{
  opacity:0,
  x:-100
});
gsap.to('.page2__content-01__container3__box-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-01__container3__box-img',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container3__box2-grf',{
  opacity:0,
  x:100
});
gsap.to('.page2__content-01__container3__box2-grf',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__container3__box2-grf',
    start:'top center'
  }
});
gsap.set('.page2__content-02__imgbox-img',{
  opacity:0,
  x:100
});
gsap.to('.page2__content-02__imgbox-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-02__imgbox-img',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container__imgbox01',{
  opacity:0,
  x:100
});
gsap.to('.page2__content-03__container__imgbox01',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container__imgbox01',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container__imgbox02',{
  opacity:0,
  x:-100
});
gsap.to('.page2__content-03__container__imgbox02',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container__imgbox02',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container__imgbox2',{
  opacity:0,
  x:-100
});
gsap.to('.page2__content-03__container__imgbox2',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container__imgbox2',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container02__box-grf',{
  opacity:0,
  x:-100
});
gsap.to('.page2__content-03__container02__box-grf',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container02__title',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container02__table',{
  opacity:0,
  x:100
});
gsap.to('.page2__content-03__container02__table',{
  opacity:1,
  x:0,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container02__title',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03__box-img',{
  opacity:0,

});
gsap.to('.page2__content-03__container03__box-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-03__container03__box-img',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03__box-2-img',{
  opacity:0,

});
gsap.to('.page2__content-03__container03__box-2-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-03__container03__box-2-img',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03__box-3-img',{
  opacity:0,

});
gsap.to('.page2__content-03__container03__box-3-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page2__content-03__container03__box-3-img',
    start:'top center'
  }
});
// --------------------------------------------------
//                                              p3
gsap.set('.page3__content-01__container1__imgbox01',{
  opacity:0,
  x:100
});
gsap.to('.page3__content-01__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page3__content-01__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page3__content-01__container1__imgbox02',{
  opacity:0,
  x:-100
});
gsap.to('.page3__content-01__container1__imgbox02',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page3__content-01__container1__imgbox02',
    start:'top center'
  }
});
gsap.set('.page3__content-02__container1__imgbox01',{
  opacity:0,
  x:-100
});
gsap.to('.page3__content-02__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page3__content-02__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page3__content-02__container1__imgbox02',{
  opacity:0,
  x:100
});
gsap.to('.page3__content-02__container1__imgbox02',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page3__content-02__container1__imgbox02',
    start:'top center'
  }
});
gsap.set('.page3__content-03__container1__imgbox01',{
  opacity:0,

});
gsap.to('.page3__content-03__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page3__content-03__container1__imgbox01',
    start:'top center'
  }
});
// ------------------------------------------------
//                                             p4
gsap.set('.page4__content-01__container1__imgbox01',{
  opacity:0,
  x:-100,
});
gsap.to('.page4__content-01__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page4__content-01__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container1__imgbox01',{
  opacity:0,
  x:100,
});
gsap.to('.page4__content-02__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page4__content-02__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container1__imgbox03',{
  opacity:0,
  x:-100,
});
gsap.to('.page4__content-02__container1__imgbox03',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page4__content-02__container1__imgbox03',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container2__boximg',{
  opacity:0,
  x:-100,
});
gsap.to('.page4__content-02__container2__boximg',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page4__content-02__container2__boximg',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container2__box2img',{
  opacity:0,
  x:100,
});
gsap.to('.page4__content-02__container2__box2img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page4__content-02__container2__box2img',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container2__box3img',{
  opacity:0,
  x:-100,
});
gsap.to('.page4__content-02__container2__box3img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page4__content-02__container2__box3img',
    start:'top center'
  }
});
// ------------------------------------------
//                                           p8
gsap.set('.page8__content-01__container1__imgbox01',{
  opacity:0,
  x:100,
});
gsap.to('.page8__content-01__container1__imgbox01',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page8__content-01__container1__imgbox01',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container1__imgbox02',{
  opacity:0,
  x:-100,
});
gsap.to('.page8__content-01__container1__imgbox02',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page8__content-01__container1__imgbox02',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container2__box01-img',{
  opacity:0,
  x:-100,
});
gsap.to('.page8__content-01__container2__box01-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page8__content-01__container2__box01-img',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container2__box02-img',{
  opacity:0,
  x:-100,
});
gsap.to('.page8__content-01__container2__box02-img',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page8__content-01__container2__box02-img',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container4-imgbox1',{
  opacity:0,
  x:-100,
});
gsap.to('.page8__content-01__container4-imgbox1',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page8__content-01__container4-imgbox1',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container4-imgbox3',{
  opacity:0,
  x:-100,
});
gsap.to('.page8__content-01__container4-imgbox3',{
  opacity:1,
  x:0,
  duration:6,
  scrollTrigger:{
    trigger:'.page8__content-01__container4-imgbox3',
    start:'top center'
  }
});
// -----------------------------------------------
// テキストイラスト                                   top

gsap.set('.hero__view__text',{
  opacity:0
});
gsap.to('.hero__view__text',{
  opacity:1,
  duration:6,
  scrollTrigger:{
    trigger:'.hero__view-fadein',
    start:'top center'
  }
});
gsap.set('.hero__view__logo',{
  opacity:0
});
gsap.to('.hero__view__logo',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.hero__view-fadein',
    start:'top center'
  }
});

gsap.set('.main__content-01',{
  opacity:0
});
gsap.to('.main__content-01',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.main__content-01',
    start:'top center'
  }
});

gsap.set('.main__content-02',{
  opacity:0
});
gsap.to('.main__content-02',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.main__content-02',
    start:'top center'
  }
});

gsap.set('.main__content-03',{
  opacity:0
});
gsap.to('.main__content-03',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.main__content-03',
    start:'top center'
  }
});

gsap.set('.main__content-05__box',{
  opacity:0
});
gsap.to('.main__content-05__box',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.main__content-05__box',
    start:'top center'
  }
});


gsap.set('.main__content-05__logo',{
  opacity:0
});
gsap.to('.main__content-05__logo',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.main__content-05__logo',
    start:'top center'
  }
});
gsap.set('.main__content-05__title-02',{
  opacity:0
});
gsap.to('.main__content-05__title-02',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.main__content-05__title-02',
    start:'top center'
  }
});
// -----------------------------------------
//                                     p1

gsap.set('.page1__content-01__title',{
  opacity:0
});
gsap.to('.page1__content-01__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__title',
    start:'top center'
  }
});

gsap.set('.page1__content-02__title',{
  opacity:0
});
gsap.to('.page1__content-02__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-02__title',
    start:'top center'
  }
});




gsap.set('.page1__content-01__container1__text',{
  opacity:0
});
gsap.to('.page1__content-01__container1__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container1__text',
    start:'top center'
  }
});

gsap.set('.page1__content-01__container1__imgbox03',{
  opacity:0
});
gsap.to('.page1__content-01__container1__imgbox03',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container1__imgbox03',
    start:'top center'
  }
});

gsap.set('.page1__content-01__container2__text',{
  opacity:0
});
gsap.to('.page1__content-01__container2__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container2__text',
    start:'top center'
  }
});

gsap.set('.page1__content-01__container3__text',{
  opacity:0
});
gsap.to('.page1__content-01__container3__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container3__text',
    start:'top center'
  }
});
gsap.set('.page1__content-01__container4__logo',{
  opacity:0
});
gsap.to('.page1__content-01__container4__logo',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-01__container4__logo',
    start:'top center'
  }
});

gsap.set('.page1__content-02__textbox',{
  opacity:0
});
gsap.to('.page1__content-02__textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page1__content-02__textbox',
    start:'top center'
  }
});
// --------------------------------------
//                                    p2


gsap.set('.page2__content-01__title',{
  opacity:0
});
gsap.to('.page2__content-01__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__title',
    start:'top center'
  }
});
gsap.set('.page2__content-02__title',{
  opacity:0
});
gsap.to('.page2__content-02__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-02__title',
    start:'top center'
  }
});
gsap.set('.page2__content-03__title',{
  opacity:0
});
gsap.to('.page2__content-03__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__title',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container1__text',{
  opacity:0
});
gsap.to('.page2__content-01__container1__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__container1__text',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container1__imgbox04',{
  opacity:0
});
gsap.to('.page2__content-01__container1__imgbox04',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__container1__imgbox04',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container2__title',{
  opacity:0,

});
gsap.to('.page2__content-01__container2__title',{
  opacity:1,
  duration:4,
  x:0,
  scrollTrigger:{
    trigger:'.page2__content-01__container2__table',
    start:'top center'
  }
});gsap.set('.page2__content-01__container3__box-text',{
  opacity:0
});
gsap.to('.page2__content-01__container3__box-text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__container3__box-text',
    start:'top center'
  }
});
gsap.set('.page2__content-01__container3__box2-text',{
  opacity:0
});
gsap.to('.page2__content-01__container3__box2-text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-01__container3__box2-text',
    start:'top center'
  }
});
gsap.set('.page2__content-02__textbox',{
  opacity:0
});
gsap.to('.page2__content-02__textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-02__textbox',
    start:'top center'
  }
});
gsap.set('.page2__content-02__container-img',{
  opacity:0
});
gsap.to('.page2__content-02__container-img',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-02__container-img',
    start:'top center'
  }
});
gsap.set('.page2__content-02__container-text',{
  opacity:0
});
gsap.to('.page2__content-02__container-text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-02__container-text',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container__textbox',{
  opacity:0
});
gsap.to('.page2__content-03__container__textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container__textbox',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container__textbox2',{
  opacity:0
});
gsap.to('.page2__content-03__container__textbox2',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container__imgbox2',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container__textbox3',{
  opacity:0
});
gsap.to('.page2__content-03__container__textbox3',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container__textbox3',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container02__title',{
  opacity:0,
  x:-100
});
gsap.to('.page2__content-03__container02__title',{
  opacity:1,
  duration:4,
  x:0,
  scrollTrigger:{
    trigger:'.page2__content-03__container02__title',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container02__text',{
  opacity:0
});
gsap.to('.page2__content-03__container02__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container02__box-grf',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03__box-textbox',{
  opacity:0
});
gsap.to('.page2__content-03__container03__box-textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container03__box-textbox',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03__box-2-textbox',{
  opacity:0
});
gsap.to('.page2__content-03__container03__box-2-textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container03__box-2-textbox',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03__box-3-textbox',{
  opacity:0
});
gsap.to('.page2__content-03__container03__box-3-textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container03__box-3-textbox',
    start:'top center'
  }
});
gsap.set('.page2__content-03__container03_text',{
  opacity:0
});
gsap.to('.page2__content-03__container03_text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page2__content-03__container03_text',
    start:'top center'
  }
});
// ------------------------------------------------------------
//                                                       p3


gsap.set('.page3__content-01__title',{
  opacity:0
});
gsap.to('.page3__content-01__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-01__title',
    start:'top center'
  }
});
gsap.set('.page3__content-02__title',{
  opacity:0
});
gsap.to('.page3__content-02__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-02__title',
    start:'top center'
  }
});
gsap.set('.page3__content-03__title',{
  opacity:0
});
gsap.to('.page3__content-03__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-03__title',
    start:'top center'
  }
});
gsap.set('.page3__content-01__container1__text',{
  opacity:0
});
gsap.to('.page3__content-01__container1__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-01__container1__text',
    start:'top center'
  }
});
gsap.set('.page3__content-01__container1__text2',{
  opacity:0
});
gsap.to('.page3__content-01__container1__text2',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-01__container1__text2',
    start:'top center'
  }
});
gsap.set('.page3__content-01__container1__imgbox03',{
  opacity:0
});
gsap.to('.page3__content-01__container1__imgbox03',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-01__container1__imgbox03',
    start:'top center'
  }
});
gsap.set('.page3__content-01__container2__text',{
  opacity:0
});
gsap.to('.page3__content-01__container2__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-01__container2__text',
    start:'top center'
  }
});
gsap.set('.page3__content-01__container2__text2',{
  opacity:0
});
gsap.to('.page3__content-01__container2__text2',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-01__container2__text2',
    start:'top center'
  }
});
gsap.set('.page3__content-02__container1__text',{
  opacity:0
});
gsap.to('.page3__content-02__container1__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-02__container1__text',
    start:'top center'
  }
});
gsap.set('.page3__content-02__container1__text2',{
  opacity:0
});
gsap.to('.page3__content-02__container1__text2',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-02__container1__text2',
    start:'top center'
  }
});
gsap.set('.page3__content-03__container1__text',{
  opacity:0
});
gsap.to('.page3__content-03__container1__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-03__container1__text',
    start:'top center'
  }
});
gsap.set('.page3__content-03__container1__textbox',{
  opacity:0
});
gsap.to('.page3__content-03__container1__textbox',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page3__content-03__container1__textbox',
    start:'top center'
  }
});
// -------------------------------------------------------
//                                               p4



gsap.set('.page4__content-01__title',{
  opacity:0
});
gsap.to('.page4__content-01__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-01__title',
    start:'top center'
  }
});
gsap.set('.page4__content-02__title',{
  opacity:0
});
gsap.to('.page4__content-02__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-02__title',
    start:'top center'
  }
});
gsap.set('.page4__content-03__title',{
  opacity:0
});
gsap.to('.page4__content-03__title',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-03__title',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container1__text',{
  opacity:0
});
gsap.to('.page4__content-02__container1__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-02__container1__text',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container1__boximg',{
  opacity:0
});
gsap.to('.page4__content-02__container1__boximg',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-02__container1__boximg',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container2__text',{
  opacity:0
});
gsap.to('.page4__content-02__container2__text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-02__container2__text',
    start:'top center'
  }
});
gsap.set('.page4__content-02__container2__text1',{
  opacity:0
});
gsap.to('.page4__content-02__container2__text1',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page4__content-02__container2__text1',
    start:'top center'
  }
});
// -----------------------------------------------
gsap.set('.page5__content-01__title-01',{
  opacity:0
});
gsap.to('.page5__content-01__title-01',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page5__content-01__title-01',
    start:'top center'
  }
});
// ------------------------------------------------
gsap.set('.page6__content-01__title-01',{
  opacity:0
});
gsap.to('.page6__content-01__title-01',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page6__content-01__title-01',
    start:'top center'
  }
});
// ------------------------------------------------
gsap.set('.page8__content-01__container2__text01',{
  opacity:0
});
gsap.to('.page8__content-01__container2__text01',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page8__content-01__container2__text01',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container3-boximg',{
  opacity:0
});
gsap.to('.page8__content-01__container3-boximg',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page8__content-01__container3-boximg',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container3-box2img',{
  opacity:0
});
gsap.to('.page8__content-01__container3-box2img',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page8__content-01__container3-box2img',
    start:'top center'
  }
});

gsap.set('.page8__content-01__container4-text',{
  opacity:0
});
gsap.to('.page8__content-01__container4-text',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page8__content-01__container4-text',
    start:'top center'
  }
});
gsap.set('.page8__content-01__container4-text2',{
  opacity:0
});
gsap.to('.page8__content-01__container4-text2',{
  opacity:1,
  duration:4,
  scrollTrigger:{
    trigger:'.page8__content-01__container4-text2',
    start:'top center'
  }
});


});
