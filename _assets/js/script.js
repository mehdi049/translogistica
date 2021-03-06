$(function () {
  /** submit step 1 */
  $("#step-1-submit").click(function () {
    if (validateStep1()) {
      $("#form-step1").addClass("d-none");
      $("#form-step2").removeClass("d-none");
    }
  });

  /** validate step 1 */
  function validateStep1() {
    $("#step1-required-form-error").addClass("d-none");
    $("#step1-email-form-error").addClass("d-none");
    $("#email").removeClass("invalid-input");

    let valid = true;
    let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    let email = $("#email").val();

    $("#form-step1 input").each(function () {
      $(this).removeClass("invalid-input");
      let value = $(this).val();
      if (value.length == 0) {
        valid = false;
        $(this).addClass("invalid-input");
      }
    });
    if (!valid) $("#step1-required-form-error").removeClass("d-none");

    if (email !== null && email.length > 0 && regEmail.test(email) === false) {
      $("#step1-email-form-error").removeClass("d-none");
      $("#email").addClass("invalid-input");
      valid = false;
    }

    return valid;
  }

  /** submit step 2 data */
  $("#step-2-submit").click(function () {
    if (validateStep2()) {
      /** collect step 1 data */
      let apellido = $("#apellido").val();
      let email = $("#email").val();
      let telephono = $("#telephono").val();
      let empresa = $("#empresa").val();

      /** collect step 2 data */
      let cotizarOption = $("input[name=cotizar-option]:checked").val();
      let origen = $("#origen").val();
      let destino = $("#destino").val();

      /** collect step 2-1 data */
      let maritimoOption = $("input[name=maritimo-option]:checked").val();

      /** collect step 2-1-1 (LCL) data */
      let marítimoPesoTotalLcl = $("#marítimo-peso-total-lcl").val();
      let marítimoPesoLcl = $("#marítimo-peso-lcl").val();
      let marítimoVolumenLcl = $("#marítimo-volumen-lcl").val();
      let marítimoCantidadLcl = $("#marítimo-cantidad-lcl").val();
      let marítimoLargoLcl = $("#marítimo-largo-lcl").val();
      let marítimoAnchoLcl = $("#marítimo-ancho-lcl").val();
      let marítimoAltoLcl = $("#marítimo-alto-lcl").val();
      let marítimoTipoDeProductoLcl = $("#marítimo-tipo-de-producto-lcl").val();
      let marítimoTemperaturaLcl = $("#marítimo-temperatura-lcl").val();

      /** collect step 2-1-2 (FCL) data */
      let marítimoPesoTotalFcl = $("#marítimo-peso-total-fcl").val();
      let marítimoPesoFcl = $("#marítimo-peso-fcl").val();
      let marítimoTamañoFcl = $("#marítimo-tamaño-fcl").val();
      let marítimoCargaPeligrosaFcl = $("#marítimo-carga-peligrosa-fcl").val();
      let marítimoCargaRefrigeradaFcl = $(
        "#marítimo-carga-refrigerada-fcl"
      ).val();
      let marítimoTemperaturaFcl = $("#marítimo-temperatura-fcl").val();

      /** collect step 2-2 data */
      let aéreoPesoTotal = $("#aéreo-peso-total").val();
      let aéreoPeso = $("#aéreo-peso").val();
      let aéreoLargo = $("#aéreo-largo").val();
      let aéreoAncho = $("#aéreo-ancho").val();
      let aéreoAlto = $("#aéreo-alto").val();
      let aéreoVolumen = $("#aéreo-volumen").val();
      let aéreoCantidad = $("#aéreo-cantidad").val();
      let aéreoCargaPeligrosa = $("#aéreo-carga-peligrosa").val();
      let aéreoCargaRefrigerada = $("#aéreo-carga-refrigerada").val();
      let aéreoTemperatura = $("#aéreo-temperatura").val();

      /** collect step 2-3 data */
      let terrestreOption = $("input[name=terrestre-option]:checked").val();

      /** collect step 2-3-1 (LTL) data */
      let terrestrePesoTotalLtl = $("#terrestre-peso-total-ltl").val();
      let terrestrePesoLtl = $("#terrestre-peso-ltl").val();
      let terrestreVolumenLtl = $("#terrestre-volumen-ltl").val();
      let terrestreCantidadLtl = $("#terrestre-cantidad-ltl").val();
      let terrestreLargoLtl = $("#terrestre-largo-ltl").val();
      let terrestreAnchoLtl = $("#terrestre-ancho-ltl").val();
      let terrestreAltoLtl = $("#terrestre-alto-ltl").val();

      /** collect step 2-3-2 (FTL) data */
      let terrestrePesoTotalFtl = $("#terrestre-peso-total-ftl").val();
      let terrestrePesoFtl = $("#terrestre-peso-ftl").val();
      let terrestreCargaPeligrosaFtl = $(
        "#terrestre-carga-peligrosa-ftl"
      ).val();
      let terrestreCantidadFtl = $("#terrestre-cantidad-ftl").val();
      let terrestreLargoFtl = $("#terrestre-largo-ftl").val();
      let terrestreAnchoFtl = $("#terrestre-ancho-ftl").val();
      let terrestreAltoFtl = $("#terrestre-alto-ftl").val();
      let terrestreTemperaturaFtl = $("#terrestre-temperatura-ftl").val();
      let terrestreTamañoFtl = $("#terrestre-tamaño-ftl").val();

      /** collect step 2-4 data */
      let aduanaIncoterm = $("#aduana-incoterm").val();
      let aduanaMercancía = $("#aduana-mercancía").val();
      let aduanaFactura = $("#aduana-factura").val();

      /** collect step 2-5 data */
      let seguroCIF = $("#seguro-CIF").val();

      let lang = $("#lang").val();

      let step1 = {
        apellido: apellido,
        email: email,
        telephono: telephono,
        empresa: empresa,
      };

      let step2 = {
        cotizarOption: cotizarOption,
        origen: origen,
        destino: destino,
      };

      let step2_1 = {
        maritimoOption: maritimoOption,
        lcl: {
          marítimoPesoTotalLcl: marítimoPesoTotalLcl,
          marítimoPesoLcl: marítimoPesoLcl,
          marítimoVolumenLcl: marítimoVolumenLcl,
          marítimoCantidadLcl: marítimoCantidadLcl,
          marítimoLargoLcl: marítimoLargoLcl,
          marítimoAnchoLcl: marítimoAnchoLcl,
          marítimoAltoLcl: marítimoAltoLcl,
          marítimoTipoDeProductoLcl: marítimoTipoDeProductoLcl,
          marítimoTemperaturaLcl: marítimoTemperaturaLcl,
        },
        fcl: {
          marítimoPesoTotalFcl: marítimoPesoTotalFcl,
          marítimoPesoFcl: marítimoPesoFcl,
          marítimoTamañoFcl: marítimoTamañoFcl,
          marítimoCargaPeligrosaFcl: marítimoCargaPeligrosaFcl,
          marítimoCargaRefrigeradaFcl: marítimoCargaRefrigeradaFcl,
          marítimoTemperaturaFcl: marítimoTemperaturaFcl,
        },
      };

      let step2_2 = {
        aéreoPesoTotal: aéreoPesoTotal,
        aéreoPeso: aéreoPeso,
        aéreoLargo: aéreoLargo,
        aéreoAncho: aéreoAncho,
        aéreoAlto: aéreoAlto,
        aéreoVolumen: aéreoVolumen,
        aéreoCantidad: aéreoCantidad,
        aéreoCargaPeligrosa: aéreoCargaPeligrosa,
        aéreoCargaRefrigerada: aéreoCargaRefrigerada,
        aéreoTemperatura: aéreoTemperatura,
      };

      let step2_3 = {
        terrestreOption: terrestreOption,
        ltl: {
          terrestrePesoTotalLtl: terrestrePesoTotalLtl,
          terrestrePesoLtl: terrestrePesoLtl,
          terrestreVolumenLtl: terrestreVolumenLtl,
          terrestreCantidadLtl: terrestreCantidadLtl,
          terrestreLargoLtl: terrestreLargoLtl,
          terrestreAnchoLtl: terrestreAnchoLtl,
          terrestreAltoLtl: terrestreAltoLtl,
        },
        ftl: {
          terrestrePesoTotalFtl: terrestrePesoTotalFtl,
          terrestrePesoFtl: terrestrePesoFtl,
          terrestreCargaPeligrosaFtl: terrestreCargaPeligrosaFtl,
          terrestreCantidadFtl: terrestreCantidadFtl,
          terrestreLargoFtl: terrestreLargoFtl,
          terrestreAnchoFtl: terrestreAnchoFtl,
          terrestreAltoFtl: terrestreAltoFtl,
          terrestreTemperaturaFtl: terrestreTemperaturaFtl,
          terrestreTamañoFtl: terrestreTamañoFtl,
        },
      };

      let step2_4 = {
        aduanaIncoterm: aduanaIncoterm,
        aduanaMercancía: aduanaMercancía,
        aduanaFactura: aduanaFactura,
      };

      let step2_5 = {
        seguroCIF: seguroCIF,
      };

      /** send data to sendMail.php */
      $.ajax({
        url: "sendMail.php?lang=" + lang,
        method: "post",
        data: {
          step1: JSON.stringify(step1),
          step2: JSON.stringify(step2),
          step2_1: JSON.stringify(step2_1),
          step2_2: JSON.stringify(step2_2),
          step2_3: JSON.stringify(step2_3),
          step2_4: JSON.stringify(step2_4),
          step2_5: JSON.stringify(step2_5),
        },
        dataType: "json",
        complete: function (response) {
          if (response.status === 200) {
            $("#form-step1").addClass("d-none");
            $("#form-step2").addClass("d-none");
            $("#form-step3").removeClass("d-none");
          } else {
            $("#step2-general-form-error").removeClass("d-none");
          }
        },
      });
    }
  });

  /** validate step 2 */
  function validateStep2() {
    let valid = true;

    $("#step2-required-form-error").addClass("d-none");
    $("#step2-general-form-error").addClass("d-none");

    let cotizarOption = $("input[name=cotizar-option]:checked").val();

    if (cotizarOption === "marítimo") {
      let maritimoOption = $("input[name=maritimo-option]:checked").val();
      if (maritimoOption === "LCL") {
        $("#form-step2-1-1 input").each(function () {
          $(this).removeClass("invalid-input");
          let value = $(this).val();
          if (value.length == 0) {
            valid = false;
            $(this).addClass("invalid-input");
          }
        });
        if (!valid) $("#step2-required-form-error").removeClass("d-none");
      }
      if (maritimoOption === "FCL") {
        $("#form-step2-1-2 input").each(function () {
          $(this).removeClass("invalid-input");
          let value = $(this).val();
          if (value.length == 0) {
            valid = false;
            $(this).addClass("invalid-input");
          }
        });
        if (!valid) $("#step2-required-form-error").removeClass("d-none");
      }
    }

    if (cotizarOption === "aéreo") {
      $("#form-step2-2 input").each(function () {
        $(this).removeClass("invalid-input");
        let value = $(this).val();
        if (value.length == 0) {
          valid = false;
          $(this).addClass("invalid-input");
        }
      });
      if (!valid) $("#step2-required-form-error").removeClass("d-none");
    }

    if (cotizarOption === "terrestre") {
      let terrestreOption = $("input[name=terrestre-option]:checked").val();

      if (terrestreOption === "LTL") {
        $("#form-step2-3-1 input").each(function () {
          $(this).removeClass("invalid-input");
          let value = $(this).val();
          if (value.length == 0) {
            valid = false;
            $(this).addClass("invalid-input");
          }
        });
        if (!valid) $("#step2-required-form-error").removeClass("d-none");
      }
      if (terrestreOption === "FTL") {
        $("#form-step2-3-2 input").each(function () {
          $(this).removeClass("invalid-input");
          let value = $(this).val();
          if (value.length == 0) {
            valid = false;
            $(this).addClass("invalid-input");
          }
        });
        if (!valid) $("#step2-required-form-error").removeClass("d-none");
      }
    }

    if (cotizarOption === "aduana") {
      $("#form-step2-4 input").each(function () {
        $(this).removeClass("invalid-input");
        let value = $(this).val();
        if (value.length == 0) {
          valid = false;
          $(this).addClass("invalid-input");
        }
      });
      if (!valid) $("#step2-required-form-error").removeClass("d-none");
    }

    if (cotizarOption === "seguro") {
      $("#form-step2-5 input").each(function () {
        $(this).removeClass("invalid-input");
        let value = $(this).val();
        if (value.length == 0) {
          valid = false;
          $(this).addClass("invalid-input");
        }
      });
      if (!valid) $("#step2-required-form-error").removeClass("d-none");
    }

    return valid;
  }

  /** close step 3 */
  $("#step-3-submit").click(function () {
    setTimeout(() => {
      $("#form-step1").removeClass("d-none");
      $("#form-step3").addClass("d-none");
    }, 1000);
  });

  /** display fields based on main options */
  $("input[name=cotizar-option]").change(function () {
    let value = $(this).val();
    switch (value) {
      case "marítimo":
        $(
          "#form-step2-2, #form-step2-3, #form-step2-4, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-1").removeClass("d-none");
        break;
      case "aéreo":
        $(
          "#form-step2-1, #form-step2-3, #form-step2-4, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-2").removeClass("d-none");
        break;
      case "terrestre":
        $(
          "#form-step2-1, #form-step2-2, #form-step2-4, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-3").removeClass("d-none");
        break;
      case "aduana":
        $(
          "#form-step2-1, #form-step2-2, #form-step2-3, #form-step2-5"
        ).addClass("d-none");
        $("#form-step2-4").removeClass("d-none");
        break;
      case "seguro":
        $(
          "#form-step2-1, #form-step2-2, #form-step2-3, #form-step2-4"
        ).addClass("d-none");
        $("#form-step2-5").removeClass("d-none");
        break;
    }
  });

  /** martimp LCL / FCL options change */
  $("input[name=maritimo-option]").change(function () {
    let value = $(this).val();
    switch (value) {
      case "LCL":
        $("#form-step2-1-2").addClass("d-none");
        $("#form-step2-1-1").removeClass("d-none");
        break;
      case "FCL":
        $("#form-step2-1-1").addClass("d-none");
        $("#form-step2-1-2").removeClass("d-none");
        break;
    }
  });

  /** terrestre LTL / FTL options change */
  $("input[name=terrestre-option]").change(function () {
    let value = $(this).val();
    switch (value) {
      case "LTL":
        $("#form-step2-3-2").addClass("d-none");
        $("#form-step2-3-1").removeClass("d-none");
        break;
      case "FTL":
        $("#form-step2-3-1").addClass("d-none");
        $("#form-step2-3-2").removeClass("d-none");
        break;
    }
  });

  /** contact form */
  $("#contact-form-submit").click(function () {
    if (validateContact()) {
      let lang = $("#contact-lang").val();

      let apellido = $("#contact-apellido").val();
      let email = $("#contact-email").val();
      let asunto = $("#contact-asunto").val();
      let message = $("#contact-message").val();

      let contact = {
        apellido: apellido,
        email: email,
        asunto: asunto,
        message: message,
      };

      /** send data to sendMailContact.php */
      $.ajax({
        url: "sendMailContact.php?lang=" + lang,
        method: "post",
        data: {
          form: JSON.stringify(contact),
        },
        dataType: "json",
        complete: function (response) {
          if (response.status === 200) {
            $("#contact-section input, #contact-section textarea").each(
              function () {
                $(this).val("");
                $("#contact-form-success").removeClass("d-none");
              }
            );
          } else {
            $("#contact-form-general-error").removeClass("d-none");
          }
        },
      });
    }
  });

  /** validate contact form */
  function validateContact() {
    $("#contact-form-general-error").addClass("d-none");
    $("#contact-form-required-error").addClass("d-none");
    $("#contact-form-email-error").addClass("d-none");
    $("#contact-email").removeClass("invalid-input");

    let valid = true;
    let regEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    let email = $("#contact-email").val();

    $("#contact-section input, #contact-section textarea").each(function () {
      $(this).removeClass("invalid-input");
      let value = $(this).val();
      if (value.length == 0) {
        valid = false;
        $(this).addClass("invalid-input");
      }
    });
    if (!valid) $("#contact-form-required-error").removeClass("d-none");

    if (email !== null && email.length > 0 && regEmail.test(email) === false) {
      $("#contact-form-email-error").removeClass("d-none");
      $("#contact-email").addClass("invalid-input");
      valid = false;
    }

    return valid;
  }

  /** smooth scroll */
  $('div[data-bs-target*="#"]').click(function (event) {
    var target = $(this).attr("data-bs-target");
    var target = target.replace(/#/g, "");

    $("a.scroll-tab").each(function () {
      $(this).removeClass("active");
    });
    $("a[data-bs-target*='" + target + "']").addClass("active");

    if (window.screen.width <= 768) {
      setTimeout(function () {
        target = $("[id=" + target + "]");

        if (target.length) {
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 100,
            },
            100,
            function () {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr("tabindex", "-1");
                $target.focus();
              }
            }
          );
        }
      }, 500);
    }
  });

  $("a.scroll-tab").click(function (event) {
    $("a.scroll-tab").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");
    var target = $(this).attr("href");
    target = target.replace(/#/g, "");
    target = $("[id=" + target.replace(/#/g, "") + "]");
    if (target.length) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 100,
        },
        100,
        function () {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr("tabindex", "-1");
            $target.focus();
          }
        }
      );
    }

    var tab = $(this).attr("data-bs-target");
    if (tab != undefined) $(tab).trigger("click");
  });
});
