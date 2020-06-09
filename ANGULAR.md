# TeddyExtension

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

```zsh
npm install @tensorflow/tfjs
npm i -D @angular-builders/custom-webpack
npm install @types/Chrome –save-dev
```



### Minhas gambiarras

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
nesse tutorial: [chrome extension with angular why and how](https://medium.com/angular-in-depth/chrome-extension-with-angular-why-and-how-778200b87575)

## Referencias e Ideias Maravilhosas
- [Teddy bear image](http://clipartandscrap.com/teddy-bear-clipart_17420/)

- [Transformar o background em um componente](https://www.red-gate.com/simple-talk/dotnet/software-tools/developing-google-chrome-extension-using-angular-4/)

- [Auto refresh no desenvolvimento e outras dicas](https://medium.com/angular-in-depth/chrome-extension-with-angular-why-and-how-778200b87575)


#### Uma deusa chamada Loiane Groner
- [How to Add Bootstrap to an Angular CLI project - Loiane Groner](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/#3-importing-the-css)

- [Curso de Angular - Loiane Groner](https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)
