//Jeg har fundet ud af hvordan jeg gør html elementerne dynamiske, men kun med rows som hører under columnen 'ret'.
//  Det har jeg gjort ved at tilføje ?select=ret i URL'en. Men hvordan tilføjer jeg de andre columns??
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(
  `https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11` + id,
  {
    method: "GET",
    headers: {
      apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
    },
  }
)
  .then((response) => response.json())
  .then((data) => {
    showH1(data[0]); // Targets h1 - the [number] selects which row i chose
    showH2(data[0]); // Targets h2
    showH3(data[0]); // targets h3
    showP1(data[0]); // targets first paragraph on site (.ingredient_amount_paragraph)
    showP2(data[0]); // targets 2nd paragraph (.ingredients)
    showP3(data[0]); // 3d paragraph (.tools)
    showP4(data[0]); // 4th paragraph (.recipe)
  });

function showH1(product) {
  if (product) {
    console.log(product);
    document.querySelector("h1").textContent = product.ret; // the text after product. selects the column. in this case the column 'ret'. write the name of any column in supabase table to change it
  } else {
    console.log("no data found");
  }
}

function showH2(product) {
  if (product) {
    document.querySelector("h2").textContent = product.skalSankes;
  } else {
    console.log("No data found for the h2");
  }
}

function showH3(product) {
  if (product) {
    document.querySelector("h3").textContent = product.velbekomme;
  } else {
    console.log("No data found for the h3");
  }
}
//Her skal billeder sættes ind
function showP1(product) {
  if (product) {
    document.querySelector(".ingredient_amount_paragraph").textContent =
      product.categories;
  } else {
    console.log("No data found for the paragraph");
  }
}
//Her skal de resterende ingredienser som skal sankes sættes ind

function showP2(product) {
  if (product) {
    document.querySelector(".ingredients").textContent = product.ingredienser;
  } else {
    console.log("No data found for the paragraph");
  }
}

function showP3(product) {
  if (product) {
    document.querySelector(".tools").textContent = product.redskaber;
  } else {
    console.log("No data found for the paragraph");
  }
}

function showP4(product) {
  if (product) {
    document.querySelector(".recipe").textContent = product.fremgangsmaede;
  } else {
    console.log("No data found for the paragraph");
  }
}
// Evt. del opskriften op, så der kommer afsnit i teksten - lav en ny paragraph

/* 
*************Lærens eksempel på kun at vælge data fra en bestemt kolonne - i dette eksempe "tags".
Derudover vælger han de rows der indeholder teksten "vand"?? - er det rigtigt??***********************
function showData(items) {
    items.forEach(element => {
        // Check if the "tags" property exists in the element
        if (element.tags) { // Corrected the if statement condition
            // Check if the "vand" tag is present in the "tags" array
            if (element.tags.includes("vand")) { // Corrected the variable name to "element" instead of "elements"
                // Log the current element to the console
                console.log(element); // Corrected the variable name to "element" instead of "elements"
            }
        }
    });
}
*/
