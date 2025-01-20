// ユーザーのストレージを管理するオブジェクト
class UserStorage {
    constructor(userId) {
      this.storageKey = `userStorage_${userId}`;
      this.data = this.loadData();
    }
  
    // データを読み込む
    loadData() {
      const storedData = localStorage.getItem(this.storageKey);
      return storedData ? JSON.parse(storedData) : {};
    }
  
    // データを保存する
    saveData() {
      localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }
  
    // 値を設定する
    setItem(key, value) {
      this.data[key] = value;
      this.saveData();
    }
  
    // 値を取得する
    getItem(key) {
      return this.data[key];
    }
  
    // ストレージをクリアする
    clear() {
      localStorage.removeItem(this.storageKey);
      this.data = {};
    }
  }
  
  // ログイン中のユーザーIDを取得する（例: ハードコーディングまたはサーバーから取得）
  const userId = "user123"; // 実際には動的に設定
  const userStorage = new UserStorage(userId);
  
  // 使用例
  userStorage.setItem("theme", "dark");
  console.log(userStorage.getItem("theme")); // "dark"
  