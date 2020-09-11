import {Observer, Subject, Subscription} from "rxjs"


export default abstract class Module<I, O> {

  subject = new Subject<O>()

  observer: Observer<I> = {
    next: this.next.bind(this),
    error: this.error.bind(this),
    complete: this.complete.bind(this),
  }

  protected subscriptions: Array<Subscription> = new Array<Subscription>()

  protected abstract next(notification: I): void

  protected abstract error(e): void

  protected abstract complete(): void

  observe(abstractModule: Module<any, I>) {
    this.subscriptions.push(abstractModule.subject.subscribe(this.observer))
  }

  unsubscribe() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe()
    }
  }

}

