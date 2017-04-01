function generateForm(){
  var numEchos = document.getElementById("numEchos");
  var numItems = document.getElementById("numItems");
  var button = document.getElementById("generateFormButton");

  var echos = numEchos.value;
  var items = numItems.value;
  numItems.parentNode.removeChild(numItems);
  button.parentNode.removeChild(button);

  numEchos.setAttribute("id", "restaurantId");
  numEchos.setAttribute("type", "text");
  numEchos.setAttribute("placeholder", "Restaurant ID");
  numEchos.value = "";

  var echoDisplay = document.createElement("p");
  echoDisplay.setAttribute("id", "echoDisplay");
  var textNode1 = document.createTextNode(echos);
  echoDisplay.appendChild(textNode1);

  var itemDisplay = document.createElement("p");
  itemDisplay.setAttribute("id", "itemDisplay");
  var textNode2 = document.createTextNode(items);
  itemDisplay.appendChild(textNode2);

  document.getElementById("container").appendChild(echoDisplay);
  document.getElementById("container").appendChild(itemDisplay);

  for (var i = 0; i < echos; i++){
    var brr = document.createElement("br");
    document.getElementById("container").appendChild(brr);

    var echobox = document.createElement("input");
    echobox.setAttribute("type", "text");
    echobox.setAttribute("placeholder", "Echo ID");
    echobox.setAttribute("id", "echo"+i);
    document.getElementById("container").appendChild(echobox);
  }

  var brr = document.createElement("br");
  document.getElementById("container").appendChild(brr);
  var brr = document.createElement("br");
  document.getElementById("container").appendChild(brr);

  for (var j = 0; j < items; j++){
    var itembox = document.createElement("input");
    itembox.setAttribute("type", "text");
    itembox.setAttribute("placeholder", "Item Name");
    itembox.setAttribute("id", "itemName"+i);
    document.getElementById("container").appendChild(itembox);

    var costbox = document.createElement("input");
    costbox.setAttribute("type", "text");
    costbox.setAttribute("placeholder", "Item Cost");
    costbox.setAttribute("id", "itemCost"+i);
    document.getElementById("container").appendChild(costbox);

    var brr = document.createElement("br");
    document.getElementById("container").appendChild(brr);
  }

  var brr = document.createElement("br");
  document.getElementById("container").appendChild(brr);

  var submit = document.createElement("button");
  submit.setAttribute("id", "submitButton");
  submit.setAttribute("onclick", "createRestaurant()");
  submit.innerHTML = "Submit";
  document.getElementById("container").appendChild(submit);
}

function createRestaurant(){
  var echos = document.getElementById("echoDisplay").innerHTML;
  var items = document.getElementById("itemDisplay").innerHTML;

  var object = {
    "name": "",
    "id": "",
    "echos": [],
    "items": [],
  }

  var name = document.getElementById("rName").value;
  object.name = name;

  var restaurantId = document.getElementById("restaurantId").value;
  object.id = restaurantId;

  for (var i = 0; i < echos; i++){
    var echo = document.getElementById("echo"+i).value;
    object.echos.push(echo);
  }

  for (var j = 0; j < items; j++){
    var itemName = document.getElementById("itemName"+i).value;
    var itemCost = document.getElementById("itemCost"+i).value;

    object.items.push({"name": itemName, "cost": itemCost});
  }
  var dataObj = JSON.stringify(object);
  var url = "http://localhost:4567/restaurant";
  console.log(jQuery.post(url, dataObj));

}
