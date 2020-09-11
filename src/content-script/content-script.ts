import ChromeBrowserContentCommunication from "./chrome-browser-content-communication"
import DocumentObserver from "./document-observer"
import {ENABLE_LOGGERS, TimeLogger} from "../utils/logger/time-logger"


const chromeBrowserContentCommunication: ChromeBrowserContentCommunication = new ChromeBrowserContentCommunication()
const documentObserver: DocumentObserver = new DocumentObserver()


chromeBrowserContentCommunication.observe(documentObserver)
documentObserver.observe(chromeBrowserContentCommunication)

if (ENABLE_LOGGERS) {
    const timeLogger: TimeLogger = new TimeLogger("content Script")
    timeLogger.observe(chromeBrowserContentCommunication)
    timeLogger.observe(documentObserver)
}

chromeBrowserContentCommunication.tryToCommunicate()

documentObserver.start()
