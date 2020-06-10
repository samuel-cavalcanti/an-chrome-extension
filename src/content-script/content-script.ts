import ChromeMessengerContent from "./chrome-messenger-content";
import DocumentObserver from "./documentObserver";


const chromeMessengerContent: ChromeMessengerContent = new ChromeMessengerContent()
const documentObserver: DocumentObserver = new DocumentObserver()

chromeMessengerContent.subject.subscribe(documentObserver.observer)
documentObserver.subject.subscribe(chromeMessengerContent.observer)

documentObserver.start()
