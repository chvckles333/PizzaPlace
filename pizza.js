window.onload = showValues;

function showValues()
{
  var veg = document.getElementById("checkVeggies");
  //veg.defaultChecked = true;
  var name = document.getElementById("orderName");
  //name.value = "Kevin";
  console.log("Finished running JavaScript");
}

function getCustomerName()
{
  var name = document.getElementById("orderName");
  console.log("Order received by " + name.value);

  var veg = document.getElementById("checkVeggies").checked;
  var pep = document.getElementById("checkPepperoni").checked;
  var sau = document.getElementById("checkSausage").checked;
  if(veg == true) {
    console.log("Veggie Pizza");
  }
}
