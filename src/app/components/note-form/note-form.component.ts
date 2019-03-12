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
	// public _currentNote : Note = new Note(null, '','');

	@Input() currentNote: Note;
	@Input() isShowForm : boolean;
	@Output('changeIsShowForm') 
		changeIsShowForm = new EventEmitter();
	constructor(
		private _noteService : NoteService
	) { 
	}

	ngOnInit() {
	}

	onAddNote() {
		let note = new Note(null, this.title, this.content);
		this._noteService.addNote(note);
		this.onCloseForm();
	}

	onCloseForm() {
		this.changeIsShowForm.emit(this.isShowForm);
	}

	onUpdateNote() {
		this.currentNote.title = this.title ? this.title : this.currentNote.title;
		this.currentNote.content = this.content ? this.content : this.currentNote.content;
		console.log(this.currentNote);
		this.onCloseForm();
	}
}
