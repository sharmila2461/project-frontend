function addSkill(){

    let name = document.getElementById("name").value;
    let skill = document.getElementById("skill").value;

    if(name === "" || skill === ""){
        alert("Please fill all fields");
        return;
    }

    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML =
        "<h3>" + name + "</h3>" +
        "<p>Skill: " + skill + "</p>";

    document.getElementById("skillList").appendChild(card);

    document.getElementById("name").value = "";
    document.getElementById("skill").value = "";
}