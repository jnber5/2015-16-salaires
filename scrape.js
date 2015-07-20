var request = require("request"),
    cheerio = require("cheerio"),
    equipes = require("./equipes");

for (var i in equipes){
    if(i==="0"){
        if(equipes.hasOwnProperty(i)){
            console.log(i);
            var equipe = equipes[i];
            request(equipes[i].adresse, function(error, response, body) {
                if (!error) {
                    var $ = cheerio.load(body);
                    if ($('h1').text() === equipe.ville + ' ' + equipe.equipe){
                        console.log("Processing  " + $('h1').text());
                        $('.table-striped').each(function(){
                            console.log(this);
                        });


                    } else {
                        console.log("Pas la bonne equipe attendue ");
                    }

                } else {
                    console.log("We’ve encountered an error: " + error);
                }
            });
        }
    }
}
