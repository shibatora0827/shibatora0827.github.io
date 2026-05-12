# shibatora0827.github.io

芝坂政則の個人HP — **ICT-shibasaka** の公式サイト（GitHub Pages版）。

旧サイト Jimdo Free (`ict-shibasaka.jimdosite.com`) からの完全移行版です。

公開URL: <https://shibatora0827.github.io/>

---

## 構成

```
shibatora0827.github.io/
├ index.html             トップページ
├ about.html             マイストーリー
├ services.html          サービス内容
├ tools.html             ツール集（Geminiアプリ＋自作ソフト）
├ contact.html           お問い合わせ
├ assets/
│  ├ css/
│  │  ├ main.css
│  │  └ tools.css
│  ├ js/
│  │  └ main.js
│  └ images/
│     ├ logo.png
│     └ thumbnails/      Geminiアプリのサムネ6枚
├ README.md
└ .gitignore
```

純粋なHTML/CSS/JSのみ。フレームワーク・ビルドツール不要。

---

## デプロイ手順（初回）

シバさんが Windows で実行する想定の手順です。

### 1. ローカルでGit初期化

このフォルダ（`D:\Claude Code\shibatora0827.github.io\`）を開いた状態で：

```powershell
cd "D:\Claude Code\shibatora0827.github.io"
git init
git add .
git commit -m "Initial commit"
```

### 2. GitHub でリポジトリ作成

1. <https://github.com/new> にアクセス
2. **Repository name** に `shibatora0827.github.io` と入力（**完全一致**でないとユーザーサイト扱いになりません）
3. **Public** を選択
4. README・gitignore・licenseは追加せずに作成（ローカルとぶつかります）

### 3. ローカルから push

```powershell
git remote add origin https://github.com/shibatora0827/shibatora0827.github.io.git
git branch -M main
git push -u origin main
```

### 4. GitHub Pages を有効化

1. リポジトリの **Settings → Pages** を開く
2. **Source** を `Deploy from a branch` に
3. **Branch** を `main` / `(root)` に設定し **Save**
4. 数分後、<https://shibatora0827.github.io/> で公開されます

---

## 更新フロー（2回目以降）

```powershell
cd "D:\Claude Code\shibatora0827.github.io"
git add .
git commit -m "Update: 内容の説明"
git push
```

push してから1〜2分で反映されます。

---

## 残作業 / TODO

ソース内 `<!-- TODO: URL設定 -->` の部分を確定情報で置き換えてください。

- フッター SNS リンク
  - BASE
  - note
  - メルカリ
- `contact.html` の Formspree フォームID
  - <https://formspree.io> に登録（無料プランで月50通まで）
  - 取得した `f/xxxxxxxx` を `<form action="...">` に貼り付け
- `assets/images/logo.png` を本番ロゴに差し替え（現在は仮ロゴ）
- お問い合わせフォームを実利用前に、自分宛にテスト送信1通

---

## デザイン方針メモ

- HTML5UP **Solid State + Forty** インスパイアの独自実装（テンプレ直コピーではないのでライセンス表記不要）
- ダークモード基調（旧 ICT-shibasaka HPの黒紺カラー継承）
- 全ページレスポンシブ（〜720px でナビがハンバーガーに切替）
- アクセントカラー：amber `#f6a623`
- 移行お知らせバナー：閉じるとブラウザの localStorage に記憶（再訪問時は出ない）

---

## 独自ドメイン

現在は **取得しない** 方針です。`shibatora0827.github.io` を最終URLとして運用します。
将来取得したい場合は、ルートに `CNAME` ファイルを置き、Settings → Pages → Custom domain で設定してください。

---

## ライセンス

ソースコードは個人HP用途のため特にライセンスを付与していません。再利用・転載はご相談ください。
