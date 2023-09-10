// https://mlbkadeqohvoalvuqhec.supabase.co
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1sYmthZGVxb2h2b2FsdnVxaGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MDgzNjYsImV4cCI6MjAwOTA4NDM2Nn0._KaG9H7dvxEtQBOqnpjnmdLml5vjSigGXSXpGtmHur8
// select=id,title,season/0,season/1,season/2,season/3,categories/0/name,sankelandskaber/0/title,sankelandskaber/0/profile_image/src,sankelandskaber/0/profile_image/id
fetch("https://mlbkadeqohvoalvuqhec.supabase.co/rest/v1/vildmad_gruppe11?select=id,title", {
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
    // items.forEach()
}

// function(){}