import { Component } from '@angular/core';
import { Note } from './models/note.class';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent {
	public title = 'Note Manager';
	public isShowForm : boolean = false;

	public currentNote : Note;

	onClickInteractingForm() {
		this.isShowForm = !this.isShowForm;
	}

	onGetCurrentNote(value) {
		// console.log(value);
		this.currentNote = value;
	}
}
