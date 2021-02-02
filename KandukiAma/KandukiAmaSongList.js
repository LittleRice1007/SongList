var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    //最初整理著：小飯(LittleRice)
    /**
     * 標籤
     * @type {string[]}
     */
     var tags = ["Kanduki", "Ama", "KandukiAma", "public"];
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
        //2020.10.29 【歌枠/#5】ボカロ縛り歌枠♪
        ['d0d8heiAuaU', 424, 642, "メランコリック"],
        ['d0d8heiAuaU', 1045, 1228, "二息歩行"],
        ['d0d8heiAuaU', 1564, 1848, "キャットフード"],
        ['d0d8heiAuaU', 2170, 2454, "サリシノハラ"],
        ['d0d8heiAuaU', 2686, 2973, "ネトゲ廃人シュプレヒコール"],
        ['d0d8heiAuaU', 3248, 3461, "だってだってだって"],
        ['d0d8heiAuaU', 3708, 3892, "ルマ"],
        ['d0d8heiAuaU', 4408, 4666, "メルト"],
        ['d0d8heiAuaU', 4844, 5083, "千本桜"],
        ['d0d8heiAuaU', 5224, 5500, "少女レイ"],
        ['d0d8heiAuaU', 5862, 6108, "愛言葉III"],

        //2020.10.27 【歌枠/#4】アカペラ歌枠♪   //無配樂，優先篩掉
      //['6LSNi5Gup_Q', 344, , "テルーの唄"],//被消音
        ['6LSNi5Gup_Q', 890, 975, "蒼のエーテル"],
        ['6LSNi5Gup_Q', 1336, 1511, "天ノ弱"],
        ['6LSNi5Gup_Q', 1916, 1974, "あしたもあそぼう"],
        ['6LSNi5Gup_Q', 2444, 2508, "風の歌をうたおう"],
        ['6LSNi5Gup_Q', 2940, 3180, "ダイヤモンドクレパス"],
        ['6LSNi5Gup_Q', 3520, 3793, "rain stops, good-bye"],
        ['6LSNi5Gup_Q', 3924, 4125, "かくれんぼ"],
        ['6LSNi5Gup_Q', 4790, 4870, "プラチナ"],
        ['6LSNi5Gup_Q', 5010, 5184, "カムパネルラ"],
        ['6LSNi5Gup_Q', 5410, 5652, "secret base"],
        ['6LSNi5Gup_Q', 5866, 6017, "独りんぼエンヴィー"],
        ['6LSNi5Gup_Q', 6160, 6455, "just be friends"],
        ['6LSNi5Gup_Q', 6756, 6871, "Trancing Pulse"],
        ['6LSNi5Gup_Q', 7094, 7353, "letter song"],
        ['6LSNi5Gup_Q', 7598, 7833, "夜に駆ける"],
        ['6LSNi5Gup_Q', 7982, 8188, "約束をしよう"],

        //2020.10.24 【歌枠/#3】まったりお歌配信♪
        ['97xzUQ25_dM', 560, 759, "1925"],
        ['97xzUQ25_dM', 894, 1191, "空の青さを知る人よ"],
        ['97xzUQ25_dM', 1482, 1550, "Make you happy"],
        ['97xzUQ25_dM', 1884, 2140, "サディスティックラブ"],
        ['97xzUQ25_dM', 2822, 3062, "めざせポケモンマスター"],
        ['97xzUQ25_dM', 3284, 3524, "気まぐれロマンティック"],
        ['97xzUQ25_dM', 3725, 3954, "わんわんおにゃんにゃんお"],
        ['97xzUQ25_dM', 4300, 4535, "赤いフリージア"],
        ['97xzUQ25_dM', 4690, 4857, "アンパンマンマーチ"],
        ['97xzUQ25_dM', 4954, 5867, "勇気りんりん"],
        ['97xzUQ25_dM', 5080, 5351, "サンサンたいそう"],
        ['97xzUQ25_dM', 5142, 5211, "おどるポンポコリン"],
        ['97xzUQ25_dM', 5256, 5351, "おジャ魔女カーニバル"],
        ['97xzUQ25_dM', 5572, 5844, "いけないボーダーライン"],
        ['97xzUQ25_dM', 6028, 6254, "My sweet heart"],
        ['97xzUQ25_dM', 6301, 6684, "恐山ル・ヴォワール"],

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
