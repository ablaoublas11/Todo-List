import "./styles/main.css";
import { AppController } from "./logic/AppController.js";
import { initEventListeners } from "./ui/eventListeners";
//πρέπει να γίνει import το eventListener.js

const appController = new AppController();
initEventListeners(appController);
