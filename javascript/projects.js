import { CreateProjectCard } from "./modules/project-card.js";
import {cityAlleyProject, creepyHotelHallway, coffeeShopWebsite} from './projects-data.js';

var container = $("#projects-container");

CreateProjectCard(cityAlleyProject, container);
CreateProjectCard(creepyHotelHallway, container);
CreateProjectCard(coffeeShopWebsite, container);