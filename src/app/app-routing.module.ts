import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
	{
		path: 'action-sheet',
		loadChildren: () => import('./action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
	},
	{
		path: 'alert',
		loadChildren: () => import('./alert/alert.module').then(m => m.AlertPageModule)
	},
	{
		path: 'badge',
		loadChildren: () => import('./badge/badge.module').then(m => m.BadgePageModule)
	},
	{
		path: 'button',
		loadChildren: () => import('./button/button.module').then(m => m.ButtonPageModule)
	},
	{
		path: 'card',
		loadChildren: () => import('./card/card.module').then(m => m.CardPageModule)
	},
	{
		path: 'ckeckbox',
		loadChildren: () => import('./ckeckbox/ckeckbox.module').then(m => m.CkeckboxPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
