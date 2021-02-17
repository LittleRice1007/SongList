var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    //最初整理者：小飯(LittleRice)
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["Hane", "Miya", "HaneMiya", "public"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "HaneMiyaPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        //2021.02.17 2月の歌枠【Vtuber】
        ['RSXZsTJesw4', 1105, 1434, "林檎売りの泡沫少女"],
        ['RSXZsTJesw4', 1819, 2046, "告白ライバル宣言"],
        ['RSXZsTJesw4', 2283, 2497, "醜い生き物"],
        ['RSXZsTJesw4', 2672, 2854, "ルマ"],
        ['RSXZsTJesw4', 3236, 3405, "回る空うさぎ"],
        ['RSXZsTJesw4', 3763, 4018, "To see the future"],
        ['RSXZsTJesw4', 4200, 4529, "アヤノの幸福理論"],
        ['RSXZsTJesw4', 4981, 5266, "インタビュア"],
        ['RSXZsTJesw4', 5519, 5746, "廻廻奇譚"],
        ['RSXZsTJesw4', 6189, 6406, "ハッピーシンセサイザ"],

        //2021.01.08 トワイライト急行【オリジナルMV】歌ってみた
        ['enUcs0w45JA', 0, 0, "トワイライト急行"],

        //2020.12.06 12月の歌枠【HoneyWorks縛り】
        ['0uHi0F7NskA', 599, 862, "私、アイドル宣言"],
        ['0uHi0F7NskA', 1249, 1495, "幸せ。"],
        ['0uHi0F7NskA', 1675, 1912, "金曜日のおはよう-another story-"],
        ['0uHi0F7NskA', 2159, 2418, "ワタシノテンシ"],
        ['0uHi0F7NskA', 2740, 2955, "ヒロイン育成計畫"],
        ['0uHi0F7NskA', 3126, 3325, "初戀の絵本"],
        ['0uHi0F7NskA', 3630, 3872, "戀色に咲け。"],
        ['0uHi0F7NskA', 4495, 4750, "病名戀ワズライ"],
        ['0uHi0F7NskA', 5251, 5502, "可愛くなりたい"],
        ['0uHi0F7NskA', 5715, 5960, "ファンサ"],
        ['0uHi0F7NskA', 6372, 6555, "ルマ"],

        // 2020.11.01 【CrazyPartyNight】歌ってみた
        ['QxPgSLRP_QI', 0, 0, "CrazyPartyNight"],

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
