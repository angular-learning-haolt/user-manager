import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { NoteService } from './../../services/note.service';
import { Note } from './../../models/note.class';


@Component({
	selector: 'nm-note-form',
	templateUrl: './note-form.component.html',
	styleUrls: ['./note-form.component.css']
})
export class NoteFormComponent implements OnInit {

	public titleForm : string = 'Note Form';
	public title : string = '';
	public content : string = '';
	public _currentNote : Note = new Note(null, '','');

	@Input() currentNote: Note;

	constructor(
		private _noteService : NoteService
	) { 
	}

	ngOnInit() {
		// this.handle();
	}

	// handle() {
	// 	if (this.currentNote !== null) {
	// 		this._currentNote = this.currentNote;
	// 	}
	// 	console.log(this._currentNote);
	// }

	addNote() {
		let note = new Note(null, this.title, this.content);
		this._noteService.addNote(note);
	}


}
