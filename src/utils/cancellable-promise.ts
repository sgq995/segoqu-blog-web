export class CancellablePromise<T> extends Promise<T> {
  private _hasCancelled?: boolean;

  constructor(executor: (resolve: (value: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void) {
    super((resolve, reject) => {
      executor(value => {
        this._hasCancelled
          ? reject({ isCanceled: true })
          : resolve(value);
      }, reason => {
        this._hasCancelled
          ? reject({ isCanceled: true })
          : reject(reason);
      });
    });
  }

  cancel() {
    this._hasCancelled = true;
  }
}

export function makeCancelable<T>(promise: Promise<T>) {
  return new CancellablePromise<T>((resolve, reject) => {
    promise
      .then(val => resolve(val))
      .catch(val => reject(val));
  });
}
