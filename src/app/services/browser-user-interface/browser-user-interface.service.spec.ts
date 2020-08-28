import { TestBed } from "@angular/core/testing"

import { BrowserUserInterfaceService } from "./browser-user-interface.service"

describe("BrowserUserInterfaceService", () => {
  let service: BrowserUserInterfaceService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BrowserUserInterfaceService)
  })

  it("should be created", () => {
    expect(service).toBeTruthy()
  })
})
