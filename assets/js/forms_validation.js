jQuery.validator.addMethod(
  "lettersonly",
  function (value, element) {
    return this.optional(element) || /^[a-z][a-z\s]*$/i.test(value);
  },
  "Letters only please"
);
jQuery.validator.addMethod(
  "Email",
  function (value, element) {
    return (
      this.optional(element) ||
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value)
    );
  },
  "Please enter valid email"
);
jQuery.validator.addMethod(
  "number_validate",
  function (value, element) {
    return this.optional(element) || /^[0-9 +]+$/i.test(value);
  },
  "Please enter valid number"
);
jQuery.validator.addMethod(
  "url_validate",
  function (value, element) {
    return (
      this.optional(element) ||
      /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/i.test(
        value
      )
    );
  },
  "Please enter valid URL"
);
$(document).ready(function () {
  var pageURL = jQuery(location).attr("href");
  $(".hiddenUrl").append().val(pageURL);
});
var global = null;
$.get("https://www.cloudflare.com/cdn-cgi/trace", function (data) {
  data = data
    .trim()
    .split("\n")
    .reduce(function (obj, pair) {
      pair = pair.split("=");
      return (obj[pair[0]] = pair[1]), obj;
    }, {});
  global = data;
});
function convertFormToJSON(form) {
  const array = $(form).serializeArray();
  const json = {};
  $.each(array, function () {
    json[this.name] = this.value || "";
  });
  return json;
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
$("#Joiningdate").attr("min", today);
document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.getElementById("files");
  const fileNameDisplay = document.getElementById("fileNameDisplay");
  if (fileInput) {
    fileInput.addEventListener("change", function () {
      if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        fileNameDisplay.textContent = `${fileName}`;
        const errorLabel = document.getElementById("files-error");
        if (errorLabel) {
          errorLabel.style.display = "none";
        }
      }
    });
  }
});
var dgFormApiCareer = "https://dgapi.digitalgravity.ae/submit/career";
var dgFormApi = "https://dgapi.digitalgravity.ae/submit/quote";
$("#getquoteform").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    company: {
      required: true,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    interest: {
      required: true,
    },
    budget: {
      required: true,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".btn--submit").hide();
    jQuery(form).find("#contact_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
    return false;
  },
});
$("#servicesHeroForm").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      email: true,
      maxlength: 50,
    },
  },
  submitHandler: function (form) {
    $(form).find(".service-form").hide();
    $(form).find("#service_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
    return false;
  },
});
$("#servicesMapForm").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      email: true,
      maxlength: 50,
    },
  },
  submitHandler: function (form) {
    $(form).find(".service-formBtm").hide();
    $(form).find("#service_loaderBtm").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
    return false;
  },
});
$("#newsletterForm").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    email: {
      required: true,
      email: true,
      maxlength: 50,
    },
  },
  submitHandler: function (form) {
    $(form).find(".newsletter-form").hide();
    $(form).find("#newsletter_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
          ...{
            phone: `+97142421375`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou-newsletter/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
    return false;
  },
});
$("#Careerform").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    city: {
      required: true,
      lettersonly: true,
    },
    desired: {
      required: true,
    },
    address: {
      required: true,
    },
    Joiningdate: {
      required: true,
    },
    files: {
      required: true,
      extension: "doc,docx,pdf",
    },
  },
  messages: {
    files: {
      extension: "only pdf, doc, docx allowed",
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".submit-bttn").hide();
    jQuery(form).find("#service_loader").show();
    var cfData = new FormData(form);
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: "https://www.digitalgravity.ae/blog/wp-json/contact-form-7/v1/contact-forms/5634/feedback",
        type: form.method,
        data: cfData,
        contentType: false,
        cache: false,
        processData: false,
        success: function (response) {
          window.location.replace("/thankyou-career/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#lp-landing-page").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn").hide();
    jQuery(form).find("#service_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#webDev-lp-landing-page-Top").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 20,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn-top").hide();
    jQuery(form).find("#service_loader_top").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#webDev-lp-landing-page-banner").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 20,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn-top").hide();
    jQuery(form).find("#service_loader_top").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#webDev-lp-landing-page-Bottom").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 20,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn").hide();
    jQuery(form).find("#service_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#mob-app-lp-landing-page-top").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 20,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn-top").hide();
    jQuery(form).find("#service_loader_top").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#mob-app-lp-landing-page-bottom").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 20,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn-bottom").hide();
    jQuery(form).find("#service_loader_bottom").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#register-form").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".register-submit").hide();
    jQuery(form).find("#service_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#App-form").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".d_anchor").hide();
    jQuery(form).find("#service_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#web-dev").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      required: true,
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".lets-talk-form-submit").hide();
    jQuery(form).find("#service_loader").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
    }
  },
});
$("#lpservicesHeroFormTop").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    message: {
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn1").hide();
    jQuery(form).find("#service_loader1").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
      localStorage.setItem("current_form", "hero_form_top");
    }
  },
});
$("#lpservicesHeroFormPopup").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    websiteLink: {
      required: true,
    },
    message: {
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn2").hide();
    jQuery(form).find("#service_loader2").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/seo-audit-thanks/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
      localStorage.setItem("current_form", "hero_form_popup");
    }
  },
});
$("#lpservicesHeroFormBottom").validate({
  rules: {
    fullname: {
      required: true,
      lettersonly: true,
      maxlength: 50,
    },
    phone: {
      required: true,
      number_validate: true,
      minlength: 7,
      maxlength: 50,
    },
    email: {
      required: true,
      Email: true,
      maxlength: 50,
    },
    message: {
      maxlength: 5000,
    },
  },
  submitHandler: function (form) {
    jQuery(form).find(".form-btn3").hide();
    jQuery(form).find("#service_loader3").show();
    if (grecaptcha.getResponse()) {
      $.ajax({
        url: dgFormApi,
        type: form.method,
        data: JSON.stringify({
          ...convertFormToJSON(form),
          ...{
            hidd: `${global && global.ip ? global.ip : ""}`,
          },
        }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          window.location.replace("/thankyou/");
        },
      });
    } else {
      grecaptcha.reset();
      grecaptcha.execute();
      localStorage.setItem("current_form", "hero_form_bottom");
    }
  },
});
