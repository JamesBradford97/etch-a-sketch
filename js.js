const containerDiv = document.querySelector("#container");

for (j=0;j<16;j++){
    const rowDiv = document.createElement("div");
    rowDiv.setAttribute("class","rowDiv");

    for (i=0;i<16;i++){
        const gridDiv = document.createElement("div");
        gridDiv.setAttribute("class","gridDiv");
        rowDiv.appendChild(gridDiv);
    }
    containerDiv.appendChild(rowDiv);
}

