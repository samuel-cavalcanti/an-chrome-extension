
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

# Modificações no projeto angular para o compilar uma extensão chrome

## Content Script

Escrevi o content script em type script e configurei o webpack
para compila-lo, observei os imports que o arquivo gerado requeria e
adicionei manualmente no [manifest.json](src/manifest.json).
```json
"content_scripts": [
    {
      "matches": [
        "<all_urls>"
      ],
      "all_frames": true,
      "run_at": "document_end",
      "js": [
        "content-script.js",
        "runtime.js",
        "vendor.js" 
      ]
    }
  ],
```
No caso os arquivos extras foram o __runtime.js__ e  __vendor.js__.
As instruções seguidas foram as mesmas do background script apresentadas
nesse tutorial: [chrome extension with angular why and how](https://medium.com/angular-in-depth/chrome-extension-with-angular-why-and-how-778200b87575).
Basicamente criei um arquivo adicional de configuração do webpack: [configuração adicional do web](custom-webpack.config.js))
e adicionei a seguinte linha de configuração no [angular.json](angular.json)
```json
....
  "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "customWebpackConfig": {  <-- configuração adicional
              "path": "./custom-webpack.config.js"
            },
            "outputPath": "dist/an-chrome-extension",
....
```

## background script, browser_action, options page em um único index.html

Para ter em teoria três páginas HTML em uma única página foi feita a seguinte modificação:
```json
  "background": {
    "page": "index.html#/background",
    "persistent": true
  },
  "options_page": "index.html#/options",
  "web_accessible_resources": [
    "assets/modelJS/*"
  ],
  "browser_action": {
    "default_popup": "index.html",
```
Ou seja o background script é uma sub-página do projeto, assim configurando o arquivo de rotas corretamente:
```typescript
const routes: Routes = [
    {path: "filters", loadChildren: () => import("./filters-page/filters.module").then(m => m.FiltersModule)}, // Laze loading
    {path: "models", loadChildren: () => import("./models-page/cnn-models.module").then(m => m.CnnModelsModule)},  // Laze loading
    {path: "options", loadChildren: () => import("./options-page/options-page.module").then(m => m.OptionsPageModule)},  // Laze loading
    {path: "background", component: BackgroundComponent},
]
@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})], // <-- Habilitado o hash
    exports: [RouterModule]
})
```
 Observe que habilitei o Hash para essa configuraçào funcionar, e habilitei o laze loading em todo o projeto menos no background,
 assim quando a extensão for instalada não seram carregados os scripts de outros modulos apenas o do backgroud.

## Referências e Ideias Maravilhosas

- [Transformar o background em um componente](https://www.red-gate.com/simple-talk/dotnet/software-tools/developing-google-chrome-extension-using-angular-4/)

- [Auto refresh no desenvolvimento e outras dicas](https://medium.com/angular-in-depth/chrome-extension-with-angular-why-and-how-778200b87575)


#### Uma deusa chamada Loiane Groner
- [How to Add Bootstrap to an Angular CLI project - Loiane Groner](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/#3-importing-the-css)

- [Curso de Angular - Loiane Groner](https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)
