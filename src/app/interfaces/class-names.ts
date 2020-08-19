export interface Predict {
  name: string,
  highConfidenceThreshold?: number,
  lowConfidenceThreshold?: number
}

export interface ClassNames {
  [key: number]: string
}
