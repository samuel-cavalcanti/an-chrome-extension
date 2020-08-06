export interface Predict {
  name: string,
  highConfidenceThreshold: number,
  lowConfidenceThreshold: number
}

export interface ClassName {
  [key: number]: Predict
}
