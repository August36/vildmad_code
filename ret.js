//Jeg har fundet ud af hvordan jeg gør html elementerne dynamiske, men kun med rows som hører under columnen 'ret'.
//  Det har jeg gjort ved at tilføje ?select=ret i URL'en. Men hvordan tilføjer jeg de andre columns??
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
  document.querySelector(".ingredient_amount_paragraph").textContent =
    product[0].title;
  document.querySelector(".ingredients").textContent = product[0].ingredienser;
  document.querySelector(".tools").textContent = product[0].redskaber;
  document.querySelector(".recipe").textContent = product[0].fremgangsmaede;
  document.querySelector("h3").textContent = product[0].velbekomme;
  //document.querySelector("img").src=`https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`
  // test
}
