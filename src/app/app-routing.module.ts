import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'imovel/:id', loadChildren: './imovel/imovel.module#ImovelPageModule' },
  { path: 'lista-imoveis', loadChildren: './lista-imoveis/lista-imoveis.module#ListaImoveisPageModule' },
  { path: 'corretagem', loadChildren: './corretagem/corretagem.module#CorretagemPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'agendar', loadChildren: './agendar/agendar.module#AgendarPageModule' },
  { path: 'code', loadChildren: './code/code.module#CodePageModule' },
  { path: 'entrar-corretagem', loadChildren: './entrar-corretagem/entrar-corretagem.module#EntrarCorretagemPageModule' },
  { path: 'entrar-imobi', loadChildren: './entrar-imobi/entrar-imobi.module#EntrarImobiPageModule' },
  { path: 'entrar-seguro', loadChildren: './entrar-seguro/entrar-seguro.module#EntrarSeguroPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/cadastro.module#CadastroPageModule' },
  { path: 'cadastro-casa', loadChildren: './cadastro-casa/cadastro-casa.module#CadastroCasaPageModule' },
  { path: 'area-restrita', loadChildren: './area-restrita/area-restrita.module#AreaRestritaPageModule' },
  { path: 'registro', loadChildren: './registro/registro.module#RegistroPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
