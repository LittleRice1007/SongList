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
        // 2020.10.19 【歌枠/#1】まったりお歌配信♪
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
