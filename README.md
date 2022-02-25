# an-chrome-extension

Essa é uma aplicação que utiliza os classificadores do [tensor hub](https://tfhub.dev/) e
o [Tensorflow JS](https://www.tensorflow.org/js) para a criação de uma
[extensão chrome](https://developer.chrome.com/extensions/getstarted) que filtre toda imagens.

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

## Demonstração da Extensão:

### Filtrando tubarões

[![FILTRANDO TUBARÕES](https://i.vimeocdn.com/video/951737283-81c8f5b4b94834b9a588dee18ce48bc79291f06a76e3317fdfe15ce4e72fdb19-d_640)](https://vimeo.com/454629223 "FILTRADO TUBARÕES")

### Filtando Conteúdo adulto
[![FILTRANDO PORNOGRAFICA](https://i.vimeocdn.com/video/951733834-db1e9f291f746e8df68c42ef52d4a73185b219f561c80877bef78f06fe323e2d-d_640)](https://vimeo.com/454627349 "FILTRADO Conteúdo")

## Referencias
https://www.tensorflow.org/js/tutorials  
https://developer.chrome.com/extensions/getstarted  
https://github.com/tensorflow/tfjs-examples/tree/master/chrome-extension

