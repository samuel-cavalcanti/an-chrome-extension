import {Component, EventEmitter, HostListener, OnInit, Output} from "@angular/core"

@Component({
    selector: "app-input-local-model",
    templateUrl: "./input-local-model.component.html",
    styleUrls: ["./input-local-model.component.css"]
})
export class InputLocalModelComponent implements OnInit {

    constructor() {
    }

    @Output("fileChange") fileEmit: EventEmitter<File> = new EventEmitter<File>()


    dragAreaClass: string

    onFileChange(event: any) {
        const files: FileList = event.target.files
        this.emitFileUrl(files)
    }

    ngOnInit() {
        this.dragAreaClass = "dragarea"
    }

    @HostListener("dragover", ["$event"]) onDragOver(event: any) {
        this.dragAreaClass = "droparea"
        event.preventDefault()
    }

    @HostListener("dragenter", ["$event"]) onDragEnter(event: any) {
        this.dragAreaClass = "droparea"
        event.preventDefault()
    }

    @HostListener("dragend", ["$event"]) onDragEnd(event: any) {
        this.dragAreaClass = "dragarea"
        event.preventDefault()
    }

    @HostListener("dragleave", ["$event"]) onDragLeave(event: any) {
        this.dragAreaClass = "dragarea"
        event.preventDefault()
    }

    @HostListener("drop", ["$event"]) onDrop(event: DragEvent) {
        this.dragAreaClass = "dragarea"
        event.preventDefault()
        event.stopPropagation()
        if (event.dataTransfer.files) {
            const files: FileList = event.dataTransfer.files
            this.emitFileUrl(files)
        }
    }

    emitFileUrl(files: FileList) {

        if (files.length !== 1) {
            return
        }

        this.fileEmit.emit(files[0])

    }

}
