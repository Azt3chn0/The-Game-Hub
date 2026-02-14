document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("title").style.top = "50px";
    let text = document.getElementById("title");

    text.style.opacity = "1";
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("box").style.top = "200px";
    let titleMembers = document.getElementById("titleMembers");
    let box = document.getElementById("box");

    box.style.opacity = "1";
    titleMembers.style.opacity = "0";

});
document.addEventListener("DOMContentLoaded", function(){
    let nextPage = document.getElementById("nextPage");

    nextPage.style.opacity = "1";


});
function next(){
    let firstPage = document.querySelectorAll(".firstPage");
    firstPage.forEach(el => el.style.opacity = "0");

    let TitleMembers = document.getElementById("titleMembers");
    TitleMembers.style.opacity = "1";
    TitleMembers.style.top = "50px";

    let hr1 = document.getElementById("hr1");
    hr1.style.opacity = "1";

    let owners = document.getElementById("Owners");
    owners.style.opacity = "1";

    let lionclad = document.getElementById("lionclad");
    lionclad.style.opacity = "1";

    let autumn = document.getElementById("autumn_i_guess");
    autumn.style.opacity = "1";

    let why = document.getElementById("why");
    why.style.opacity = "1";

    let mods = document.getElementById("mods");
    mods.style.opacity = "1";

    let aztechno  = document.getElementById("aztechno");
    aztechno.style.opacity = "1";
    let nobody = document.getElementById("nobody");
    nobody.style.opacity = "1";
    let ember = document.getElementById("ember");
    ember.style.opacity = "1";
    let aliza = document.getElementById("aliza");
    aliza.style.opacity = "1";
    let piggycore99 = document.getElementById("piggycore99");
    piggycore99.style.opacity = "1";
    let itsmeowyn35 = document.getElementById("itsmeowyn35");
    itsmeowyn35.style.opacity = "1";
    let sleigh_apeal = document.getElementById("sleigh_apeal");
    sleigh_apeal.style.opacity = "1";

    let member = document.getElementById("member");
    member.style.opacity = "1";

    let memberppl = document.getElementsByClassName("member");
    for (let i = 0; i < memberppl.length; i++){
        memberppl[i].style.opacity = "1";
    }

    let bot = document.getElementsByClassName("bot");
    for (let i = 0; i < bot.length; i++){
        bot[i].style.opacity = "1";
    }
    let bots = document.getElementById("bots");
    bots.style.opacity = "1";

    
}
