let avgBurn = document.querySelector("#avg-brn");
let fuelCost = document.querySelector("#fuel-cost");
let distance = document.querySelector("#distance");

const calculate = () => {
  const totalCost = (Number(avgBurn.value) * Number(distance.value) / 100) * Number(fuelCost.value);
  const formattedTotalCost = totalCost.toFixed(2);
  document.querySelector("#wynik").innerHTML = `Koszt twojej podróży to ${formattedTotalCost} zł`;
};

document.querySelector("#calculate").addEventListener("click", calculate);



