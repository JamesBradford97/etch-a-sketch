const containerDiv = document.querySelector("#container");

const resetBtn = document.createElement("button");

let sides = 16;

resetBtn.textContent = "Reset Canvas";

resetBtn.addEventListener("click",()=>{
    sides = prompt("Please enter number of squares per side (<100): ");
});

containerDiv.appendChild(resetBtn);

function printGrid(sides, containerDiv){
    for (j=0;j<sides;j++){
        const rowDiv = document.createElement("div");
        rowDiv.setAttribute("class","rowDiv");
    
        for (i=0;i<sides;i++){
            const gridDiv = document.createElement("div");
            gridDiv.setAttribute("class","gridDiv");
            gridDiv.addEventListener("mouseenter",()=>{
                gridDiv.setAttribute("class","gridDiv hover");
            });
            rowDiv.appendChild(gridDiv);
        }
        containerDiv.appendChild(rowDiv);
    }
}

printGrid(sides, containerDiv);