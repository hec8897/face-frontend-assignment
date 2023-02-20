export class Storage {
  getStorage(key: string) {
    return window.localStorage.getItem(key);
  }
  setStorage(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  }
}
