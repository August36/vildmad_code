// https://mlbkadeqohvoalvuqhec.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8
// select=id,title,season/0,season/1,season/2,season/3,categories/0/name,sankelandskaber/0/title,sankelandskaber/0/profile_image/src,sankelandskaber/0/profile_image/id
fetch("https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11", {
    method: "GET",
    headers: {
        apikey:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8"
    },
})
    .then((res) => res.json())
    .then(showData);

function showData(items){
    console.log(items);
    document.querySelector(".skovsyre_img").src="https://vildmadv2.vps.webdock.io/application/files/8416/2401/2670/Alm-syre_ravarkort_app.png";
    document.querySelector(".fuglekirsebaer_img").src="https://vildmadv2.vps.webdock.io/application/files/8916/2437/0577/Fuglekirsbaer_ravarekort_app.png";
    document.querySelector(".hyldebaer_img").src="https://vildmadv2.vps.webdock.io/application/files/5116/2437/3339/Hyld_ravarkort_app.png";
    // items.forEach()
}

// function(){}