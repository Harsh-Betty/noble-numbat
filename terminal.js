const outputDiv = document.getElementById("output");
const inputField = document.getElementById("inputField");

inputField.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    const command = inputField.value;
    inputField.value = ""; // Clear input field after entering command
    displayCommand(command); // Display entered command
    executeCommand(command);
  }
});

function executeCommand(command) {
  const commandArgs = command.split(" "); // Split the command into an array of arguments

  // Get the command name (the first argument)
  const cmd = commandArgs[0].toLowerCase();

  // Depending on the command, execute different actions
  switch (cmd) {
    case "help":
      displayOutput("List of available commands:");
      displayOutput("- help: Display list of available commands");
      displayOutput("- clear: Clear the terminal screen");
      displayOutput("- ls: List directory contents");
      displayOutput("- cd: Change the current directory");
      displayOutput("- mkdir: Create a directory");
      displayOutput("- touch: Create a file");
      displayOutput("- rm: Remove a file or directory");
      displayOutput("- cp: Copy files or directories");
      displayOutput("- mv: Move files or directories");
      displayOutput("- cat: Display file contents");
      displayOutput("- grep: Search file contents");
      displayOutput("- find: Search for files");
      displayOutput("- chmod: Change file permissions");
      displayOutput("- sudo: Execute a command as the superuser");
      displayOutput("- man: Display the manual page for a command");
      displayOutput("- ssh: Connect to a remote server");
      displayOutput("- top: Display system resource usage");
      displayOutput("- ps: Display running processes");
      displayOutput("- kill: Terminate a process");
      displayOutput("- wget: Download files from the internet");
      break;

    case "clear":
      outputDiv.innerHTML = ""; // Clear the terminal screen
      break;

    case "ls":
      // Logic for listing directory contents
      displayOutput(
        "Listing directory contents... (This feature is not implemented yet)"
      );
      break;

    case "cd":
      // Logic for changing the current directory
      displayOutput(
        "Changing directory... (This feature is not implemented yet)"
      );
      break;

    case "mkdir":
      // Logic for creating a directory
      if (commandArgs.length < 2) {
        displayOutput("Usage: mkdir <directory_name>");
      } else {
        const directoryName = commandArgs[1];
        displayOutput(
          `Creating directory '${directoryName}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "touch":
      // Logic for creating a file
      if (commandArgs.length < 2) {
        displayOutput("Usage: touch <file_name>");
      } else {
        const fileName = commandArgs[1];
        displayOutput(
          `Creating file '${fileName}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "rm":
      // Logic for removing a file or directory
      if (commandArgs.length < 2) {
        displayOutput("Usage: rm <file_or_directory>");
      } else {
        const target = commandArgs[1];
        displayOutput(
          `Removing '${target}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "cp":
      // Logic for copying files or directories
      if (commandArgs.length < 3) {
        displayOutput("Usage: cp <source> <destination>");
      } else {
        const source = commandArgs[1];
        const destination = commandArgs[2];
        displayOutput(
          `Copying '${source}' to '${destination}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "mv":
      // Logic for moving files or directories
      if (commandArgs.length < 3) {
        displayOutput("Usage: mv <source> <destination>");
      } else {
        const source = commandArgs[1];
        const destination = commandArgs[2];
        displayOutput(
          `Moving '${source}' to '${destination}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "cat":
      // Logic for displaying file contents
      if (commandArgs.length < 2) {
        displayOutput("Usage: cat <file>");
      } else {
        const fileName = commandArgs[1];
        displayOutput(
          `Displaying contents of '${fileName}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "grep":
      // Logic for searching file contents
      if (commandArgs.length < 3) {
        displayOutput("Usage: grep <pattern> <file>");
      } else {
        const pattern = commandArgs[1];
        const fileName = commandArgs[2];
        displayOutput(
          `Searching for '${pattern}' in '${fileName}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "find":
      // Logic for searching for files
      if (commandArgs.length < 2) {
        displayOutput("Usage: find <directory>");
      } else {
        const directory = commandArgs[1];
        displayOutput(
          `Searching for files in '${directory}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "chmod":
      // Logic for changing file permissions
      if (commandArgs.length < 3) {
        displayOutput("Usage: chmod <permissions> <file>");
      } else {
        const permissions = commandArgs[1];
        const fileName = commandArgs[2];
        displayOutput(
          `Changing permissions of '${fileName}' to '${permissions}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "sudo":
      // Logic for executing a command as the superuser
      if (commandArgs.length < 2) {
        displayOutput("Usage: sudo <command>");
      } else {
        const commandToRun = commandArgs.slice(1).join(" ");
        displayOutput(
          `Executing '${commandToRun}' as superuser... (This feature is not implemented yet)`
        );
      }
      break;

    case "man":
      // Logic for displaying the manual page for a command
      if (commandArgs.length < 2) {
        displayOutput("Usage: man <command>");
      } else {
        const commandToLookup = commandArgs[1];
        displayOutput(
          `Displaying manual page for '${commandToLookup}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "ssh":
      // Logic for connecting to a remote server
      if (commandArgs.length < 2) {
        displayOutput("Usage: ssh <hostname>");
      } else {
        const hostname = commandArgs[1];
        displayOutput(
          `Connecting to '${hostname}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "top":
      // Logic for displaying system resource usage
      displayOutput(
        "Displaying system resource usage... (This feature is not implemented yet)"
      );
      break;

    case "ps":
      // Logic for displaying running processes
      displayOutput(
        "Displaying running processes... (This feature is not implemented yet)"
      );
      break;

    case "kill":
      // Logic for terminating a process
      if (commandArgs.length < 2) {
        displayOutput("Usage: kill <pid>");
      } else {
        const pid = commandArgs[1];
        displayOutput(
          `Terminating process with PID '${pid}'... (This feature is not implemented yet)`
        );
      }
      break;

    case "wget":
      // Logic for downloading files from the internet
      if (commandArgs.length < 2) {
        displayOutput("Usage: wget <url>");
      } else {
        const url = commandArgs[1];
        displayOutput(
          `Downloading '${url}'... (This feature is not implemented yet)`
        );
      }
      break;

    default:
      // Command not recognized
      displayOutput(`Command not found: ${cmd}`);
      break;
  }
}

function displayOutput(output) {
  const outputElement = document.createElement("div");
  outputElement.textContent = output;
  outputDiv.appendChild(outputElement);
}

function displayCommand(command) {
  const commandElement = document.createElement("div");
  commandElement.textContent = "$ " + command;
  outputDiv.appendChild(commandElement);
}
