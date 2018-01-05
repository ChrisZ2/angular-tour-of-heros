import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { makeDecorator } from '@angular/core/src/util/decorators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  private log(message: String) {
    this.messageService.add('HereService: ' + message);
  }

  private heroesUrl = 'api/heroes'; //Url to web api


  //They'll do that with the RxJS tap operator, which looks at the observable values, 
  //does something with those values, and passes them along. The tap call back doesn't touch the values themselves.
  // Here is the final version of getHeroes with the tap that logs the operation.
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
      tap(heroes => this.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    const url = '${this.heroesUrl}/${id}';
    return this.http.get<Hero>(url).pipe(
      tap(hero => this.log('fetch here with id = ${id}')),
      catchError(this.handleError<Hero>('getHero id = ${id}', null))
    );
  }

  /** PUT: update the hero on the server */
  // - here means ()
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, httpOptions).pipe(
      tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  //delete based on hero object or its id
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = '$(this.heroesUrl)/${id}';
    return this.http.delete<Hero>(url, httpOptions).pipe(
      tap(_ => this.log('delte hero id = ${id}')),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty
      return of([]);
    }
    return this.http.get<Hero[]>('api/heroes/?name=${term}').pipe(
      tap(_ => this.log('found heroes matching "$[term]"')),
      catchError(this.handleError('searchHeroes', []))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
