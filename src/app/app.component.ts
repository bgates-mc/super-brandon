import { Component } from "@angular/core";
import { PancakeService } from "./pancake/pancake.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "super-brandon";
  lettuce = ["default", "Brandon", "What's", "Up"];

  constructor(public pancake: PancakeService) {}

  ohmanthisisthehardpart(param) {
    return "difficult " + param;
  }
}
