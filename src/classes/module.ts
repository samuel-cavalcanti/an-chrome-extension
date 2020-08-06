import {Observer, Subject, Subscription} from "rxjs";


export default abstract class Module<I, O> {

  subject = new Subject<O>()

  observer: Observer<I> = {
    next: this.next.bind(this),
    error: this.error.bind(this),
    complete: this.complete.bind(this),
  }

  protected subscriptions: Array<Subscription> = new Array<Subscription>()

  abstract next(notification: I): void;

  abstract error(e): void;

  abstract complete(): void;

  subscribe(_module: Module<any, I>) {
    this.subscriptions.push(_module.subject.subscribe(this.observer))
  }

  unsubscribe() {
    for (const sub of this.subscriptions) {
      sub.unsubscribe()
    }
  }

}
