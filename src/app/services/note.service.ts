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
	// After that, go to App Module to declare wihtin "provider"

	// After those :v, go to noteList to use :3

	getAllNotes() {
		return this.notes;
	}

	addNote( note: Note) {
		note.id = this.getLastID(this.notes) + 1;
		this.notes.push(note);
		this.notes.sort((a, b) => {
			if (a.id > b.id) {
				return -1; 
			}
			else if (a.id < b.id) {
				return 1; 
			}
			return 0
		})
		// console.log(this.notes);
	}

	getLastID(notes) {
		let lastID = notes.length > 0 ?
				// Sort decreasingly
				notes.sort((a, b) => {
					if (a.id > b.id) {
						return -1; 
					}
					else if (a.id < b.id) {
						return 1; 
					}
					return 0
				})[0].id : 0;
		return lastID;
	}

	getNoteByID(id: number) {
		let foundNote = this.notes.filter(x => x.id === id);
		return foundNote;
	}

	deleteNote(id: number) {
		let resultNotes = this.notes.filter(note => note.id !== id);
		this.notes = resultNotes;
		console.log(this.notes);
		return this.notes;
	}	
}
