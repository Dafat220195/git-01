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

  htmlIframeBeforeContent = `<!DOCTYPE html PUBLIC &quot;-//W3C//DTD XHTML 1.0 Transitional//EN&quot; &quot;http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd&quot;>
  <html
    xmlns=&quot;http://www.w3.org/1999/xhtml&quot;
    xmlns:v=&quot;urn:schemas-microsoft-com:vml&quot;
    xmlns:o=&quot;urn:schemas-microsoft-com:office:office&quot;
  >
    <head>
      <!--[if gte mso 9
        ]><xml>
          <o:OfficeDocumentSettings>
            <o:AllowPNG />
            <o:PixelsPerInch>96</o:PixelsPerInch>
          </o:OfficeDocumentSettings>
        </xml><!
      [endif]-->
      <link rel=&quot;stylesheet&quot; href=&quot;./css/main.css&quot; />
      <style type=&quot;text/css&quot;>
        body {
          margin: 0;
          padding: 0;
          min-width: 100%;
          background-color: #fff;
        }
        .webkit {
          max-width: 600px;
          margin: 0 auto;
        }
        .outer {
          margin: 0 auto;
          width: 100%;
          max-width: 600px;
        }
        .inner {
          padding: 10px;
        }
        table {
          border-spacing: 0;
          border-collapse: collapse;
          font-family: Arial, &quot;Helvetica Neue&quot;, Helvetica,
            sans-serif;
          color: #333;
        }
        td {
          padding: 0;
        }
        img {
          border: 0;
        }
        .img_block {
          display: block;
        }
        .wrapper {
          width: 100%;
          table-layout: fixed;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
        p {
          margin: 0;
        }
        .contents {
          width: 100%;
        }
        .one-column {
          text-align: center;
          font-size: 0;
        }
        .one-column .column {
          width: 100%;
          max-width: 100%;
          display: inline-block;
          vertical-align: top;
        }
        .two-column {
          text-align: center;
          font-size: 0;
        }
        .two-column .column {
          width: 100%;
          max-width: 300px;
          display: inline-block;
          vertical-align: top;
        }
        .two-column-per-one {
          text-align: center;
          font-size: 0;
        }
        .two-column-per-one .first {
          width: 100%;
          max-width: 200px;
          display: inline-block;
          vertical-align: top;
        }
        .two-column-per-one .second {
          width: 100%;
          max-width: 400px;
          display: inline-block;
          vertical-align: top;
        }
        .three-column {
          text-align: center;
          font-size: 0;
        }
        .three-column .column {
          width: 100%;
          max-width: 200px;
          display: inline-block;
          vertical-align: top;
        }
        .two-column .two-column .column {
          width: 100%;
          max-width: 150px;
          display: inline-block;
          vertical-align: top;
        }
        .ExternalClass * {
          line-height: inherit;
        }

        .preheader_block {
          background: #f7f7f7;
        }
        .header_block .contents {
          padding: 25px 0;
        }
        .menu_item_inner a {
          text-transform: uppercase;
        }
        .btn td {
          padding: 13px 35px 11px;
        }
        .btn a {
          font-family: Arial, sans-serif;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 12px;
          line-height: 26px;
          font-weight: 700;
          color: #424242;
          letter-spacing: 1px;
        }
        .btn {
          border: 2px solid #424242;
        }
        .h2 {
          font: bold 30px/1.5 Arial, sans-serif;
          color: #3f3e29;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .h2 small {
          font-size: 11px;
          letter-spacing: 3px;
        }
        .h2 {
          font: bold 30px/1.5 Arial, sans-serif;
          color: #3f3e29;
          text-transform: uppercase;
          letter-spacing: -1px;
        }
        .h2 small {
          font-size: 11px;
          letter-spacing: 3px;
        }
        .item-title {
          padding: 0 5px;
        }
        .item-title a {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 26px;
          text-decoration: none;
        }
        .item-price {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 700;
          line-height: 26px;
          text-decoration: none;
        }
        .item-price s {
          color: #666;
        }
        .item-price span {
          color: #c17d92;
        }
        .item-action .btn {
          width: 100%;
        }
        .fill {
          background: #424242;
        }
        .fill a {
          color: #fff;
        }
        .article-text p {
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          color: #3f3e29;
        }
        a {
          color: #424242;
        }
        .review-text p {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        }
        .review-text {
          padding-top: 10px;
        }
        .review-author p {
          color: #adafb2;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        }
        .review-author {
          padding-top: 10px;
        }
        .article-text-action {
          padding-top: 20px;
          padding-top: 20px;
        }
        .recoms_x3_block .item-title a {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 26px;
          text-decoration: none;
        }
        .recoms_x3_block .item-info {
          padding: 20px 0;
        }
        .recoms_x3_block .item-price s {
          color: #666;
        }
        .recoms_x3_block .item-price span {
          color: #c17d92;
        }
        .recoms_x3_block .item-price {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
          text-decoration: none;
        }
        .author-name p {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 700;
          line-height: 16px;
        }
        .author-post p {
          color: #adafb2;
          font-family: Arial, sans-serif;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
        }
        .author-post {
          padding: 0;
        }
        .menu_footer_block {
          background: #3f3e29;
        }
        .footer_contacts_block a {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          text-decoration: none;
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          text-decoration: none;
        }
        .social-item {
          max-width: 163px !important;
        }
        .social-item-inner {
          font-size: 24px;
        }
        .column.social-item .inner {
          padding: 0;
        }
        .footer_contacts_block a {
          color: #3f3e29;
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 20px;
          text-decoration: none;
        }
        .social-item {
          max-width: 163px !important;
        }
        .social-item-inner {
          font-size: 24px;
        }
        .column.social-item .inner {
          padding: 0;
        }
        .footer_unsubscribe_block p {
          font-size: 13px;
          font-family: Arial, sans-serif;
          line-height: 20px;
          color: #adafb2;
        }
      </style>
      <meta
        http-equiv=&quot;Content-Type&quot;
        content=&quot;text/html; charset=utf-8&quot;
      />
      <meta http-equiv=&quot;X-UA-Compatible&quot; content=&quot;IE=edge&quot; />
      <meta
        name=&quot;viewport&quot;
        content=&quot;width=device-width, initial-scale=1.0&quot;
      />
      <meta name=&quot;format-detection&quot; content=&quot;telephone=no&quot; />
      <title></title>
    </head>
    <body
      style=&quot;
        margin-top: 0;
        margin-bottom: 0;
        margin-right: 0;
        margin-left: 0;
        padding-top: 0;
        padding-bottom: 0;
        padding-right: 0;
        padding-left: 0;
        min-width: 100%;
        background-color: #fff;
      &quot;
    >
      <div style=&quot;background-color: #ffffff&quot;>
        <table
          height=&quot;100%&quot;
          width=&quot;100%&quot;
          cellpadding=&quot;0&quot;
          cellspacing=&quot;0&quot;
          border=&quot;0&quot;
          style=&quot;
            border-spacing: 0;
            border-collapse: collapse;
            font-family: Arial, 'Helvetica Neue', Helvetica,
              sans-serif;
            color: #333;
          &quot;
        >
          <tr>
            <td
              valign=&quot;top&quot;
              align=&quot;center&quot;
              class=&quot;bg_cell&quot;
              style=&quot;
                padding-top: 0;
                padding-bottom: 0;
                padding-right: 0;
                padding-left: 0;
              &quot;
            >
              <center
                class=&quot;wrapper&quot;
                style=&quot;
                  width: 100%;
                  table-layout: fixed;
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
                &quot;
              >
                <div
                  class=&quot;webkit&quot;
                  style=&quot;
                    max-width: 600px;
                    min-width: 600px;
                    margin-top: 0;
                    margin-bottom: 0;
                    margin-right: auto;
                    margin-left: auto;
                  &quot;
                >
                  <table
                    width=&quot;600&quot;
                    align=&quot;center&quot;
                    style=&quot;
                      border-spacing: 0;
                      border-collapse: collapse;
                      font-family: Arial, 'Helvetica Neue',
                        Helvetica, sans-serif;
                      color: #333;
                    &quot;
                  >
                    <tr>
                      <td
                        style=&quot;
                          padding-top: 0;
                          padding-bottom: 0;
                          padding-right: 0;
                          padding-left: 0;
                        &quot;
                      >
                        <!--iOS gmail fix-->
                        <div
                          style=&quot;
                            display: none;
                            white-space: nowrap;
                            font-style: normal;
                            font-variant: normal;
                            font-weight: normal;
                            font-size: 15px;
                            font-family: courier;
                            line-height: 0;
                          &quot;
                        ></div>
                        <!--/iOS gmail fix-->
                        <!--hidden-preheader-->
                        <div
                          style=&quot;
                            font-size: 0;
                            line-height: 0;
                            color: #ffffff;
                            height: 0;
                            display: none;
                          &quot;
                        >
                          <div>
                            {{PreheaderTitle}}&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
                          </div>
                          <span></span>
                        </div>
                        <!--/hidden-preheader-->
                        <!--preheader-->
                        <table
                          class=&quot;preheader_block outer&quot;
                          align=&quot;center&quot;
                          style=&quot;
                            border-spacing: 0;
                            border-collapse: collapse;
                            font-family: Arial,
                              'Helvetica Neue', Helvetica,
                              sans-serif;
                            color: #333;
                            margin-top: 0;
                            margin-bottom: 0;
                            margin-right: auto;
                            margin-left: auto;
                            width: 100%;
                            max-width: 600px;
                            background-color: #f7f7f7;
                            background-image: none;
                            background-repeat: repeat;
                            background-position: top left;
                            background-attachment: scroll;
                          &quot;
                        >
                          <tr>
                            <td
                              class=&quot;one-column&quot;
                              style=&quot;
                                padding-top: 0;
                                padding-bottom: 0;
                                padding-right: 0;
                                padding-left: 0;
                                text-align: center;
                                font-size: 0;
                              &quot;
                            >
                              <div
                                class=&quot;column&quot;
                                style=&quot;
                                  width: 100%;
                                  max-width: 100%;
                                  display: inline-block;
                                  vertical-align: top;
                                &quot;
                              >
                                <table
                                  width=&quot;100%&quot;
                                  style=&quot;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    font-family: Arial,
                                      'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    color: #333;
                                  &quot;
                                >
                                  <tr>
                                    <td
                                      align=&quot;center&quot;
                                      class=&quot;inner contents&quot;
                                      style=&quot;
                                        padding-top: 10px;
                                        padding-bottom: 10px;
                                        padding-right: 10px;
                                        padding-left: 10px;
                                        width: 100%;
                                      &quot;
                                    >
                                      <a
                                        href=&quot;{{htmlVersionLink}}&quot;
                                        target=&quot;_blank&quot;
                                        style=&quot;
                                          color: #adafb2;
                                          text-decoration: none;
                                          font-style: normal;
                                          font-variant: normal;
                                          font-weight: normal;
                                          font-size: 12px;
                                          font-family: Arial,
                                            sans-serif;
                                          line-height: normal;
                                        &quot;
                                        >Ссылка на
                                        веб-версию</a
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <!--/preheader-->
                        <!--header-->
                        <table
                          class=&quot;header_block outer&quot;
                          align=&quot;center&quot;
                          style=&quot;
                            border-spacing: 0;
                            border-collapse: collapse;
                            font-family: Arial,
                              'Helvetica Neue', Helvetica,
                              sans-serif;
                            color: #333;
                            margin-top: 0;
                            margin-bottom: 0;
                            margin-right: auto;
                            margin-left: auto;
                            width: 100%;
                            max-width: 600px;
                            background-color: #ffffff;
                          &quot;
                        >
                          <tr>
                            <td
                              class=&quot;one-column&quot;
                              style=&quot;
                                padding-top: 0;
                                padding-bottom: 0;
                                padding-right: 0;
                                padding-left: 0;
                                text-align: center;
                                font-size: 0;
                              &quot;
                            >
                              <div
                                class=&quot;column&quot;
                                style=&quot;
                                  width: 100%;
                                  max-width: 100%;
                                  display: inline-block;
                                  vertical-align: top;
                                &quot;
                              >
                                <table
                                  width=&quot;100%&quot;
                                  style=&quot;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    font-family: Arial,
                                      'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    color: #333;
                                  &quot;
                                >
                                  <tr>
                                    <td
                                      class=&quot;inner contents&quot;
                                      align=&quot;center&quot;
                                      style=&quot;
                                        width: 100%;
                                        padding-top: 25px;
                                        padding-bottom: 25px;
                                        padding-right: 0;
                                        padding-left: 0;
                                      &quot;
                                    >
                                      <a
                                        href=&quot;{{siteUrl}}&quot;
                                        target=&quot;_blank&quot;
                                        style=&quot;color: #424242&quot;
                                        ><img
                                          src=&quot;https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/logo%20(3).png&quot;
                                          alt=&quot;Мир шитья&quot;
                                          border=&quot;0&quot;
                                          style=&quot;
                                            display: block;
                                            border-width: 0;
                                          &quot;
                                      /></a>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <!--/header-->
                        <!--menu-->
                        <table
                          class=&quot;menu_block outer&quot;
                          align=&quot;center&quot;
                          style=&quot;
                            border-spacing: 0;
                            border-collapse: collapse;
                            font-family: Arial,
                              'Helvetica Neue', Helvetica,
                              sans-serif;
                            color: #333;
                            margin-top: 0;
                            margin-bottom: 0;
                            margin-right: auto;
                            margin-left: auto;
                            width: 100%;
                            max-width: 600px;
                          &quot;
                        >
                          <tr>
                            <td
                              class=&quot;one-column&quot;
                              style=&quot;
                                padding-top: 0;
                                padding-bottom: 0;
                                padding-right: 0;
                                padding-left: 0;
                                text-align: center;
                                font-size: 0;
                              &quot;
                            >
                              <div
                                class=&quot;column&quot;
                                style=&quot;
                                  width: 100%;
                                  max-width: 100%;
                                  display: inline-block;
                                  vertical-align: top;
                                &quot;
                              >
                                <table
                                  width=&quot;100%&quot;
                                  style=&quot;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    font-family: Arial,
                                      'Helvetica Neue',
                                      Helvetica, sans-serif;
                                    color: #333;
                                  &quot;
                                >
                                  <tr>
                                    <td
                                      align=&quot;center&quot;
                                      width=&quot;33.3%&quot;
                                      style=&quot;
                                        max-width: 33.3%;
                                        padding-top: 25px;
                                        padding-bottom: 30px;
                                        padding-right: 5px;
                                        padding-left: 5px;
                                      &quot;
                                    >
                                      <a
                                        class=&quot;mob-menu&quot;
                                        href=&quot;https://www.sew-world.ru/catalog/&quot;
                                        target=&quot;_blank&quot;
                                        style=&quot;
                                          text-decoration: none;
                                          font-size: 13px;
                                          color: #3f3e29;
                                          line-height: 17px;
                                          font-family: Arial,
                                            sans-serif;
                                          text-transform: uppercase;
                                        &quot;
                                        >Каталог</a
                                      >
                                    </td>
                                    <td
                                      align=&quot;center&quot;
                                      width=&quot;33.3%&quot;
                                      style=&quot;
                                        max-width: 33.3%;
                                        padding-top: 25px;
                                        padding-bottom: 30px;
                                        padding-right: 5px;
                                        padding-left: 5px;
                                      &quot;
                                    >
                                      <a
                                        class=&quot;mob-menu&quot;
                                        href=&quot;https://www.sew-world.ru/sale/&quot;
                                        target=&quot;_blank&quot;
                                        style=&quot;
                                          text-decoration: none;
                                          font-size: 13px;
                                          color: #3f3e29;
                                          line-height: 17px;
                                          font-family: Arial,
                                            sans-serif;
                                          text-transform: uppercase;
                                        &quot;
                                        >Акции</a
                                      >
                                    </td>
                                    <td
                                      align=&quot;center&quot;
                                      width=&quot;33.3%&quot;
                                      style=&quot;
                                        max-width: 33.3%;
                                        padding-top: 25px;
                                        padding-bottom: 30px;
                                        padding-right: 5px;
                                        padding-left: 5px;
                                      &quot;
                                    >
                                      <a
                                        class=&quot;mob-menu&quot;
                                        href=&quot;https://www.sew-world.ru/magazines/&quot;
                                        target=&quot;_blank&quot;
                                        style=&quot;
                                          text-decoration: none;
                                          font-size: 13px;
                                          color: #3f3e29;
                                          line-height: 17px;
                                          font-family: Arial,
                                            sans-serif;
                                          text-transform: uppercase;
                                        &quot;
                                        >Магазины</a
                                      >
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </td>
                          </tr>
                        </table>
                        <!--/menu-->`;

  htmlIframeAfterContent = `<!-- Module: Подвал -->
  <table
    class=&quot;footer outer&quot;
    style=&quot;
      border-spacing: 0;
      border-collapse: collapse;
      width: 100%;
      margin: 0 auto;
      max-width: 600px;
      background-color: #00adef;
    &quot;
    width=&quot;100%&quot;
    bgcolor=&quot;#00adef&quot;
  >
    <tr>
      <td
        class=&quot;row&quot;
        style=&quot;
          padding: 0;
          line-height: normal;
          font-size: 0;
          text-align: center;
          padding-top: 25px;
          padding-bottom: 23px;
        &quot;
        align=&quot;center&quot;
      >
        <table
          width=&quot;100%&quot;
          cellpadding=&quot;0&quot;
          cellspacing=&quot;0&quot;
        >
          <tr>
            <td
              width=&quot;50.00%&quot;
              valign=&quot;top&quot;
              align=&quot;center&quot;
              style=&quot;
                width: 50%;
                padding: 0;
              &quot;
            >
              <table
                width=&quot;100%&quot;
                style=&quot;
                  width: 100%;
                  border-spacing: 0;
                  border-collapse: collapse;
                &quot;
              >
                <tr>
                  <td
                    class=&quot;inner content-center-md footer__socialIcons&quot;
                    align=&quot;left&quot;
                    style=&quot;
                      line-height: normal;
                      padding: 10px;
                    &quot;
                  >
                    <table
                      class=&quot;wa socialIconsImages&quot;
                      width=&quot;auto&quot;
                      align=&quot;center&quot;
                      style=&quot;
                        border-spacing: 0;
                        border-collapse: collapse;
                        width: auto;
                      &quot;
                    >
                      <tr>
                        <td
                          class=&quot;socialIconsImages__wrap&quot;
                          style=&quot;
                            padding: 0;
                            line-height: normal;
                            padding-left: 3px;
                            padding-right: 3px;
                          &quot;
                        >
                          <a
                            href=&quot;https://api.whatsapp.com/send/?phone=79775767966&text&app_absent=0&quot;
                            target=&quot;_blank&quot;
                            ><img
                              src=&quot;https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/wa.png&quot;
                              width=&quot;30&quot;
                              height
                              border=&quot;0&quot;
                              alt=&quot;WA&quot;
                              style=&quot;
                                border: 0;
                                display: block;
                              &quot;
                          /></a>
                        </td>
                        <td
                          class=&quot;socialIconsImages__wrap&quot;
                          style=&quot;
                            padding: 0;
                            line-height: normal;
                            padding-left: 3px;
                            padding-right: 3px;
                          &quot;
                        >
                          <a
                            href=&quot;https://vk.com/sew_world&quot;
                            target=&quot;_blank&quot;
                            ><img
                              src=&quot;https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/vk.png&quot;
                              width=&quot;30&quot;
                              height
                              border=&quot;0&quot;
                              alt=&quot;VK&quot;
                              style=&quot;
                                border: 0;
                                display: block;
                              &quot;
                          /></a>
                        </td>
                        <td
                          class=&quot;socialIconsImages__wrap&quot;
                          style=&quot;
                            padding: 0;
                            line-height: normal;
                            padding-left: 3px;
                            padding-right: 3px;
                          &quot;
                        >
                          <a
                            href=&quot;https://t.me/mir_shitya&quot;
                            target=&quot;_blank&quot;
                            ><img
                              src=&quot;https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/logo_telegram_30x30%20(6246c1e9143d10209fd6d02e).png&quot;
                              width=&quot;30&quot;
                              height
                              border=&quot;0&quot;
                              alt=&quot;TG&quot;
                              style=&quot;
                                border: 0;
                                display: block;
                              &quot;
                          /></a>
                        </td>
                        <td
                          class=&quot;socialIconsImages__wrap&quot;
                          style=&quot;
                            padding: 0;
                            line-height: normal;
                            padding-left: 3px;
                            padding-right: 3px;
                          &quot;
                        >
                          <a
                            href=&quot;https://www.youtube.com/channel/UClK3KpxI0YtCliBxE5bXQqQ?sub_confirmation=1&quot;
                            target=&quot;_blank&quot;
                            ><img
                              src=&quot;https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/yt.png&quot;
                              width=&quot;30&quot;
                              height
                              border=&quot;0&quot;
                              alt=&quot;YT&quot;
                              style=&quot;
                                border: 0;
                                display: block;
                              &quot;
                          /></a>
                        </td>
                        <td
                          class=&quot;socialIconsImages__wrap&quot;
                          style=&quot;
                            padding: 0;
                            line-height: normal;
                            padding-left: 3px;
                            padding-right: 3px;
                          &quot;
                        >
                          <a
                            href=&quot;https://ok.ru/sew.world&quot;
                            target=&quot;_blank&quot;
                            ><img
                              src=&quot;https://gallery.retailrocket.ru/60e709aa97a52829b06f35d4/ok.png&quot;
                              width=&quot;30&quot;
                              height
                              border=&quot;0&quot;
                              alt=&quot;OK&quot;
                              style=&quot;
                                border: 0;
                                display: block;
                              &quot;
                          /></a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
            <td
              width=&quot;50.00%&quot;
              valign=&quot;top&quot;
              align=&quot;left&quot;
              style=&quot;
                width: 50%;
                padding: 0;
              &quot;
            >
              <table
                width=&quot;100%&quot;
                style=&quot;
                  width: 100%;
                  border-spacing: 0;
                  border-collapse: collapse;
                &quot;
              >
                <tr>
                  <td
                    class=&quot;footer__contacts content-center-md&quot;
                    align=&quot;left&quot;
                    style=&quot;
                      line-height: normal;
                      text-align: left;
                      padding: 5px;
                      padding-top: 11px;
                      padding-right: 0px;
                    &quot;
                  >
                    <p
                      style=&quot;margin: 0&quot;
                    >
                      <span
                        class=&quot;footer__contacts-phone&quot;
                        style=&quot;
                          color: #ffffff;
                          font-size: 18px;
                          font-weight: bold;
                        &quot;
                      >
                        <a
                          href=&quot;tel:+78007774865&quot;
                          target=&quot;_blank&quot;
                          style=&quot;
                            text-decoration: none;
                            color: #ffffff;
                          &quot;
                          >+7 (800)
                          777-48-65</a
                        >
                      </span>
                      <br />
                      <span
                        class=&quot;footer__contacts-mode&quot;
                        style=&quot;
                          color: #ffffff;
                          font-size: 13px;
                        &quot;
                      >
                        <a
                          href=&quot;mailto:info@sew-world.ru&quot;
                          target=&quot;_blank&quot;
                          style=&quot;
                            color: #ffffff;
                            font-size: 12px;
                            font-weight: bold;
                            line-height: 25px;
                          &quot;
                          >info@sew-world.ru</a
                        >
                      </span>
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td
        class=&quot;inner footer__unsubscribe&quot;
        align=&quot;center&quot;
        style=&quot;
          line-height: normal;
          padding: 10px;
          padding-bottom: 20px;
          padding-top: 0;
        &quot;
      >
        <table
          style=&quot;
            width: 100%;
            border-spacing: 0;
            border-collapse: collapse;
          &quot;
          width=&quot;100%&quot;
        >
          <tr>
            <td
              class=&quot;footer__unsubscribe-wrap&quot;
              align=&quot;center&quot;
              style=&quot;
                padding: 0;
                line-height: normal;
                border-top: 1px solid
                  #dcdcdc;
                padding-top: 20px;
              &quot;
            >
              <p
                style=&quot;
                  margin: 0;
                  color: #ffffff;
                  font-size: 12px;
                  line-height: normal;
                &quot;
              >
                © 2015-{{&quot;now&quot; | date:
                &quot;yyyy&quot;}} – &quot;Мир
                шитья&quot;<br />Вы получили
                это письмо, так как Вы
                подписаны на рассылки от
                интернет-магазина
                <a
                  href=&quot;{{SiteUrl}}&quot;
                  target=&quot;_blank&quot;
                  style=&quot;
                    color: #ffffff;
                    text-decoration: none;
                  &quot;
                  >sew-world.ru</a
                >.<br />Чтобы отписаться
                от рассылки, нажмите
                <a
                  href=&quot;{{Message.CancelThisSubscriptionUrl}}&quot;
                  target=&quot;_blank&quot;
                  style=&quot;
                    color: #00519a;
                    text-decoration: underline;
                  &quot;
                  >здесь</a
                >.
              </p>
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
</td>
</tr>
</table>
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
