var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    //最初整理著：小飯(LittleRice)
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["Kanduki", "Ama", "public"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "KandukiAmaPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        //2020.10.22 【歌枠/#2】まったりお歌配信♪
        ['K_hqLj2bkkY', 310, 479, "ムーンライト伝説"],
        ['K_hqLj2bkkY', 708, 1006, "Q&Aリサイタル！"],
        ['K_hqLj2bkkY', 1286, 1540, "恋愛裁判"],
        ['K_hqLj2bkkY', 1849, 2059, "ハレ晴レユカイ"],
        ['K_hqLj2bkkY', 2394, 2747, "Wishing"],
        ['K_hqLj2bkkY', 2922, 3174, "桃色片想い"],
        ['K_hqLj2bkkY', 3444, 3588, "自由への扉"],
        ['K_hqLj2bkkY', 3864, 4118, "残酷な天使のテーゼ"],
        ['K_hqLj2bkkY', 4385, 4556, "Booo！"],
        ['K_hqLj2bkkY', 4699, 4948, "紅一葉"],
        ['K_hqLj2bkkY', 5050, 5240, "タッチ"],
        ['K_hqLj2bkkY', 5541, 5812, "雨とカプチーノ"],
        ['K_hqLj2bkkY', 6000, 6258, "私、アイドル宣言"],

        //2020.10.19 【歌枠/#1】まったりお歌配信♪
        ['KIWpV4sXoEQ', 385, 662, "風になる"],
        ['KIWpV4sXoEQ', 1096, 1415, "ループ"],
        ['KIWpV4sXoEQ', 1570, 1774, "ただ君に晴れ"],
        ['KIWpV4sXoEQ', 2187, 2428, "YUME日和"],
        ['KIWpV4sXoEQ', 2638, 2917, "ハロ/ハワユ"],
        ['KIWpV4sXoEQ', 3239, 3488, "only my railgun"],
        ['KIWpV4sXoEQ', 3883, 4124, "君の体温"],
        ['KIWpV4sXoEQ', 4316, 4658, "君の知らない物語"],
        ['KIWpV4sXoEQ', 4896, 5213, "ハナミズキ"],
        ['KIWpV4sXoEQ', 5419, 5508, "香水"],
        ['KIWpV4sXoEQ', 5665, 5967, "キラキラ"],
        ['KIWpV4sXoEQ', 6192, 6416, "あまのテーマ"],
        ['KIWpV4sXoEQ', 6918, 7249, "変わらないもの"],

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
