import {ConvolutionalNeuralNetwork} from "./convolutional-neural-network"

describe("ConvolutionalNeuralNetwork", () => {
  const model: ConvolutionalNeuralNetwork = new ConvolutionalNeuralNetwork()

  it("should be created", () => {
    expect(model).toBeTruthy()
  })


  describe("Observer methods", () => {
    it("should create next function", () => {
      expect(model.next !== undefined).toBeTrue()
    })

    it("should create error function", () => {
      expect(model.error !== undefined).toBeTrue()
    })

    it("should create error complete", () => {
      expect(model.complete !== undefined).toBeTrue()
    })
  })


  it("should be an Object", () => {
    expect(model["classNames"]).toBeInstanceOf(Object)
  })


})
