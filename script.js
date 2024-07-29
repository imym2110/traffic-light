const lightsArr = Array.from(document.querySelectorAll(".light"));
let currentLight = 0;

const lightChange = () => {
  lightsArr.map((item) => item.classList.remove("active"));
  lightsArr[currentLight].classList.add("active");

  currentLight = currentLight + 1 === lightsArr.length ? 0 : currentLight + 1;
};

setInterval(lightChange, 3000);
lightChange();
