// https://mlbkadeqohvoalvuqhec.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8
// select=id,title,season/0,season/1,season/2,season/3,categories/0/name,sankelandskaber/0/title,sankelandskaber/0/profile_image/src,sankelandskaber/0/profile_image/id
fetch("https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11?limit=6", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
  },
})
  .then((res) => res.json())
  .then(showProducts);

function showProducts(products) {
  //Looper og kalder showProduct
  products.forEach(showProduct)
}

function showProduct(product){
  // console.log(product);
  //fangt template
const template = document.querySelector("#retterTemplate").content;
  //lav kopi
const copy = template.cloneNode(true);
  //ændre indhold
  // *********Tilføj img********
copy.querySelector("h3").textContent=product.ret;
copy.querySelector("p").textContent=product.retDescription;
//Forsøg på at ændre recipe_btn: 
// copy.querySelector(".recipe_btn")setAttribute("href", `product.html?id=${product.id}`);
  //appende
document.querySelector("main").appendChild(copy);
}

/*
{
    "id": 287,
    "title": "Syre, almindelig",
    "categories": "Urter og mindre vækster",
    "sankelandskaberTitle": "Hegn",
    "sankelandskaberImg": "https://vildmadv2.vps.webdock.io/application/files/2114/9036/4146/hegn.jpg",
    "sankelandskaberArea": "Tæt bevokset",
    "sankelandskaberTitle2": "Grøftekant",
    "sankelandskaber3": "Næringsfattig",
    "ingredientImg": "https://vildmadv2.vps.webdock.io/application/files/8416/2401/2670/Alm-syre_ravarkort_app.png",
    "ingredientImgId": 5427,
    "ret": "Pandekager",
    "ret_img": "pandekager.svg",
    "ingredienser": "Ingredienser : \r\nPandekagedej \r\n2 dl hvedemel\r\n2 spsk sukker\r\n1 tsk bagepulver\r\n1/2 tsk salt\r\n2 dl mælk\r\n1 æg\r\n2 spsk smeltet smør\r\nLidt smør til stegning\r\n2 spsk flormelis\r\n1 glas nutella \r\n150 g fuglekirsebær\r\n150 g hyldebær\r\n½ håndfuld skovsyre \r\n",
    "fremgangsmaede": "Sådan gør du \r\n\r\n1. Start med at tage en stor skål. I skålen blander du hvedemel, sukker, bagepulver og salt sammen med en ske. \r\n\r\n2. Hæld mælken i skålen og knæk ægget i. Tilsæt også smeltet smør. Brug skeen til at røre det hele sammen, indtil det bliver til en dej. \r\n\r\n3. Varm panden op på medium varme og tilsæt en lille smule smør eller olie, så pandekagerne ikke hænger fast.\r\n\r\n4. Når panden er varm, kan du bruge en ske til at hælde små portioner af dej på panden. Det bliver til pandekager. Vent, indtil der dannes små bobler på overfladen af pandekagerne, og de begynder at se faste ud i kanten. Det tager cirka 2 minutter.\r\n\r\n5. Brug en spatel til forsigtigt at vende pandekagerne om på den anden side. Lad dem stege i yderligere 1-2 minutter, indtil de er gyldne og færdige.\r\n\r\n6. Tag pandekagerne af panden og læg dem på en tallerken. \r\nNu er dine pandekager klar til at blive et pandekagetårn. Smør hver pandekage med Nutella og læg dem sammen som en lagkage med lidt friske bær imellem hvert lag. Pynt pandekagetårnet med friske bær og flormelis på toppen. \r\n",
    "velbekomme": "Velbekomme!",
    "redskaber": "Køkkenredskaber :  \r\nEn vægt \r\nEn skål \r\nEn pande \r\nEn kniv \r\n",
    "skalSankes": "Ingredienser som skal sankes:"
} 
*/