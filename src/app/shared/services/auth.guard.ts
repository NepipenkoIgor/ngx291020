import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthGuard implements CanActivate {

  public constructor(
    private readonly router: Router,
    private readonly http: HttpClient
  ) {
  }

  // tslint:disable-next-line:variable-name
  public canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const url = state.url;
    return this.http.get<any>('/user/checkuser') // observable isLogged
      .pipe(
        switchMap((user) => {
          const isLogged = Boolean(user);
          if (!isLogged && (url === '/login' || url === '/signup')) {
            return of(true);
          }
          if (isLogged && (url === '/login' || url === '/signup')) {
            this.router.navigate(['/backoffice']);
            return of(false);
          }
          if (!isLogged) {
            this.router.navigate(['/login']);
          }
          return of(isLogged);
        }),
        catchError((err) => {
          console.log(err);
          if (url === '/login' || url === '/signup') {
            return of(true);
          }
          this.router.navigate(['/login']);
          return of(false);
        })
      );
  }


}
