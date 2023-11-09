document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button");
  const inputsContainer = document.querySelector(".inputs");

  button.addEventListener("click", function () {
    const dayInputValue = document.getElementById("day").value;
    const monthInputValue = document.getElementById("month").value;
    const yearInputValue = document.getElementById("year").value;

    if (
      dayInputValue === "" ||
      monthInputValue === "" ||
      yearInputValue === ""
    ) {
      const errorPara = document.createElement("p");
      errorPara.textContent =
        "Please enter valid numbers for day, month and year.";
      errorPara.classList.add("error");

      const errorContainer = document.createElement("div");
      errorContainer.classList.add("error-container");
      errorContainer.appendChild(errorPara);

      inputsContainer.insertAdjacentElement("afterend", errorContainer);

      return;
      
    }

    const currentDate = new Date();
    const inputDate = new Date(
      yearInputValue,
      monthInputValue - 1,
      dayInputValue
    );

    const ageMilliSeconds = currentDate - inputDate;
    const ageSeconds = ageMilliSeconds / 1000;
    const ageMinutes = ageSeconds / 60;
    const ageHours = ageMinutes / 60;
    const ageDays = ageHours / 24;
    const ageMonths = ageDays / 30.44;
    const ageYears = ageDays / 365.25;

    const yearPara = document.getElementById("yearPara");
    const monthPara = document.getElementById("monthPara");
    const dayPara = document.getElementById("dayPara");

    yearPara.innerText = `${Math.floor(ageYears)} years`;
    monthPara.innerText = `${Math.floor(ageMonths % 12)} months`;
    dayPara.innerText = `${Math.floor(ageDays % 30.44)} days`;

    // yearPara.style.color = "hsl(259, 100%, 65%)";
    // monthPara.style.color = "hsl(259, 100%, 65%)";
    // dayPara.style.color = "hsl(259, 100%, 65%)";
  });
});
