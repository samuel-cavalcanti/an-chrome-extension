import {Injectable} from "@angular/core"
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {TensorflowHubModel} from "../../interfaces/tensorflow-hub-model"
import {Observer, Subject} from "rxjs"


@Injectable({
  providedIn: "root"
})
export class TensorflowHubService {

  constructor(private  http: HttpClient) {

    this.subject = new Subject<Array<TensorflowHubModel>>()


  }


  private models: Array<TensorflowHubModel>
  private subject: Subject<Array<TensorflowHubModel>>
  private readonly baseURL = "https://tfhub.dev"

  private static changeTitleStyle(title: string) {
    const splitTitle = title.split("/")
    return `${splitTitle[0]} - ${splitTitle[1]}`
  }

  private static changeArchitectureKeyName(metaData: any) {
    const newMetaData = {...metaData}

    newMetaData.architecture = metaData["network-architecture"]
    delete newMetaData["network-architecture"]

    return newMetaData
  }

  private postMessageToTensoFlowHub() {
    const url = this.baseURL + "/s/list"
    const body = ["cma:po", "", "", 100, true, [["deployment-format", ["tfjs"]], ["tf-version", ["tf2z"]], ["module-type", ["image-classification"]]], null, [], null, []]

    const headers: HttpHeaders = new HttpHeaders({
      ["Content-Type"]: "application/json",
      authority: "tfhub.dev"
    })

    this.http.post(url, body, {headers}).subscribe({
      next: this.receiveModelsFromTfHub.bind(this)
    })
  }

  private receiveModelsFromTfHub(response: Array<any>) {
    this.models = response[0][2].map(this.mapToTensorflowHubModels.bind(this))

    console.log("response tfHub", response)
    console.log("models: ", this.models)

    this.subject.next(this.models)

  }

  private mapToTensorflowHubModels(array: Array<any>): TensorflowHubModel {
    const metaDataFromHub = array[42].map(subArray => ({[subArray[0]]: subArray[1][0][0]})).reduce((result, next) => ({...result, ...next}))

    const metaDataChanged = TensorflowHubService.changeArchitectureKeyName(metaDataFromHub)

    return {
      title: TensorflowHubService.changeTitleStyle(array[1]),
      description: array[3],
      ...metaDataChanged,
      url: `${this.baseURL}/${metaDataChanged.publisher}/tfjs-model/${array[1]}/3/default/1`
    }
  }

  ObserveTensorFlowHubModels(observer: Observer<Array<TensorflowHubModel>>) {

    console.log("models tensorHubModels", this.models)

    this.subject.subscribe(observer)

    if (!this.models || this.models.length === 0) {
      this.postMessageToTensoFlowHub()
    } else {
      this.subject.next(this.models)
    }

  }
}
