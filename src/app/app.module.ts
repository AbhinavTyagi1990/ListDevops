import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {PostCreateComponent} from './posts/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component'

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
