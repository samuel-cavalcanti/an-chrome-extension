# Teddy Extension 
Essa É uma aplicação que utiliza o classificador [Teddy Filter](https://github.com/samuel-cavalcanti/teddy_bear_filter) e o [Tensorflow JS](https://www.tensorflow.org/js) para a criação de uma [extensão chrome](https://developer.chrome.com/extensions/getstarted) que filtre toda imagem com conteúdo pornográfico.

## compilação da extensão:  
Para compilar a extensão use os seguintes comandos:  
```shell
yarn
yarn build
```

## Instalando uma extensão em desenvolvimento  
Para instalar uma extensão desempacotada no chrome pode seguir essas instruções do próprio chrome: [instruções chrome](https://developer.chrome.com/extensions/getstarted) ou seguir o seguinte passo a passo:  

1. Abra a aba das extensões: `chrome://extensions`
2. Habilite o __Developer mode__ (canto superior direito)
3. Click em __LOAD UNPACKED__ e selecione a pasta [dist](dist/) desse repositório, onde está localizada o __manifest.json__

![Foto de Auxilio](load_extension.png)


## Referencias
https://www.tensorflow.org/js/tutorials  
https://developer.chrome.com/extensions/getstarted  
https://github.com/tensorflow/tfjs-examples/tree/master/chrome-extension

