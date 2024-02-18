<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="日本初の蜂群所有サービス">
  <title>WABACHICHATEAU</title>
  <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>//fonts.googleapis.com">
  <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>//fonts.gstatic.com" crossorigin>
  <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>//fonts.googleapis.com">
  <link rel="preconnect" href="<?php echo get_template_directory_uri(); ?>//fonts.gstatic.com" crossorigin>
  <link href="<?php get_template_directory_uri(); ?>//fonts.googleapis.com/css2?family=Josefin+Sans&family=Noto+Sans+JP:wght@200;300;400&family=Shippori+Mincho:wght@400;500;600&display=swap" rel="stylesheet">  <link rel="stylesheet" href="https://use.typekit.net/ibk5uln.css">
  <link rel="stylesheet" href="<?php get_template_directory_uri(); ?>//unpkg.com/ress/dist/ress.min.css">

  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css">
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/style.css">

</head>
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
        <li><a href="<?php echo home_url(); ?>/page3.html ">ご案内</a></li>
        <li><a href="<?php echo home_url(); ?>/page1.html">ミツバチの役割</a></li>
        <li><a href="<?php echo home_url(); ?>/page2.html ">ハチミツの魅力</a></li>
        <li><a href="<?php echo home_url(); ?>/page4.html">ミツバチの一年</a></li>
        <li><a href="<?php echo home_url(); ?>/page6.html">出典</a></li>
        <li><a href="<?php echo home_url(); ?>/page8.html">ソムリエと養蜂家</a></li>
        <li><a href="<?php echo home_url(); ?>/page5.html">よくあるご質問</a></li>
        <li><a href="">owner様</a></li>
        <li><a href="<?php echo home_url(); ?>/page7.html">お問い合わせ</a></li>
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
  <?php wp_head();  ?>
