import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MentionModule } from 'angular-mentions';
import { TextareaHighlightComponent } from './textarea-highlight/textarea-highlight.component';

@NgModule({
  declarations: [AppComponent, TextareaHighlightComponent],
  imports: [BrowserModule, FormsModule, MentionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
