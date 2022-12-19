function UIctrl(ctrl) {
  let preheaderTitle, preheaderTitleInput, 
      checkboxBanner, bannerImgUrlInput, bannerLinkInput, bannerAltInput,
      
      renderCodeEmail, renderCodeEmailFrame, emailDocument,
      htmlIframeBeforeContent, htmlIframeAfterContent;

  //-------- preheader ------------//
  preheaderTitle = document.querySelector(".preheaderTitle");
  preheaderTitleInput = document.querySelector(
    ".preheaderTitle input[type=text]"
  );
  //--------// preheader ------------//

  //-------- banner ------------//
  checkboxBanner = document.querySelector(".showBanner1 input[type=checkbox]");
  bannerImgUrlInput = document.querySelector(".Banner1ImgURL input[type=text]");
  bannerLinkInput = document.querySelector(".Banner1Link input[type=text]");
  bannerAltInput = document.querySelector(".Banner1Alt input[type=text]");
  //--------// banner ------------//




  //-------- renderCodeEmail ------------//
  renderCodeEmail = document.querySelector(".rendering-code-email");
  renderCodeEmailFrame = document.querySelector(".rendering-visual-email iframe");
  //--------// renderCodeEmail ------------//
  console.dir(renderCodeEmailFrame);

   //-------- visual-part-of-email ------------//
  emailDocument = document.querySelector("#email-document");
  //--------// visual-part-of-email ------------//
  



  //-------- choice of sources ------------//
  listSources = document.querySelector(".list_sources");
  listSourcesInput = document.querySelectorAll(".list_sources > li > input");
  yoursVariantSource = document.querySelector(
    ".yours_variant_source > input[type=text]"
  );
  //--------// choice of sources ------------//

  //-------- choice of medium ------------//
  listMedium = document.querySelector(".list_medium");
  listMediumInput = document.querySelectorAll(".list_medium > li > input");
  yoursVariantMedium = document.querySelector(
    ".yours_variant_medium > input[type=text]"
  );
  //--------// choice of medium ------------//

  //------------ buttons ------------//

  //-------- button generate -//
  buttonGenerate = document.querySelector('input[name="generate"]');
  //-------- button reset -//
  buttonReset = document.querySelector('input[name="reset"]');
  //-------- button copy -//
  buttonCopy = document.querySelector('input[name="copy"]');
  //------------// buttons ------------//

  htmlIframeBeforeContent = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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

  htmlIframeAfterContent = `<!-- Module: Подвал -->
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
  







  //-------- ready link -------- //
  readyLink = document.querySelector("#result__link-input > textarea");
  //--------// ready link -------- //

  //-------- Animation ----------------//

  //--------// Animation ----------------//
  return {
    DOMstrings: {
      preheaderTitle: preheaderTitle,
      preheaderTitleInput: preheaderTitleInput,
      renderCodeEmail: renderCodeEmail,

      checkboxBanner: checkboxBanner,
      bannerImgUrlInput: bannerImgUrlInput,
      bannerLinkInput: bannerLinkInput,
      bannerAltInput: bannerAltInput,

      renderCodeEmail: renderCodeEmail,
      renderCodeEmailFrame:renderCodeEmailFrame,
      emailDocument: emailDocument,

      htmlIframeBeforeContent:htmlIframeBeforeContent,
      htmlIframeAfterContent:htmlIframeAfterContent,

      buttonGenerate: buttonGenerate,
      buttonReset: buttonReset,
      buttonCopy: buttonCopy,
    },
  };
}
ctrl;
