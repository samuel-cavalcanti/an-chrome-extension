import {ClassNames} from "../../../interfaces/class-names"

export default class LoadClassNames {


  static async loadClassByXMLRequest(path: string): Promise<ClassNames> {

    return new Promise<ClassNames>((resolve, reject) => {
      const xhr = new XMLHttpRequest()

      xhr.addEventListener("load", () => {

        resolve(JSON.parse(xhr.responseText))
      })

      xhr.addEventListener("error", () => {
        reject(`Error not solver request`)
      })
      xhr.open("GET", path, true)
      xhr.send()
    })


  }


}
