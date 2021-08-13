import "../config/module-alias";
import { PersonController } from "@/application/controllers";

const person = new PersonController();
person.speak("Julio");
person.speak();
