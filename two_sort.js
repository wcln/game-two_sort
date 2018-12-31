
var items = [
  {
    name: "Airplanes",
    column: "left"
  },
  {
    name: "Cars",
    column: "left"
  },
  {
    name: "Food",
    column: "right"
  },
  {
    name: "Shelter",
    column: "right"
  },
  {
    name: "Water",
    column: "right"
  },
  {
    name: "Juice",
    column: "left"
  },
  {
    name: "Video Games",
    column: "left"
  },
  {
    name: "Computers",
    column: "left"
  },
  {
    name: "Kitchen",
    column: "left"
  }
]


function init() {
  // Shuffle items.
  shuffle(items);

  // Add items to items <div>.
  for (var i = 0; i < items.length; i++) {
    let item = items[i];

    let newItemDiv = document.createElement("div");
    newItemDiv.setAttribute("class", "draggable");
    newItemDiv.setAttribute("draggable", "true");
    newItemDiv.setAttribute("ondragstart", "drag(event)");
    newItemDiv.setAttribute("id", "item-" + i)

    let newItemP = document.createElement("p");
    newItemP.innerHTML = item.name;

    newItemDiv.appendChild(newItemP);

    document.getElementById("items").appendChild(newItemDiv);
  }
}

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));

  // Check if all items are sorted.
  // If so, enable the check button.
  var allSorted = true;
  $('.draggable').each(function(index) {
    if (!$(this).is('#left .draggable, #right .draggable')) {
        allSorted = false;
    }
  });
  if (allSorted) {
    $('#check-button').prop('disabled', false);
    $("#check-button").prop('title', "Click to check your score!");
  } else {
    $('#check-button').prop('disabled', true);
    $("#check-button").prop('title', "Sort all items before clicking 'Check'.");
  }
}

function check() {
  // Check which items were correctly placed.
  var numCorrect = 0;
  for (var i = 0; i < items.length; i++) {
    if ($('#item-' + i).parent().is('#' + items[i].column)) { // Correct.
      $('#item-' + i).addClass("correct");
      numCorrect++;
    } else { // Incorrect.
      $('#item-' + i).addClass("incorrect");
    }
  }

  // Disable check and reset buttons.
  $("div#footer-bar button").prop("disabled", true);

  // Show result.
  $("#result > h2 > b").html("Score " + numCorrect + "/" + items.length);
  $("#result").css("display", "block");
}

function reset() {
  // Hide result.
  $("#result").css("display", "none");

  // Enable reset button.
  $("#reset-button").prop("disabled", false);

  // Remove all items.
  $(".draggable").remove();

  // Re-add the items.
  init();
}


/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
