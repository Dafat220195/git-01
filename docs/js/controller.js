(function ctrl(modelCtrl, UIctrl) {
  modelCtrlObj = modelCtrl();
  //--------- Get object with elements --------//
  DOMstrings = UIctrl().DOMstrings;
  //--------- variables ---------//
  let 
  //-- variables-PreheaderTitle --//
  readyPreheaderTitleVariableCode,
  //--// variables-PreheaderTitle --//

  //-- variables-Banner1 --//
  readyBanner1VariableCode,
  readyBanner1HtmlCode,
  readyBanner1HtmlVisual,
  //--// variables-Banner1 --//

  //-- variables-Text --//
  readyTextVariableCode,
  readyTextHtmlCode,
  readyTextHtmlVisual,
  //--// variables-Text --//
  
  //-------- RecoX2 --------//
  readyRecoX2VariableCode,
  readyRecoX2HtmlCode,
  readyRecoX2HtmlVisual,
  
  //--------// RecoX2 --------//

  //-------- RecoX3 --------//
  readyRecoX3VariableCode,
  readyRecoX3HtmlCode,
  readyRecoX3HtmlVisual,
  //--------// RecoX3 --------//
  
  //-------- Teaser --------//
  readyTeaserVariableCode,
  readyTeaserHtmlCode,
  readyTeaserHtmlVisual,
  //--------// Teaser --------//
  
  //-------- BannerX2 --------//
  readyBannerX2VariableCode,
  readyBannerX2HtmlCode,
  readyBannerX2HtmlVisual;
  //--------// BannerX2 --------//

  //-- variables-html --//
    
  //--// variables-html --//


  //---------// variables ---------//

  //-- Event - generetaion preheaderTitle --//
  DOMstrings.preheaderTitleInput.addEventListener("change", getPreheaderTitle);
  function getPreheaderTitle() {
    readyPreheaderTitleVariableCode = `{% comment %} ------------- Блок прехедера ---------------- {% endcomment %}
    <br>{% assign PreheaderTitle = "${DOMstrings.preheaderTitleInput.value}" %}{% comment %} Текст прехедера {% endcomment %}
    <br>{% comment %} ------------- Конец блока прехедера ---------------- {% endcomment %}<br><br>`;
    return readyPreheaderTitleVariableCode;
  }
  //-- Event - generetaion preheaderTitle --//

  //-- Function - generetaion banner1 --//
  function getBanner1() {
    if(DOMstrings.checkboxBanner.checked == true) {
    readyBanner1VariableCode = `{% comment %} ------------- Блок первого баннера ------------- {% endcomment %}
    </br>{% assign showBanner1 = ${DOMstrings.checkboxBanner.checked} %}{% comment %} Показать баннер? true - показать, false - не показывать {% endcomment %}
    </br>{% assign Banner1ImgURL ="${DOMstrings.bannerImgUrlInput.value}" %}{% comment %} Ссылка на картинку баннера {% endcomment %}
    </br>{% assign Banner1Link = "${DOMstrings.bannerLinkInput.value}" %}{% comment %} Ссылка c баннера {% endcomment %}
    </br>{% assign Banner1Alt = "${DOMstrings.bannerAltInput.value}" %}{% comment %} Текст вместо баннера, который увидит подписчик, если у него не отображаются картинки {% endcomment %}
    {% comment %} ------------- Конец блока первого баннера ------------- {% endcomment %}<br>`;

    readyBanner1HtmlCode = `<pre>
&lt;!--banner--&gt; 
{% if showBanner1 == true %}
    &lt;table class="banner_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
        &lt;tr&gt;
            &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
            &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
                &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
                &lt;tr&gt;
                    &lt;td class="contents" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;" &gt;
                        &lt;a href="{{Banner1Link}}" target="_blank" style="color:#424242;" &gt;&lt;img src="{{Banner1ImgUrl}}" alt="{{Banner1Alt}}" border="0"  class="img" style="display:block;border-width:0;max-width:600px;" width="100%" /&gt;&lt;/a&gt;
                    &lt;/td&gt;
                &lt;/tr&gt;
            &lt;/table&gt;
        &lt;/div&gt;
    &lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
{% endif %}
&lt;!--/banner--&gt;
</pre>`;

    readyBanner1HtmlVisual = `<!--banner-->
    <table class="banner_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
      <tr>
        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="contents" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;" >
                  <a href="${DOMstrings.bannerLinkInput.value}" target="_blank" style="color:#424242;" ><img src="${DOMstrings.bannerImgUrlInput.value}" alt="${DOMstrings.bannerAltInput.value}" border="0"  class="img" style="display:block;border-width:0;max-width:600px;" width="100%" /></a>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <!--/banner-->`;}
    else {
      readyBanner1VariableCode = ``;
      readyBanner1HtmlCode = ``;
      readyBanner1HtmlVisual = ``;
    }
    return (
      readyBanner1VariableCode, readyBanner1HtmlCode, readyBanner1HtmlVisual
    );
  }
  //--// Function - generetaion banner1 --//
/* &lt; &gt; */
  //-- Function - generetaion Text --//
  function getText() {
    if(DOMstrings.checkboxText.checked == true) {
    readyTextVariableCode =`{% comment %} ------------- Блок с текстом ------------- {% endcomment %}
    {% assign showText = ${DOMstrings.checkboxText.checked} %}{% comment %} Показать текст? true - показать, false - не показывать {% endcomment %}
    {% assign textTitle = "${DOMstrings.textTitleInput.value}" %}{% comment %} Заголовок текстового блока {% endcomment %}
    {% capture textText %}
    ${DOMstrings.textTextInput.value}
    {% endcapture %}{% comment %} Сам текст {% endcomment %}
    {% assign showTextButton = ${DOMstrings.checkboxTextButton.checked} %}{% comment %} Показать кнопку после текста? true - показать, false - не показывать {% endcomment %}
    {% assign textButtonLink = "${DOMstrings.textButtonLinkInput.value}" %}     {% comment %} Ссылка с кнопки {% endcomment %}
    {% assign textButtonTitle = "${DOMstrings.textButtonTitleInput.value}" %} {% comment %} Текст кнопки {% endcomment %}
    {% comment %} ------------- Конец блока с текстом ------------- {% endcomment %}<br><br>`;

    readyTextHtmlCode = `<pre>
    &lt;!--maintext--&gt;
    {% if showText == true %}
    &lt;table class="maintext_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td class="contents" align="left" style="padding-top:0px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" &gt;
                  &lt;p class="h1" style="text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;color:#3f3e29;font-size:23px;font-weight:bold;line-height:normal;text-transform:uppercase;" &gt;{{textTitle}}&lt;/p&gt;
                  &lt;div style="font-size:20px;line-height:20px;height:20px;" &gt;&nbsp;&lt;/div&gt;
                  &lt;p style="font-size:14px;line-height:22px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;text-align:left;" &gt; {{textText}}&lt;/p&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
              
			{% if showTextButton == true %}
              &lt;tr&gt;
                &lt;td class="contents" align="center" style="padding-top:0;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" &gt;
                  &lt;div&gt;
                    &lt;!--[if mso]&gt;
                    &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{textButtonLink}}" style="height:54px;v-text-anchor:middle;width:160px;" strokecolor="#00adef" fillcolor="#ffffff"&gt;
                    &lt;w:anchorlock/&gt;
                    &lt;center style="color:#d73478;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;"&gt;{{textButtonTitle}}&lt;/center&gt;
                    &lt;/v:rect&gt;
                    &lt;![endif]--&gt;
                    &lt;a href="{{textButtonLink}}" target="_blank" style="background-color:#ffffff;border:2px solid #00adef;color:#00adef;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:320px;-webkit-text-size-adjust:none;mso-hide:all;letter-spacing:1px;text-transform:uppercase;"&gt;{{textButtonTitle}}&lt;/a&gt;
                  &lt;/div&gt;
                  &lt;div style="font-size:10px;line-height:10px;height:10px;" &gt;&nbsp;&lt;/div&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
              {% endif %}
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    {% endif %}
    &lt;!--/maintext--&gt;
    </pre>`;
      //-- с проверкой нужна ли кнопка
    if (DOMstrings.checkboxTextButton.checked == true) {readyTextHtmlVisual = `<!--maintext-->
    <table class="maintext_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
      <tr>
        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="contents" align="left" style="padding-top:0px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" >
                  <p class="h1" style="text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;color:#3f3e29;font-size:23px;font-weight:bold;line-height:normal;text-transform:uppercase;" >${DOMstrings.textTitleInput.value}</p>
                  <div style="font-size:20px;line-height:20px;height:20px;" >&nbsp;</div>
                  <p style="font-size:14px;line-height:22px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;text-align:left;" >${DOMstrings.textTextInput.value}</p>
                </td>
              </tr>
			{% if showTextButton == true %}
              <tr>
                <td class="contents" align="center" style="padding-top:0;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" >
                  <div>
                    <!--[if mso]>
                    <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${DOMstrings.textButtonLinkInput.value}" style="height:54px;v-text-anchor:middle;width:160px;" strokecolor="#00adef" fillcolor="#ffffff">
                    <w:anchorlock/>
                    <center style="color:#d73478;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">${DOMstrings.textButtonTitleInput.value}</center>
                    </v:rect>
                    <![endif]-->
                    <a href="${DOMstrings.textButtonLinkInput.value}" target="_blank" style="background-color:#ffffff;border:2px solid #00adef;color:#00adef;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:320px;-webkit-text-size-adjust:none;mso-hide:all;letter-spacing:1px;text-transform:uppercase;">${DOMstrings.textButtonTitleInput.value}</a>
                  </div>
                  <div style="font-size:10px;line-height:10px;height:10px;" >&nbsp;</div>
                </td>
              </tr>
              {% endif %}
            </table>
          </div>
        </td>
      </tr>
    </table>
    <!--/maintext-->`;} 
    else {readyTextHtmlVisual = `<!--maintext-->
    <table class="maintext_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
      <tr>
        <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="contents" align="left" style="padding-top:0px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" >
                  <p class="h1" style="text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;color:#3f3e29;font-size:23px;font-weight:bold;line-height:normal;text-transform:uppercase;" >${DOMstrings.textTitleInput.value}</p>
                  <div style="font-size:20px;line-height:20px;height:20px;" >&nbsp;</div>
                  <p style="font-size:14px;line-height:22px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;text-align:left;" >${DOMstrings.textTextInput.value}</p>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
    </table>
    <!--/maintext-->`;
    }
    
  } 
    else {
      readyTextVariableCode = ``;
      readyTextHtmlCode = ``;
      readyTextHtmlVisual = ``;
    }
    return (
      readyTextVariableCode, readyTextHtmlCode, readyTextHtmlVisual
    );
  }
  //--// Function - generetaion Text --//

  //-- Function - generetaion RecoX2 --//
  function getRecoX2() {
    if(DOMstrings.checkboxRecoX2.checked == true) {
    readyRecoX2VariableCode =`{% comment %} ------------- Блок товарных рекомендаций (Два товара в ряд) ------------- {% endcomment %}
    {% assign showRecoX2 = ${DOMstrings.checkboxRecoX2.checked} %}{% comment %} Показать товарую выдачу? true - показать, false - не показывать {% endcomment %}
    {% comment %} Что делать, если в выдаче не хватает товаров (меньше двух) hideReco — скрывать блок с рекомендациями, cancelCampaign — отменить отправку письма подписчику без рекомендаций {% endcomment %}
    {% assign minRecoX2 = 'hideReco' %}
    {% assign recoTitleX2 = "${DOMstrings.recoTitleX2Input.value}" %}{% comment %} Заголовок блока с рекомендациями {% endcomment %}
    {% assign recoIdsX2 = "${DOMstrings.recoIdsX2Input.value}" %}{% comment %} Если в товарной выдаче нужен не алгоритм, а определенные товары, то пишем ID товаров через запятую. ID товаров должны совпадать с теми, которые передаются в Retail Rocket {% endcomment %}
    {% assign recoAlgoritmX2 = ${DOMstrings.recoAlgoritmX2Input.value} %}{% comment %} Алгоритм блока с рекомендациями, список доступных алгоритмов https://my.retailrocket.ru/60e709aa97a52829b06f35d4/MassMailingDocumentation/Recommendations {% endcomment %}
    {% assign recoLimitX2 = ${DOMstrings.recoLimitX2Input.value} %}{% comment %} Максимальное количество товаров в блоке рекомендаций {% endcomment %}
    {% assign recoX2Button = ${DOMstrings.checkboxRecoX2Button.checked} %}{% comment %} Показать кнопку после рекомендаций? true - показать, false - не показывать {% endcomment %}
    {% assign recoX2ButtonLink = "${DOMstrings.recoX2ButtonLinkInput.value}" %}     {% comment %} Ссылка с кнопки {% endcomment %}
    {% assign recoX2ButtonText = "${DOMstrings.recoX2ButtonTextInput.value}" %} {% comment %} Текст кнопки {% endcomment %}
    {% comment %} ------------- Конец блока товарных рекомендаций (Два товара в ряд) ------------- {% endcomment %}<br><br>`;
    
    readyRecoX2HtmlCode = `<pre>
    &lt;!--recoms_x2--&gt;
    {% if showRecoX2 == true %}

    {% assign recoIdsX2size = recoIdsX2 | size %}
    {% if recoIdsX2size &gt; 0 %}
    {% assign recoAlgoritmX2 = Products.recoIdsX2 %}
    {% endif %}

    {% assign cancel = false %}
    {% if 2 &gt; recoAlgoritmX2.size %}
    {% assign recoAlgoritmX2 = Popular %}
    {% assign thesizeX2 = recoAlgoritmX2 | size %}
    {% else %}
    {% assign thesizeX2 = recoAlgoritmX2 | size %}
    {% endif %}
    {% if 2 &gt; thesizeX2 and minRecoX2 == 'cancelCampaign' %}
    {% assign cancel = true %}
    {% endif %}
    {% if cancel == true %}
    {{ Message | cancel: 'Недостаточно товаров в блоке "два товара в ряд" ' }}
    {% endif %}
    
    {% if thesizeX2 &gt;= 2 %}
    &lt;table class="recoms_x2_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column block_header" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td align="center" class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" &gt;
                  &lt;p class="h2" style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-style:normal;font-variant:normal;font-weight:bold;font-size:23px;font-family:Arial, sans-serif;line-height:1.5;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px;" &gt;{{recoTitleX2}}&lt;/p&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td class="two-column columns_wrapper" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
          &lt;tr&gt;
 {% assign inrow = 2 %}
              {% assign i = 0 %}
              {% assign l = recoLimitX2 %}&lt;!--Limit--&gt;
              {% assign filter = true %}&lt;!--filter--&gt;
              {% if filter == true %}
              {% assign prel = 0 %}                    
          
         
  {% for item in recoAlgoritmX2 %}
            {% assign prel = prel | plus: 1  %}
                {% endfor %}
                {% assign modl = prel | modulo: inrow %}
                {% assign prel = prel | minus: modl %}
                {% if l &gt; prel %}{% assign l = prel %}{% endif %}
              {% endif %}
             
  {% for item in recoAlgoritmX2 %}
              {% if i == l %}{% break %}{% endif %}
              {% assign i = i | plus: 1 %}
              {% assign mod = i | modulo: inrow %}
          &lt;td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;" &gt;
                  &lt;table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" &gt;
                    &lt;tr&gt;
                      &lt;td align="center" class="item-img" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;a href="{{item.Url}}" target="_blank" style="color:#424242;" &gt;&lt;img src="{{item.PictureUrl}}?width=450&height=450&scale=both" alt="" border="0"  class="img" width="280" style="display:block;border-width:0;" /&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                      &lt;td align="center" height="80" valign="middle" class="item-title" style="padding-top:0;padding-bottom:0;padding-right:5px;padding-left:5px;" &gt;
                        &lt;a href="{{item.Url}}" target="_blank" style="color:#3f3e29;font-family:Arial, sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none;" &gt;{{item.Name | truncate: 60}}&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                      &lt;td align="center" height="40" valign="top" class="item-price" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;color:#3f3e29;font-family:Arial, sans-serif;font-size:15px;font-weight:700;line-height:26px;text-decoration:none;" &gt;
                        {% if item.OldPrice &gt; item.Price %}&lt;s style="color:#808080;" &gt;{{item.OldPrice | money}}&lt;/s&gt;{% endif %} &lt;span style="color:#002c4d;" &gt;&nbsp;{{item.Price | money}} р.&lt;/span&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                      &lt;td align="center" valign="top" class="item-action" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;div&gt;
                          &lt;!--[if mso]&gt;
                          &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{item.Url}}" style="height:54px;v-text-anchor:middle;width:280px;" strokecolor="#00adef" fillcolor="#00adef"&gt;
                          &lt;w:anchorlock/&gt;
                          &lt;center style="color:#ffffff;font-family:Arial,sans-serif;text-transform:uppercase;font-size:12px;font-weight:bold;letter-spacing:1px;"&gt;добавить в корзину&lt;/center&gt;
                          &lt;/v:rect&gt;
                          &lt;![endif]--&gt;
                          &lt;a href="{{item.Url}}" target="_blank" style="background-color:#00adef;border:0px solid #00adef;color:#ffffff;display:inline-block;font-family:Arial,sans-serif;text-transform:uppercase;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:280px;-webkit-text-size-adjust:none;mso-hide:all;letter-spacing:1px;"&gt;добавить в корзину&lt;/a&gt;
                        &lt;/div&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          {% if mod == 0 and forloop.last != true %}
          &lt;/tr&gt;&lt;tr&gt;
          {% endif %}
          {% endfor %}
          &lt;/tr&gt;
          &lt;/table&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      {% if recoX2Button == true %}
      &lt;tr&gt;
        &lt;td class="col-x1 goods_x2_header" style="padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;padding-top:20px;" &gt;
          &lt;div&gt;
            &lt;!--[if mso]&gt;
            &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{recoX2ButtonLink}}" style="height:54px;v-text-anchor:middle;width:184px;" strokecolor="#002c4d" fillcolor="#ffffff"&gt;
            &lt;w:anchorlock/&gt;
            &lt;center style="color:#002c4d;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;"&gt;{{recoX2ButtonText}}&lt;/center&gt;
            &lt;/v:rect&gt;
            &lt;![endif]--&gt;
            &lt;a href="{{recoX2ButtonLink}}" target="_blank" style="background-color:#ffffff;border:2px solid #002c4d;color:#002c4d;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:184px;-webkit-text-size-adjust:none;mso-hide:all;text-transform:uppercase;letter-spacing:1px;"&gt;{{recoX2ButtonText}}&lt;/a&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      {% endif %}
    &lt;/table&gt;
    {% endif %}
    {% endif %}
    &lt;!--/recoms_x2--&gt;
    </pre>`;
    readyRecoX2HtmlVisual = ``;
  } 
    else {
      readyRecoX2VariableCode = ``;
      readyRecoX2HtmlCode = ``;
      readyRecoX2HtmlVisual = ``;
    }

    

    

    return (
      readyRecoX2VariableCode, readyRecoX2HtmlCode, readyRecoX2HtmlVisual
    );
  }
  //--// Function - generetaion RecoX2 --//

  //-- Function - generetaion RecoX3 --//
  function getRecoX3() {
    if(DOMstrings.checkboxRecoX3.checked == true) {
    readyRecoX3VariableCode =`{% comment %} ------------- Блок товарных рекомендаций (Три товара в ряд) ------------- {% endcomment %}
    {% assign showRecoX3 = ${DOMstrings.checkboxRecoX3.checked} %}{% comment %} Показать товарую выдачу? true - показать, false - не показывать {% endcomment %}
    {% comment %} Что делать, если в выдаче не хватает товаров (меньше двух) hideReco — скрывать блок с рекомендациями, cancelCampaign — отменить отправку письма подписчику без рекомендаций {% endcomment %}
    {% assign minRecoX3 = 'hideReco' %}
    {% assign recoTitleX3 = "${DOMstrings.recoTitleX3Input.value}" %}{% comment %} Заголовок блока с рекомендациями {% endcomment %}
    {% assign recoIdsX3 = "${DOMstrings.recoIdsX3Input.value}" %}{% comment %} Если в товарной выдаче нужен не алгоритм, а определенные товары, то пишем ID товаров через запятую. ID товаров должны совпадать с теми, которые передаются в Retail Rocket {% endcomment %}
    {% assign recoAlgoritmX3 = ${DOMstrings.recoAlgoritmX3Input.value} %}{% comment %} Алгоритм блока с рекомендациями, список доступных алгоритмов https://my.retailrocket.ru/60e709aa97a52829b06f35d4/MassMailingDocumentation/Recommendations {% endcomment %}
    {% assign recoLimitX3 = ${DOMstrings.recoLimitX3Input.value} %}{% comment %} Максимальное количество товаров в блоке рекомендаций {% endcomment %}
    {% assign recoX3Button = ${DOMstrings.checkboxRecoX3Button.checked} %}{% comment %} Показать кнопку после рекомендаций? true - показать, false - не показывать {% endcomment %}
    {% assign recoX3ButtonLink = "${DOMstrings.recoX3ButtonLinkInput.value}" %}     {% comment %} Ссылка с кнопки {% endcomment %}
    {% assign recoX3ButtonText = "${DOMstrings.recoX3ButtonTextInput.value}" %} {% comment %} Текст кнопки {% endcomment %}
    {% comment %} ------------- Конец блока товарных рекомендаций (Два товара в ряд) ------------- {% endcomment %}<br><br>`;
    
    readyRecoX3HtmlCode = `<pre>
    &lt;!--recoms_x3--&gt;
    {% if showRecoX3 == true %}

    {% assign recoIdsX3size = recoIdsX3 | size %}
    {% if recoIdsX3size &gt; 0 %}
    {% assign recoAlgoritmX3 = Products.recoIdsX3 %}
    {% endif %}

    {% assign cancel = false %}
    {% if 3 &gt; recoAlgoritmX3.size %}
    {% assign recoAlgoritmX3 = Popular %}
    {% assign thesizeX3 = recoAlgoritmX3 | size %}
    {% else %}
    {% assign thesizeX3 = recoAlgoritmX3 | size %}
    {% endif %}
    {% if 3 &gt; thesizeX3 and minRecoX3 == 'cancelCampaign' %}
    {% assign cancel = true %}
    {% endif %}
    {% if cancel == true %}
    {{ Message | cancel: 'Недостаточно товаров в блоке "три товара в ряд" ' }}
    {% endif %}
    
    {% if thesizeX3 &gt;= 3 %}
    &lt;table class="recoms_x3_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column block_header" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td align="center" class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" &gt;
                  &lt;p class="h2" style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-style:normal;font-variant:normal;font-weight:bold;font-size:23px;font-family:Arial, sans-serif;line-height:1.5;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px;" &gt;{{recoTitleX3}}&lt;/p&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td class="three-column columns_wrapper" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
          &lt;tr&gt; 
                 
 {% assign inrow = 3 %}
              {% assign i = 0 %}
              {% assign l = recoLimitX3 %}&lt;!--Limit--&gt;
              {% assign filter = true %}&lt;!--filter--&gt;
              {% if filter == true %}
              {% assign prel = 0 %}                    
          
         
  {% for item in recoAlgoritmX3 %}
            {% assign prel = prel | plus: 1  %}
                {% endfor %}
                {% assign modl = prel | modulo: inrow %}
                {% assign prel = prel | minus: modl %}
                {% if l &gt; prel %}{% assign l = prel %}{% endif %}
              {% endif %}
             
  {% for item in recoAlgoritmX3 %}
              {% if i == l %}{% break %}{% endif %}
              {% assign i = i | plus: 1 %}
              {% assign mod = i | modulo: inrow %}
          &lt;td width="33%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;" &gt;
                  &lt;table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" &gt;
                    &lt;tr&gt;
                      &lt;td align="center" class="item-img" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;a href="{{item.Url}}" target="_blank" style="color:#424242;" &gt;&lt;img src="{{item.PictureUrl}}?width=450&height=450&scale=both" alt="" border="0"  class="img" width="180" style="display:block;border-width:0;" /&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                      &lt;td align="center" valign="middle" class="item-info" height="80" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;div class="item-title" style="padding-top:0;padding-bottom:0;padding-right:5px;padding-left:5px;" &gt;&lt;a href="{{item.Url}}" target="_blank" style="color:#3f3e29;font-family:Arial, sans-serif;font-size:14px;font-weight:700;line-height:18px;text-decoration:none;" &gt;{{item.Name | truncate: 35}}&lt;/a&gt;&lt;/div&gt;
                        &lt;div style="font-size:5px;line-height:5px;height:5px;"&gt;&nbsp;&lt;/div&gt;
                        &lt;div class="item-price" style="color:#3f3e29;font-family:Arial, sans-serif;font-size:14px;font-weight:700;line-height:16px;text-decoration:none;" &gt;
                        {% if item.OldPrice &gt; item.Price %}&lt;s style="color:#808080;" &gt;{{item.OldPrice | money}}&lt;/s&gt;{% endif %} &lt;span style="color:#002c4d;" &gt;&nbsp;{{item.Price | money}} р.&lt;/span&gt;
                        &lt;/div&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                      &lt;td align="center" valign="top" class="item-action" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;div&gt;
                          &lt;!--[if mso]&gt;
                          &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{item.Url}}" style="height:54px;v-text-anchor:middle;width:180px;" strokecolor="#00adef" fillcolor="#00adef"&gt;
                          &lt;w:anchorlock/&gt;
                          &lt;center style="color:#ffffff;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;"&gt;Купить&lt;/center&gt;
                          &lt;/v:rect&gt;
                          &lt;![endif]--&gt;
                            &lt;a href="{{item.Url}}" target="_blank" style="background-color:#00adef;border:0px solid #00adef;color:#ffffff;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:180px;-webkit-text-size-adjust:none;mso-hide:all;text-transform:uppercase;letter-spacing:1px;"&gt;Купить&lt;/a&gt;
                        &lt;/div&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;
            {% if mod == 0 and forloop.last != true %}
            &lt;/tr&gt;&lt;tr&gt;
            {% endif %}
            {% endfor %}
          &lt;/tr&gt;
          &lt;/table&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      {% if recoX3Button == true %}
      &lt;tr&gt;
        &lt;td class="col-x1 goods_x3_header" style="padding-bottom:15px;padding-right:0;padding-left:0;text-align:center;font-size:0;padding-top:10px;" &gt;
          &lt;div&gt;
            &lt;!--[if mso]&gt;
            &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{recoX3ButtonLink}}" style="height:54px;v-text-anchor:middle;width:184px;" strokecolor="#002c4d" fillcolor="#ffffff"&gt;
            &lt;w:anchorlock/&gt;
            &lt;center style="color:#002c4d;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;"&gt;{{recoX3ButtonText}}&lt;/center&gt;
            &lt;/v:rect&gt;
            &lt;![endif]--&gt;
            &lt;a href="{{recoX3ButtonLink}}" target="_blank" style="background-color:#ffffff;border:2px solid #002c4d;color:#002c4d;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:184px;-webkit-text-size-adjust:none;mso-hide:all;text-transform:uppercase;letter-spacing:1px;"&gt;{{recoX3ButtonText}}&lt;/a&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      {% endif %}
    &lt;/table&gt;
    {% endif %}
    {% endif %}
    &lt;!--/recoms_x3--&gt;
    </pre>`;
    readyRecoX3HtmlVisual = ``;
  } 
    else {
      readyRecoX3VariableCode = ``;
      readyRecoX3HtmlCode = ``;
      readyRecoX3HtmlVisual = ``;
    }

    

    

    return (
      readyRecoX3VariableCode, readyRecoX3HtmlCode, readyRecoX3HtmlVisual
    );
  }
  //--// Function - generetaion RecoX3 --//

  //-- Function - generetaion Teaser --//
  function getTeaser() {
    if(DOMstrings.checkboxTeaser.checked == true) {
    readyTeaserVariableCode =`
    {% comment %} ------------- Блок с тизером ------------- {% endcomment %}
    {% assign showTeaser = ${DOMstrings.checkboxTeaser.checked} %}{% comment %} Показать блок с тизером? true - показать, false - не показывать {% endcomment %}
    {% capture teaserTitle %}${DOMstrings.teaserTitleInput.value}{% endcapture %}{% comment %} Заголовок блока {% endcomment %}
    {% assign teaserImgURL = "${DOMstrings.teaserImgURLInput.value}" %}{% comment %} Ссылка на баннер {% endcomment %}
    {% assign teaserImgLink = "${DOMstrings.teaserImgLinkInput.value}" %}{% comment %}} Ссылка c баннера {% endcomment %}
    {% assign teaserImgAlt = "${DOMstrings.teaserImgAltInput.value}" %}{% comment %}Текст вместо баннера, который увидит подписчик, если у него не отображаются картинки {% endcomment %}
    {% capture teaserText %}${DOMstrings.teaserTextInput.value}{% endcapture %}{% comment %} Текст тизера {% endcomment %}
    {% assign teaserButtonLink = "${DOMstrings.teaserButtonLinkInput.value}" %}{% comment %} Ссылка с кнопки {% endcomment %}
    {% assign teaserButtonTitle = "${DOMstrings.teaserButtonTitleInput.value}" %}{% comment %} Текст кнопки {% endcomment %}
    {% comment %} ------------- Конец блока с тизером ------------- {% endcomment %}<br><br>`;
    
    readyTeaserHtmlCode = `<pre>
    {% if showTeaser == true %}
    &lt;!--teaser_article_cta--&gt;
    &lt;table class="teaser_article_cta_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
      &lt;tr&gt;
        &lt;td class="one-column block_header" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td align="center" class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" &gt;
                  &lt;p class="h2" style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-style:normal;font-variant:normal;font-weight:bold;font-size:23px;font-family:Arial, sans-serif;line-height:1.5;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px;" &gt;{{teaserTitle}}&lt;/p&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/div&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
      &lt;tr&gt;
        &lt;td class="two-column columns_wrapper" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
          &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
          &lt;tr&gt;
          &lt;td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:15px;padding-left:0px;" &gt;
                  &lt;table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" &gt;
                    &lt;tr&gt;
                      &lt;td align="center" width="100%" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;a href="{{teaserImgLink}}" target="_blank" style="color:#424242;" &gt;&lt;img src="{{teaserImgURL}}" alt="{{teaserImgAlt}}" border="0" class="img" style="display:block;border-width:0;width:285px;height:450px;" /&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;&lt;td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
            &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
              &lt;tr&gt;
                &lt;td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:5px;padding-left:20px;" &gt;
                  &lt;table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" &gt;
                    &lt;tr&gt;
                      &lt;td align="left" width="100%" class="article-text-p" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" &gt;
                        &lt;p style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#3f3e29;" &gt;{{teaserText}}&lt;/p&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                    &lt;tr&gt;
                      &lt;td align="center" width="100%" class="article-text-action" style="padding-bottom:0;padding-right:0;padding-left:0;padding-top:20px;" &gt;
                        &lt;div&gt;
                          &lt;!--[if mso]&gt;
                          &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{teaserButtonLink}}" style="height:52px;v-text-anchor:middle;width:180px;" strokecolor="#00adef" fillcolor="#ffffff"&gt;
                          &lt;w:anchorlock/&gt;
                          &lt;center style="color:#00adef;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;"&gt;{{teaserButtonTitle}}&lt;/center&gt;
                          &lt;/v:rect&gt;
                          &lt;![endif]--&gt;
                          &lt;a href="{{teaserButtonLink}}" target="_blank" style="background-color:#ffffff;border:2px solid #00adef;color:#00adef;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:52px;text-align:center;text-decoration:none;width:180px;-webkit-text-size-adjust:none;mso-hide:all;text-transform:uppercase;letter-spacing:1px;"&gt;{{teaserButtonTitle}}&lt;/a&gt;
                        &lt;/div&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;/tr&gt;
          &lt;/table&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;!--/teaser_article_cta--&gt;
    {% endif %}
    </pre>`;
    readyTeaserHtmlVisual = `<!--teaser_article_cta-->
    <table class="teaser_article_cta_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
      <tr>
        <td class="one-column block_header" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td align="center" class="inner contents" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;width:100%;" >
                  <p class="h2" style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-style:normal;font-variant:normal;font-weight:bold;font-size:23px;font-family:Arial, sans-serif;line-height:1.5;color:#3f3e29;text-transform:uppercase;letter-spacing:-1px;" >${DOMstrings.teaserTitleInput.value}</p>
                </td>
              </tr>
            </table>
          </div>
        </td>
      </tr>
      <tr>
        <td class="two-column columns_wrapper" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
          <tr>
          <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:15px;padding-left:0px;" >
                  <table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" >
                    <tr>
                      <td align="center" width="100%" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                        <a href="${DOMstrings.teaserImgURLInput.value}" target="_blank" style="color:#424242;" ><img src="${DOMstrings.teaserImgLinkInput.value}" alt="${DOMstrings.teaserImgAltInput.value}" border="0" class="img" style="display:block;border-width:0;width:285px;height:450px;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:5px;padding-left:20px;" >
                  <table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" >
                    <tr>
                      <td align="left" width="100%" class="article-text-p" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                        <p style="margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#3f3e29;" >${DOMstrings.teaserTextInput.value}</p>
                      </td>
                    </tr>
                    <tr>
                      <td align="center" width="100%" class="article-text-action" style="padding-bottom:0;padding-right:0;padding-left:0;padding-top:20px;" >
                        <div>
                          <!--[if mso]>
                          <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${DOMstrings.teaserButtonLinkInput.value}" style="height:52px;v-text-anchor:middle;width:180px;" strokecolor="#00adef" fillcolor="#ffffff">
                          <w:anchorlock/>
                          <center style="color:#00adef;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;">${DOMstrings.teaserButtonTitleInput.value}</center>
                          </v:rect>
                          <![endif]-->
                          <a href="${DOMstrings.teaserButtonLinkInput.value}" target="_blank" style="background-color:#ffffff;border:2px solid #00adef;color:#00adef;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:52px;text-align:center;text-decoration:none;width:180px;-webkit-text-size-adjust:none;mso-hide:all;text-transform:uppercase;letter-spacing:1px;">${DOMstrings.teaserButtonTitleInput.value}</a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--/teaser_article_cta-->
{% endif %}`;
  } 
    else {
      readyTeaserVariableCode = ``;
      readyTeaserHtmlCode = ``;
      readyTeaserHtmlVisual = ``;
    }

    return (
      readyTeaserVariableCode, readyTeaserHtmlCode, readyTeaserHtmlVisual
    );
  }
  //--// Function - generetaion RecoX3 --//

  //-- Function - generetaion BannerX2 --//
  function getBannerX2() {
    if(DOMstrings.checkboxBannerX2.checked == true) {
    readyBannerX2VariableCode =`{% comment %} ------------- Блок двух баннеров в ряд ------------- {% endcomment %}
    {% assign showBannerX2 = ${DOMstrings.checkboxBannerX2.checked} %}{% comment %} Показать баннеры? true - показать, false - не показывать {% endcomment %}
    <br>
    {% assign leftBannerImgUrl = "${DOMstrings.leftBannerImgUrlInput.value}" %}{% comment %} Ссылка на картинку с левого баннера {% endcomment %}
    {% assign leftBannerLink = "${DOMstrings.leftBannerLinkInput.value}" %}{% comment %} Ссылка c левого баннера {% endcomment %}
    {% assign leftBannerImgAlt = "${DOMstrings.leftBannerImgAltInput.value}" %}{% comment %} Текст вместо левого баннера, который увидит подписчик, если у него не отображаются картинки {% endcomment %}
    
    {% assign rightBannerImgUrl = "${DOMstrings.rightBannerImgUrlInput.value}" %}{% comment %} Ссылка на картинку с правого баннера {% endcomment %}
    {% assign rightBannerLink = "${DOMstrings.rightBannerLinkInput.value}" %}{% comment %} Ссылка c правого баннера {% endcomment %}
    {% assign rightBannerImgAlt = "${DOMstrings.rightBannerImgAltInput.value}" %}{% comment %} Текст вместо правого баннера, который увидит подписчик, если у него не отображаются картинки {% endcomment %}
    {% comment %} ------------- Конец блока двух баннеров в ряд ------------- {% endcomment %}<br><br>`;
    
    readyBannerX2HtmlCode = `<pre>
    {% if showBannerX2 == true %}
    &lt;!--banner_x2--&gt;
    &lt;table class=""banner_x2_block outer"" align=""center"" style=""border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;"" &gt;
      &lt;tr&gt;
        &lt;td class=""two-column"" style=""padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;"" &gt;
          &lt;table width=""100%"" style=""border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;"" &gt;
          &lt;tr&gt;
          &lt;td width=""50%"" valign=""top"" style=""padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"" &gt;
            &lt;table width=""100%"" style=""border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;"" &gt;
              &lt;tr&gt;
                &lt;td class=""inner"" style=""padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:0px;"" &gt;
                  &lt;table class=""contents"" style=""border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;"" &gt;
                    &lt;tr&gt;
                      &lt;td align=""center"" width=""100%"" style=""padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"" &gt;
                        &lt;a href=""{{leftBannerLink}}"" target=""_blank"" style=""color:#424242;"" &gt;&lt;img src=""{{leftBannerImgUrl}}"" width=""100%"" alt=""{{leftBannerImgAlt}}"" border=""0"" style=""display:block;border-width:0;"" /&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;&lt;td width=""50%"" valign=""top"" style=""padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"" &gt;
            &lt;table width=""100%"" style=""border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;"" &gt;
              &lt;tr&gt;
                &lt;td class=""inner"" style=""padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:10px;"" &gt;
                  &lt;table class=""contents"" style=""border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;"" &gt;
                    &lt;tr&gt;
                      &lt;td align=""center"" width=""100%"" style=""padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;"" &gt;
                        &lt;a href=""{{rightBannerLink}}"" target=""_blank"" style=""color:#424242;"" &gt;&lt;img src=""{{rightBannerImgUrl}}"" width=""100%"" alt=""{{rightBannerImgAlt}}"" border=""0"" style=""display:block;border-width:0;"" /&gt;&lt;/a&gt;
                      &lt;/td&gt;
                    &lt;/tr&gt;
                  &lt;/table&gt;
                &lt;/td&gt;
              &lt;/tr&gt;
            &lt;/table&gt;
          &lt;/td&gt;
          &lt;/tr&gt;
          &lt;/table&gt;
        &lt;/td&gt;
      &lt;/tr&gt;
    &lt;/table&gt;
    &lt;!--/banner_x2--&gt;
      {% endif %}
    </pre>`;
    readyBannerX2HtmlVisual = `<!--banner_x2-->
    <table class="banner_x2_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
      <tr>
        <td class="two-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
          <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
          <tr>
          <td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:0px;" >
                  <table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" >
                    <tr>
                      <td align="center" width="100%" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                        <a href="${DOMstrings.leftBannerLinkInput.value}" target="_blank" style="color:#424242;" ><img src="${DOMstrings.leftBannerImgUrlInput.value}" width="100%" alt="${DOMstrings.leftBannerImgAltInput.value}" border="0" style="display:block;border-width:0;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td><td width="50%" valign="top" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
            <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
              <tr>
                <td class="inner" style="padding-top:10px;padding-bottom:10px;padding-right:0px;padding-left:10px;" >
                  <table class="contents" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;width:100%;" >
                    <tr>
                      <td align="center" width="100%" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;" >
                        <a href="${DOMstrings.rightBannerLinkInput.value}" target="_blank" style="color:#424242;" ><img src="${DOMstrings.rightBannerImgUrlInput.value}" width="100%" alt="${DOMstrings.rightBannerImgAltInput.value}" border="0" style="display:block;border-width:0;" /></a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
          </tr>
          </table>
        </td>
      </tr>
    </table>
    <!--/banner_x2-->`;
  } 
    else {
      readyBannerX2VariableCode = ``;
      readyBannerX2HtmlCode = ``;
      readyBannerX2HtmlVisual = ``;
    }

    return (
      readyBannerX2VariableCode, readyBannerX2HtmlCode, readyBannerX2HtmlVisual
    );
  }
  //--// Function - generetaion BannerX2 --//


  //Event - нажатие на кнопку Сгенерировать
  DOMstrings.buttonGenerate.addEventListener("click", getResult);
  function getResult(e) {
    getPreheaderTitle();
    getBanner1();
    getText();
    getRecoX2();
    getRecoX3();
    getTeaser();
    getBannerX2();
    //-------render-code-are ---//
    DOMstrings.renderCodeEmail.innerHTML = `
    ${readyPreheaderTitleVariableCode}
    ${readyBanner1VariableCode}
    ${readyTextVariableCode}
    ${readyRecoX2VariableCode}
    ${readyRecoX3VariableCode}
    ${readyTeaserVariableCode}
    ${readyBannerX2VariableCode}


    ${DOMstrings.htmlIframeBeforeContentCode}

    ${readyBanner1HtmlCode}
    ${readyTextHtmlCode}
    ${readyRecoX2HtmlCode}
    ${readyRecoX3HtmlCode}
    ${readyTeaserHtmlCode}
    ${readyBannerX2HtmlCode}
    
    ${DOMstrings.htmlIframeAfterContentCode}
    `;
    //-------// render-code-are ---//

    //------- render-visual-are ---//
    DOMstrings.renderCodeEmailFrame.srcdoc = `
    ${DOMstrings.htmlIframeBeforeContent}

    ${readyBanner1HtmlVisual}
    ${readyTextHtmlVisual}
    ${readyRecoX2HtmlVisual}
    ${readyRecoX3HtmlVisual}
    ${readyTeaserHtmlVisual}
    ${readyBannerX2HtmlVisual}

    ${DOMstrings.htmlIframeAfterContent}
    `;

    DOMstrings.renderCodeEmailFrame.contentWindow.location.reload(true);
    //-------// render-visual-are ---//


  }
  
    //Event - нажатие на кнопку Сброс
    DOMstrings.buttonReset.addEventListener("click", reset)
    function reset () {
        window.location.reload ();
    }
    
    //Event - нажатие на кнопку Скопировать
    DOMstrings.buttonCopy.addEventListener("click", copy)
    function copy () {
        /* сохраняем текстовое поле в переменную text */
        console.dir(DOMstrings.renderCodeEmail.innerText);
       //document.execCommand("copy");
       navigator.clipboard.writeText(DOMstrings.renderCodeEmail.innerText);
      //очистим выделение текста, чтобы пользователь "не парился"
      window.getSelection().removeAllRanges();
    }

  return {
    getLink: getLink(),
    getSource: getSource(),
    getMedium: getMedium(),
  };
})(modelCtrl, UIctrl);
