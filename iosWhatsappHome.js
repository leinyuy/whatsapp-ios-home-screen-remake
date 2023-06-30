function replicateDiv(divId, numOfCopies){
    for (i=0; i<numOfCopies; i++){
        newDiv=document.getElementById(divId).cloneNode(true);
        pasteDivs=document.getElementById("replication");
        pasteDivs.appendChild(newDiv);
    }
    
}
replicateDiv("dreChat",5);