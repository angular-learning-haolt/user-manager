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
	public currentNote : any;

	@Input() isShowForm : boolean;

	@Output('changeIsShowForm') 
		changeIsShowForm = new EventEmitter();
	@Output('getCurrentNote') 
		getCurrentNote = new EventEmitter();

	constructor(
		private _noteService : NoteService
	) { }

	ngOnInit() {
		this.notes = this._noteService.getAllNotes();		
	}

	onEditNote(id : number) {
		if (!this.isShowForm) {
			this.changeIsShowForm.emit(this.isShowForm);
		}
		// console.log(this.isShowForm);
		this.currentNote = this._noteService.getNoteByID(id);
		// console.log(this.currentNote);
		this.getCurrentNote.emit(this.currentNote);
	}

	onDeleteNote(id : number) {
		let foundNote = this._noteService.getNoteByID(id);
		alert(`Do you delete ${ foundNote[0].title } ?`);
		this._noteService.deleteNote(id);
	}

}
