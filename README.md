# an-chrome-extension

Essa é uma aplicação que utiliza os classificadores do  [tensor hub](https://tfhub.dev/) e
o [Tensorflow JS](https://www.tensorflow.org/js) para a criação de uma
[extensão chrome](https://developer.chrome.com/extensions/getstarted) que filtre
toda imagens.

## compilação da extensão:  

```zsh
npm install
npm run build
```
## alterações no projeto angular
Caso queria ver as alterações feitas para no projeto angular para compilar uma extensão chrome veja o [ANGULAR.md](ANGULAR.md).


## Instalando uma extensão em desenvolvimento  
Para instalar uma extensão desempacotada no chrome pode seguir essas instruções do próprio chrome: [instruções chrome](https://developer.chrome.com/extensions/getstarted) ou seguir o seguinte passo a passo:  

![Foto de Auxilio](load_extension.png)

1. Abra a aba das extensões: `chrome://extensions`
2. Habilite o __Developer mode__ (canto superior direito)
3. Click em __LOAD UNPACKED__ e selecione a pasta [an-chrome-extension](dist/an-chrome-extension) localizada em [dist](dist)  desse repositório, onde está localizada o __manifest.json__
- ou você pode baixar e extrair o __.zip__ da  [release](https://github.com/samuel-cavalcanti/an-chrome-extension/releases/tag/1.0.0) do github :) 


## Referencias
https://www.tensorflow.org/js/tutorials  
https://developer.chrome.com/extensions/getstarted  
https://github.com/tensorflow/tfjs-examples/tree/master/chrome-extension

