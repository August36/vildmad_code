const url = `https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11?id=eq.`;
const options = {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
  },
};

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(url + id, options)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector("h1").textContent = product[0].ret;
  document.querySelector("h2").textContent = product[0].skalSankes;
  document.querySelector(".ingredient_title_paragraph").textContent = product[0].title;
  document.querySelector(".ingredient_title_paragraph2").textContent = product[0].title2;
  document.querySelector(".ingredient_title_paragraph3").textContent = product[0].title3;
  document.querySelector(".ingredients").textContent = product[0].ingredienser;
  document.querySelector(".tools").textContent = product[0].redskaber;
  document.querySelector(".recipe").textContent = product[0].fremgangsmaede;
  document.querySelector(".velbekomme_h3").textContent = product[0].velbekomme;
  document.querySelector(".dish_img").src = "https://holylamb.dk/retterImg/" + product[0].ret_img;
  document.querySelector(".ingredient_container .ingredient_img1").src = product[0].ingredientImg;
  document.querySelector(".ingredient_container .ingredient_img2").src = product[0].ingredientImg2;
  document.querySelector(".ingredient_container .ingredient_img3").src = product[0].ingredientImg3;
}
