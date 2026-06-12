function greet_afternoon()
{
    let text = document.getElementById("greet");
    text.innerHTML = "Good Afternoon";
}

function change_color()
{
    let color = document.getElementById("cap");
    color.style.backgroundColor = "black";

    let txt1 = document.getElementById("Data");
    txt1.style.color = "white";

    let txt2 = document.getElementById("greet");
    txt2.style.color = "white";
}
let onImage =
"https://static.scientificamerican.com/sciam/cache/file/2B38DE31-C1D3-4339-8808D61972976EE4_source.jpg?w=1200";

let offImage =
"https://cdn.vectorstock.com/i/1000v/70/44/3d-realistic-off-light-bulb-icon-closeup-vector-27407044.jpg"
function lightOn()
{
    document.getElementById("bulb").src = onImage;
}

function lightOff()
{
    document.getElementById("bulb").src = offImage;
}