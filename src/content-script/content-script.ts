import ChromeBrowserContentCommunication from "./chrome-browser-content-communication";
import DocumentObserver from "./document-observer";


const chromeBrowserContentCommunication: ChromeBrowserContentCommunication = new ChromeBrowserContentCommunication()
const documentObserver: DocumentObserver = new DocumentObserver()

chromeBrowserContentCommunication.subject.subscribe(documentObserver.observer)
documentObserver.subject.subscribe(chromeBrowserContentCommunication.observer)


chromeBrowserContentCommunication.tryToCommunicate()

documentObserver.start()
