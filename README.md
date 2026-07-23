# リラクリニック 公開用Webサイト Version 3

## ファイル構成
- `index.html`：トップページ
- `privacy.html`：プライバシーポリシー
- `styles.css`：デザイン
- `script.js`：スマートフォン用メニュー
- `robots.txt` / `sitemap.xml`：Google検索向け
- `_headers`：Cloudflare Pages / Netlify向けセキュリティ設定
- `assets/`：ロゴ、院長写真、表紙・診療イメージ画像

## パソコンで確認する
`index.html`をダブルクリックするとブラウザで確認できます。

## 公開方法（Cloudflare Pagesが簡単です）
1. Cloudflareのアカウントを作成
2. Workers & Pages → Create → Pages → Upload assets
3. このZIPを解凍したフォルダ内のファイルをすべてアップロード
4. 公開後、Custom domainsから `lilas-clinic.com` を登録
5. Google Workspaceで取得したドメインのDNSを案内どおり設定

Netlifyの場合も、解凍したフォルダを管理画面へドラッグ＆ドロップして公開できます。

## 公開前の最終確認
- 診療開始日・診療体制
- 「緊急時24時間365日対応」の実際の運用体制
- 診療エリア
- 医療広告ガイドライン上の表現
- 保険外負担、施設基準、指定医療機関等の掲載内容
- 電話・FAX・住所
- プライバシーポリシー
- 画像は生成したイメージ画像です。実際の診療風景ではないため、必要に応じて「画像はイメージです」と追記してください。

## 更新方法
文章や時間を変更する場合は、該当するHTMLを変更します。変更内容をChatGPT/Codexへ日本語で指示し、修正版を作る運用が可能です。
