# nan-chrome-extension

Essa é uma aplicação que utiliza os classificadores do  [tensor hub](https://tfhub.dev/) e
o [Tensorflow JS](https://www.tensorflow.org/js) para a criação de uma
[extensão chrome](https://developer.chrome.com/extensions/getstarted) que filtre
toda imagens.

## compilação da extensão:  

```zsh
npm install
npm i -D @angular-builders/custom-webpack
npm install @types/Chrome –save-dev
npm run build
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

- [Transformar o background em um componente](https://www.red-gate.com/simple-talk/dotnet/software-tools/developing-google-chrome-extension-using-angular-4/)

- [Auto refresh no desenvolvimento e outras dicas](https://medium.com/angular-in-depth/chrome-extension-with-angular-why-and-how-778200b87575)


#### Uma deusa chamada Loiane Groner
- [How to Add Bootstrap to an Angular CLI project - Loiane Groner](https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/#3-importing-the-css)

- [Curso de Angular - Loiane Groner](https://www.youtube.com/playlist?list=PLGxZ4Rq3BOBoSRcKWEdQACbUCNWLczg2G)


## Instalando uma extensão em desenvolvimento  
Para instalar uma extensão desempacotada no chrome pode seguir essas instruções do próprio chrome: [instruções chrome](https://developer.chrome.com/extensions/getstarted) ou seguir o seguinte passo a passo:  

1. Abra a aba das extensões: `chrome://extensions`
2. Habilite o __Developer mode__ (canto superior direito)
3. Click em __LOAD UNPACKED__ e selecione a pasta [an-chrome-extension](dist/an-chrome-extension) em dist  desse repositório, onde está localizada o __manifest.json__

![Foto de Auxilio](load_extension.png)


## Referencias
https://www.tensorflow.org/js/tutorials  
https://developer.chrome.com/extensions/getstarted  
https://github.com/tensorflow/tfjs-examples/tree/master/chrome-extension

