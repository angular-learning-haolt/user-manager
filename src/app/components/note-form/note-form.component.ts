import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'nm-note-form',
	templateUrl: './note-form.component.html',
	styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

	public title : string;
	public content : string;

	constructor() { }

	ngOnInit() {
	}

	addNote() {
		console.log(this.title, this.content);
	}
}
