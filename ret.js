fetch(`https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11?select=ret`, {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8",
  },
})
    .then(response => response.json())
    .then((data) => showRet(data[0]));

function showRet(product){
    if (product) {
        console.log(product);
        document.querySelector("h1").textContent = product.ret;
    } else {
        console.log("no data found");
    }
//     console.log(product);
// document.querySelector("h1").textContent = product.title;
}



// categories/0/name
// : 
// "Svampe"
// id
// : 
// 281
// profile_image/id
// : 
// 5433
// profile_image/src
// : 
// "https://vildmadv2.vps.webdock.io/application/files/8016/2436/5405/Ostershat_ravare_app.png"
// ret
// : 
// "Svampestuvning"
// ret_img
// : 
// null
// sankelandskaber/0/profile_image/id
// : 
// 1783
// sankelandskaber/0/profile_image/src
// : 
// "https://vildmadv2.vps.webdock.io/application/files/9414/9812/0663/VILDMAD_BT_BY_03-squashed.jpg"
// sankelandskaber/0/sub_biotopes/0/title
// : 
// "Park/have"
// sankelandskaber/0/sub_biotopes/1/title
// : 
// "Kyst/havn"
// sankelandskaber/0/title
// : 
// "By"
// sankelandskaber/1/sub_biotopes/0/title
// : 
// "Morbund"
// sankelandskaber/1/sub_biotopes/1/title
// : 
// "Mulbund"
// sankelandskaber/1/title
// : 
// "Løvskov"
// title
// : 
// "Østershat, almindelig"