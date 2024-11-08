let countButton=document.getElementById("countTripButton")

console.log(countButton)

let trips=document.getElementsByClassName("trip")


let countTrip=()=>{alert("Today we have "+ trips.length + " trips available to book for you!")}
countButton.addEventListener("click", countTrip)


let removeTripsButton=document.querySelector("removeTripsButton");
console.log(removeTripsButton)

let removeTrips=()=>{trips.style.display="none";
}

removeTripsButton.addEventListener("click", removeTrips)