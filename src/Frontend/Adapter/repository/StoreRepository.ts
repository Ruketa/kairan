class StoreRepository {
  private _storage!: Storage;

  constructor() {
    this._storage = window.localStorage;
  }

  getItem(key: string): any {
    return this._storage.getItem(key);
  }

  setItem(key: string, value: any): void {
    this._storage.setItem(key, value)
    return;
  }
}
