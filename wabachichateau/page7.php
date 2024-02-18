<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="日本初の蜂群所有サービス">
  <title>WABACHICHATEAU</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Noto+Sans+JP:wght@200;300;400&family=Shippori+Mincho:wght@400;500;600&display=swap" rel="stylesheet">  <link rel="stylesheet" href="https://use.typekit.net/ibk5uln.css">
  <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">

  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
  <link rel="stylesheet" href="/css/style.css">

</head>

<body>
  <header class="page7__header">
    <div class="page7__header__box">
      <div class="page7__header__box__img"></div>
      <h1 class="page7__header__box__text-01">お問い合わせ</h1>
      <a href="/index.html"><div class="page7__header__box__logo">
        <img src="<?php echo get_template_directory_uri(); ?>/images/wabachi-chateau_logo_3white.png" alt="">
      </div></a>
    </div>
  </header>
  <main>
    <div class="hunberger" id="js-hunberger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class=" g-navi  ">
      <div class="navi__container">
        <a href="/index.html"><div class="navi__logo"><img src="<?php echo get_template_directory_uri(); ?>/images/wabachi-chateau_logo_3white.png" alt=""></div></a>
        <div class="navi__xros">
          <span></span>
          <span></span>
        </div>
        <div class="navi__view">
          <div class=" navi__view__img"></div>
          <!-- <img src="/images/footer.jpg" alt=""> -->
        </div>
        <ul class="navi__li">
          <li><a href="/page3.html ">ご案内</a></li>
          <li><a href="/page1.html">ミツバチの役割</a></li>
          <li><a href="/page2.html ">ハチミツの魅力</a></li>
          <li><a href="/page4.html">ミツバチの一年</a></li>
          <li><a href="/page6.html">出典</a></li>
          <li><a href="/page8.html">ソムリエと養蜂家</a></li>
          <li><a href="/page5.html">よくあるご質問</a></li>
          <li><a href="">owner様</a></li>
          <li><a href="/page7.html">お問い合わせ</a></li>
          <li><a href="">連絡先</a></li>
        </ul>
        <div class="navi__contact">
          <div class="navi-tel">
            <p>tel</p>
            <a href="tel:080-2558-1694"><p>080-2558-1694</p></a>
          </div>
          <!-- <div class="navi__adress"> -->
            <!-- <p>addless</p> -->
            <!-- <p>XXXXXX@XX.XX</p> -->
          <!-- </div> -->
        </div>
      </div>
    </nav>
    <section class="page7__content-01">
      <div class="page7__content-01__box1">
        <p class="page7__content-01__box1-text">お名前<br>※フルネームでご記入ください</p>
        <span class="page7__content-01__box1-">必須</span>
        <div class="page7__content-01__box1-bg"></div>
        <p class="page7__content-01__box1-attend"></p>
        <span class="page7__content-01__line01"></span>

        </p>
      </div>
      <div class="page7__content-01__box2">
        <p class="page7__content-01__box2-text">フリガナ
          <br>※フルネームでご記入ください
        </p>
        <span class="page7__content-01__box2-">必須</span>
        <div class="page7__content-01__box2-bg"></div>
        <p></p>
        <span class="page7__content-01__line02"></span>

      </div>
      <div class="page7__content-01__box3">
        <p class="page7__content-01__box3-text"> メールアドレス</p>
        <span class="page7__content-01__box3-">必須</span>
        <div class="page7__content-01__box3-bg"></div>
        <span class="page7__content-01__line03"></span>

      </div>
      <div class="page7__content-01__box4">
        <p class="page7__content-01__box4-text">電話番号</p>
        <span class="page7__content-01__box4-">必須</span>
        <div class="page7__content-01__box4-bg"></div>
        <span class="page7__content-01__line04"></span>

      </div>
      <div class="page7__content-01__box5">
        <p class="page7__content-01__box5-text">お問い合わせ</p>
        <span class="page7__content-01__box5-">必須</span>
        <div class="page7__content-01__box5-bg"></div>
        <span class="page7__content-01__line05"></span>

      </div>
      <div class="page7__content-01-bg"><img src="<?php echo get_template_directory_uri(); ?>/images/145059 1.png" alt=""></div>
      <div class="page7__content-01__btn">
        <button  type="submit">送信</button>
      </div>
    </section>
  </main>
  <?php get_footer(); ?>
