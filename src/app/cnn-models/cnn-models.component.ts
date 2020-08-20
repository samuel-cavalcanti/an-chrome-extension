import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {TensorflowHubModel} from "../interfaces/tensorflow-hub-model";
import {Observer} from "rxjs";
import {TensorflowHubService} from "../services/tensorflow-hub/tensorflow-hub.service";
import {BrowserUserInterfaceService} from "../services/browser-user-interface/browser-user-interface.service";
import {TensorFlowHubModelNotification} from "../interfaces/notifications";

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


  constructor(private tensorflowHubService: TensorflowHubService,
              private userInterfaceService: BrowserUserInterfaceService,
              private changeDetectorRef: ChangeDetectorRef) {


  }

  ngOnInit(): void {
    console.log("On INIT CNN MODELS")
    this.tensorflowHubService.ObserveTensorFlowHubModels(this.observeTensorHub)
    this.userInterfaceService.addCnnModelSettingsObserver(this.observeBrowser)
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
    console.log("tensorHubNotification", models, this.currentModel)
    this.models = models
    if (this.currentModel)
      this.makeSelectStatus()

  }


  private makeSelectStatus() {
    this.selectStatus = this.models.map((value => ({[value.url]: value.url == this.currentModel.url})))
      .reduce((next, current) => ({...next, ...current}))
  }


}
