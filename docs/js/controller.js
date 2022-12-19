(function ctrl(modelCtrl, UIctrl) {
  modelCtrlObj = modelCtrl();
  //--------- Get object with elements --------//
  DOMstrings = UIctrl().DOMstrings;
  //--------- variables ---------//
  let readyPreheaderTitleVariableCode,
    readyBanner1VariableCode,
    readyBanner1HtmlCode,
    readyBanner1HtmlVisual;

  //---------// variables ---------//

  //-- Event - generetaion preheaderTitle --//
  DOMstrings.preheaderTitleInput.addEventListener("change", getPreheaderTitle);
  function getPreheaderTitle() {
    readyPreheaderTitleVariableCode = `{% comment %} ------------- Блок прехедера ---------------- {% endcomment %}
<br>{% assign PreheaderTitle = "${DOMstrings.preheaderTitleInput.value}" %}{% comment %} Текст прехедера {% endcomment %}
<br>{% comment %} ------------- Конец блока прехедера ---------------- {% endcomment %}`;

    return readyPreheaderTitleVariableCode;
  }

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

  //Event - нажатие на кнопку Сгенерировать
  DOMstrings.buttonGenerate.addEventListener("click", getResult);
  function getResult(e) {
    getPreheaderTitle();
    getBanner1();

    DOMstrings.renderCodeEmail.innerHTML = `
    ${readyPreheaderTitleVariableCode}
    <br>
    <br>${readyBanner1VariableCode}
    <br>
    <br>${readyBanner1HtmlCode}`;

    DOMstrings.renderCodeEmailFrame.srcdoc = `
    ${DOMstrings.htmlIframeBeforeContent}
    ${readyBanner1HtmlVisual}
    ${DOMstrings.htmlIframeAfterContent}
    `;

    DOMstrings.renderCodeEmailFrame.contentWindow.location.reload(true);
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
