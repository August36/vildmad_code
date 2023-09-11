//Jeg har fundet ud af hvordan jeg gør html elementerne dynamiske, men kun med rows som hører under columnen 'ret'.
//  Det har jeg gjort ved at tilføje ?select=ret i URL'en. Men hvordan tilføjer jeg de andre columns??

fetch(`https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
  },
})
.then(response => response.json())
.then((data) => {
  showH1(data[0]); // Targets h1 - the [number] selects which row i chose
  showH2(data[3]); // Targets h2
  showP1(data[4]); // targets first paragraph on site
  showP2(data[2]);
  showP3(data[2]);
});

function showH1(product){
    if (product) {
        console.log(product);
        document.querySelector("h1").textContent = product.ret; // the text after product. selects the column. in this case the column 'ret'. write name of any column in supabase table to change it
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
        document.querySelector(".ingredient_amount_paragraph").textContent = product.categories;
    } else {
        console.log("No data found for the paragraph");
    }
}

function showP2(product) {
    if (product) {
        document.querySelector(".recipe1").textContent = product.opskrift1;
    } else {
        console.log("No data found for the paragraph");
    }
}

function showP3(product) {
    if (product) {
        document.querySelector(".recipe2").textContent = product.opskrift2;
    } else {
        console.log("No data found for the paragraph");
    }
}

//Her skal imaget være, hvordan gør jeg det?
