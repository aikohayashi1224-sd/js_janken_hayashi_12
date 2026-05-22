// タイマーを管理する変数
let timerId = null;

function rsp(playerSelect) {
    // 1. 動いているタイマーがあれば止める
    if (timerId) {
        clearTimeout(timerId);
    }

    // 画像パスのリスト
    const handImgs = ['img/guu.png', 'img/choki.png', 'img/pa.png'];
    const pcSelect = Math.floor(Math.random() * 3);

    // HTMLから要素を取得
    const playerImg = document.getElementById('player-hand-img');
    const pcImg = document.getElementById('pc-hand-img');
    const judgmentElement = document.getElementById('judgment');
    const resultPic = document.getElementById('result-pic');

    // 2. 出した手の画像を表示
    playerImg.src = handImgs[playerSelect];
    pcImg.src = handImgs[pcSelect];
    
    playerImg.style.display = "inline-block";
    pcImg.style.display = "inline-block";
    resultPic.style.display = "inline-block";

    // 3. 判定ロジックと画像・メッセージの切り替え
    if (playerSelect === pcSelect) {
        judgmentElement.innerText = "あいこは3個。ちょうどいいサイズだよ";
        judgmentElement.style.color = "#222";
        resultPic.src = "img/draw.png";
    } else if (
        (playerSelect === 0 && pcSelect === 1) || 
        (playerSelect === 1 && pcSelect === 2) || 
        (playerSelect === 2 && pcSelect === 0)
    ) {
        judgmentElement.innerText = "勝ち！ 5個もあると嬉しいね！";
        judgmentElement.style.color = "#ff4400";
        resultPic.src = "img/win.png";
    } else {
        judgmentElement.innerText = "残念賞は1個。もう1回やる？";
        judgmentElement.style.color = "#0044ff";
        resultPic.src = "img/loose.png";
    }

    // 4. 5秒後に一斉にリセットする
    timerId = setTimeout(function() {
        // テキストを戻す
        judgmentElement.innerText = "結果は...？";
        judgmentElement.style.color = "#222";
        
        // 画像をすべて隠す
        resultPic.style.display = "none";
        playerImg.style.display = "none";
        pcImg.style.display = "none";

        // タイマー変数をリセット
        timerId = null;
    }, 5000); 
}
