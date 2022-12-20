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
  readyTextHtmlVisual;
  //--// variables-Text --//
  
  
  

  //-- variables-html --//
    
  //--// variables-html --//


  //---------// variables ---------//

  //-- Event - generetaion preheaderTitle --//
  DOMstrings.preheaderTitleInput.addEventListener("change", getPreheaderTitle);
  function getPreheaderTitle() {
    readyPreheaderTitleVariableCode = `{% comment %} ------------- Блок прехедера ---------------- {% endcomment %}
<br>{% assign PreheaderTitle = "${DOMstrings.preheaderTitleInput.value}" %}{% comment %} Текст прехедера {% endcomment %}
<br>{% comment %} ------------- Конец блока прехедера ---------------- {% endcomment %}`;
    console.log(readyPreheaderTitleVariableCode);
    return readyPreheaderTitleVariableCode;
  }
  //-- Event - generetaion preheaderTitle --//


  //-- Function - generetaion banner1 --//
  function getBanner1() {
    readyBanner1VariableCode = `{% comment %} ------------- Блок первого баннера ------------- {% endcomment %}
    </br>{% assign showBanner1 = ${DOMstrings.checkboxBanner.checked} %}{% comment %} Показать баннер? true - показать, false - не показывать {% endcomment %}
    </br>{% assign Banner1ImgURL ="${DOMstrings.bannerImgUrlInput.value}" %}{% comment %} Ссылка на картинку баннера {% endcomment %}
    </br>{% assign Banner1Link = "${DOMstrings.bannerLinkInput.value}" %}{% comment %} Ссылка c баннера {% endcomment %}
    </br>{% assign Banner1Alt = "${DOMstrings.bannerAltInput.value}" %}{% comment %} Текст вместо баннера, который увидит подписчик, если у него не отображаются картинки {% endcomment %}
    </br>{% comment %} ------------- Конец блока первого баннера ------------- {% endcomment %}`;

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
    <!--/banner-->`;

    return (
      readyBanner1VariableCode, readyBanner1HtmlCode, readyBanner1HtmlVisual
    );
  }
  //--// Function - generetaion banner1 --//
/* &lt; gt; */
  //-- Function - generetaion Text --//
  function getText() {
    readyTextVariableCode = `
    {% comment %} ------------- Блок с текстом ------------- {% endcomment %}
    {% assign showText = ${DOMstrings.checkboxText.checked} %}{% comment %} Показать текст? true - показать, false - не показывать {% endcomment %}
    {% assign textTitle = "${DOMstrings.textTitleInput.value}" %}{% comment %} Заголовок текстового блока {% endcomment %}
    {% capture textText %}
    ${DOMstrings.textTextInput.value}
    {% endcapture %}{% comment %} Сам текст {% endcomment %}
    {% assign showTextButton = ${DOMstrings.checkboxTextButton.checked} %}{% comment %} Показать кнопку после текста? true - показать, false - не показывать {% endcomment %}
    {% assign textButtonLink = "${DOMstrings.textButtonLinkInput.value}" %}     {% comment %} Ссылка с кнопки {% endcomment %}
    {% assign textButtonTitle = "${DOMstrings.textButtonTitleInput.value}" %} {% comment %} Текст кнопки {% endcomment %}
    {% comment %} ------------- Конец блока с текстом ------------- {% endcomment %}
    `;

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

    readyTextHtmlVisual = ``;

    return (
      readyTextVariableCode, readyTextHtmlCode, readyTextHtmlVisual
    );
  }
  //--// Function - generetaion Text --//
  

  //Event - нажатие на кнопку Сгенерировать
  DOMstrings.buttonGenerate.addEventListener("click", getResult);
  function getResult(e) {
    getPreheaderTitle();
    getBanner1();
    getText();
    //-------render-code-are ---//
    DOMstrings.renderCodeEmail.innerHTML = `
    ${readyPreheaderTitleVariableCode}
    <br>
    <br>${readyBanner1VariableCode}
    <br>
    <br>${readyTextVariableCode}
    <br>
    <br>${DOMstrings.htmlIframeBeforeContentCode}
    <br>
    <br>${readyBanner1HtmlCode}
    <br>
    <br>${readyTextHtmlCode}
    <br>
    <br>${DOMstrings.htmlIframeAfterContentCode}
    `;
    //-------// render-code-are ---//

    //------- render-visual-are ---//
    DOMstrings.renderCodeEmailFrame.srcdoc = `
    ${DOMstrings.htmlIframeBeforeContent}
    ${readyBanner1HtmlVisual}
    ${readyTextHtmlVisual}
    ${DOMstrings.htmlIframeAfterContent}
    `;

    DOMstrings.renderCodeEmailFrame.contentWindow.location.reload(true);
    //-------// render-visual-are ---//


  }
  /*
    //Event - нажатие на кнопку Сброс
    DOMstrings.buttonReset.addEventListener("click", reset)
    function reset () {
        window.location.reload ();
    }
    //Event - нажатие на кнопку Скопировать
    DOMstrings.buttonCopy.addEventListener("click", copy)
    function copy () {
         сохраняем текстовое поле в переменную text 
        
       //document.execCommand("copy");
       navigator.clipboard.writeText(readylink);
      //очистим выделение текста, чтобы пользователь "не парился"
      window.getSelection().removeAllRanges();
    }*/

  return {
    getLink: getLink(),
    getSource: getSource(),
    getMedium: getMedium(),
  };
})(modelCtrl, UIctrl);
