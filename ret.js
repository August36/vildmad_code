//Jeg har fundet ud af hvordan jeg gør html elementerne dynamiske, men kun med rows som hører under columnen 'ret'.
//  Det har jeg gjort ved at tilføje ?select=ret i URL'en. Men hvordan tilføjer jeg de andre columns??

fetch(`https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11?select=ret`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
  },
})
.then(response => response.json())
.then((data) => {
  showH1(data[0]); // Targeter h1
  showH2(data[3]); // Targeter h2
  showP1(data[4]); // targeter den første p1 (.ingredient_amount_paragraph) på siden. Skift data ud med det rigtige fra databasen.
});

function showH1(product){
    if (product) {
        console.log(product);
        document.querySelector("h1").textContent = product.ret;
    } else {
        console.log("no data found");
    }
}

function showH2(product) {
    if (product) {
        document.querySelector("h2").textContent = product.ret;
    } else {
        console.log("No data found for the h2");
    }
}

function showP1(product) {
    if (product) {
        document.querySelector(".ingredient_amount_paragraph").textContent = product.ret;
    } else {
        console.log("No data found for the paragraph");
    }
}

//Her skal imaget være, hvordan gør jeg det?
