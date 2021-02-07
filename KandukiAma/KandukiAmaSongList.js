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
        //2020.11.06 【歌枠/#7】ゲリラ歌枠♪
        ['0N1N8CxAXho', 272, 557, "Q＆Aリサイタル"],
        ['0N1N8CxAXho', 906, 1130, "センチメートル"],
        ['0N1N8CxAXho', 1350, 1627, "恋空予報"],
        ['0N1N8CxAXho', 1792, 2044, "残酷な天使のテーゼ"],
        ['0N1N8CxAXho', 2358, 2593, "DISCOTHEQUE"],
        ['0N1N8CxAXho', 2888, 3086, "え？あぁ、そう。"],
        ['0N1N8CxAXho', 3420, 3674, "恋愛サーキュレーション"],
        ['0N1N8CxAXho', 3916, 4174, "夜に駆ける"],
        ['0N1N8CxAXho', 4366, 4685, "ループ"],

        //2020.11.03 【歌枠/#6】まったりお歌配信♪
        ['88Vr2WnRCcY', 576, 817, "プラチナ"],
        ['88Vr2WnRCcY', 1302, 1656, "うたかた花火"],
        ['88Vr2WnRCcY', 1840, 2137, "just be friends"],
        ['88Vr2WnRCcY', 2372, 2668, "ライオン"],
        ['88Vr2WnRCcY', 2914, 3163, "snow halation"],
        ['88Vr2WnRCcY', 3428, 3705, "変わらないもの"],
        ['88Vr2WnRCcY', 3978, 4331, "wishing"],
        ['88Vr2WnRCcY', 4566, 4892, "冬がくれた予感"],
        ['88Vr2WnRCcY', 5095, 5152, "paranoia"],
        ['88Vr2WnRCcY', 5270, 5509, "純情スカート"],
        ['88Vr2WnRCcY', 5710, 5997, "ブラック★ロックシューター"],
        ['88Vr2WnRCcY', 6172, 6410, "あまのテーマ"],

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
      //['6LSNi5Gup_Q', 4790, 4870, "プラチナ"],//new
        ['6LSNi5Gup_Q', 5010, 5184, "カムパネルラ"],
        ['6LSNi5Gup_Q', 5410, 5652, "secret base"],
        ['6LSNi5Gup_Q', 5866, 6017, "独りんぼエンヴィー"],
      //['6LSNi5Gup_Q', 6160, 6455, "just be friends"],//new
        ['6LSNi5Gup_Q', 6756, 6871, "Trancing Pulse"],
        ['6LSNi5Gup_Q', 7094, 7353, "letter song"],
      //['6LSNi5Gup_Q', 7598, 7833, "夜に駆ける"],//new
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
      //['K_hqLj2bkkY', 708, 1006, "Q&Aリサイタル！"],//new
        ['K_hqLj2bkkY', 1286, 1540, "恋愛裁判"],
        ['K_hqLj2bkkY', 1849, 2059, "ハレ晴レユカイ"],
      //['K_hqLj2bkkY', 2394, 2747, "Wishing"],//new
        ['K_hqLj2bkkY', 2922, 3174, "桃色片想い"],
        ['K_hqLj2bkkY', 3444, 3588, "自由への扉"],
      //['K_hqLj2bkkY', 3864, 4118, "残酷な天使のテーゼ"],//new
        ['K_hqLj2bkkY', 4385, 4556, "Booo！"],
        ['K_hqLj2bkkY', 4699, 4948, "紅一葉"],
        ['K_hqLj2bkkY', 5050, 5240, "タッチ"],
        ['K_hqLj2bkkY', 5541, 5812, "雨とカプチーノ"],
        ['K_hqLj2bkkY', 6000, 6258, "私、アイドル宣言"],

        //2020.10.19 【歌枠/#1】まったりお歌配信♪
        ['KIWpV4sXoEQ', 385, 662, "風になる"],
      //['KIWpV4sXoEQ', 1096, 1415, "ループ"],///new
        ['KIWpV4sXoEQ', 1570, 1774, "ただ君に晴れ"],
        ['KIWpV4sXoEQ', 2187, 2428, "YUME日和"],
        ['KIWpV4sXoEQ', 2638, 2917, "ハロ/ハワユ"],
        ['KIWpV4sXoEQ', 3239, 3488, "only my railgun"],
        ['KIWpV4sXoEQ', 3883, 4124, "君の体温"],
        ['KIWpV4sXoEQ', 4316, 4658, "君の知らない物語"],
        ['KIWpV4sXoEQ', 4896, 5213, "ハナミズキ"],
        ['KIWpV4sXoEQ', 5419, 5508, "香水"],
        ['KIWpV4sXoEQ', 5665, 5967, "キラキラ"],
      //['KIWpV4sXoEQ', 6192, 6416, "あまのテーマ"],//new
      //['KIWpV4sXoEQ', 6918, 7249, "変わらないもの"],//new

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
