## Unix Commands

### The Command line
- Interact: Exchange information or send and receive information
  - input: keyboard, mouse, microphone, camera, touch-sensitive devices, and so on
  - output: speakers, monitors, headsets, and haptic devices to name just a few
- graphical user interfaces (GUIs): facilitate your interactions, offer an easy way to interact with devices, but they also somewhat limit the scope of human-computer interaction
- alternatives: microphone, command line stc.
- command line
  -  allows developers to perform tasks quicker and with enough experience, less potential for errors
- Track, access remote servers, search, unzip, access manuals, install and uninstall, check disks
- automate, control access, stop or restart, containerization, run, download, create aliases
- Creating directories: 
  - `mkdir xxx` make new folder
- Changing directories
  - `cd ~/directory` go to directory folder
  - `cd ..` move out of the current directory and back into the parent directory
- Creating files
  - `touch xxx.xxx` makes a new file of whatever type you specify
- Look up recent typed commands
  - `history`
- Combining firectories
- Copying and mmoving files
- Performing Advanced searches

### What are Unix commands?
- basic Unix commands
  - `man xxxx` manual, helper instruction that gives detailed information about how the commands can be run and how something we call flags can be passed. 
    - `-x` flags used to modify the behaviour of a command
  - `ls` show the contents of the current working directory
    - `ls -l` lists the file out in the list folder and shows the read or write permissions and owners and groups ot belongs to
    - `ls -a` list all files and directories including hidden ones
  - `pwd` print working directories, shows the full path of the current working directories
  - `cp` copy, copies files or folders from one destination to another
  - `mv` move, moves files from one directory to another

### Using Bash on Mac Terminal
|Command |Used for|
|--|--|
|cd|Change Directory|
|ls|List command used for showing the content of a directory|
|rm|Remove command used for removing a file or a directory|
|mv|Used to move files or folders to another location
|touch|Allows creating of a new empty file or to upate a timestamp on a file|
|cp|Used to make a copy of a file or foldler|
|mkdir|Make a new directory|
|pwd|Print work directory, shows the current location in the shell|
|cat|Allows reading or concatenation of a file|
|less|Displays the contents of a file one page at a time.|
|grep|Global regular expression, allows for searching contents of files or folders|

### Using Bash on Windows
- `less` to display, `q` to exit
- `.bashrc` file
  - The bashRC file is mainly for configurations. It is essentially a script file that's executed when you first open the terminal window
  - include configurations for the shell itself, for example, the types of colors uses, can also add in things around my shell history, like how much history of previous commands I want to store and so on. Any configuration options that I put in here will be executed when the terminal session begins
- `.profile` 
  - tends to be used more for environment variables
- `vim testbash.sh` create file
  - `i` for insert mode
  - `#!/bin/bash` to the operating system know that this is a bash script
  - `escape` to get out of the insert mode
  - `:wq!` to save file, press `enter`
- not available to executable as a read/write file, to execute need `x` be set on it
  - `chmod 755 testbash.sh`, where 755 is the type of permission
- `./testbash.sh` to run the file 
- `echo ""` to print out
