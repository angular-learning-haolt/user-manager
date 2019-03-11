import { Component, OnInit } from '@angular/core';
import { NoteService } from './../../services/note.service';
import { Note } from './../../models/note.class';

@Component({
	selector: 'nm-note-list',
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

	public notes : Note[] = [];

	constructor(
		private _noteService : NoteService
	) { }

	ngOnInit() {
		this.notes = this._noteService.getAllNotes();
		console.log(this.notes);
	}

}
