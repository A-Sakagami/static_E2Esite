# static_E2Esite
テスト自動化用E2Eサイト

## ディレクトリ構造

<details><summary>以下を確認ください</summary>
<p>.github</p>
<p>archetypes</p>
<p><strike>assets</strike></p>
<p>content</p>
<p><strike>data</strike></p>
<p><strike>i18n</strike></p>
<p><strike>layouts</strike></p>
<p>public</p>
<p>static</p>
<p><strike>themes</strike></p>
<p>.gitignore</p>
<p>.hugo_build.lock</p>
<p>.nojekyll</p>
<p>config.toml</p>
<p>LICENSE</p>
<p>README.md</p>
</details>

## ダウンロード
```shell
cd {ダウンロード先のディレクトリ}
git clone https://github.com/A-Sakagami/static_E2Esite.git
```

## 仕様
### トップ画面

- URL: https://a-sakagami.github.io/static_E2Esite/
- ヘッダー：Home, About, Contact, Login

### ログイン画面
- トップ画面のログインボタン、またはヘッダーに*Login*があれば遷移可能
- 入力値
    - ユーザーID
    - パスワード
   
#### アカウント一覧

<details><summary>以下を確認ください</summary>

- userType: admin, username: admin, password: adminpass1234
- userType: user, username: user, password: userpass1234

</details>

### 一般ユーザー画面

一般ユーザーでログイン後、ホーム画面にリダイレクトされる。
URL: https://a-sakagami.github.io/static_E2Esite/

#### 文章の投稿

- テキストエリアに任意の文字列を代入可能
- 文字数上限は255文字(全角・半角を問わない)

#### 文章のステータス

- 背景色で表現している。
    - 青(カラーコード#)： *投稿済み* （承認作業待ち）
    - 緑(カラーコード#)： *承認済み*
    - 赤(カラーコード#)： **否認**
        - テキスト編集可能
        - 再提出ボタンでステータスが *投稿済み* に戻る

### 管理者画面

- 管理者ユーザーでログイン後、管理者用のホーム画面にリダイレクトされる。
- URL: https://a-sakagami.github.io/static_E2Esite/admin
- 未ログイン時、または一般ユーザーでログイン時に上のURLを直接入力すると、ポップアップが表示されて前の画面にリダイレクトされる。

#### 文章の承認・否認

- 一般ユーザーから投稿した文章の一覧が表示される
    - 投稿が無かった場合、表示なし
- 承認ボタン・否認ボタンが表示される
- 各ボタンのアクションが、一般ユーザー画面に反映される
    - 承認ボタン：テキスト背景が緑に変化
    - 否認ボタン：テキスト背景が赤に変化
        - 一般ユーザー側で編集・再投稿が可能になる

#### ユーザー管理

- タブごとにCRUD操作を実装している
    - 新規ユーザー登録
    - ユーザー一覧表示
    - ユーザー情報更新
        - ユーザー権限の変更も実装予定
    - ユーザー情報削除
