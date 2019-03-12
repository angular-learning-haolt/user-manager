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
	public errors : string[] = [];

	@Input('currentNote') currentNote: Note;
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
		let errors = this.validateForm();
		if (errors.length <= 0) {
			let note = new Note(null, this.title, this.content);
			this._noteService.addNote(note);
			this.onCloseForm();
		}
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

	validateForm() {
		if(this.title === '') {
			let error = 'Please type title, you guys ^^';
			this.errors.push(error);
		}
		if(this.content === '') {
			let error = 'Please type content, you guys !';
			this.errors.push(error);
		}
		else if(this.content.length > 5) {
			let error = 'Sorry. Content dimension is not over 400 words.';
			this.errors.push(error);
		}
		return this.errors;
	}
	
	resetErrors() {
		this.errors = [];
	}
}
