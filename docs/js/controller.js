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
  function createPreheaderTitle(title) {
    let a = `{% comment %} ------------- Блок прехедера ---------------- {% endcomment %}
    <br>{% assign PreheaderTitle = "${title}" %}{% comment %} Текст прехедера {% endcomment %}
    <br>{% comment %} ------------- Конец блока прехедера ---------------- {% endcomment %}<br><br>`;
    return a;
  }
  //-- Event - generetaion preheaderTitle --//

  //-- Function - generetaion banner --//
  function createBannerVariableCode (number, ImgUrl, link, alt) {
    return (`{% comment %} ------------- Блок первого баннера ------------- {% endcomment %}
    </br>{% assign showBanner${number} = true %}{% comment %} Показать баннер? true - показать, false - не показывать {% endcomment %}
    </br>{% assign Banner${number}ImgURL ="${ImgUrl}" %}{% comment %} Ссылка на картинку баннера {% endcomment %}
    </br>{% assign Banner${number}Link = "${link}" %}{% comment %} Ссылка c баннера {% endcomment %}
    </br>{% assign Banner${number}Alt = "${alt}" %}{% comment %} Текст вместо баннера, который увидит подписчик, если у него не отображаются картинки {% endcomment %}
    {% comment %} ------------- Конец блока первого баннера ------------- {% endcomment %}<br>`)
    
}
  function createBannerHtmlCode     (number) {
    let a = `<pre>
    &lt;!--banner--&gt; 
    {% if showBanner${number} == true %}
        &lt;table class="banner_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
            &lt;tr&gt;
                &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
                &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
                    &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
                    &lt;tr&gt;
                        &lt;td class="contents" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;" &gt;
                            &lt;a href="{{Banner${number}Link}}" target="_blank" style="color:#424242;" &gt;&lt;img src="{{Banner${number}ImgUrl}}" alt="{{Banner${number}Alt}}" border="0"  class="img" style="display:block;border-width:0;max-width:600px;" width="100%" /&gt;&lt;/a&gt;
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
    return a;
}
  function createBannerHtmlVisual   (ImgUrl, link, alt) {
  let a = `<!--banner-->
  <table class="banner_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
    <tr>
      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
        <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
          <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
            <tr>
              <td class="contents" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;width:100%;" >
                <a href="${link}" target="_blank" style="color:#424242;" ><img src="${ImgUrl}" alt="${alt}" border="0"  class="img" style="display:block;border-width:0;max-width:600px;" width="100%" /></a>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
  <!--/banner-->`;
  return a;
}
  //--// Function - generetaion banner --//

  //-- Function - generetaion Text --//
  function createTextVariableCode (number, textTitle, textText, checkboxTextButton, textButtonLink, textButtonTitle) {

    let a = `{% comment %} ------------- Блок с текстом ------------- {% endcomment %}
    {% assign showText${number} = true %}{% comment %} Показать текст? true - показать, false - не показывать {% endcomment %}
    {% assign textTitle${number} = "${textTitle}" %}{% comment %} Заголовок текстового блока {% endcomment %}
    {% capture textText${number} %}
    ${textText}
    {% endcapture %}{% comment %} Сам текст {% endcomment %}
    {% assign showTextButton${number} = ${checkboxTextButton} %}{% comment %} Показать кнопку после текста? true - показать, false - не показывать {% endcomment %}
    {% assign textButtonLink${number} = "${textButtonLink}" %}     {% comment %} Ссылка с кнопки {% endcomment %}
    {% assign textButtonTitle${number} = "${textButtonTitle}" %} {% comment %} Текст кнопки {% endcomment %}
    {% comment %} ------------- Конец блока с текстом ------------- {% endcomment %}<br><br>`;
    return a;
}

function createTextHtmlCode (number) {

  let a = `<pre>
  &lt;!--maintext${number}--&gt;
  {% if showText${number} == true %}
  &lt;table class="maintext_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" &gt;
    &lt;tr&gt;
      &lt;td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" &gt;
        &lt;div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" &gt;
          &lt;table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" &gt;
            &lt;tr&gt;
              &lt;td class="contents" align="left" style="padding-top:0px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" &gt;
                &lt;p class="h1" style="text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;color:#3f3e29;font-size:23px;font-weight:bold;line-height:normal;text-transform:uppercase;" &gt;{{textTitle${number}}}&lt;/p&gt;
                &lt;div style="font-size:20px;line-height:20px;height:20px;" &gt;&nbsp;&lt;/div&gt;
                &lt;p style="font-size:14px;line-height:22px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;text-align:left;" &gt; {{textText${number}}}&lt;/p&gt;
              &lt;/td&gt;
            &lt;/tr&gt;
            
    {% if showTextButton${number} == true %}
            &lt;tr&gt;
              &lt;td class="contents" align="center" style="padding-top:0;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" &gt;
                &lt;div&gt;
                  &lt;!--[if mso]&gt;
                  &lt;v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="{{textButtonLink${number}}}" style="height:54px;v-text-anchor:middle;width:160px;" strokecolor="#00adef" fillcolor="#ffffff"&gt;
                  &lt;w:anchorlock/&gt;
                  &lt;center style="color:#d73478;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;"&gt;{{textButtonTitle${number}}}&lt;/center&gt;
                  &lt;/v:rect&gt;
                  &lt;![endif]--&gt;
                  &lt;a href="{{textButtonLink${number}}}" target="_blank" style="background-color:#ffffff;border:2px solid #00adef;color:#00adef;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:320px;-webkit-text-size-adjust:none;mso-hide:all;letter-spacing:1px;text-transform:uppercase;"&gt;{{textButtonTitle${number}}}&lt;/a&gt;
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
  &lt;!--/maintext${number}--&gt;
  </pre>`;
  return a;
}

function createTextHtmlVisual (number, textTitle, textText, checkboxTextButton, textButtonLink, textButtonTitle) {
  let a;
  if (checkboxTextButton == true) {a = `<!--maintext${number}-->
  <table class="maintext_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
    <tr>
      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
        <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
          <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
            <tr>
              <td class="contents" align="left" style="padding-top:0px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" >
                <p class="h1" style="text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;color:#3f3e29;font-size:23px;font-weight:bold;line-height:normal;text-transform:uppercase;" >${textTitle}</p>
                <div style="font-size:20px;line-height:20px;height:20px;" >&nbsp;</div>
                <p style="font-size:14px;line-height:22px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;text-align:left;" >${textText}</p>
              </td>
            </tr>
    {% if showTextButton${number} == true %}
            <tr>
              <td class="contents" align="center" style="padding-top:0;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" >
                <div>
                  <!--[if mso]>
                  <v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${textButtonLink}" style="height:54px;v-text-anchor:middle;width:160px;" strokecolor="#00adef" fillcolor="#ffffff">
                  <w:anchorlock/>
                  <center style="color:#d73478;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;">${textButtonTitle}</center>
                  </v:rect>
                  <![endif]-->
                  <a href="${textButtonLink}" target="_blank" style="background-color:#ffffff;border:2px solid #00adef;color:#00adef;display:inline-block;font-family:Arial,sans-serif;font-size:12px;font-weight:bold;line-height:54px;text-align:center;text-decoration:none;width:320px;-webkit-text-size-adjust:none;mso-hide:all;letter-spacing:1px;text-transform:uppercase;">${textButtonTitle}</a>
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
  <!--/maintext${number}-->`;}
  else {a = `<!--maintext${number}-->
  <table class="maintext_block outer" align="center" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;width:100%;max-width:600px;" >
    <tr>
      <td class="one-column" style="padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;text-align:center;font-size:0;" >
        <div class="column" style="width:100%;max-width:100%;display:inline-block;vertical-align:top;" >
          <table width="100%" style="border-spacing:0;border-collapse:collapse;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;color:#333;" >
            <tr>
              <td class="contents" align="left" style="padding-top:0px;padding-bottom:20px;padding-right:20px;padding-left:20px;width:100%;" >
                <p class="h1" style="text-align:center;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;color:#3f3e29;font-size:23px;font-weight:bold;line-height:normal;text-transform:uppercase;" >${textTitle}</p>
                <div style="font-size:20px;line-height:20px;height:20px;" >&nbsp;</div>
                <p style="font-size:14px;line-height:22px;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;Margin:0;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;font-family:Arial, sans-serif;text-align:left;" >${textText}</p>
              </td>
            </tr>
          </table>
        </div>
      </td>
    </tr>
  </table>
  <!--/maintext${number}-->`;
  }

  return a;
}

  //--// Function - generetaion Text --//

  //-- Function - generetaion RecoX2 --//
  function getRecoX2() {
    readyRecoX2VariableCode =`{% comment %} ------------- Блок товарных рекомендаций (Два товара в ряд) ------------- {% endcomment %}
    {% assign showRecoX2 = true %}{% comment %} Показать товарую выдачу? true - показать, false - не показывать {% endcomment %}
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
    return (
      readyRecoX2VariableCode, readyRecoX2HtmlCode, readyRecoX2HtmlVisual
    );
  }
  //--// Function - generetaion RecoX2 --//

  //-- Function - generetaion RecoX3 --//
  function getRecoX3() {
    readyRecoX3VariableCode =`{% comment %} ------------- Блок товарных рекомендаций (Три товара в ряд) ------------- {% endcomment %}
    {% assign showRecoX3 = true %}{% comment %} Показать товарую выдачу? true - показать, false - не показывать {% endcomment %}
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
    return (
      readyRecoX3VariableCode, readyRecoX3HtmlCode, readyRecoX3HtmlVisual
    );
  }
  //--// Function - generetaion RecoX3 --//

  //-- Function - generetaion Teaser --//
  function getTeaser() {
    readyTeaserVariableCode =`
    {% comment %} ------------- Блок с тизером ------------- {% endcomment %}
    {% assign showTeaser = true %}{% comment %} Показать блок с тизером? true - показать, false - не показывать {% endcomment %}
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
    <!--/teaser_article_cta-->`;
    return (
      readyTeaserVariableCode, readyTeaserHtmlCode, readyTeaserHtmlVisual
    );
  }
  //--// Function - generetaion Teaser --//

  //-- Function - generetaion BannerX2 --//
  function getBannerX2() {
    readyBannerX2VariableCode =`{% comment %} ------------- Блок двух баннеров в ряд ------------- {% endcomment %}
    {% assign showBannerX2 = true %}{% comment %} Показать баннеры? true - показать, false - не показывать {% endcomment %}
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
    return (
      readyBannerX2VariableCode, readyBannerX2HtmlCode, readyBannerX2HtmlVisual
    );
  }
  //--// Function - generetaion BannerX2 --//


  //--- Функция группирующая блоки--//
  /*document.querySelectorAll(".block");
  document.querySelectorAll(".block").children[1].children[0].children[0].children[0].value;*/
  DOMstrings.buttonGenerate.addEventListener("click", getParams);
  function getParams () {
    ///--цикл сборки
    
    let readyObjectOfAllParameters = {};
    let allBlocks = document.querySelectorAll(".block");
    for (let i=0;i < allBlocks.length; i++) {
      let countBlocks = i+1;
        if(allBlocks[i].classList[1] === "Banner") {
          readyObjectOfAllParameters[`blocks_${countBlocks}`] = getParamBanner(allBlocks[i]);
        }
        if(allBlocks[i].className.includes("Text")) {
          readyObjectOfAllParameters[`blocks_${countBlocks}`] = getParamText(allBlocks[i]);
        }
        if(allBlocks[i].className.includes("RecoX2")) {
          readyObjectOfAllParameters[`blocks_${countBlocks}`] = getParamRecoX2(allBlocks[i]);
        }
        if(allBlocks[i].className.includes("RecoX3")) {
          readyObjectOfAllParameters[`blocks_${countBlocks}`] = getParamRecoX3(allBlocks[i]);
        }
        if(allBlocks[i].className.includes("Teaser")) {
          readyObjectOfAllParameters[`blocks_${countBlocks}`] = getParamTeaser(allBlocks[i]);
        }
        if(allBlocks[i].classList[1] === "BannerX2") {
          readyObjectOfAllParameters[`blocks_${countBlocks}`] = getParamBannerX2(allBlocks[i]);
        }
    }
    console.log(readyObjectOfAllParameters)
  }
  
  function getParamBanner (block) {
    let Banner = {};
    
    let titleBlock = block.querySelector(".title").innerText;
    let titleValue = block.querySelector(".Banner1Title input[type=text]").value;
    let ImgUrlValue = block.querySelector(".Banner1ImgURL input[type=text]").value;
    let linkInputValue = block.querySelector(".Banner1Link input[type=text]").value;
    let bannerAltInput = block.querySelector(".Banner1Alt input[type=text]").value;
    
    Banner.titleBlock = titleBlock;
    Banner.titleValue = titleValue;
    Banner.ImgUrlValue = ImgUrlValue;
    Banner.linkInputValue = linkInputValue;
    Banner.bannerAltInput = bannerAltInput;
    
    return Banner
  }
  
  function getParamText (block) {
    let Text = {};
    
    let titleBlock = block.querySelector(".title").innerText;
    let textTitleInput = block.querySelector(".textTitle input[type=text]").value;
    let textTextInput = block.querySelector(".textText input[type=text]").value;
    let checkboxTextButton = block.querySelector(".showTextButton input[type=checkbox]").checked;
    let textButtonLinkInput = block.querySelector(".textButtonLink input[type=text]").value;
    let textButtonTitleInput = block.querySelector(".textButtonTitle input[type=text]").value;
    
    Text.titleBlock = titleBlock;
    Text.textTitleInput = textTitleInput;
    Text.textTextInput = textTextInput;
    Text.checkboxTextButton = checkboxTextButton;
    Text.textButtonLinkInput = textButtonLinkInput;
    Text.textButtonTitleInput = textButtonTitleInput;
    
    return Text
  }

  function getParamRecoX2 (block) {
    let RecoX2 = {};
    
    let titleBlock = block.querySelector(".title").innerText;
    let recoTitleX2Input = block.querySelector(".recoTitleX2 input[type=text]").value;
    let recoIdsX2Input = block.querySelector(".recoIdsX2 input[type=text]").value;
    let recoAlgoritmX2Input = block.querySelector(".recoAlgoritmX2 input[type=text]").value;
    let recoLimitX2Input = block.querySelector(".recoLimitX2 input[type=text]").value;
    let checkboxRecoX2Button = block.querySelector(".recoX2Button input[type=checkbox]").checked;
    let recoX2ButtonLinkInput = block.querySelector(".recoX2ButtonLink input[type=text]").value;
    let recoX2ButtonTextInput = block.querySelector(".recoX2ButtonText input[type=text]").value;
    
    RecoX2.titleBlock = titleBlock;
    RecoX2.recoTitleX2Input = recoTitleX2Input;
    RecoX2.recoIdsX2Input = recoIdsX2Input;
    RecoX2.recoAlgoritmX2Input = recoAlgoritmX2Input;
    RecoX2.recoLimitX2Input = recoLimitX2Input;
    RecoX2.checkboxRecoX2Button = checkboxRecoX2Button;
    RecoX2.recoX2ButtonLinkInput = recoX2ButtonLinkInput;
    RecoX2.recoX2ButtonTextInput = recoX2ButtonTextInput;
    
    return RecoX2
  }

  function getParamRecoX3 (block) {
    let RecoX3 = {};
    
    let titleBlock = block.querySelector(".title").innerText;
    let recoTitleX3Input = block.querySelector(".recoTitleX3 input[type=text]").value;
    let recoIdsX3Input = block.querySelector(".recoIdsX3 input[type=text]").value;
    let recoAlgoritmX3Input = block.querySelector(".recoAlgoritmX3 input[type=text]").value;
    let recoLimitX3Input = block.querySelector(".recoLimitX3 input[type=text]").value;
    let checkboxRecoX3Button = block.querySelector(".recoX3Button input[type=checkbox]").checked;
    let recoX3ButtonLinkInput = block.querySelector(".recoX3ButtonLink input[type=text]").value;
    let recoX3ButtonTextInput = block.querySelector(".recoX3ButtonText input[type=text]").value;
    
    RecoX3.titleBlock = titleBlock;
    RecoX3.recoTitleX3Input = recoTitleX3Input;
    RecoX3.recoIdsX3Input = recoIdsX3Input;
    RecoX3.recoAlgoritmX3Input = recoAlgoritmX3Input;
    RecoX3.recoLimitX3Input = recoLimitX3Input;
    RecoX3.checkboxRecoX3Button = checkboxRecoX3Button;
    RecoX3.recoX3ButtonLinkInput = recoX3ButtonLinkInput;
    RecoX3.recoX3ButtonTextInput = recoX3ButtonTextInput;
    
    return RecoX3
  }
  function getParamTeaser (block) {
    let Teaser = {};
    
    let titleBlock = block.querySelector(".title").innerText;
    let teaserTitleInput = block.querySelector(".teaserTitle input[type=text]").value;
    let teaserImgURLInput = block.querySelector(".teaserImgURL input[type=text]").value;
    let teaserImgLinkInput = block.querySelector(".teaserImgLink input[type=text]").value;
    let teaserImgAltInput = block.querySelector(".teaserImgAlt input[type=text]").value;
    let teaserTextInput = block.querySelector(".teaserText input[type=text]").value;
    let teaserButtonLinkInput = block.querySelector(".teaserButtonLink input[type=text]").value;
    let teaserButtonTitleInput = block.querySelector(".teaserButtonTitle input[type=text]").value;

    Teaser.titleBlock = titleBlock;
    Teaser.teaserTitleInput = teaserTitleInput;
    Teaser.teaserImgURLInput = teaserImgURLInput;
    Teaser.teaserImgLinkInput = teaserImgLinkInput;
    Teaser.teaserImgAltInput = teaserImgAltInput;
    Teaser.teaserTextInput = teaserTextInput;
    Teaser.teaserButtonLinkInput = teaserButtonLinkInput;
    Teaser.teaserButtonTitleInput = teaserButtonTitleInput;
        
    return Teaser
  }

  function getParamBannerX2 (block) {
    let BannerX2 = {};
    
    let titleBlock = block.querySelector(".title").innerText;
    let leftBannerImgUrlInput = block.querySelector(".leftBannerImgUrl input[type=text]").value;
    let leftBannerLinkInput = block.querySelector(".leftBannerLink input[type=text]").value;
    let leftBannerImgAltInput = block.querySelector(".leftBannerImgAlt input[type=text]").value;
    let rightBannerImgUrlInput = block.querySelector(".rightBannerImgUrl input[type=text]").value;
    let rightBannerLinkInput = block.querySelector(".rightBannerLink input[type=text]").value;
    let rightBannerImgAltInput = block.querySelector(".rightBannerImgAlt input[type=text]").value;

    BannerX2.titleBlock = titleBlock;
    BannerX2.leftBannerImgUrlInput = leftBannerImgUrlInput;
    BannerX2.leftBannerLinkInput = leftBannerLinkInput;
    BannerX2.leftBannerImgAltInput = leftBannerImgAltInput;
    BannerX2.rightBannerImgUrlInput = rightBannerImgUrlInput;
    BannerX2.rightBannerLinkInput = rightBannerLinkInput;
    BannerX2.rightBannerImgAltInput = rightBannerImgAltInput;

        
    return BannerX2
  }
  





  //Event - нажатие на кнопку Сгенерировать
  /*DOMstrings.buttonGenerate.addEventListener("click", getResult);*/
  function getResult(e) {
    
    
    readyPreheaderTitleVariableCode = createPreheaderTitle();
    //-------render-code-are ---//
    DOMstrings.renderCodeEmail.innerHTML = `
    ${readyPreheaderTitleVariableCode}

    ${DOMstrings.htmlIframeBeforeContentCode}

    
    ${DOMstrings.htmlIframeAfterContentCode}
    `;

    //-------// render-code-are ---//

    //------- render-visual-are ---//
    DOMstrings.renderCodeEmailFrame.srcdoc = `
    ${DOMstrings.htmlIframeBeforeContent}


    ${DOMstrings.htmlIframeAfterContent}
    `;

    DOMstrings.renderCodeEmailFrame.contentWindow.location.reload(true);
    //-------// render-visual-are ---//
  
  }


  //Функция для прохождения по блокам и генерация массива с блоками

  function createAreasWithBlocks () {
    for (let i=0;i < a.length;i++) {

  }
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
    /* ------- Кнопки блоков -------*/

    /* ------- create Banner -------*/
    DOMstrings.buttonBanner.addEventListener("click", createBanner)
    function createBanner () {
      
       let htmlBlockBanner = `<div class="block Banner">
       <div class="title-wrapper">
         <h2 class="title">Banner</h2>
       </div>
       <ul class="list-param">
         <li class="item">
           <label class="Banner1Title">Заголовок
             <input type="text" value="" />
           </label>
         </li>
         <li class="item">
           <label class="Banner1ImgURL"
             >URL баннера
             <input type="text" value="" />
           </label>
         </li>
         <li class="item">
           <label class="Banner1Link"
             >Ссылка баннера
             <input type="text" value="" />
           </label>
         </li>
         <li class="item">
           <label class="Banner1Alt"
             >Alt текст
             <input type="text" value="" />
           </label>
         </li>
       </ul>
</div>`;
      //--обновляем счетчик
        DOMstrings.sectionConsctructor.insertAdjacentHTML("beforeend", htmlBlockBanner);
      //--обновление переменных
       DOMstrings.banner1TitleInput = document.querySelector(".Banner1Title input[type=text]");
       DOMstrings.bannerImgUrlInput = document.querySelector(".Banner1ImgURL input[type=text]");
       DOMstrings.bannerLinkInput = document.querySelector(".Banner1Link input[type=text]");
       DOMstrings.bannerAltInput = document.querySelector(".Banner1Alt input[type=text]");
}
    /* -------// create Banner -------*/
    
    /* ------- create Text -------*/
     DOMstrings.buttonText.addEventListener("click", createText)
    function createText () {
        let htmlBlockText = `<div class="block Text">
        <div class="title-wrapper">
          <h2 class="title">Блок с текстом</h2>
        </div>
        <ul class="list-param">
          <li class="item">
            <label class="textTitle">Заголовок
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="textText">Текст
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="checkbox showTextButton">вкл кнопку
              <input type="checkbox" value="" />
            </label>
          </li>
          <li class="item">
            <label class="textButtonLink">ссылка кнопки
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="textButtonTitle">текст кнопки
              <input type="text" value="Подробнее" />
            </label>
          </li>
        </ul>
      </div>`;
      DOMstrings.sectionConsctructor.insertAdjacentHTML("beforeend", htmlBlockText);
      //--обновленеи переменных
      DOMstrings.textTitleInput = document.querySelector(".textTitle input[type=text]");
      DOMstrings.textTextInput = document.querySelector(".textText input[type=text]");
      DOMstrings.checkboxTextButton = document.querySelector(".showTextButton input[type=checkbox]");
      DOMstrings.textButtonLinkInput = document.querySelector(".textButtonLink input[type=text]");
      DOMstrings.textButtonTitleInput = document.querySelector(".textButtonTitle input[type=text]");
}
    /* -------// create Text -------*/

    /* ------- create RecoX2 -------*/
    DOMstrings.buttonRecoX2.addEventListener("click", createRecoX2)
    function createRecoX2 () {
        let htmlBlockRecoX2 = `<div class="block RecoX2">
        <div class="title-wrapper">
          <h2 class="title">Подборка Два товара в ряд</h2>
        </div>
        <ul class="list-param">
          <li class="item">
            <label class="recoTitleX2">Заголовок
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoIdsX2">Товары по ID
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoAlgoritmX2">Алгоритм рекомендаций
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoLimitX2">Макс товаров
              <input type="text" value="4" />
            </label>
          </li>
          <li class="item">
            <label class="checkbox recoX2Button">вкл кнопку
              <input type="checkbox" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoX2ButtonLink">ссылка кнопки
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoX2ButtonText">текст кнопки
              <input type="text" value="Показать ещё" />
            </label>
          </li>
        </ul>
      </div>`;
      DOMstrings.sectionConsctructor.insertAdjacentHTML("beforeend", htmlBlockRecoX2);

      //--обновленеи переменных
      DOMstrings.recoTitleX2Input = document.querySelector(".recoTitleX2 input[type=text]");
      DOMstrings.recoIdsX2Input = document.querySelector(".recoIdsX2 input[type=text]");
      DOMstrings.recoAlgoritmX2Input = document.querySelector(".recoAlgoritmX2 input[type=text]");
      DOMstrings.recoLimitX2Input = document.querySelector(".recoLimitX2 input[type=text]");
      DOMstrings.checkboxRecoX2Button = document.querySelector(".recoX2Button input[type=checkbox]");
      DOMstrings.recoX2ButtonLinkInput = document.querySelector(".recoX2ButtonLink input[type=text]");
      DOMstrings.recoX2ButtonTextInput = document.querySelector(".recoX2ButtonText input[type=text]");
}
    /* -------// create RecoX2 -------*/

    /* ------- create RecoX3 -------*/
    DOMstrings.buttonRecoX3.addEventListener("click", createRecoX3)
    function createRecoX3 () {
        let htmlBlockRecoX3 = `<div class="block RecoX3">
        <div class="title-wrapper">
          <h2 class="title">Подборка Три товара в ряд</h2>
        </div>
        <ul class="list-param">
          <li class="item">
            <label class="recoTitleX3">Заголовок
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoIdsX3">Товары по ID
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoAlgoritmX3">Алгоритм рекомендаций
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoLimitX3">Макс товаров
              <input type="text" value="6" />
            </label>
          </li>
          <li class="item">
            <label class="checkbox recoX3Button">вкл кнопку
              <input type="checkbox" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoX3ButtonLink">ссылка кнопки
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="recoX3ButtonText">текст кнопки
              <input type="text" value="Показать ещё" />
            </label>
          </li>
        </ul>
      </div>`;
      DOMstrings.sectionConsctructor.insertAdjacentHTML("beforeend", htmlBlockRecoX3);
      //--обновленеи переменных
      DOMstrings.recoTitleX3Input = document.querySelector(".recoTitleX3 input[type=text]");
      DOMstrings.recoIdsX3Input = document.querySelector(".recoIdsX3 input[type=text]");
      DOMstrings.recoAlgoritmX3Input = document.querySelector(".recoAlgoritmX3 input[type=text]");
      DOMstrings.recoLimitX3Input = document.querySelector(".recoLimitX3 input[type=text]");
      DOMstrings.checkboxRecoX3Button = document.querySelector(".recoX3Button input[type=checkbox]");
      DOMstrings.recoX3ButtonLinkInput = document.querySelector(".recoX3ButtonLink input[type=text]");
      DOMstrings.recoX3ButtonTextInput = document.querySelector(".recoX3ButtonText input[type=text]");


}
    /* -------// create RecoX3 -------*/

    /* ------- create Teaser -------*/
    DOMstrings.buttonTeaser.addEventListener("click", createTeaser)
    function createTeaser () {
        let htmlBlockTeaser = `<div class="block Teaser">
        <div class="title-wrapper">
          <h2 class="title">Тизер</h2>
        </div>
        <ul class="list-param">
          <li class="item">
            <label class="teaserTitle">Заголовок
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="teaserImgURL">URL баннера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="teaserImgLink">Ссылка баннера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="teaserImgAlt">Alt текст
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="teaserText">Текст тизера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="teaserButtonLink">Ссылка кнопки
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="teaserButtonTitle">Текст кнопки
              <input type="text" value="Подробнее" />
            </label>
          </li>
        </ul>
      </div>`;
      DOMstrings.sectionConsctructor.insertAdjacentHTML("beforeend", htmlBlockTeaser);
      //--обновленеи переменных
      DOMstrings.teaserTitleInput = document.querySelector(".teaserTitle input[type=text]");
      DOMstrings.teaserImgURLInput = document.querySelector(".teaserImgURL input[type=text]");
      DOMstrings.teaserImgLinkInput = document.querySelector(".teaserImgLink input[type=text]");
      DOMstrings.teaserImgAltInput = document.querySelector(".teaserImgAlt input[type=text]");
      DOMstrings.teaserTextInput = document.querySelector(".teaserText input[type=text]");
      DOMstrings.teaserButtonLinkInput = document.querySelector(".teaserButtonLink input[type=text]");
      DOMstrings.teaserButtonTitleInput = document.querySelector(".teaserButtonTitle input[type=text]");
}
    /* -------// create Teaser -------*/

    /* ------- create BannerX2 -------*/
    DOMstrings.buttonBannerX2.addEventListener("click", createBannerX2)
    function createBannerX2 () {
      
        let htmlBlockBannerX2 = `<div class="block BannerX2">
        <div class="title-wrapper">
          <h2 class="title">Два баннера в ряд</h2>
        </div>
        <ul class="list-param">
          <li class="item">
            <label class="leftBannerImgUrl"
              >Левый URL баннера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="leftBannerLink"
              >Левый Ссылка баннера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="leftBannerImgAlt"
              >Левый Alt текст
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="rightBannerImgUrl"
              >Правый URL баннера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="rightBannerLink"
              >Правый Ссылка баннера
              <input type="text" value="" />
            </label>
          </li>
          <li class="item">
            <label class="rightBannerImgAlt"
              >Правый Alt текст
              <input type="text" value="" />
            </label>
          </li>
        </ul>
      </div>`;
      DOMstrings.sectionConsctructor.insertAdjacentHTML("beforeend", htmlBlockBannerX2);
      //--обновленеи переменных
      DOMstrings.leftBannerImgUrlInput = document.querySelector(".leftBannerImgUrl input[type=text]");
      DOMstrings.leftBannerLinkInput = document.querySelector(".leftBannerLink input[type=text]");
      DOMstrings.leftBannerImgAltInput = document.querySelector(".leftBannerImgAlt input[type=text]");
      DOMstrings.rightBannerImgUrlInput = document.querySelector(".rightBannerImgUrl input[type=text]");
      DOMstrings.rightBannerLinkInput = document.querySelector(".rightBannerLink input[type=text]");
      DOMstrings.rightBannerImgAltInput = document.querySelector(".rightBannerImgAlt input[type=text]");
      
}
    /* -------// create BannerX2 -------*/

    /* -------// Кнопки блоков -------*/




  return {
    getLink: getLink(),
    getSource: getSource(),
    getMedium: getMedium(),
  };
})(modelCtrl, UIctrl);
