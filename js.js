function printGrid(sides){
    const containerDiv = document.querySelector("#container");

    // Clear all children of container if any
    while (containerDiv.firstChild){
        containerDiv.removeChild(containerDiv.firstChild);
    }

    const resetBtn = document.createElement("button");

    resetBtn.textContent = "Reset Canvas";
    resetBtn.addEventListener("click",()=>{
        sides = prompt("Please enter number of squares per side (<100): ");
    
        if (sides > 100){
            alert("Sides must be lower than 100");
        }else{
            printGrid(sides);
        }
    });
    containerDiv.appendChild(resetBtn);


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


printGrid(16);