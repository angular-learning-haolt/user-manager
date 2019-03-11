import { Component, OnInit } from '@angular/core';
import { NoteService } from './../../services/note.service';
import { Note } from './../../models/note.class';


@Component({
	selector: 'nm-note-form',
	templateUrl: './note-form.component.html',
	styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

	public title : string;
	public content : string;

	constructor(
		private _noteService : NoteService
	) { }

	ngOnInit() {
	}

	addNote() {
		let note = new Note(null, this.title, this.content);
		this._noteService.addNote(note);
	}
}
