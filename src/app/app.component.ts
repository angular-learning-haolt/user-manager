import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'Note Manager';
	public isShowForm : boolean = false;

	onClickInteractingForm() {
		this.isShowForm = !this.isShowForm;
	}
}
