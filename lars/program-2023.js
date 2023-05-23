getActivities();
async function getActivities(){
    const response = await fetch("https://raw.githubusercontent.com/Katta-IT/Hamar-Tech-Backend/main/lars/program.json");
    const data = await response.json();
    for(let x = 0; x < data.length; x++){
        for(let i = 0; i < data[x].activities.length; i++){
            document.getElementById("page-content").innerHTML +=
            `
            <div class="container" onclick="redirect('https://www.hamartech.eu/lars/program-2023/${fileify(data[x].activities[i].name)}')" style="background-color: ${data[x].color};">
                <h1 id="name">${data[x].activities[i].name}</h1>
            </div>
            `;
        }
    }
}

function fileify(string){
    let result = "";
    for(let i = 0; i < string.split("").length; i++){
        switch(string.split("")[i].toLowerCase()){
            case " ":
                result += "-";
            break;
            case "æ":
                result += "ae";
            break;
            case "å":
                result += "a";
            break;
            case "ø":
                result += "o";
            break;
            default:
                result += string.split("")[i].toLowerCase()
            break;
        }
    }
    return result;
}

function redirect(url){
    window.location.href = url;
}