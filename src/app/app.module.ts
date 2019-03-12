import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteListComponent } from './components/note-list/note-list.component';
import { NoteItemComponent } from './components/note-item/note-item.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

import { FormsModule } from '@angular/forms';

// Service
import { NoteService } from './services/note.service';
import { ErrorsComponent } from './components/errors/errors.component';

@NgModule({
    declarations: [
        AppComponent,
        NoteListComponent,
        NoteItemComponent,
        NoteFormComponent,
        ErrorsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [
        NoteService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
