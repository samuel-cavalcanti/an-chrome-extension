import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {TensorflowHubModel} from "../interfaces/tensorflow-hub-model";
import {Observer} from "rxjs";
import {TensorflowHubService} from "../services/tensorflow-hub/tensorflow-hub.service";
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service";
import {TensorFlowHubModelNotification} from "../interfaces/notifications";
import ChunkArray from "../../classes/ChunkArray";

@Component({
  selector: 'app-add-filter',
  templateUrl: './cnn-models.component.html',
  styleUrls: ['./cnn-models.component.css']
})
export class CnnModelsComponent implements OnInit {

  private observeTensorHub: Observer<Array<TensorflowHubModel>> = {
    next: this.tensorHubNotification.bind(this),
    error: () => {
    },

    complete: () => {
    }

  }

  private observeBrowser: Observer<TensorFlowHubModelNotification> = {
    next: this.browserServiceNotification.bind(this),
    error: () => {
    },

    complete: () => {
    }

  }
  public models: Array<TensorflowHubModel>

  public selectStatus: { [key: string]: boolean }

  public currentModel: TensorflowHubModel

  public currentPage: number

  public modelPages: Array<Array<TensorflowHubModel>>

  constructor(private tensorflowHubService: TensorflowHubService,
              private userInterfaceService: BrowserUserInterfaceService,
              private changeDetectorRef: ChangeDetectorRef) {


  }

  ngOnInit(): void {
    console.log("On INIT CNN MODELS")
    this.tensorflowHubService.ObserveTensorFlowHubModels(this.observeTensorHub)
    this.userInterfaceService.addCnnModelSettingsObserver(this.observeBrowser)
    this.currentPage = 0
  }

  selectedModel(cnnModel: TensorflowHubModel) {
    this.userInterfaceService.selectTensorHubModel(cnnModel)

    this.selectStatus[this.currentModel.url] = false
    this.selectStatus[cnnModel.url] = undefined

  }

  browserServiceNotification(notification: TensorFlowHubModelNotification) {
    if (!notification)
      return;

    this.currentModel = notification.cnnModelHub

    if (!this.models)
      return

    if (this.selectStatus)
      this.selectStatus[this.currentModel.url] = true
    else
      this.makeSelectStatus()

    this.changeDetectorRef.detectChanges()
  }

  tensorHubNotification(models: Array<TensorflowHubModel>) {
    this.models = models
    this.modelsToChunks(models)
    if (this.currentModel)
      this.makeSelectStatus()

  }

  pageChange(page:number){
    this.currentPage = page
    this.changeDetectorRef.detectChanges()
  }


  private makeSelectStatus() {
    this.selectStatus = this.models.map((value => ({[value.url]: value.url == this.currentModel.url})))
      .reduce((next, current) => ({...next, ...current}))
  }

  private modelsToChunks(models: Array<TensorflowHubModel>) {


    const chunkArray = new ChunkArray(models)
    this.modelPages = chunkArray.createChunks(2)


  }


}
