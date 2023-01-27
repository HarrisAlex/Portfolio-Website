import { Project, CreateProjectCard } from "./modules/project-card.js";

var cityAlleyProject = new Project(
    "City Alley", 
    "A dark, quiet alley", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "projects/city-alley.html",
    "images/projects/city-alley-preview.jpg",
    "City Alley Render"
);

var creepyHotelHallway = new Project(
    "Creepy Hotel Hallway", 
    "A creepy, dark hotel hallway", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "projects/creepy-hallway.html",
    "images/projects/creepy-hotel-hallway-preview.jpg",
    "Creepy Hotel Hallway Render"
);

var horrorGameMenuProject = new Project(
    "Horror Game Main Menu", 
    "A simple concept for a horror game's main menu", 
    "Among Us is a 2018 online multiplayer social deduction game developed and published by American game studio Innersloth. The game was inspired by the party game Mafia and the science fiction horror film The Thing.",
    "#",
    "images/projects/horror-game-menu-preview.jpg",
    "Horror Game Menu Concept"
);

var inGameComputerProject = new Project(
    "In-Game Computer",
    "Fully functional computer within a video game for story purposes",
    "",
    "#",
    "https://i0.wp.com/among-us.me/wp-content/uploads/2021/09/90-130cm-Among-Us-Long-Pillow-Cushion-Sleepng-Pillow-Animal-Doll-Kawaii-Figure-Peluche-Christmas-Gift.jpg_640x640.jpg?fit=640%2C640&ssl=1",
    "In-Game Computer"
);

var container = $("#projects-container");

CreateProjectCard(cityAlleyProject, container);
CreateProjectCard(creepyHotelHallway, container);
CreateProjectCard(horrorGameMenuProject, container);
CreateProjectCard(inGameComputerProject, container);