// Definir variables
let area = "Área Ejemplo";
let population = 1000000;
let capital = "Ciudad Ejemplo";
let languages = ["Español", "Inglés"];
let currency = "Moneda Ejemplo";
let timeZone = "GMT-5";
let callingCode = "+57";
let internetTLD = ".co";
let temperature = 12; // Cambia esto según los datos
let conditions = "Nublado";
let wind = 2; // Cambia esto según los datos
let windChill;

// Definir función para calcular el factor de sensación térmica
function calculateWindChill(temp, windSpeed, unit) {
  return unit === "C"
    ? 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
    : 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
}

// Comprobar si se cumplen las condiciones para el cálculo de sensación térmica
if ((temperature <= 10 && wind > 4.8) || (temperature <= 50 && wind > 3)) {
  // Determinar la unidad de medida (Celsius o Fahrenheit)
  const unit = temperature <= 10 ? "C" : "F";
  windChill = calculateWindChill(temperature, wind, unit).toFixed(2);
} else {
  windChill = "N/A";
}

const sectionData = document.querySelector(".section_data");
sectionData.innerHTML += `
  <p><strong>Área:</strong> ${area}</p>
  <p><strong>Población:</strong> ${population}</p>
  <p><strong>Capital:</strong> ${capital}</p>
  <p><strong>Idiomas:</strong> ${languages.join(", ")}</p>
  <p><strong>Moneda:</strong> ${currency}</p>
  <p><strong>Zona Horaria:</strong> ${timeZone}</p>
  <p><strong>Código de Llamada:</strong> ${callingCode}</p>
  <p><strong>Dominio de Internet:</strong> ${internetTLD}</p>
`;


const sectionWeather = document.querySelector(".section_weather");
  sectionWeather.innerHTML += `
    <p><strong>Temperatura:</strong> ${temperature}°${temperature <= 10 ? "C" : "F"}</p>
    <p><strong>Condiciones:</strong> ${conditions}</p>
    <p><strong>Viento:</strong> ${wind} ${temperature <= 10 ? "km/h" : "mph"}</p>
    <p><strong>Sensación Térmica:</strong> ${windChill}</p>
  `;

console.log("Sensación Térmica:", windChill);
