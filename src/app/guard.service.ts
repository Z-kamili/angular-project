import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor(private _router:Router) 
  { 



  }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean
  {
         console.log("canActivate");
         alert("You are not admin");
         this._router.navigate(["/"]);
         return false;
  }


}
