
/* < !--Google Tag Manager(noscript)-- >
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id=GTM-5P77VWXV"
    height="0"
    width="0"
    style="display: none; visibility: hidden"
  ></iframe
></noscript>
<!-- End Google Tag Manager (noscript) -->

<script src="https://cdn.jsdelivr.net/gh/videsigns/webflow-tools@latest/multi-step.js"></script>
<script src="https://restcountries.com/v3.1/all"></script>

<!-- 💙 MEMBERSCRIPT #41 v0.1 💙 PERFECT PHONE NUMBER INPUTS -->
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"></script>
<script>
  $(document).ready(function () {
    $("input[ms-code-phone-number]").each(function () {
      var input = this;
      var preferredCountries = $(input).attr("ms-code-phone-number").split(",");

      var iti = window.intlTelInput(input, {
        initialCountry: "auto",
        geoIpLookup: function (success, failure) {
          fetch("https://ipapi.co/json")
            .then(function (res) {
              return res.json();
            })
            .then(function (data) {
              success(data.country_code);
            })
            .catch(function () {
              failure();
            });
        },
        autoPlaceholder: "aggressive",
        preferredCountries: preferredCountries,
        excludeCountries: ["xk"],
        utilsScript:
          "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
      });

      window.iti = iti;

      input.addEventListener("change", formatPhoneNumber);
      input.addEventListener("keyup", formatPhoneNumber);

      function formatPhoneNumber() {
        var formattedNumber = iti.getNumber(
          intlTelInputUtils.numberFormat.NATIONAL
        );
        input.value = formattedNumber;

        const isPhoneValid = window.iti.isValidNumber();
        if (isPhoneValid) {
          input.setCustomValidity("");
        } else {
          input.setCustomValidity("Phone Number Invalid");
        }
      }

      var form = $(input).closest("form");
      form.submit(function () {
        var formattedNumber = iti.getNumber(
          intlTelInputUtils.numberFormat.INTERNATIONAL
        );
        input.value = formattedNumber;
      });
    });
  });
</script>

<!-- SCRIPT MULTI-STEP FORM -->
<script>
  async function loadCountries() {
    try {
      // Fetch data from the API
      const response = await fetch(
        "https://dev-viewer-api.eyesofai.com/api/v1/dictionary/countries"
      );
      const countries = await response.json(); // Assuming the response is in JSON format

      // Get the dropdown element
      const dropdown = document.getElementById("Country");

      // Loop through the list of countries and add them to the dropdown
      countries.forEach((country) => {
        // Create a new option element
        const option = document.createElement("option");
        option.value = country.id; // Set the value to the country code
        option.text = country.name; // Set the displayed text to the country name
        option.setAttribute("alpha_2", country.alpha_2);

        // Append the option to the dropdown
        dropdown.add(option);
      });
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    async function postData(data = {}) {
      let BASE_URL;
      let API_KEY;
      if (!location.hostname.includes("webflow")) {
        BASE_URL = "https://viewer-api.eyesofai.com/api/v1";
        API_KEY = "pWMnj6gNeO8WJg7NezM1qZaKo0eUu6cM";
      } else {
        BASE_URL = "https://dev-viewer-api.eyesofai.com/api/v1";
        API_KEY = "fODJC8V9CZWeLlW1sJ3NVaZHmhyQZeZD";
      }

      const response = await fetch(BASE_URL + "/website/create-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + API_KEY,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }

    async function registerUser(data = {}) {
      try {
        let BASE_URL;
        let API_KEY;
        if (!location.hostname.includes("webflow")) {
          BASE_URL = "https://viewer-api.eyesofai.com/api/v1";
          API_KEY = "pWMnj6gNeO8WJg7NezM1qZaKo0eUu6cM";
        } else {
          BASE_URL = "https://dev-viewer-api.eyesofai.com/api/v1";
          API_KEY = "fODJC8V9CZWeLlW1sJ3NVaZHmhyQZeZD";
        }

        const response = await fetch(BASE_URL + "/website/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + API_KEY,
          },
          body: JSON.stringify(data),
        });

        const responseRead = await response.json();
        const errorJson = JSON.stringify(responseRead.errors);

        if (response.status !== 200) {
          let errorMsg = errorJson;

          if (errorJson.includes("unique")) {
            errorMsg = "Account with the given email already exists";
          }
          alert("Error while creating the account: " + errorMsg);
          return false;
        } else {
          return true;
        }
      } catch (error) {
        alert("Account creation failed. Error: ", error);
        return false;
      }
    }

    // Allow user to multi-select without holding CTRL/SHIFT
    /*
    window.onmousedown = function (e) {
      var el = e.target;
      if (
        el.tagName.toLowerCase() == "option" &&
        el.closest("select").hasAttribute("multiple")
      ) {
        e.preventDefault();

        var select = el.closest("select");
        var scrollTop = select.scrollTop; // Capture the scroll position

        if (el.hasAttribute("selected")) {
          el.removeAttribute("selected");
        } else {
          el.setAttribute("selected", "");
        }

        // Restore the scroll position
        select.scrollTop = scrollTop;
      }
    };
    */

    function debounce(func, delay) {
      let timeoutId;
      return function (...args) {
        const context = this;
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func.apply(context, args), delay);
      };
    }

    const debouncedCheckEmailAvailability = debounce(
      checkEmailAvailability,
      300
    ); // 300ms delay

    const industrySelect = document.getElementById("Multi-Form---Industry");
    const jobTitlesSelect = document.getElementById("Job-Title-s");
    const numberOfPracticesSelect = document.getElementById(
      "Number-of-Practices"
    );
    const xraySoftwareSelect = document.getElementById("X-ray-Software");
    const pmsSoftwareSelect = document.getElementById("PMS-Software");
    const howDidYouHearAboutUsSelect = document.getElementById(
      "How-Did-You-Hear-About-Us"
    );
    const specialitySelect = document.getElementById("Speciality-Options");
    const inputWrapper1 = document.getElementById("input-wrapper1");
    const inputWrapper2 = document.getElementById("input-wrapper2");
    const inputWrapper3 = document.getElementById("input-wrapper3");
    const inputWrapper4 = document.getElementById("input-wrapper4");
    const inputWrapperContainer1 = document.getElementById(
      "input-wrapper-container1"
    );
    const inputWrapperContainer2 = document.getElementById(
      "input-wrapper-container2"
    );
    const checkbox = document.getElementById("Checkbox");
    const form = document.getElementById("Multi-form");
    form.onchange = validatePhoneNumber;
    const nextBtn = document.getElementById("next-btn"); // Référence correcte au bouton de soumission
    const submitBtn = document.getElementById("submit-btn");
    const password = document.getElementById("password");
    const passwordConf = document.getElementById("password-confirm");
    password.onchange = passwordFit;
    passwordConf.onkeyup = passwordFit;
    const countryInput = document.getElementById("Country");
    countryInput.onchange = updateCountryCode;
    const phoneInput = document.getElementById("Phone");
    phoneInput.oninput = validatePhoneNumber;
    // phoneInput.onkeyup = validatePhoneNumber;
    const phoneValidation = document.getElementById("phone-validation");
    const emailInput = document.getElementById("Email");
    var isPhoneValid = false;
    emailInput.oninput = debouncedCheckEmailAvailability;
    const emailValidation = document.getElementById("email-validation");
    var isEmailValid = false;

    // Password Fit Criteria Bulletin Points
    const passMin12 = document.getElementById("pass-min-12");
    const passMin1Upper = document.getElementById("pass-min-1-upper");
    const passMin1Lower = document.getElementById("pass-min-1-lower");
    const passMin1NonAlpha = document.getElementById("pass-min-1-non-alpha");
    const passMatch = document.getElementById("pass-match");
    const checkPolicy = document.getElementById("check-policy");

    async function checkEmailAvailability() {
      const emailAddress = emailInput.value;

      validatePhoneNumber();

      if (emailAddress) {
        try {
          let BASE_URL;
          let API_KEY;
          if (!location.hostname.includes("webflow")) {
            BASE_URL = "https://viewer-api.eyesofai.com/api/v1";
            API_KEY = "pWMnj6gNeO8WJg7NezM1qZaKo0eUu6cM";
          } else {
            BASE_URL = "https://dev-viewer-api.eyesofai.com/api/v1";
            API_KEY = "fODJC8V9CZWeLlW1sJ3NVaZHmhyQZeZD";
          }

          const response = await fetch(BASE_URL + "/website/validate-email", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: "Bearer " + API_KEY,
            },
            body: JSON.stringify({ email: emailAddress }),
          });

          const responseRead = await response.json();
          const errorJson = JSON.stringify(responseRead.errors);

          if (
            responseRead.message &&
            responseRead.message.includes("already used")
          ) {
            emailValidation.innerText = "Email already used";
            isEmailValid = false;
          } else if (
            responseRead.message &&
            responseRead.message.includes("Not valid email")
          ) {
            emailValidation.innerText = "Email format not valid";
            isEmailValid = false;
          } else if (responseRead.success) {
            emailValidation.innerText = "";
            isEmailValid = true;
          } else {
            emailValidation.innerText = "Error: " + responseRead.message;
            isEmailValid = false;
          }

          if (!isEmailValid) {
            nextBtn.disabled = true;
            nextBtn.classList.add("disabled");
            nextBtn.style.opacity = 0.4;
            nextBtn.style.pointerEvents = "none";
          } else if (validateForm() && validatePhoneNumber()) {
            nextBtn.disabled = false;
            nextBtn.classList.remove("disabled");
            nextBtn.style.opacity = 1;
            nextBtn.style.pointerEvents = "auto";
          }
        } catch (error) {}
      }
    }

    function validatePhoneNumber() {
      isPhoneValid = window.iti.isValidNumber();

      if (!isPhoneValid) {
        // phoneInput.setCustomValidity("Invalid Phone Number Format");
        phoneValidation.innerText = "Enter valid phone number";
        isPhoneValid = false;
      } else {
        // phoneInput.setCustomValidity("");
        phoneValidation.innerText = "";
        isPhoneValid = true;
      }

      if (!isPhoneValid) {
        nextBtn.disabled = true;
        nextBtn.classList.add("disabled");
        nextBtn.style.opacity = 0.4;
        nextBtn.style.pointerEvents = "none";
      } else if (validateForm()) {
        nextBtn.disabled = false;
        nextBtn.classList.remove("disabled");
        nextBtn.style.opacity = 1;
        nextBtn.style.pointerEvents = "auto";
      }

      return isPhoneValid;
    }

    function updateCountryCode(e) {
      const selectedCountry =
        countryInput.options[countryInput.selectedIndex].getAttribute(
          "alpha_2"
        );
      if (phoneInput.value === "" && selectedCountry) {
        window.iti.setCountry(selectedCountry.toLowerCase());
      }
    }

    function passwordFit() {
      let hasErrors = false;
      let errorMsg = "";

      if (password.value !== passwordConf.value) {
        password.setCustomValidity("Passwords Don't Match");
        errorMsg += "Passwords don't match!!\n";
        hasErrors = true;
        // return false;
        passMatch.style.textDecoration = "none";
        passMatch.style.opacity = 1;
      } else {
        passMatch.style.textDecoration = "line-through";
        passMatch.style.opacity = 0.5;
      }

      if (password.value === "") {
        password.setCustomValidity("Passwords must not be empty");
        errorMsg += "Password must not be empty!\n";
        hasErrors = true;
        // return false;
      }

      if (!validateAtLeastSymbols(password.value, 12)) {
        errorMsg += "Password should contain at least 12 symbols!\n";
        hasErrors = true;
        passMin12.style.textDecoration = "none";
        passMin12.style.opacity = 1;
      } else {
        passMin12.style.textDecoration = "line-through";
        passMin12.style.opacity = 0.5;
      }

      if (!validateAtLeastOneLowerCaseSymbol(password.value)) {
        errorMsg += "Password should contain at least 1 lower case symbol!\n";
        hasErrors = true;
        passMin1Lower.style.textDecoration = "none";
        passMin1Lower.style.opacity = 1;
      } else {
        passMin1Lower.style.textDecoration = "line-through";
        passMin1Lower.style.opacity = 0.5;
      }

      if (!validateAtLeastOneUpperCaseSymbol(password.value)) {
        errorMsg += "Password should contain at least 1 upper case symbol!\n";
        hasErrors = true;
        passMin1Upper.style.textDecoration = "none";
        passMin1Upper.style.opacity = 1;
      } else {
        passMin1Upper.style.textDecoration = "line-through";
        passMin1Upper.style.opacity = 0.5;
      }

      if (!validateAtLeastOneNonAlphaNumericSymbol(password.value)) {
        errorMsg +=
          "Password should contain at least 1 non alpha numeric symbol!";
        hasErrors = true;
        passMin1NonAlpha.style.textDecoration = "none";
        passMin1NonAlpha.style.opacity = 1;
      } else {
        passMin1NonAlpha.style.textDecoration = "line-through";
        passMin1NonAlpha.style.opacity = 0.5;
      }

      if (!checkPolicy.checked) {
        hasErrors = true;
        errorMsg += "Read and agree with Privacy Policy!";
      }

      password.setCustomValidity(errorMsg);
      console.log(errorMsg);
      return !hasErrors;
    }

    function validateAtLeastSymbols(password, length) {
      return password.length >= length;
    }

    function validateAtLeastOneLowerCaseSymbol(password) {
      const regex = new RegExp("[a-z]");

      return regex.test(password);
    }
    function validateAtLeastOneUpperCaseSymbol(password) {
      const regex = new RegExp("[A-Z]");

      return regex.test(password);
    }
    function validateAtLeastOneNonAlphaNumericSymbol(password) {
      const regex = new RegExp("[^a-zA-Z\\d\\s]");

      return regex.test(password);
    }
    function showError(error) {
      passwordInput.setCustomValidity(error);
      console.log(error);
    }

    // Disable option group title items
    for (let option of jobTitlesSelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    for (let option of industrySelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    for (let option of numberOfPracticesSelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    for (let option of xraySoftwareSelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    for (let option of pmsSoftwareSelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    for (let option of howDidYouHearAboutUsSelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    for (let option of specialitySelect.options) {
      if (!option.value) {
        option.disabled = true;
      }
    }

    function updateFieldVisibility() {
      //const isDentalService = industrySelect.value === 'Dental Service/Practitioner';
      const isDentalService =
        Array.from(industrySelect.selectedOptions).filter(
          (item) => item.value === "Dental Service/Practitioner"
        ).length === 1;
      const isDentalSpecialist =
        Array.from(industrySelect.selectedOptions).filter(
          (item) => item.value === "Dental Specialist"
        ).length === 1;
      inputWrapper1.style.display = isDentalService ? "block" : "none";
      inputWrapper2.style.display = isDentalService ? "block" : "none";
      inputWrapper3.style.display = isDentalService ? "block" : "none";
      inputWrapper4.style.display = isDentalSpecialist ? "block" : "none";
      inputWrapperContainer1.style.display = isDentalService ? "block" : "none";
      inputWrapperContainer2.style.display =
        isDentalService || isDentalSpecialist ? "block" : "none";

      inputWrapper4.style.marginTop =
        isDentalService && isDentalSpecialist ? "1.5rem" : "0";

      document.getElementById("Number-of-Practices").required = isDentalService;
      document.getElementById("X-ray-Software").required = isDentalService;
      document.getElementById("PMS-Software").required = isDentalService;
      document.getElementById("Speciality-Options").required =
        isDentalSpecialist;
    }

    function validateForm() {
      let isValid = true;

      // Validate visible fields
      document.querySelectorAll("input, select, textarea").forEach((input) => {
        if (
          input.offsetParent !== null &&
          input.required &&
          !input.value.trim()
        ) {
          isValid = false;
        }

        // Valider les champs avec 'allow multiple selection'
        if (input.type === "select-multiple" && input.offsetParent !== null) {
          if (input.selectedOptions.length === 0) {
            isValid = false;
          }
        }
      });

      if (
        isValid &&
        submitBtn.offsetParent !== null &&
        submitBtn.display !== "none"
      ) {
        isValid = passwordFit();
      }

      return isValid;
    }

    industrySelect.addEventListener("change", updateFieldVisibility);

    form.onsubmit = function (event) {
      if (!validateForm()) {
        event.preventDefault();
        alert("Please fill in all required fields.");
        return false;
      } else {
        event.preventDefault(); // Prevent the default form submission

        const inputs = form.elements;
        // Step 1 Form
        const first_name = inputs["First-name"].value;
        const last_name = inputs["Last-name"].value;
        const email = inputs["Email"].value;
        const country =
          document.getElementById("Country").options[
            document.getElementById("Country").selectedIndex
          ].text;
        const phone = inputs["Phone"].value;
        // const timezone = inputs["Timezone"].value;
        // Step 2 Form
        const company = inputs["Company-Practice-Name"].value;
        const job_title_ids = Array.from(inputs["Job-Title-s"].selectedOptions)
          .map((item) => item.value)
          .join(",");

        const industry_ids = Array.from(inputs["Industry"].selectedOptions)
          .map((item) => item.value)
          .join(",");
        const number_of_practices = inputs["Number-of-Practices"].value;
        const x_ray_software = inputs["X-ray-Software"].value;
        const pms_software = inputs["PMS-Software"].value;
        const speciality = Array.from(
          inputs["Speciality-Options"].selectedOptions
        )
          .map((item) => item.value)
          .join(",");
        const how_did_you_hear_about_us_ids = Array.from(
          inputs["How-Did-You-Hear-About-Us"].selectedOptions
        )
          .map((item) => item.value)
          .join(",");
        //const checkbox = inputs["Checkbox"].checked ? "Yes" : "No";
        //const demo = inputs["Demo-Check"].checked ? "Yes" : "No";
        //Step3
        const password = inputs["password"].value;

        const data = {
          first_name,
          last_name,
          email,
          country,
          //timezone,
          company,
          job_title_ids,
          phone,
          industry_ids,
          number_of_practices,
          x_ray_software,
          pms_software,
          speciality,
          how_did_you_hear_about_us_ids,
          comments: "Website | Registration",
          lead_source_id: "G3 - Request Early Access",
          //checkbox,
          //lead_source_id: "Website",
          // demo,
          password,
        };

        postData(data)
          .then(
            async (res) => {
              if (
                document.getElementById("Country").options[
                  document.getElementById("Country").selectedIndex
                ].text === "Australia"
              ) {
                // register user
                submitBtn.value = "Creating account...";
                const isCreated = await registerUser({
                  email: data.email,
                  first_name: data.first_name,
                  last_name: data.last_name,
                  password: data.password,
                  country_id:
                    +document.getElementById("Country").options[
                      document.getElementById("Country").selectedIndex
                    ].value,
                });
                submitBtn.value = "Join waitlist";
                if (isCreated) {
                  window.location.href = "registration-confirmation";
                }
              } else {
                window.location.href = "unavailable-in-your-region";
              }
              // Vérifiez la valeur du champ Country
              //*****if (inputs["Country"].value !== "Australia") {
              // if (country.value !== "Australia")
              //  window.location.href = 'https://eyes-of-ai---prod.webflow.io/unavailable-in-your-region';
              //**** window.location.href = 'unavailable-in-your-region';
              // Bypassing Calendly flow for now
              //} else if (inputs["Demo-Check"].checked) {
              //****} else {
              //  window.location.href = 'https://eyes-of-ai---prod.webflow.io/registration-confirmation';
              //**  window.location.href = 'registration-confirmation';
              //} else {
              //  window.location.href = 'https://calendly.com/d/ck7t-n6z-6cj/product-demo';
            },
            (e) => {
              alert("Error occurred. Please try again.");
              console.error(e);
            }
          )
          .finally(() => {});
      } //else
    };

    // Initial visibility update
    updateFieldVisibility();

    // Ajouter un écouteur pour valider le formulaire à chaque modification
    form.addEventListener("input", function () {
      if (submitBtn.offsetParent !== null && submitBtn.display !== "none") {
        if (validateForm()) {
          // submitBtn.disabled = false
          submitBtn.classList.remove("disabled");
          submitBtn.style.opacity = 1;
          submitBtn.style.pointerEvents = "auto";
        } else {
          // submitBtn.disabled = true
          submitBtn.classList.add("disabled");
          submitBtn.style.opacity = 0.4;
          submitBtn.style.pointerEvents = "none";
        }
      } else if (validateForm() && isEmailValid && validatePhoneNumber()) {
        nextBtn.disabled = false;
      } else {
        nextBtn.disabled = true;
      }
    });
  });

  window.onload = loadCountries;
</script>

<!--<script>
const password = document.getElementById('password');
const passwordConf = document.getElementById('password-confirm');

//function passwordFit () {
//  if(password.value !== passwordConf.value) {
//       password.setCustomValidity("Passwords Don't Match");
//  } 
//  else if(password.value === "")
//  {
//    password.setCustomValidity("Passwords must not be empty");
//  } 
//  else
//  {
//    password.setCustomValidity("");    
//  }
//}
      
/*password.onchange = passwordFit;
passwordConf.onkeyup = passwordFit;
</script>-->*/
