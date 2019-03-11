import { Injectable } from '@angular/core';
import { Note } from './../models/note.class';

@Injectable({
	providedIn: 'root'
})
export class NoteService {

	public notes : Note[] = [
		new Note(1, 'Study Angular Docs', 'On Home Page, for a afternoon shift'),
		new Note(2, 'Practising Cajon', 'On MS Club, every weekend'),
		new Note(3, 'Shecodes Team Meeting', 'Worktitle in Slack, choose Agenda for Event')
	]
	constructor() { }

	getAllNotes() {
		return this.notes;
	}
	// After that, go to App Module to declare wihtin "provider"

	// After those :v, go to noteList to use :3
}
