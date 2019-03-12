import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from './../../services/note.service';
import { Note } from './../../models/note.class';

@Component({
	selector: 'nm-note-list',
	templateUrl: './note-list.component.html',
	styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

	public notes : Note[] = [];

	@Input() isShowForm : boolean;

	@Output('changeIsShowForm') 
		changeIsShowForm = new EventEmitter();

	constructor(
		private _noteService : NoteService
	) { }

	ngOnInit() {
		this.notes = this._noteService.getAllNotes();		
	}

	onEditNote(id : number) {
		// alert('Do you delete this note?');
		// console.log(id);
		// this.isShowForm = !this.isShowForm;
		this.changeIsShowForm.emit(this.isShowForm);
		console.log(this.isShowForm);
		let foundNote = this._noteService.getNoteByID(id);
		console.log(foundNote);
	}

	onDeleteNote(id : number) {
		let foundNote = this._noteService.getNoteByID(id);
		alert(`Do you delete ${ foundNote[0].title } ?`);
		this._noteService.deleteNote(id);
	}

}
