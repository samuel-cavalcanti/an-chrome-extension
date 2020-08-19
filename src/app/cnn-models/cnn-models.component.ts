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
    next: (_models: Array<TensorflowHubModel>) => {
      this.models = _models
      this.selectStatus = _models.map((value => ({[value.url]: value.url == this.currentModel.url})))
        .reduce((next, current) => ({...next, ...current}))

    },
    error: () => {
    },

    complete: () => {
    }

  }

  private observeBrowser: Observer<TensorFlowHubModelNotification> = {
    next: (notification: TensorFlowHubModelNotification) => {


      this.currentModel = notification.cnnModelHub
      if (!this.selectStatus)
        return


      this.selectStatus[this.currentModel.url] = true

      this.changeDetectorRef.detectChanges()

    },
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
    this.tensorflowHubService.ObserveTensorFlowHubModels(this.observeTensorHub)
    this.userInterfaceService.notifyCurrentSettings(this.observeBrowser)
    this.currentModel = this.userInterfaceService.currentCnnModel
  }

  async selectedModel(cnnModel: TensorflowHubModel) {
    this.userInterfaceService.selectTensorHubModel(cnnModel)

    this.selectStatus[this.currentModel.url] = false
    this.selectStatus[cnnModel.url] = undefined

  }


}
