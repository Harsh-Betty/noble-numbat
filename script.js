function displayDateTime() {
  var now = new Date();

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var day = days[now.getDay()];
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var month = monthNames[now.getMonth()];
  var date = now.getDate();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var formattedDateTime =
    day +
    " " +
    month +
    " " +
    date +
    "&nbsp;&nbsp;&nbsp;&nbsp;" +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  document.getElementById("datetime").innerHTML = formattedDateTime;
}

window.onload = displayDateTime;
setInterval(displayDateTime, 1000);

// Get the modal element
var modal = document.getElementById("modal");
var github_modal = document.getElementById("github-modal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");
var github_btn = document.getElementById("openGitHub");

// Get the close button
var git_close = document.getElementById("git-close");

var desktop = document.getElementsByClassName("desktop")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.classList.remove("modal-close"); /* Remove closing animation */
  modal.style.display = "block";
  modal.classList.add("modal-open"); /* Add opening animation */
};

github_btn.onclick = function () {
  github_modal.style.display = "block";
};

// When the user clicks on the close button, close the modal
git_close.onclick = function () {
  github_modal.style.display = "none";
};

// Event listener for clicks outside of the modal
window.onclick = function (event) {
  if (event.target === desktop) {
    closeModal();
  }
};

// Function to close the modal
function closeModal() {
  modal.classList.remove("modal-open");
  modal.classList.add("modal-close");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); /* Delay to match the animation duration */
}

function closeGitHub() {
  setTimeout(() => {
    github_modal.style.display = "none";
  });
}

let commandHistory = [];
let historyIndex = -1;
const maxHistorySize = 50;

function processCommand(command) {
  const cleanCommand = command.trim().toLowerCase();
  let output = "";

  if (cleanCommand === "help") {
    output =
      "Available commands:\n" +
      "help - Show this help message\n" +
      "clear - Clear the terminal\n" +
      "date - Show current date and time\n" +
      "echo [text] - Display the text\n" +
      "whoami - Display current user";
  } else if (cleanCommand === "clear") {
    document.getElementById("output").innerHTML = "";
    return;
  } else if (cleanCommand === "date") {
    output = new Date().toString();
  } else if (cleanCommand.startsWith("echo ")) {
    output = command.substring(5);
  } else if (cleanCommand === "whoami") {
    output = "guest@visitor";
  } else if (cleanCommand === "") {
    return;
  } else {
    output = `Command not found: ${command}. Type 'help' for available commands.`;
  }

  return output;
}

document
  .getElementById("command")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const commandInput = this.value;
      const output = document.getElementById("output");

      // Add command to history
      if (commandInput.trim() !== "") {
        commandHistory.unshift(commandInput);
        if (commandHistory.length > maxHistorySize) {
          commandHistory.pop();
        }
      }
      historyIndex = -1;

      // Display command with prompt
      const commandDisplay = document.createElement("div");
      commandDisplay.innerHTML = `<span class="prompt">guest@visitor:~$</span> ${commandInput}`;
      output.appendChild(commandDisplay);

      // Process and display command output
      const result = processCommand(commandInput);
      if (result) {
        const resultDisplay = document.createElement("div");
        resultDisplay.textContent = result;
        output.appendChild(resultDisplay);
      }

      // Clear input and ensure output is visible
      this.value = "";
      output.style.display = "block";
      output.scrollTop = output.scrollHeight;
    }
  });

document
  .getElementById("command")
  .addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        this.value = commandHistory[historyIndex];
      }
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (historyIndex > -1) {
        historyIndex--;
        this.value = historyIndex >= 0 ? commandHistory[historyIndex] : "";
      }
    }
  });

function fun(e) {
  var container = document.getElementsByTagName("html")[0];
  var val = e.value;
  container.setAttribute("style", "filter: brightness(" + val + "%);");
}
