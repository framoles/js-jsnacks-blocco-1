/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.*/


btn = document.getElementById("verify");


btn.addEventListener("click", function () {
    const dbInvited = ["Mario", "Giovanni", "Luca", "Andrea", "Dino"];
    userName = document.getElementById("name");
    let regex = /^[a-z]+$/i;
    if (regex.test(userName.value)) {
        let invite = false;

        for (let i = 0; i < dbInvited.length; i++) {
            if ((userName.value).toLowerCase() === dbInvited[i].toLowerCase()) {
                invite = true;
                break;
            }
        }
        if (invite) {
            alert("Puoi partecipare alla festa");
        }
        else {
            alert("Non puoi partecipare alla festa")
        }
    }
    else {
        alert("Caratteri non validi")

    }
    userName.value = "";
})