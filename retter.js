// https://mlbkadeqohvoalvuqhec.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8
// select=id,title,season/0,season/1,season/2,season/3,categories/0/name,sankelandskaber/0/title,sankelandskaber/0/profile_image/src,sankelandskaber/0/profile_image/id
fetch("https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11?limit=6&order=id.asc", {
//?limit=6&order=id.asc - this last part of the URL sorts the data after the ID in the API  
method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
  },
})
.then((res) => res.json())
.then((products) => {
  const productList = document.getElementById('productList'); // Get the product list container

  // Loop through the products and append each product to the product list
  products.forEach((product) => {
    const template = document.querySelector("#retterTemplate").content;
    const copy = template.cloneNode(true);

    // Update the content of the cloned template
    copy.querySelector("h3").textContent = product.ret;
    copy.querySelector("p").textContent = product.retDescription;

    productList.appendChild(copy); // Append the product to the product list container
  });
});
