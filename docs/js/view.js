function UIctrl(ctrl) {
  let 
      //-------- variables-sections --------//
      sectionConsctructor,
      //--------// variables-sections --------//

      preheaderTitle, preheaderTitleInput, 
      //-------- variables-Banner --------//
      blockBanner, banner1TitleInput, 
      bannerImgUrlInput, bannerLinkInput, bannerAltInput,
      //--------// variables-Banner --------//
      
      //-------- variables-Text --------//
      textTitleInput, textTextInput, 
      checkboxTextButton, textButtonLinkInput, textButtonTitleInput,
      //--------// variables-Text --------//
      
      //-------- variables-RecoX2 --------//
      recoTitleX2Input, recoIdsX2Input, recoAlgoritmX2Input,
      recoLimitX2Input, checkboxRecoX2Button, recoX2ButtonLinkInput, recoX2ButtonTextInput,
      //--------// variables-RecoX2 --------//

      //-------- variables-RecoX3 --------//
      recoTitleX3Input, recoIdsX3Input, recoAlgoritmX3Input,
      recoLimitX3Input, checkboxRecoX3Button, recoX3ButtonLinkInput, recoX3ButtonTextInput,
      //--------// variables-RecoX3 --------//

      //-------- Teaser ------------//
      teaserTitleInput,
      teaserImgURLInput, teaserImgLinkInput, teaserImgAltInput,
      teaserTextInput, teaserButtonLinkInput, teaserButtonTitleInput,
      //--------// Teaser ------------//

      //-------- BannerX2 ------------//
      leftBannerImgUrlInput, leftBannerLinkInput,
      leftBannerImgAltInput, rightBannerImgUrlInput, rightBannerLinkInput,
      rightBannerImgAltInput,
      //--------// BannerX2 ------------//

      //-------- variables-render-email --------//
      renderCodeEmail, renderCodeEmailFrame, emailDocument,
      htmlIframeAfterContentCodeSW, htmlIframeAfterContentSW,
      htmlIframeBeforeContentCodeSW, htmlIframeBeforeContentSW,

      htmlIframeAfterContentCodeSP, htmlIframeAfterContentSP,
      htmlIframeBeforeContentCodeSP, htmlIframeBeforeContentSP,
      //--------// variables-render-email --------//

      //---------------- parametrs ---------------//
      heightBlocksConsctructor,
      //----------------// parametrs ---------------//

      //-------- variables-buttons --------//
      buttonBanner, buttonText, buttonRecoX2,
      buttonRecoX3, buttonTeaser, buttonBannerX2;


  //-------- preheader ------------//
    preheaderTitle = document.querySelector(".preheaderTitle");
    preheaderTitleInput = document.querySelector(".preheaderTitle input[type=text]");
  //--------// preheader ------------//

  //-------- banner ------------//
    blockBanner = document.querySelector(".Banner");
    banner1TitleInput = ".Banner1Title input[type=text]";
    bannerImgUrlInput = ".Banner1ImgURL input[type=text]";
    bannerLinkInput = ".Banner1Link input[type=text]";
    bannerAltInput = ".Banner1Alt input[type=text]";
    
    
  //--------// banner ------------//

  //-------- Text ------------//
    textTitleInput = document.querySelector(".textTitle input[type=text]");
    textTextInput = document.querySelector(".textText input[type=text]");
    checkboxTextButton = document.querySelector(".showTextButton input[type=checkbox]");
    textButtonLinkInput = document.querySelector(".textButtonLink input[type=text]");
    textButtonTitleInput = document.querySelector(".textButtonTitle input[type=text]");
  //--------// Text ------------//

  //-------- RecoX2 ------------//
    recoTitleX2Input = document.querySelector(".recoTitleX2 input[type=text]");
    recoIdsX2Input = document.querySelector(".recoIdsX2 input[type=text]");
    recoAlgoritmX2Input = document.querySelector(".recoAlgoritmX2 input[type=text]");
    recoLimitX2Input = document.querySelector(".recoLimitX2 input[type=text]");
    checkboxRecoX2Button = document.querySelector(".recoX2Button input[type=checkbox]");
    recoX2ButtonLinkInput = document.querySelector(".recoX2ButtonLink input[type=text]");
    recoX2ButtonTextInput = document.querySelector(".recoX2ButtonText input[type=text]");
  //--------// RecoX2 ------------//
  
  //-------- RecoX3 ------------//
    recoTitleX3Input = document.querySelector(".recoTitleX3 input[type=text]");
    recoIdsX3Input = document.querySelector(".recoIdsX3 input[type=text]");
    recoAlgoritmX3Input = document.querySelector(".recoAlgoritmX3 input[type=text]");
    recoLimitX3Input = document.querySelector(".recoLimitX3 input[type=text]");
    checkboxRecoX3Button = document.querySelector(".recoX3Button input[type=checkbox]");
    recoX3ButtonLinkInput = document.querySelector(".recoX3ButtonLink input[type=text]");
    recoX3ButtonTextInput = document.querySelector(".recoX3ButtonText input[type=text]");
  //--------// RecoX3 ------------//

  //-------- Teaser ------------//
    teaserTitleInput = document.querySelector(".teaserTitle input[type=text]");
    teaserImgURLInput = document.querySelector(".teaserImgURL input[type=text]");
    teaserImgLinkInput = document.querySelector(".teaserImgLink input[type=text]");
    teaserImgAltInput = document.querySelector(".teaserImgAlt input[type=text]");
    teaserTextInput = document.querySelector(".teaserText input[type=text]");
    teaserButtonLinkInput = document.querySelector(".teaserButtonLink input[type=text]");
    teaserButtonTitleInput = document.querySelector(".teaserButtonTitle input[type=text]");
  //--------// Teaser ------------//

  //-------- BannerX2 ------------//
    leftBannerImgUrlInput = document.querySelector(".leftBannerImgUrl input[type=text]");
    leftBannerLinkInput = document.querySelector(".leftBannerLink input[type=text]");
    leftBannerImgAltInput = document.querySelector(".leftBannerImgAlt input[type=text]");
    rightBannerImgUrlInput = document.querySelector(".rightBannerImgUrl input[type=text]");
    rightBannerLinkInput = document.querySelector(".rightBannerLink input[type=text]");
    rightBannerImgAltInput = document.querySelector(".rightBannerImgAlt input[type=text]");
  //--------// BannerX2 ------------//

  //-------- renderCodeEmail ------------//
    renderCodeEmail = document.querySelector(".rendering-code-email");
    renderCodeEmailFrame = document.querySelector(".rendering-visual-email iframe");
  //--------// renderCodeEmail ------------//

  //-------- visual-part-of-email ------------//
    emailDocument = document.querySelector("#email-document");
  //--------// visual-part-of-email ------------//
  
  //------------ buttons ------------//

  //-------- button generate -//
    buttonGenerate = document.querySelector('input[name="generate"]');
  //-------- button reset -//
    buttonReset = document.querySelector('input[name="reset"]');
  //-------- button copy -//
    buttonCopy = document.querySelector('input[name="copy"]');


  //------
  heightBlocksConsctructor = document.querySelector(".section-consctructor div");
  
  //-------- button Banner -//
    sectionConsctructor = document.querySelector(".section-consctructor div");

    buttonBanner = document.querySelector('input[name="Banner"]');
    buttonText = document.querySelector('input[name="Text"]');
    buttonRecoX2 = document.querySelector('input[name="RecoX2"]');
    buttonRecoX3 = document.querySelector('input[name="RecoX3"]');
    buttonTeaser = document.querySelector('input[name="Teaser"]');
    buttonBannerX2 = document.querySelector('input[name="BannerX2"]');

  //------------// buttons ------------//

//------ sew-world -----//
//-------- html-before-content ------------//
  htmlIframeBeforeContentSW = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" 
   xmlns:v="urn:schemas-microsoft-com:vml"
   xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <!--[if gte mso 9]><xml>
  <o:OfficeDocumentSettings>
  <o:AllowPNG/>
  <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
  </xml><![endif]-->
  <style type="text/css">
  body{margin:0;padding:0;min-width:100%;background-color:#fff}
  .webkit{max-width:600px;margin:0 auto}
  .outer{margin:0 auto;width:100%;max-width:600px}
  .inner{padding:10px}
  table{border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333}
  td{padding:0}
  img{border:0}
  .img_block{display:block}
  .wrapper{width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
  p{margin:0}
  .contents{width:100%}
  .one-column{text-align:center;font-size:0}
  .one-column .column{width:100%;max-width:100%;display:inline-block;vertical-align:top}
  .two-column{text-align:center;font-size:0}
  .two-column .column{width:100%;max-width:300px;display:inline-block;vertical-align:top}
  .two-column-per-one{text-align:center;font-size:0}
  .two-column-per-one .first{width:100%;max-width:200px;display:inline-block;vertical-align:top}
  .two-column-per-one .second{width:100%;max-width:400px;display:inline-block;vertical-align:top}
  .three-column{text-align:center;font-size:0}
  .three-column .column{width:100%;max-width:200px;display:inline-block;vertical-align:top}
  .two-column .two-column .column{width:100%;max-width:150px;display:inline-block;vertical-align:top}
  .ExternalClass *{line-height:inherit}
  
  .preheader_block{background:#f7f7f7}
  .header_block .contents{padding:25px 0}
  .menu_item_inner a{text-transform:uppercase}
  .btn td{padding:13px 35px 11px}
  .btn a{font-family:Arial,sans-serif;text-decoration:none;text-transform:uppercase;font-size:12px;line-height:26px;font-weight:700;color:#424242;letter-spacing:1px}
  .btn{border:2px solid #424242}
  .h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
  .h2 small{font-size:11px;letter-spacing:3px}
  .h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
  .h2 small{font-size:11px;letter-spacing:3px}
  .item-title{padding:0 5px}
  .item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
  .item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
  .item-price s{color:#666}
  .item-price span{color:#c17d92}
  .item-action .btn{width:100%}
  .fill{background:#424242}
  .fill a{color:#fff}
  .article-text p{font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#3f3e29}
  a{color:#424242}
  .review-text p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
  .review-text{padding-top:10px}
  .review-author p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
  .review-author{padding-top:10px}
  .article-text-action{padding-top:20px;padding-top:20px}
  .recoms_x3_block .item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:26px;text-decoration:none}
  .recoms_x3_block .item-info{padding:20px 0}
  .recoms_x3_block .item-price s{color:#666}
  .recoms_x3_block .item-price span{color:#c17d92}
  .recoms_x3_block .item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px;text-decoration:none}
  .author-name p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px}
  .author-post p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
  .author-post{padding:0}
  .menu_footer_block{background:#3f3e29}
  .footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none;color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
  .social-item{max-width:163px!important}
  .social-item-inner{font-size:24px}
  .column.social-item .inner{padding:0}
  .footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
  .social-item{max-width:163px!important}
  .social-item-inner{font-size:24px}
  .column.social-item .inner{padding:0}
  .footer_unsubscribe_block p{font-size:13px;font-family:Arial,sans-serif;line-height:20px;color:#adafb2}
  </style>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <title></title>
  </head> 
  <body style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#fff;" >
  <div style="background-color:#ffffff;" >
  <table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" ><tr><td valign="top" align="center" class="bg_cell" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
  <center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" >
    <div class="webkit" style="max-width:600px;min-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;" >
    <table width="600" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
    <tr>
    <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
      <!--iOS gmail fix-->
      <div style="display:none;white-space:nowrap;font-style:normal;font-variant:normal;font-weight:normal;font-size:15px;font-family:courier;line-height:0;" ></div>
      <!--/iOS gmail fix-->
      <!--hidden-preheader-->
      <div style="font-size:0;line-height:0;color:#ffffff;height:0;display:none;" >
        <div>
        {{PreheaderTitle}}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
        <span></span>
      </div>
      <!--/hidden-preheader-->
      <!--preheader-->
      <table class="preheader_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#f7f7f7;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;" >
        <tr>
          <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
            <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
              <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
                <tr>
                  <td align="center" class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" >
                    <a href="{{htmlVersionLink}}" target="_blank" style="color:#adafb2;text-decoration:none;font-style:normal;font-variant:normal;font-weight:normal;font-size:12px;font-family:Arial,sans-serif;line-height:normal;" >Ссылка на веб-версию</a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
      <!--/preheader-->
      <!--header-->
      <table class="header_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#ffffff;" >
        <tr>
          <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
            <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
              <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
                <tr>
                  <td class="inner contents" align="center" style="width:100%;padding-top:25px;padding-bottom:25px;padding-right:0;padding-left:0;" >
                    <a href="{{siteUrl}}" target="_blank" style="color:#424242;" ><img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/logo%20(3).png" alt="Мир шитья" border="0" style="display:block;border-width:0;" /></a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
      <!--/header-->    
      <!--menu-->
      <table class="menu_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
        <tr>
          <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
            <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
              <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
                <tr>
                  <td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" >
                    <a class="mob-menu" href="https://www.sew-world.ru/catalog/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" >Каталог</a>
                  </td>
                  <td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" >
                    <a class="mob-menu" href="https://www.sew-world.ru/sale/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" >Акции</a>
                  </td>
                  <td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" >
                    <a class="mob-menu" href="https://www.sew-world.ru/magazines/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" >Магазины</a>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
      <!--/menu-->`;
  htmlIframeBeforeContentCodeSW = `<pre>&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
      &lt;html xmlns="http://www.w3.org/1999/xhtml" 
       xmlns:v="urn:schemas-microsoft-com:vml"
       xmlns:o="urn:schemas-microsoft-com:office:office"&gt;
      &lt;head&gt;
      &lt;!--[if gte mso 9]&gt;&lt;xml&gt;
      &lt;o:OfficeDocumentSettings&gt;
      &lt;o:AllowPNG/&gt;
      &lt;o:PixelsPerInch&gt;96&lt;/o:PixelsPerInch&gt;
      &lt;/o:OfficeDocumentSettings&gt;
      &lt;/xml&gt;&lt;![endif]--&gt;
      &lt;style type="text/css"&gt;
      body{margin:0;padding:0;min-width:100%;background-color:#fff}
      .webkit{max-width:600px;margin:0 auto}
      .outer{margin:0 auto;width:100%;max-width:600px}
      .inner{padding:10px}
      table{border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333}
      td{padding:0}
      img{border:0}
      .img_block{display:block}
      .wrapper{width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
      p{margin:0}
      .contents{width:100%}
      .one-column{text-align:center;font-size:0}
      .one-column .column{width:100%;max-width:100%;display:inline-block;vertical-align:top}
      .two-column{text-align:center;font-size:0}
      .two-column .column{width:100%;max-width:300px;display:inline-block;vertical-align:top}
      .two-column-per-one{text-align:center;font-size:0}
      .two-column-per-one .first{width:100%;max-width:200px;display:inline-block;vertical-align:top}
      .two-column-per-one .second{width:100%;max-width:400px;display:inline-block;vertical-align:top}
      .three-column{text-align:center;font-size:0}
      .three-column .column{width:100%;max-width:200px;display:inline-block;vertical-align:top}
      .two-column .two-column .column{width:100%;max-width:150px;display:inline-block;vertical-align:top}
      .ExternalClass *{line-height:inherit}
      
      .preheader_block{background:#f7f7f7}
      .header_block .contents{padding:25px 0}
      .menu_item_inner a{text-transform:uppercase}
      .btn td{padding:13px 35px 11px}
      .btn a{font-family:Arial,sans-serif;text-decoration:none;text-transform:uppercase;font-size:12px;line-height:26px;font-weight:700;color:#424242;letter-spacing:1px}
      .btn{border:2px solid #424242}
      .h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
      .h2 small{font-size:11px;letter-spacing:3px}
      .h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
      .h2 small{font-size:11px;letter-spacing:3px}
      .item-title{padding:0 5px}
      .item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
      .item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
      .item-price s{color:#666}
      .item-price span{color:#c17d92}
      .item-action .btn{width:100%}
      .fill{background:#424242}
      .fill a{color:#fff}
      .article-text p{font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#3f3e29}
      a{color:#424242}
      .review-text p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
      .review-text{padding-top:10px}
      .review-author p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
      .review-author{padding-top:10px}
      .article-text-action{padding-top:20px;padding-top:20px}
      .recoms_x3_block .item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:26px;text-decoration:none}
      .recoms_x3_block .item-info{padding:20px 0}
      .recoms_x3_block .item-price s{color:#666}
      .recoms_x3_block .item-price span{color:#c17d92}
      .recoms_x3_block .item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px;text-decoration:none}
      .author-name p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px}
      .author-post p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
      .author-post{padding:0}
      .menu_footer_block{background:#3f3e29}
      .footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none;color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
      .social-item{max-width:163px!important}
      .social-item-inner{font-size:24px}
      .column.social-item .inner{padding:0}
      .footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
      .social-item{max-width:163px!important}
      .social-item-inner{font-size:24px}
      .column.social-item .inner{padding:0}
      .footer_unsubscribe_block p{font-size:13px;font-family:Arial,sans-serif;line-height:20px;color:#adafb2}
      &lt;/style&gt;
      &lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
      &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
      &lt;meta name="format-detection" content="telephone=no"&gt;
      &lt;title&gt;&lt;/title&gt;
      &lt;/head&gt; 
      &lt;body style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#fff;" &gt;
      &lt;div style="background-color:#ffffff;" &gt;
      &lt;table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;&lt;tr&gt;&lt;td valign="top" align="center" class="bg_cell" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
      &lt;center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" &gt;
        &lt;div class="webkit" style="max-width:600px;min-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;" &gt;
        &lt;table width="600" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
        &lt;tr&gt;
        &lt;td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
          &lt;!--iOS gmail fix--&gt;
          &lt;div style="display:none;white-space:nowrap;font-style:normal;font-variant:normal;font-weight:normal;font-size:15px;font-family:courier;line-height:0;" &gt;&lt;/div&gt;
          &lt;!--/iOS gmail fix--&gt;
          &lt;!--hidden-preheader--&gt;
          &lt;div style="font-size:0;line-height:0;color:#ffffff;height:0;display:none;" &gt;
            &lt;div&gt;{{PreheaderTitle}}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&lt;/div&gt;
            &lt;span&gt;&lt;/span&gt;
            &lt;/div&gt;
          &lt;!--/hidden-preheader--&gt;
          &lt;!--preheader--&gt;
          &lt;table class="preheader_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#f7f7f7;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;" &gt;
            &lt;tr&gt;
              &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
                &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
                  &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
                    &lt;tr&gt;
                      &lt;td align="center" class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" &gt;
                        &lt;a href="{{htmlVersionLink}}" target="_blank" style="color:#adafb2;text-decoration:none;font-style:normal;font-variant:normal;font-weight:normal;font-size:12px;font-family:Arial,sans-serif;line-height:normal;" &gt;Ссылка на веб-версию&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/div&gt;
              &lt;/td&gt;
            &lt;/tr&gt;
          &lt;/table&gt;
          &lt;!--/preheader--&gt;
          &lt;!--header--&gt;
          &lt;table class="header_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#ffffff;" &gt;
            &lt;tr&gt;
              &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
                &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
                  &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
                    &lt;tr&gt;
                      &lt;td class="inner contents" align="center" style="width:100%;padding-top:25px;padding-bottom:25px;padding-right:0;padding-left:0;" &gt;
                        &lt;a href="{{siteUrl}}" target="_blank" style="color:#424242;" &gt;&lt;img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/logo%20(3).png" alt="Мир шитья" border="0" style="display:block;border-width:0;" /&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/div&gt;
              &lt;/td&gt;
            &lt;/tr&gt;
          &lt;/table&gt;
          &lt;!--/header--&gt;    
          &lt;!--menu--&gt;
          &lt;table class="menu_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
            &lt;tr&gt;
              &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
                &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
                  &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
                    &lt;tr&gt;
                      &lt;td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" &gt;
                        &lt;a class="mob-menu" href="https://www.sew-world.ru/catalog/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" &gt;Каталог&lt;/a&gt;
                      &lt;/td&gt;
                      &lt;td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" &gt;
                        &lt;a class="mob-menu" href="https://www.sew-world.ru/sale/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" &gt;Акции&lt;/a&gt;
                      &lt;/td&gt;
                      &lt;td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" &gt;
                        &lt;a class="mob-menu" href="https://www.sew-world.ru/magazines/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" &gt;Магазины&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/div&gt;
              &lt;/td&gt;
            &lt;/tr&gt;
          &lt;/table&gt;
      &lt;!--/menu--&gt;</pre>`;
//--------// html-before-content ------------//

//-------- html-after-content ------------//
htmlIframeAfterContentSW = `<!-- Module: Подвал -->
  <table class="footer outer" style="border-spacing: 0; border-collapse: collapse; width: 100%; margin: 0 auto; max-width: 600px; background-color: #00adef;" width="100%" bgcolor="#00adef">
    <tr>
      <td class="row" style="padding: 0; line-height: normal; font-size: 0; text-align: center; padding-top: 25px; padding-bottom: 23px;" align="center">
        <table width="100%" cellpadding="0" cellspacing="0"><tr>
          <td width="50.00%" valign="top" align="center" style="width:50.00%;padding:0">
            <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
              <tr>
                <td class="inner content-center-md footer__socialIcons" align="left" style="line-height: normal; padding: 10px;">
                  <table class="wa socialIconsImages" width="auto" align="center" style="border-spacing: 0; border-collapse: collapse; width: auto;">
                    <tr>
                      <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                        <a href="https://api.whatsapp.com/send/?phone=79775767966&text&app_absent=0" target="_blank"><img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/wa.png" width="30" height border="0" alt="WA" style="border: 0; display: block;"></a>
                      </td>
                  
                      <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                        <a href="https://vk.com/sew_world" target="_blank"><img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/vk.png" width="30" height border="0" alt="VK" style="border: 0; display: block;"></a>
                      </td>
                      <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                        <a href="https://t.me/mir_shitya" target="_blank"><img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/logo_telegram_30x30%20(6246c1e9143d10209fd6d02e).png" width="30" height border="0" alt="TG" style="border: 0; display: block;"></a>
                      </td>
                      <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                        <a href="https://www.youtube.com/channel/UClK3KpxI0YtCliBxE5bXQqQ?sub_confirmation=1" target="_blank"><img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/yt.png" width="30" height border="0" alt="YT" style="border: 0; display: block;"></a>
                      </td>
                      <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                        <a href="https://ok.ru/sew.world" target="_blank"><img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/ok.png" width="30" height border="0" alt="OK" style="border: 0; display: block;"></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          <td width="50.00%" valign="top" align="left" style="width:50.00%;padding:0">
              <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
                <tr>
                  <td class="footer__contacts content-center-md" align="left" style="line-height: normal; text-align: left; padding: 5px; padding-top: 11px; padding-right: 0px;">
                    <p style="margin: 0;">
                      <span class="footer__contacts-phone" style="color: #ffffff; font-size: 18px; font-weight: bold;">
                        <a href="tel:+78007774865" target="_blank" style="text-decoration: none; color: #ffffff;">+7 (800) 777-48-65</a>
                      </span>
                      <br>
                    <span class="footer__contacts-mode" style="color: #ffffff; font-size: 13px;"><a href="mailto:info@sew-world.ru" target="_blank" style="color: #ffffff; font-size:12px; font-weight: bold;line-height:25px;">info@sew-world.ru</a></span>
                    </p>
                  </td>
                </tr>
              </table>
          </td>
          </tr></table>
      </td>
    </tr>
    <tr>
      <td class="inner footer__unsubscribe" align="center" style="line-height: normal; padding: 10px; padding-bottom: 20px; padding-top: 0;">
        <table style="width: 100%; border-spacing: 0; border-collapse: collapse;" width="100%">
          <tr>
            <td class="footer__unsubscribe-wrap" align="center" style="padding: 0; line-height: normal; border-top: 1px solid #dcdcdc; padding-top: 20px;">
              <p style="margin: 0; color: #ffffff; font-size: 12px; line-height: normal;">© 2015-{{"now" | date: "yyyy"}} – "Мир шитья"<br>Вы получили это письмо, так как Вы подписаны на рассылки от интернет-магазина <a href="{{SiteUrl}}" target="_blank" style="color:#ffffff;text-decoration:none;">sew-world.ru</a>.<br>Чтобы отписаться от рассылки, нажмите <a href="{{Message.CancelThisSubscriptionUrl}}" target="_blank" style="color:#00519A;text-decoration:underline;">здесь</a>.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
  <!-- Module End: Подвал -->
  
</td>
</tr>
</table>
</div>
</center>
</td></tr></table>
</div>
</body>
      </html>`;
htmlIframeAfterContentCodeSW = `<pre>&lt;!-- Module: Подвал --&gt;
  &lt;table class="footer outer" style="border-spacing: 0; border-collapse: collapse; width: 100%; margin: 0 auto; max-width: 600px; background-color: #00adef;" width="100%" bgcolor="#00adef"&gt;
    &lt;tr&gt;
      &lt;td class="row" style="padding: 0; line-height: normal; font-size: 0; text-align: center; padding-top: 25px; padding-bottom: 23px;" align="center"&gt;
        &lt;table width="100%" cellpadding="0" cellspacing="0"&gt;&lt;tr&gt;
          &lt;td width="50.00%" valign="top" align="center" style="width:50.00%;padding:0"&gt;
            &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
              &lt;tr&gt;
                &lt;td class="inner content-center-md footer__socialIcons" align="left" style="line-height: normal; padding: 10px;"&gt;
                  &lt;table class="wa socialIconsImages" width="auto" align="center" style="border-spacing: 0; border-collapse: collapse; width: auto;"&gt;
                    &lt;tr&gt;
                      &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                        &lt;a href="https://api.whatsapp.com/send/?phone=79775767966&text&app_absent=0" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/wa.png" width="30" height border="0" alt="WA" style="border: 0; display: block;"&gt;&lt;/a&gt;
                      &lt;/td&gt;
                  
                      &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                        &lt;a href="https://vk.com/sew_world" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/vk.png" width="30" height border="0" alt="VK" style="border: 0; display: block;"&gt;&lt;/a&gt;
                      &lt;/td&gt;
                      &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                        &lt;a href="https://t.me/mir_shitya" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/logo_telegram_30x30%20(6246c1e9143d10209fd6d02e).png" width="30" height border="0" alt="TG" style="border: 0; display: block;"&gt;&lt;/a&gt;
                      &lt;/td&gt;
                      &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                        &lt;a href="https://www.youtube.com/channel/UClK3KpxI0YtCliBxE5bXQqQ?sub_confirmation=1" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/yt.png" width="30" height border="0" alt="YT" style="border: 0; display: block;"&gt;&lt;/a&gt;
                      &lt;/td&gt;
                      &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                        &lt;a href="https://ok.ru/sew.world" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/ok.png" width="30" height border="0" alt="OK" style="border: 0; display: block;"&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;td width="50.00%" valign="top" align="left" style="width:50.00%;padding:0"&gt;
              &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
                &lt;tr&gt;
                  &lt;td class="footer__contacts content-center-md" align="left" style="line-height: normal; text-align: left; padding: 5px; padding-top: 11px; padding-right: 0px;"&gt;
                    &lt;p style="margin: 0;"&gt;
                      &lt;span class="footer__contacts-phone" style="color: #ffffff; font-size: 18px; font-weight: bold;"&gt;
                        &lt;a href="tel:+78007774865" target="_blank" style="text-decoration: none; color: #ffffff;"&gt;+7 (800) 777-48-65&lt;/a&gt;
                      &lt;/span&gt;
                      &lt;br&gt;
                    &lt;span class="footer__contacts-mode" style="color: #ffffff; font-size: 13px;"&gt;&lt;a href="mailto:info@sew-world.ru" target="_blank" style="color: #ffffff; font-size:12px; font-weight: bold;line-height:25px;"&gt;info@sew-world.ru&lt;/a&gt;&lt;/span&gt;
                    &lt;/p&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/table&gt;
          &lt;/td&gt;
          &lt;/tr&gt;&lt;/table&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="inner footer__unsubscribe" align="center" style="line-height: normal; padding: 10px; padding-bottom: 20px; padding-top: 0;"&gt;
        &lt;table style="width: 100%; border-spacing: 0; border-collapse: collapse;" width="100%"&gt;
          &lt;tr&gt;
            &lt;td class="footer__unsubscribe-wrap" align="center" style="padding: 0; line-height: normal; border-top: 1px solid #dcdcdc; padding-top: 20px;"&gt;
              &lt;p style="margin: 0; color: #ffffff; font-size: 12px; line-height: normal;"&gt;© 2015-{{"now" | date: "yyyy"}} – "Мир шитья"&lt;br&gt;Вы получили это письмо, так как Вы подписаны на рассылки от интернет-магазина &lt;a href="{{SiteUrl}}" target="_blank" style="color:#ffffff;text-decoration:none;"&gt;sew-world.ru&lt;/a&gt;.&lt;br&gt;Чтобы отписаться от рассылки, нажмите &lt;a href="{{Message.CancelThisSubscriptionUrl}}" target="_blank" style="color:#00519A;text-decoration:underline;"&gt;здесь&lt;/a&gt;.&lt;/p&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;
  &lt;!-- Module End: Подвал --&gt;
  
      &lt;/td&gt;
      &lt;/tr&gt;
      &lt;/table&gt;
     &lt;/div&gt;
     &lt;/center&gt;
     &lt;/td&gt;
    &lt;/tr&gt;
   &lt;/table&gt;
  &lt;/div&gt;
 &lt;/body&gt;
&lt;/html&gt;</pre>`;
//--------// html-after-content ------------//
//------// sew-world -----//

//------ sewprice -----//
//-------- html-before-content ------------//
htmlIframeBeforeContentSP = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" 
 xmlns:v="urn:schemas-microsoft-com:vml"
 xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]><xml>
<o:OfficeDocumentSettings>
<o:AllowPNG/>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml><![endif]-->
<style type="text/css">
body{margin:0;padding:0;min-width:100%;background-color:#fff}
.webkit{max-width:600px;margin:0 auto}
.outer{margin:0 auto;width:100%;max-width:600px}
.inner{padding:10px}
table{border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333}
td{padding:0}
img{border:0}
.img_block{display:block}
.wrapper{width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
p{margin:0}
.contents{width:100%}
.one-column{text-align:center;font-size:0}
.one-column .column{width:100%;max-width:100%;display:inline-block;vertical-align:top}
.two-column{text-align:center;font-size:0}
.two-column .column{width:100%;max-width:300px;display:inline-block;vertical-align:top}
.two-column-per-one{text-align:center;font-size:0}
.two-column-per-one .first{width:100%;max-width:200px;display:inline-block;vertical-align:top}
.two-column-per-one .second{width:100%;max-width:400px;display:inline-block;vertical-align:top}
.three-column{text-align:center;font-size:0}
.three-column .column{width:100%;max-width:200px;display:inline-block;vertical-align:top}
.two-column .two-column .column{width:100%;max-width:150px;display:inline-block;vertical-align:top}
.ExternalClass *{line-height:inherit}

.preheader_block{background:#f7f7f7}
.header_block .contents{padding:25px 0}
.menu_item_inner a{text-transform:uppercase}
.btn td{padding:13px 35px 11px}
.btn a{font-family:Arial,sans-serif;text-decoration:none;text-transform:uppercase;font-size:12px;line-height:26px;font-weight:700;color:#424242;letter-spacing:1px}
.btn{border:2px solid #424242}
.h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
.h2 small{font-size:11px;letter-spacing:3px}
.h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
.h2 small{font-size:11px;letter-spacing:3px}
.item-title{padding:0 5px}
.item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
.item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
.item-price s{color:#666}
.item-price span{color:#c17d92}
.item-action .btn{width:100%}
.fill{background:#424242}
.fill a{color:#fff}
.article-text p{font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#3f3e29}
a{color:#424242}
.review-text p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
.review-text{padding-top:10px}
.review-author p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
.review-author{padding-top:10px}
.article-text-action{padding-top:20px;padding-top:20px}
.recoms_x3_block .item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:26px;text-decoration:none}
.recoms_x3_block .item-info{padding:20px 0}
.recoms_x3_block .item-price s{color:#666}
.recoms_x3_block .item-price span{color:#c17d92}
.recoms_x3_block .item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px;text-decoration:none}
.author-name p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px}
.author-post p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
.author-post{padding:0}
.menu_footer_block{background:#3f3e29}
.footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none;color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
.social-item{max-width:163px!important}
.social-item-inner{font-size:24px}
.column.social-item .inner{padding:0}
.footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
.social-item{max-width:163px!important}
.social-item-inner{font-size:24px}
.column.social-item .inner{padding:0}
.footer_unsubscribe_block p{font-size:13px;font-family:Arial,sans-serif;line-height:20px;color:#adafb2}
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="format-detection" content="telephone=no">
<title></title>
</head> 
<body style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#fff;" >
<div style="background-color:#ffffff;" >
<table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" ><tr><td valign="top" align="center" class="bg_cell" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
<center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" >
  <div class="webkit" style="max-width:600px;min-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;" >
  <table width="600" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
  <tr>
  <td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
    <!--iOS gmail fix-->
    <div style="display:none;white-space:nowrap;font-style:normal;font-variant:normal;font-weight:normal;font-size:15px;font-family:courier;line-height:0;" ></div>
    <!--/iOS gmail fix-->
    <!--hidden-preheader-->
    <div style="font-size:0;line-height:0;color:#ffffff;height:0;display:none;" >
      <div>{{PreheaderTitle}}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;</div>
      <span></span>
    </div>
    <!--/hidden-preheader-->
    <!--preheader-->
    <table class="preheader_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#f7f7f7;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;" >
      <tr>
        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td align="center" class="inner contents" style="padding-top:0px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" >
                  <a href="{{htmlVersionLink}}" target="_blank" style="color:#adafb2;text-decoration:none;font-style:normal;font-variant:normal;font-weight:normal;font-size:12px;font-family:Arial,sans-serif;line-height:normal;" >Ссылка на веб-версию</a>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <!--/preheader-->
    <!--header-->
    <table class="header_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#ffffff;" >
      <tr>
        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="inner contents" align="center" style="width:100%;padding-top:25px;padding-bottom:25px;padding-right:0;padding-left:0;" >
                  <a href="{{siteUrl}}" target="_blank" style="color:#424242;" ><img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/10366aff3fb90b2c1bc93c2bf64eb39c.png" alt="Швейторг" border="0" style="display:block;border-width:0;" /></a>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <!--/header-->    
    <!--menu-->
    <table class="menu_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
      <tr>
        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" >
                  <a class="mob-menu" href="https://sewprice.ru/catalog/sale/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" >SALE</a>
                </td>
                <td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" >
                  <a class="mob-menu" href="https://sewprice.ru/catalog/aksessuary-dlya-shitya/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" >Аксессуары для шитья</a>
                </td>
                <td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" >
                  <a class="mob-menu" href="https://sewprice.ru/sale/trade_in/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" >Trade-in</a>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <!--/menu-->`;
htmlIframeBeforeContentCodeSP = `<pre>&lt;pre&gt;&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml" 
 xmlns:v="urn:schemas-microsoft-com:vml"
 xmlns:o="urn:schemas-microsoft-com:office:office"&gt;
&lt;head&gt;
&lt;!--[if gte mso 9]&gt;&lt;xml&gt;
&lt;o:OfficeDocumentSettings&gt;
&lt;o:AllowPNG/&gt;
&lt;o:PixelsPerInch&gt;96&lt;/o:PixelsPerInch&gt;
&lt;/o:OfficeDocumentSettings&gt;
&lt;/xml&gt;&lt;![endif]--&gt;
&lt;style type="text/css"&gt;
body{margin:0;padding:0;min-width:100%;background-color:#fff}
.webkit{max-width:600px;margin:0 auto}
.outer{margin:0 auto;width:100%;max-width:600px}
.inner{padding:10px}
table{border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333}
td{padding:0}
img{border:0}
.img_block{display:block}
.wrapper{width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}
p{margin:0}
.contents{width:100%}
.one-column{text-align:center;font-size:0}
.one-column .column{width:100%;max-width:100%;display:inline-block;vertical-align:top}
.two-column{text-align:center;font-size:0}
.two-column .column{width:100%;max-width:300px;display:inline-block;vertical-align:top}
.two-column-per-one{text-align:center;font-size:0}
.two-column-per-one .first{width:100%;max-width:200px;display:inline-block;vertical-align:top}
.two-column-per-one .second{width:100%;max-width:400px;display:inline-block;vertical-align:top}
.three-column{text-align:center;font-size:0}
.three-column .column{width:100%;max-width:200px;display:inline-block;vertical-align:top}
.two-column .two-column .column{width:100%;max-width:150px;display:inline-block;vertical-align:top}
.ExternalClass *{line-height:inherit}

.preheader_block{background:#f7f7f7}
.header_block .contents{padding:25px 0}
.menu_item_inner a{text-transform:uppercase}
.btn td{padding:13px 35px 11px}
.btn a{font-family:Arial,sans-serif;text-decoration:none;text-transform:uppercase;font-size:12px;line-height:26px;font-weight:700;color:#424242;letter-spacing:1px}
.btn{border:2px solid #424242}
.h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
.h2 small{font-size:11px;letter-spacing:3px}
.h2{font:bold 30px/1.5 Arial,sans-serif;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px}
.h2 small{font-size:11px;letter-spacing:3px}
.item-title{padding:0 5px}
.item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
.item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none}
.item-price s{color:#666}
.item-price span{color:#c17d92}
.item-action .btn{width:100%}
.fill{background:#424242}
.fill a{color:#fff}
.article-text p{font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#3f3e29}
a{color:#424242}
.review-text p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
.review-text{padding-top:10px}
.review-author p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
.review-author{padding-top:10px}
.article-text-action{padding-top:20px;padding-top:20px}
.recoms_x3_block .item-title a{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:26px;text-decoration:none}
.recoms_x3_block .item-info{padding:20px 0}
.recoms_x3_block .item-price s{color:#666}
.recoms_x3_block .item-price span{color:#c17d92}
.recoms_x3_block .item-price{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px;text-decoration:none}
.author-name p{color:#3f3e29;font-family:Arial,sans-serif;font-size:14px;font-weight:700;line-height:16px}
.author-post p{color:#adafb2;font-family:Arial,sans-serif;font-size:14px;font-weight:400;line-height:22px}
.author-post{padding:0}
.menu_footer_block{background:#3f3e29}
.footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none;color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
.social-item{max-width:163px!important}
.social-item-inner{font-size:24px}
.column.social-item .inner{padding:0}
.footer_contacts_block a{color:#3f3e29;font-family:Arial,sans-serif;font-size:13px;font-weight:400;line-height:20px;text-decoration:none}
.social-item{max-width:163px!important}
.social-item-inner{font-size:24px}
.column.social-item .inner{padding:0}
.footer_unsubscribe_block p{font-size:13px;font-family:Arial,sans-serif;line-height:20px;color:#adafb2}
&lt;/style&gt;
&lt;meta http-equiv="Content-Type" content="text/html; charset=utf-8" /&gt;
&lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
&lt;meta name="format-detection" content="telephone=no"&gt;
&lt;title&gt;&lt;/title&gt;
&lt;/head&gt; 
&lt;body style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#fff;" &gt;
&lt;div style="background-color:#ffffff;" &gt;
&lt;table height="100%" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;&lt;tr&gt;&lt;td valign="top" align="center" class="bg_cell" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
&lt;center class="wrapper" style="width:100%;table-layout:fixed;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;" &gt;
  &lt;div class="webkit" style="max-width:600px;min-width:600px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;" &gt;
  &lt;table width="600" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
  &lt;tr&gt;
  &lt;td style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
    &lt;!--iOS gmail fix--&gt;
    &lt;div style="display:none;white-space:nowrap;font-style:normal;font-variant:normal;font-weight:normal;font-size:15px;font-family:courier;line-height:0;" &gt;&lt;/div&gt;
    &lt;!--/iOS gmail fix--&gt;
    &lt;!--hidden-preheader--&gt;
    &lt;div style="font-size:0;line-height:0;color:#ffffff;height:0;display:none;" &gt;
      &lt;div&gt;{{PreheaderTitle}}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&lt;/div&gt;
      &lt;span&gt;&lt;/span&gt;
    &lt;/div&gt;
    &lt;!--/hidden-preheader--&gt;
    &lt;!--preheader--&gt;
    &lt;table class="preheader_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#f7f7f7;background-image:none;background-repeat:repeat;background-position:top left;background-attachment:scroll;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td align="center" class="inner contents" style="padding-top:0px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" &gt;
                  &lt;a href="{{htmlVersionLink}}" target="_blank" style="color:#adafb2;text-decoration:none;font-style:normal;font-variant:normal;font-weight:normal;font-size:12px;font-family:Arial,sans-serif;line-height:normal;" &gt;Ссылка на веб-версию&lt;/a&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;!--/preheader--&gt;
    &lt;!--header--&gt;
    &lt;table class="header_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;background-color:#ffffff;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td class="inner contents" align="center" style="width:100%;padding-top:25px;padding-bottom:25px;padding-right:0;padding-left:0;" &gt;
                  &lt;a href="{{siteUrl}}" target="_blank" style="color:#424242;" &gt;&lt;img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/10366aff3fb90b2c1bc93c2bf64eb39c.png" alt="Швейторг" border="0" style="display:block;border-width:0;" /&gt;&lt;/a&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;!--/header--&gt;    
    &lt;!--menu--&gt;
    &lt;table class="menu_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" &gt;
                  &lt;a class="mob-menu" href="https://sewprice.ru/catalog/sale/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" &gt;SALE&lt;/a&gt;
                &lt;/td&gt;
                &lt;td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" &gt;
                  &lt;a class="mob-menu" href="https://sewprice.ru/catalog/aksessuary-dlya-shitya/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" &gt;Аксессуары для шитья&lt;/a&gt;
                &lt;/td&gt;
                &lt;td align="center" width="33.3%" style="max-width:33.3%;padding-top:25px;padding-bottom:30px;padding-right:5px;padding-left:5px;" &gt;
                  &lt;a class="mob-menu" href="https://sewprice.ru/sale/trade_in/" target="_blank" style="text-decoration:none;font-size:13px;color:#3f3e29;line-height:17px;font-family:Arial, sans-serif;text-transform:uppercase;" &gt;Trade-in&lt;/a&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;!--/menu--&gt;&lt;/pre&gt;</pre>`;
//--------// html-before-content ------------//

//-------- html-after-content ------------//
htmlIframeAfterContentSP = `<!-- Module: меню -->
<table class="menu outer" style="border-spacing: 0; border-collapse: collapse; width: 100%; margin: 0 auto; max-width: 600px; background-color: #ffffff; border-top: 3px solid #D73478;" width="100%" bgcolor="#ffffff">
  <tr>
    <td class="row menu__items" valign="middle" style="padding: 0; line-height: normal; font-size: 0; text-align: center;" align="center">

      <!--[if (gte mso 9)|(IE)]>
      <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
      <![endif]-->

      <!--[if (gte mso 9)|(IE)]>
      <td width="18.43%" valign="middle">
      <![endif]-->
      <div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 110.6px;">
        <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
          <tr>
            <td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;">
              <p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"><a href="https://sewprice.ru/catalog/shveynoe-oborudovanie/shveynye-mashiny/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;">Швейные<br>машины</a></p>
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <![endif]-->

      <!--[if (gte mso 9)|(IE)]>
      <td width="22.27%" valign="middle">
      <![endif]-->
      <div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 133.6px;">
        <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
          <tr>
            <td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;">
              <p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"><a href="https://sewprice.ru/catalog/aksessuary-dlya-shitya/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;">Аксессуары<br>для шитья</a></p>
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <![endif]-->

      <!--[if (gte mso 9)|(IE)]>
      <td width="24.77%" valign="middle">
      <![endif]-->
      <div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 148.6px;">
        <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
          <tr>
            <td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;">
              <p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"><a href="https://sewprice.ru/catalog/gladilnoe-oborudovanye/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;">Гладильное<br>оборудование</a></p>
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <![endif]-->

      <!--[if (gte mso 9)|(IE)]>
      <td width="19.77%" valign="middle">
      <![endif]-->
      <div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 118.6px;">
        <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
          <tr>
            <td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;">
              <p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"><a href="https://sewprice.ru/sale/trade_in/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;">Trade-in</a></p>
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <![endif]-->

      <!--[if (gte mso 9)|(IE)]>
      <td width="14.77%" valign="middle">
      <![endif]-->
      <div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 88.6px;">
        <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
          <tr>
            <td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;">
              <p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"><a href="https://sewprice.ru/catalog/sale/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;">SALE</a></p>
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]>
      </td>
      <![endif]-->

      <!--[if (gte mso 9)|(IE)]>
      </tr>
      </table>
      <![endif]-->
    </td>
  </tr>
</table>
<!-- Module End: меню -->

<!-- Module: Подвал -->
<table class="footer outer" style="border-spacing: 0; border-collapse: collapse; width: 100%; margin: 0 auto; max-width: 600px; background-color: #2E2E2F;" width="100%" bgcolor="#2E2E2F">
<tr>
  <td class="row" style="padding: 0; line-height: normal; font-size: 0; text-align: center; padding-top: 25px; padding-bottom: 23px;" align="center">
    <!--[if (gte mso 9)|(IE)]>
    <table width="100%" cellpadding="0" cellspacing="0"><tr>
    <![endif]-->
      <!--[if (gte mso 9)|(IE)]><td width="50.00%" valign="top" align="center" style="width:50.00%;padding:0"><![endif]-->
      <div class="col col-6 col-md-12" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 300px;">
        <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
          <tr>
            <td class="inner content-center-md footer__socialIcons" align="left" style="line-height: normal; padding: 10px;">
              <table class="wa socialIconsImages" width="auto" align="center" style="border-spacing: 0; border-collapse: collapse; width: auto;">
                <tr>
                  <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                    <a href="https://vk.com/sewprice" target="_blank"><img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/vk.png" width="40" height border="0" alt="VK" style="border: 0; display: block;"></a>
                  </td>
                  <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                    <a href="https://t.me/sewprice" target="_blank"><img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/telegram-logo_40x40%20(6257c428c226c8f2d1f106a0).png" width="40" height border="0" alt="TG" style="border: 0; display: block;"></a>
                  </td>
                  
                  <td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;">
                    <a href="https://wa.me/+79668511136" target="_blank"><img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/wa.png" width="40" height border="0" alt="WA" style="border: 0; display: block;"></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
      <!--[if (gte mso 9)|(IE)]></td><![endif]-->
      <!--[if (gte mso 9)|(IE)]><td width="50.00%" valign="top" align="left" style="width:50.00%;padding:0"><![endif]-->
        <div class="col col-6 col-md-12" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 300px;">
          <table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;">
            <tr>
              <td class="footer__contacts content-center-md" align="left" style="line-height: normal; text-align: left; padding: 5px; padding-top: 11px; padding-right: 0px;">
                <p style="margin: 0;">
                  <span class="footer__contacts-phone" style="color: #ffffff; font-size: 20px; font-weight: bold;">
                    <a href="tel:+78007079939" target="_blank" style="text-decoration: none; color: #ffffff;">+7 (800) 707-99-39</a>
                  </span>
                  <br>
                <span class="footer__contacts-mode" style="color: #ffffff; font-size: 13px;"><a href="mailto:info@sewprice.ru" target="_blank" style="color: #ffffff; font-size:15px; font-weight: bold;line-height:25px;">info@sewprice.ru</a></span>
                </p>
              </td>
            </tr>
          </table>
        </div>
      <!--[if (gte mso 9)|(IE)]></td><![endif]-->
    <!--[if (gte mso 9)|(IE)]></tr></table><![endif]-->
  </td>
</tr>
<tr>
  <td class="inner footer__unsubscribe" align="center" style="line-height: normal; padding: 10px; padding-bottom: 20px; padding-top: 0;">
    <table style="width: 100%; border-spacing: 0; border-collapse: collapse;" width="100%">
      <tr>
        <td class="footer__unsubscribe-wrap" align="center" style="padding: 0; line-height: normal; border-top: 1px solid #dcdcdc; padding-top: 20px;">
          <p style="margin: 0; color: #ffffff; font-size: 12px; line-height: normal;">© {{"now" | date: "yyyy"}} – ШВЕЙТОРГ<br>Вы получили это письмо, так как Вы подписаны на рассылки от интернет-магазина <a href="{{SiteUrl}}" target="_blank" style="color:#ffffff;text-decoration:none;">sewprice.ru</a>.<br>Чтобы отписаться от рассылки, нажмите <a href="{{Message.CancelThisSubscriptionUrl}}" target="_blank" style="color: #00bccc; text-decoration: underline;">здесь</a>.</p>
        </td>
      </tr>
    </table>
  </td>
</tr>
</table>        
<!-- Module End: Подвал -->

</td>
</tr>
</table>
</div>
</center>
</td></tr></table>
</div>
</body>
</html>`;
htmlIframeAfterContentCodeSP = `<pre>&lt;pre&gt;&lt;!-- Module: меню --&gt;
&lt;table class="menu outer" style="border-spacing: 0; border-collapse: collapse; width: 100%; margin: 0 auto; max-width: 600px; background-color: #ffffff; border-top: 3px solid #D73478;" width="100%" bgcolor="#ffffff"&gt;
  &lt;tr&gt;
    &lt;td class="row menu__items" valign="middle" style="padding: 0; line-height: normal; font-size: 0; text-align: center;" align="center"&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;table width="100%" cellpadding="0" cellspacing="0"&gt;
      &lt;tr&gt;
      &lt;![endif]--&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;td width="18.43%" valign="middle"&gt;
      &lt;![endif]--&gt;
      &lt;div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 110.6px;"&gt;
        &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
          &lt;tr&gt;
            &lt;td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;"&gt;
              &lt;p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"&gt;&lt;a href="https://sewprice.ru/catalog/shveynoe-oborudovanie/shveynye-mashiny/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;"&gt;Швейные&lt;br&gt;машины&lt;/a&gt;&lt;/p&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;/td&gt;
      &lt;![endif]--&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;td width="22.27%" valign="middle"&gt;
      &lt;![endif]--&gt;
      &lt;div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 133.6px;"&gt;
        &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
          &lt;tr&gt;
            &lt;td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;"&gt;
              &lt;p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"&gt;&lt;a href="https://sewprice.ru/catalog/aksessuary-dlya-shitya/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;"&gt;Аксессуары&lt;br&gt;для шитья&lt;/a&gt;&lt;/p&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;/td&gt;
      &lt;![endif]--&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;td width="24.77%" valign="middle"&gt;
      &lt;![endif]--&gt;
      &lt;div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 148.6px;"&gt;
        &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
          &lt;tr&gt;
            &lt;td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;"&gt;
              &lt;p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"&gt;&lt;a href="https://sewprice.ru/catalog/gladilnoe-oborudovanye/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;"&gt;Гладильное&lt;br&gt;оборудование&lt;/a&gt;&lt;/p&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;/td&gt;
      &lt;![endif]--&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;td width="19.77%" valign="middle"&gt;
      &lt;![endif]--&gt;
      &lt;div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 118.6px;"&gt;
        &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
          &lt;tr&gt;
            &lt;td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;"&gt;
              &lt;p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"&gt;&lt;a href="https://sewprice.ru/sale/trade_in/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;"&gt;Trade-in&lt;/a&gt;&lt;/p&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;/td&gt;
      &lt;![endif]--&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;td width="14.77%" valign="middle"&gt;
      &lt;![endif]--&gt;
      &lt;div class="col col-md-5" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 88.6px;"&gt;
        &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
          &lt;tr&gt;
            &lt;td align="center" nowrap class="menu__item" valign="middle" height="32" style="line-height: normal; padding: 5px; padding-top: 18px; padding-bottom: 20px; height: 32px;"&gt;
              &lt;p style="margin: 0; font-size: 14px; font-weight: normal; line-height: normal; color: #000000;"&gt;&lt;a href="https://sewprice.ru/catalog/sale/" target="_blank" style="display: inline-block; color: #000000; text-decoration: none;"&gt;SALE&lt;/a&gt;&lt;/p&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;/td&gt;
      &lt;![endif]--&gt;

      &lt;!--[if (gte mso 9)|(IE)]&gt;
      &lt;/tr&gt;
      &lt;/table&gt;
      &lt;![endif]--&gt;
    &lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;
&lt;!-- Module End: меню --&gt;

&lt;!-- Module: Подвал --&gt;
&lt;table class="footer outer" style="border-spacing: 0; border-collapse: collapse; width: 100%; margin: 0 auto; max-width: 600px; background-color: #2E2E2F;" width="100%" bgcolor="#2E2E2F"&gt;
&lt;tr&gt;
  &lt;td class="row" style="padding: 0; line-height: normal; font-size: 0; text-align: center; padding-top: 25px; padding-bottom: 23px;" align="center"&gt;
    &lt;!--[if (gte mso 9)|(IE)]&gt;
    &lt;table width="100%" cellpadding="0" cellspacing="0"&gt;&lt;tr&gt;
    &lt;![endif]--&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;&lt;td width="50.00%" valign="top" align="center" style="width:50.00%;padding:0"&gt;&lt;![endif]--&gt;
      &lt;div class="col col-6 col-md-12" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 300px;"&gt;
        &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
          &lt;tr&gt;
            &lt;td class="inner content-center-md footer__socialIcons" align="left" style="line-height: normal; padding: 10px;"&gt;
              &lt;table class="wa socialIconsImages" width="auto" align="center" style="border-spacing: 0; border-collapse: collapse; width: auto;"&gt;
                &lt;tr&gt;
                  &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                    &lt;a href="https://vk.com/sewprice" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/vk.png" width="40" height border="0" alt="VK" style="border: 0; display: block;"&gt;&lt;/a&gt;
                  &lt;/td&gt;
                  &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                    &lt;a href="https://t.me/sewprice" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/telegram-logo_40x40%20(6257c428c226c8f2d1f106a0).png" width="40" height border="0" alt="TG" style="border: 0; display: block;"&gt;&lt;/a&gt;
                  &lt;/td&gt;
                  
                  &lt;td class="socialIconsImages__wrap" style="padding: 0; line-height: normal; padding-left: 3px; padding-right: 3px;"&gt;
                    &lt;a href="https://wa.me/+79668511136" target="_blank"&gt;&lt;img src="https://gallery.retailrocket.ru/5a69f90cc7d0102ff474501a/wa.png" width="40" height border="0" alt="WA" style="border: 0; display: block;"&gt;&lt;/a&gt;
                  &lt;/td&gt;
                &lt;/tr&gt;
              &lt;/table&gt;
            &lt;/td&gt;
          &lt;/tr&gt;
        &lt;/table&gt;
      &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;&lt;/td&gt;&lt;![endif]--&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;&lt;td width="50.00%" valign="top" align="left" style="width:50.00%;padding:0"&gt;&lt;![endif]--&gt;
        &lt;div class="col col-6 col-md-12" style="width: 100%; display: inline-block; vertical-align: top; font-size: 12px; max-width: 300px;"&gt;
          &lt;table width="100%" style="width: 100%; border-spacing: 0; border-collapse: collapse;"&gt;
            &lt;tr&gt;
              &lt;td class="footer__contacts content-center-md" align="left" style="line-height: normal; text-align: left; padding: 5px; padding-top: 11px; padding-right: 0px;"&gt;
                &lt;p style="margin: 0;"&gt;
                  &lt;span class="footer__contacts-phone" style="color: #ffffff; font-size: 20px; font-weight: bold;"&gt;
                    &lt;a href="tel:+78007079939" target="_blank" style="text-decoration: none; color: #ffffff;"&gt;+7 (800) 707-99-39&lt;/a&gt;
                  &lt;/span&gt;
                  &lt;br&gt;
                &lt;span class="footer__contacts-mode" style="color: #ffffff; font-size: 13px;"&gt;&lt;a href="mailto:info@sewprice.ru" target="_blank" style="color: #ffffff; font-size:15px; font-weight: bold;line-height:25px;"&gt;info@sewprice.ru&lt;/a&gt;&lt;/span&gt;
                &lt;/p&gt;
              &lt;/td&gt;
            &lt;/tr&gt;
          &lt;/table&gt;
        &lt;/div&gt;
      &lt;!--[if (gte mso 9)|(IE)]&gt;&lt;/td&gt;&lt;![endif]--&gt;
    &lt;!--[if (gte mso 9)|(IE)]&gt;&lt;/tr&gt;&lt;/table&gt;&lt;![endif]--&gt;
  &lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
  &lt;td class="inner footer__unsubscribe" align="center" style="line-height: normal; padding: 10px; padding-bottom: 20px; padding-top: 0;"&gt;
    &lt;table style="width: 100%; border-spacing: 0; border-collapse: collapse;" width="100%"&gt;
      &lt;tr&gt;
        &lt;td class="footer__unsubscribe-wrap" align="center" style="padding: 0; line-height: normal; border-top: 1px solid #dcdcdc; padding-top: 20px;"&gt;
          &lt;p style="margin: 0; color: #ffffff; font-size: 12px; line-height: normal;"&gt;© {{"now" | date: "yyyy"}} – ШВЕЙТОРГ&lt;br&gt;Вы получили это письмо, так как Вы подписаны на рассылки от интернет-магазина &lt;a href="{{SiteUrl}}" target="_blank" style="color:#ffffff;text-decoration:none;"&gt;sewprice.ru&lt;/a&gt;.&lt;br&gt;Чтобы отписаться от рассылки, нажмите &lt;a href="{{Message.CancelThisSubscriptionUrl}}" target="_blank" style="color: #00bccc; text-decoration: underline;"&gt;здесь&lt;/a&gt;.&lt;/p&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
  &lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;        
&lt;!-- Module End: Подвал --&gt;

&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;/div&gt;
&lt;/center&gt;
&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;&lt;/pre&gt;</pre>`;
//--------// html-after-content ------------//
//------// sewprice -----//





  //-------- ready link -------- //
  
  //--------// ready link -------- //

  //-------- Animation ----------------//
  
  //--------// Animation ----------------//
  return {
    DOMstrings: {
      //-------- sections ----------------//
      sectionConsctructor:sectionConsctructor,
      //--------// sections ----------------//

      //-------- preheader ----------------//
      preheaderTitle: preheaderTitle,
      preheaderTitleInput: preheaderTitleInput,
      renderCodeEmail: renderCodeEmail,
      //--------// preheader ----------------//
      
      //-------- Banner ----------------//
      blockBanner: blockBanner,
      banner1TitleInput:banner1TitleInput,
      bannerImgUrlInput: bannerImgUrlInput,
      bannerLinkInput: bannerLinkInput,
      bannerAltInput: bannerAltInput,
      
      //--------// Banner ----------------//

      //-------- Text ----------------//,
      textTitleInput: textTitleInput,
      textTextInput: textTextInput,
      checkboxTextButton: checkboxTextButton,
      textButtonLinkInput: textButtonLinkInput,
      textButtonTitleInput: textButtonTitleInput,
      //--------// Text ----------------//
      
      //-------- RecoX2 --------//
      recoTitleX2Input:recoTitleX2Input,
      recoIdsX2Input:recoIdsX2Input,
      recoAlgoritmX2Input:recoAlgoritmX2Input,
      recoLimitX2Input:recoLimitX2Input,
      checkboxRecoX2Button:checkboxRecoX2Button,
      recoX2ButtonLinkInput:recoX2ButtonLinkInput,
      recoX2ButtonTextInput:recoX2ButtonTextInput,
      //--------// RecoX2 --------//

      //-------- RecoX3 --------//
      recoTitleX3Input:recoTitleX3Input,
      recoIdsX3Input:recoIdsX3Input,
      recoAlgoritmX3Input:recoAlgoritmX3Input,
      recoLimitX3Input:recoLimitX3Input,
      checkboxRecoX3Button:checkboxRecoX3Button,
      recoX3ButtonLinkInput:recoX3ButtonLinkInput,
      recoX3ButtonTextInput:recoX3ButtonTextInput,
      //--------// RecoX3 --------//

      //-------- Teaser ------------//
      teaserTitleInput:teaserTitleInput,
      teaserImgURLInput:teaserImgURLInput,
      teaserImgLinkInput:teaserImgLinkInput,
      teaserImgAltInput:teaserImgAltInput,
      teaserTextInput:teaserTextInput,
      teaserButtonLinkInput:teaserButtonLinkInput,
      teaserButtonTitleInput:teaserButtonTitleInput,
      //--------// Teaser ------------//

      //---------------- parametrs ---------//
      heightBlocksConsctructor: heightBlocksConsctructor,
      //---------------- parametrs ---------//

      //-------- BannerX2 ------------//
      leftBannerImgUrlInput:leftBannerImgUrlInput,
      leftBannerLinkInput:leftBannerLinkInput,
      leftBannerImgAltInput:leftBannerImgAltInput,
      rightBannerImgUrlInput:rightBannerImgUrlInput,
      rightBannerLinkInput:rightBannerLinkInput,
      rightBannerImgAltInput:rightBannerImgAltInput,
      //--------// BannerX2 ------------//
      
      //-------- render-email ------------//
      renderCodeEmail: renderCodeEmail,
      renderCodeEmailFrame:renderCodeEmailFrame,
      emailDocument: emailDocument,
      htmlIframeBeforeContentSW:htmlIframeBeforeContentSW,
      htmlIframeBeforeContentCodeSW:htmlIframeBeforeContentCodeSW,
      htmlIframeAfterContentSW:htmlIframeAfterContentSW,
      htmlIframeAfterContentCodeSW:htmlIframeAfterContentCodeSW,

      htmlIframeBeforeContentSP:htmlIframeBeforeContentSP,
      htmlIframeBeforeContentCodeSP:htmlIframeBeforeContentCodeSP,
      htmlIframeAfterContentSP:htmlIframeAfterContentSP,
      htmlIframeAfterContentCodeSP:htmlIframeAfterContentCodeSP,
      //--------// render-email ------------//

      //-------- buttons ------------//
      buttonGenerate: buttonGenerate,
      buttonReset: buttonReset,
      buttonCopy: buttonCopy,

      buttonBanner:buttonBanner,
      buttonText:buttonText,
      buttonRecoX2:buttonRecoX2,
      buttonRecoX3:buttonRecoX3,
      buttonTeaser:buttonTeaser,
      buttonBannerX2:buttonBannerX2
      //--------// buttons ------------//
    },
  };
}
ctrl;
