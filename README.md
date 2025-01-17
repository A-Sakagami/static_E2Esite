# static_E2Esite
テスト自動化用E2Eサイト

## ディレクトリ構造
- .github
- archetypes
- ~~assets~~
- content
- ~~data~~
- ~~i18n~~
- layouts
- public
- static
- ~~themes~~
- .gitignore
- .hugo_build.lock
- .nojekyll
- config.toml
- LICENSE
- README.md


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
-- 
--  
#### アカウント一覧

<details><summary>以下を確認ください</summary>

- userType: admin, username: admin, password: adminpass1234
- userType: user, username: user, password: userpass1234

</details>

### 一般ユーザー画面
一般ユーザーでログイン後、ホーム画面にリダイレクトされる。
#### 文章の投稿

#### 文章のステータス

### 管理者画面
- 管理者ユーザーでログイン後、管理者用のホーム画面にリダイレクトされる。
- URL: https://a-sakagami.github.io/static_E2Esite/admin
- 未ログイン時、または一般ユーザーでログイン時に上のURLを直接入力すると、ポップアップが表示されて前の画面にリダイレクトされる。
#### 文章の承認・否認

#### ユーザー管理

