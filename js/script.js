document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
     SMOOTH SCROLLING
  ========================================= */

  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (
        !targetId ||
        targetId === "#" ||
        targetId.length <= 1
      ) {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }

    });

  });


  /* =========================================
     WHATSAPP APPOINTMENT
  ========================================= */

  const appointmentForm =
    document.getElementById("appointmentForm");


  if (appointmentForm) {

    appointmentForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        /* Patient details */

        const name =
          document.getElementById("name").value.trim();

        const phone =
          document.getElementById("phone").value.trim();

        const date =
          document.getElementById("date").value;

        const department =
          document.getElementById("department").value;

        const message =
          document.getElementById("message").value.trim();


        /* Basic validation */

        if (!name) {

          alert("Please enter your name.");

          return;

        }


        if (!phone) {

          alert("Please enter your phone number.");

          return;

        }


        if (!date) {

          alert("Please select an appointment date.");

          return;

        }


        if (!department) {

          alert("Please select a department.");

          return;

        }


        /* Format date */

        let formattedDate = date;

        if (date) {

          const dateObject =
            new Date(date + "T00:00:00");

          formattedDate =
            dateObject.toLocaleDateString(
              "en-IN",
              {
                day: "2-digit",
                month: "long",
                year: "numeric"
              }
            );

        }


        /* WhatsApp message */

        const whatsappMessage =
`Hello Ayodhya Hospital,

I would like to book an appointment.

Patient Name: ${name}

Phone Number: ${phone}

Preferred Date: ${formattedDate}

Department: ${department}

Message:
${message || "No additional message"}

Thank you.`;


        /* Ayodhya Hospital WhatsApp number */

        const whatsappNumber =
          "918332921911";


        /* Create WhatsApp URL */

        const whatsappURL =
          "https://wa.me/" +
          whatsappNumber +
          "?text=" +
          encodeURIComponent(whatsappMessage);


        /* Open WhatsApp */

        window.open(
          whatsappURL,
          "_blank"
        );

      });

  }


  /* =========================================
     SET MINIMUM APPOINTMENT DATE
  ========================================= */

  const dateInput =
    document.getElementById("date");


  if (dateInput) {

    const today =
      new Date();

    const year =
      today.getFullYear();

    const month =
      String(
        today.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        today.getDate()
      ).padStart(2, "0");


    const todayString =
      `${year}-${month}-${day}`;


    dateInput.setAttribute(
      "min",
      todayString
    );

  }


  /* =========================================
     HEADER SHADOW ON SCROLL
  ========================================= */

  const header =
    document.querySelector("header");


  window.addEventListener(
    "scroll",
    function () {

      if (!header) return;


      if (window.scrollY > 20) {

        header.style.boxShadow =
          "0 8px 30px rgba(20,80,85,0.08)";

      } else {

        header.style.boxShadow =
          "none";

      }

    }
  );


});