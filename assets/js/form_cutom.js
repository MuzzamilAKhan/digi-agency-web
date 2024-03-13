onloadCallback = function () {};
function setResponse(response) {
  let current_form = localStorage.getItem("current_form");
  if ($("#captcha-response-banner").length != 0) {
    document.getElementById("captcha-response-banner").value = response;
    $("#servicesHeroForm").submit();
  }
  if ($("#captcha-response-MapForm").length != 0) {
    document.getElementById("captcha-response-MapForm").value = response;
    $("#servicesMapForm").submit();
  }
  if ($("#captcha-response-newsletter").length != 0) {
    document.getElementById("captcha-response-newsletter").value = response;
    $("#newsletterForm").submit();
  }
  if ($("#captcha-response-career").length != 0) {
    document.getElementById("captcha-response-career").value = response;
    $("#Careerform").submit();
  }
  if ($("#captcha-response-lp").length != 0) {
    document.getElementById("captcha-response-lp").value = response;
    $("#lp-landing-page").submit();
  }
  if ($("#captcha-response-lp").length != 0) {
    document.getElementById("captcha-response-lp").value = response;
    $("#register-form").submit();
  }
  if ($("#captcha-response-lp").length != 0) {
    document.getElementById("captcha-response-lp").value = response;
    $("#App-form").submit();
  }
  if ($("#captcha-response-lp").length != 0) {
    document.getElementById("captcha-response-lp").value = response;
    $("#web-dev").submit();
  }
  if (
    $("#captcha-response-services-company-lp").length != 0 &&
    current_form == "hero_form_top"
  ) {
    document.getElementById("captcha-response-services-company-lp").value =
      response;
    $("#lpservicesHeroFormTop").submit();
  }
  if (
    $("#captcha-response-lp-Popup").length != 0 &&
    current_form == "hero_form_popup"
  ) {
    document.getElementById("captcha-response-lp-Popup").value = response;
    $("#lpservicesHeroFormPopup").submit();
  }
  if (
    $("#captcha-response-lp-Bottom").length != 0 &&
    current_form == "hero_form_bottom"
  ) {
    document.getElementById("captcha-response-lp-Bottom").value = response;
    $("#lpservicesHeroFormBottom").submit();
  }
  if ($("#captcha-response-lp-bottom").length != 0) {
    document.getElementById("captcha-response-lp-bottom").value = response;
    $("#webDev-lp-landing-page-Bottom").submit();
  }
  if ($("#mob-app-captcha-response-lp-top").length != 0) {
    document.getElementById("mob-app-captcha-response-lp-top").value = response;
    $("#mob-app-lp-landing-page-top").submit();
  }
  if ($("#mob-app-captcha-response-lp-bottom").length != 0) {
    document.getElementById("mob-app-captcha-response-lp-bottom").value =
      response;
    $("#mob-app-lp-landing-page-bottom").submit();
  }
  if ($("#captcha-response-lp-top").length != 0) {
    document.getElementById("captcha-response-lp-top").value = response;
    $("#webDev-lp-landing-page-Top").submit();
  }
  if ($("#captcha-response-lp-banner").length != 0) {
    document.getElementById("captcha-response-lp-banner").value = response;
    $("#webDev-lp-landing-page-banner").submit();
  }
  if ($("#captcha-response-quote").length != 0) {
    document.getElementById("captcha-response-quote").value = response;
    $("#getquoteform").submit();
  }
  return true;
}
const loadDynamicScript1 = (e) => {
  let s = document.getElementById("scriptID");
  if (!s) {
    let i = document.createElement("script");
    (i.src = "https://www.google.com/recaptcha/api.js"),
      (i.id = "scriptID"),
      document.body.appendChild(i),
      (i.onload = () => {
        onloadCallback(), e && e();
      });
  }
  s && e && e();
};
setTimeout(function () {
  loadDynamicScript1();
}, 10000);
