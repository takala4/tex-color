# tex-color 

## 用途

* Atomエディタの自作プラグイン
* キーボードショートカットで，TeX文章の`\textcolor{red}{}`コマンドを挿入できる

## 使い方

* `tex-color`をインストール
* TeX文書のブリアンブルに$\usepackage{color}$を記述
* 赤字にしたいテキスト`XXX`を選択した状態で，`ctrl`+`alt`+`R`で，以下のようにテキストが挿入される

```
\textcolor{red}{
XXX
}
```

* 複数行でも可能

