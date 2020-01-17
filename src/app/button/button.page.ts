import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.page.html',
	styleUrls: ['./button.page.scss'],
})
export class ButtonPage implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	public focus() {
		console.log("Focus");
	}

	public blur() {
		console.log("Blur");
	}

}
