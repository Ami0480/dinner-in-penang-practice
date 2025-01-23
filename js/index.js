function displayRestaurant(response) {
  new Typewriter("#restaurant", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function searchRestaurant(event) {
  event.preventDefault();

  let searchInputElement = document.querySelector("#search-form-user");
  let apiKey = "25ba4b8ct7fc123o0c3d6fccfc118bbd";
  let prompt = `search restaurant in Penang about ${searchInputElement.value} `;
  let context = `You are a kowledge of the restaurant in Penang. Provide 1 spacific restaurant for the dinner about ${searchInputElement.value}. Restaurant name at the top with <strong> element and <br /> at the end of restaurant name.`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayRestaurant);

  let searchElement = document.querySelector("#restaurant");
  searchElement.classList.remove("hidden");
  searchElement.innerHTML = `<div class="blink">⏳ Searching your dinner</div>`;
}

let restaurantElement = document.querySelector("#search");
restaurantElement.addEventListener("submit", searchRestaurant);
