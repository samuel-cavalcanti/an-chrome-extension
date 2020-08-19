import {ConvolutionalNeuralNetwork} from './convolutional-neural-network';
import {ClassNames} from "../../interfaces/class-names";

describe('ConvolutionalNeuralNetwork', function () {
  let model: ConvolutionalNeuralNetwork = new ConvolutionalNeuralNetwork();

  it('should be created', () => {
    expect(model).toBeTruthy();
  });


  it('should not loaded model', async function () {

    let error = undefined
    const modelURL = undefined
    const classesName = 'thing'

    try {
      await model.load(modelURL, classesName)
    } catch (e) {
      error = e
    }
    expect(error).toMatch(`Unable to load Model or classNames from ModelURL: ${modelURL}, classNames:${classesName}`)
  });


  describe('Observer methods', function () {
    it('should create next function', function () {
      expect(model.next !== undefined).toBeTrue()
    })

    it('should create error function', function () {
      expect(model.error !== undefined).toBeTrue()
    })

    it('should create error complete', function () {
      expect(model.complete !== undefined).toBeTrue()
    })
  })


  it('should be an Object', function () {
    expect(model.classNames).toBeInstanceOf(Object)
  });


});
