import { Component } from "@angular/core";

@Component({
    selector: "your-component",
    template:
        `
        <h1> Hey, this is your component</h1>
    `,
    styles: [
        `
        h1{
            color:blue;
        }
    `]
})
export class YourComponent {

}