import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild,
  CanDeactivate,
} from '@angular/router';
import { Observable } from 'rxjs';

interface CanDeactivateComponent {
  leave: () => Promise<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class AuthGuard
  implements
    CanActivate,
    CanActivateChild,
    CanDeactivate<CanDeactivateComponent>
{
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(route, state, '====路由守卫参数====');
    const { queryParams, routeConfig } = route;
    if (routeConfig?.path === 'product' && queryParams.user === 'visitor') {
      return this.router.navigate(['home']);
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(childRoute, state, '====子路由守卫参数====');
    const { queryParams, routeConfig } = childRoute;
    if (routeConfig?.path === 'list' && queryParams.user === 'visitor') {
      return this.router.navigate(['home']);
    }
    return true;
  }
  canDeactivate(
    component: CanDeactivateComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot | undefined
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log(component, '========离开守卫');
    return component.leave();
  }
}
