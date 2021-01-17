import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from './author/author.component';
import { HomeComponent } from './util/home/home.component';
import { PagenotfoundComponent } from './util/pagenotfound/pagenotfound.component';

const routes: Routes = [
    {path: 'authors', component: AuthorComponent},
    {path: 'articles', component: ArticleComponent},
    {path: '', component: HomeComponent},
    { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
