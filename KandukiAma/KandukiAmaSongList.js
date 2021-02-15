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
        //2020.12.20 【歌ってみた】夜に駆ける / YOASOBI
        ['J6H1h6XlgGs', 0, 0, "夜に駆ける"],

        //2020.12.19 【歌枠/#19】singing♪たくさん歌うよ！
        ['cJIEFxfpsmE', 274, 523, "LOVE涙色"],
        ['cJIEFxfpsmE', 718, 933, "オツキミリサイタル"],
        ['cJIEFxfpsmE', 1038, 1356, "ハナミズキ"],
        ['cJIEFxfpsmE', 1486, 1755, "U&I"],
        ['cJIEFxfpsmE', 2072, 2292, "ハッピー⭐︎マテリアル"],
        ['cJIEFxfpsmE', 2418, 2686, "炎"],
      //['cJIEFxfpsmE', 2812, 3077, "夜に駆ける"],//new
        ['cJIEFxfpsmE', 3288, 3576, "愛してるばんざーい！"],
        ['cJIEFxfpsmE', 3798, 4036, "千本桜"],
        ['cJIEFxfpsmE', 4150, 4368, "恋愛裁判"],
        ['cJIEFxfpsmE', 4472, 4743, "月のワルツ"],
        ['cJIEFxfpsmE', 4835, 5199, "さよならメモリーズ"],
        ['cJIEFxfpsmE', 5278, 5561, "少女レイ"],
        ['cJIEFxfpsmE', 5658, 5824, "アンパンマンマーチ"],
        ['cJIEFxfpsmE', 5880, 6180, "ライオン"],
        ['cJIEFxfpsmE', 6283, 6571, "ユメノトビラ"],
        ['cJIEFxfpsmE', 6741, 7020, "トライアングラー"],
        ['cJIEFxfpsmE', 7058, 7326, "メリッサ"],
        ['cJIEFxfpsmE', 7470, 7756, "ブラック★ロックシューター"],
        ['cJIEFxfpsmE', 7865, 8082, "ブルーバード"],
        ['cJIEFxfpsmE', 8160, 8402, "だから僕は音楽を辞めた"],
        ['cJIEFxfpsmE', 8600, 8873, "オレンジ"],
        ['cJIEFxfpsmE', 8932, 9171, "YUME日和"],

        //2020.12.16 【歌枠/#18】singing♪まったり歌うよ！
        ['C000OKPZB8M', 352, 630, "ハロ/ハワユ"],
        ['C000OKPZB8M', 815, 1065, "白金ディスコ"],
        ['C000OKPZB8M', 1296, 1550, "そして僕にできること"],
        ['C000OKPZB8M', 1710, 1987, "変わらないもの"],
        ['C000OKPZB8M', 2090, 2331, "メランコリック"],
        ['C000OKPZB8M', 2482, 2836, "うたかた花火"],
        ['C000OKPZB8M', 2994, 3247, "Butter-Fly"],
        ['C000OKPZB8M', 3442, 3684, "言って。"],
        ['C000OKPZB8M', 3828, 4090, "雨とカプチーノ"],
        ['C000OKPZB8M', 4245, 4474, "星間飛行"],
        ['C000OKPZB8M', 4568, 4826, "ワールドイズマイン"],
        ['C000OKPZB8M', 5034, 5325, "月光花"],
        ['C000OKPZB8M', 5406, 5626, "おじゃま虫"],
        ['C000OKPZB8M', 5783, 6021, "きっと青春が聞こえる"],
        ['C000OKPZB8M', 6162, 6426, "オリオンをなぞる"],
        ['C000OKPZB8M', 6574, 6699, "GO MY WAY"],
        ['C000OKPZB8M', 7023, 7204, "ルマ"],
        ['C000OKPZB8M', 7358, 7590, "ふわふわ時間"],
        ['C000OKPZB8M', 7655, 7925, "春擬き"],
        ['C000OKPZB8M', 8098, 8287, "乙女のポリシー"],
        ['C000OKPZB8M', 8411, 8689, "創聖のアクエリオン"],
        ['C000OKPZB8M', 8854, 9145, "好きすぎて バカみたい"],

        //2020.12.12 【歌枠/#17】singing♪たくさん歌うよ！
        ['2oyEcV3NJTs', 474, 719, "ファンサ"],
        ['2oyEcV3NJTs', 942, 1155, "バラライカ"],
      //['2oyEcV3NJTs', 1350, 1618, "雨とカプチーノ"],//new
        ['2oyEcV3NJTs', 1836, 2076, "I SAY YES"],
        ['2oyEcV3NJTs', 2352, 2600, "一度だけの恋なら"],
        ['2oyEcV3NJTs', 2776, 3063, "アイネクライネ"],
        ['2oyEcV3NJTs', 3210, 3540, "フリージア"],
        ['2oyEcV3NJTs', 3748, 3990, "ずっと好きでいいですか"],
        ['2oyEcV3NJTs', 4110, 4390, "恋するフォーチュンクッキー"],
        ['2oyEcV3NJTs', 4466, 4601, "KING"],
        ['2oyEcV3NJTs', 4788, 5057, "コネクト"],
        ['2oyEcV3NJTs', 5287, 5577, "Dreams"],
        ['2oyEcV3NJTs', 5706, 5957, "アンジェラス"],
        ['2oyEcV3NJTs', 6208, 6482, "風になる"],
        ['2oyEcV3NJTs', 6558, 6801, "花に亡霊"],
        ['2oyEcV3NJTs', 7034, 7327, "secret base"],
      //['2oyEcV3NJTs', 7564, 7829, "夜に駆ける"],//new
        ['2oyEcV3NJTs', 8006, 8255, "からくりピエロ"],
        ['2oyEcV3NJTs', 8548, 8767, "渡良瀬橋"],
        ['2oyEcV3NJTs', 8856, 9107, "嵐の中で輝いて"],
        ['2oyEcV3NJTs', 9398, 9641, "Baby Sweet Berry Love"],
        ['2oyEcV3NJTs', 9790, 10053, "雪、無音、窓辺にて"],
        ['2oyEcV3NJTs', 10264, 10465, "rainbow"],

        //2020.12.09 【歌枠/#16】singing♪たくさん歌うよ！
        ['DPOdfWPeE2k', 402, 745, "君の知らない物語"],
        ['DPOdfWPeE2k', 1010, 1219, "深海少女"],
      //['DPOdfWPeE2k', 1686, 1930, "ファンサ"],//new
        ['DPOdfWPeE2k', 2118, 2324, "S(mile)ING!"],
        ['DPOdfWPeE2k', 2715, 2983, "輪舞-revolution"],
        ['DPOdfWPeE2k', 3262, 3458, "ただ君に晴れ"],
      //['DPOdfWPeE2k', 3728, 3991, "オリオンをなぞる"],//new
        ['DPOdfWPeE2k', 4134, 4344, "うそつき"],
      //['DPOdfWPeE2k', 4530, 4799, "炎"],//new
      //['DPOdfWPeE2k', 4970, 5239, "U&I"],//new
        ['DPOdfWPeE2k', 5408, 5599, "少女S"],
        ['DPOdfWPeE2k', 5732, 6017, "秘密のトワレ"],
      //['DPOdfWPeE2k', 6130, 6410, "創聖のアクエリオン"],//new
        ['DPOdfWPeE2k', 6546, 6645, "おジャ魔女カーニバル"],
      //['DPOdfWPeE2k', 6762, 7031, "春擬き"],//new
        ['DPOdfWPeE2k', 7242, 7476, "キリトリセン"],
        ['DPOdfWPeE2k', 7786, 8008, "夕景イエスタデイ"],
        ['DPOdfWPeE2k', 8162, 8411, "空色デイズ"],
        ['DPOdfWPeE2k', 8598, 9049, "一番の宝物"],
        ['DPOdfWPeE2k', 9185, 9464, "恋空予報"],

        //2020.12.04 【歌枠/#15(1/2)】singing♪アニソン縛り！
        ['ddPeHTDKfcc', 396, 582, "ヴィーナスとジーザス"],
      //['ddPeHTDKfcc', 805, 997, "少女S"],//new
      //['ddPeHTDKfcc', 1232, 1496, "オリオンをなぞる"],//new
        ['ddPeHTDKfcc', 1828, 2047, "ウラオモテフォーチュン"],
        ['ddPeHTDKfcc', 2216, 2352, "キューティーハニー"],
        ['ddPeHTDKfcc', 2556, 2804, "again"],
        ['ddPeHTDKfcc', 3004, 3318, "魂のルフラン"],
      //['ddPeHTDKfcc', 3430, 3647, "ブルーバード"],//new
        ['ddPeHTDKfcc', 3748, 4062, "私たちになりたくて"],
        ['ddPeHTDKfcc', 4172, 4394, "Catch You Cathe Me"],
        //2020.12.04 【歌枠/#15(2/2)】singing♪アニソン縛り！
      //['zoY3SiIPY8w', 200, 493, "Dreams"],//new
      //['zoY3SiIPY8w', 626, 839, "バラライカ"],//new
        ['zoY3SiIPY8w', 980, 1214, "空想メソロギヰ"],
        ['zoY3SiIPY8w', 1406, 1641, "silkey heart"],
        ['zoY3SiIPY8w', 1740, 1993, "ANGELUS"],
        ['zoY3SiIPY8w', 2176, 2451, "W:Wonder tale"],
        ['zoY3SiIPY8w', 2574, 2822, "スキ？キライ！？スキ！！！"],
      //['zoY3SiIPY8w', 3050, 3275, "rainbow"],//new

        //2020.12.02 【歌枠/#14】singing♪お晝のゲリラ！
      //['tema5tzfhp4', 506, 666, "からくりピエロ"],//new
        ['tema5tzfhp4', 1050, 1349, "奈落の花"],
        ['tema5tzfhp4', 1588, 1757, "Booo!"],
      //['tema5tzfhp4', 1952, 2134, "ルマ"],//new
      //['tema5tzfhp4', 2244, 2479, "YUME日和"],//new
        ['tema5tzfhp4', 2732, 3045, "ガーネット"],
      //['tema5tzfhp4', 3316, 3592, "変わらないもの"],//new
        ['tema5tzfhp4', 4390, 4695, "GO!GO!Heaven"],
        ['tema5tzfhp4', 5120, 5451, "雪の華"],
        ['tema5tzfhp4', 5672, 6072, "夕日坂"],
        ['tema5tzfhp4', 6174, 6268, "Lemon"],
        ['tema5tzfhp4', 6438, 6609 , "ムーンライト伝説"],

        //2020.11.25 【歌枠/#13】singing♪まったり歌うよ！
        //沒有人整理，先略過

        //2020.11.20 【歌枠/#12】singing♪2000人ありがとう！
      //['Xi3C3WOUzXg', 60, 194, "KING"],//new
      //['Xi3C3WOUzXg', 678, 911, "赤いフリージア"],//new
      //['Xi3C3WOUzXg', 1219, 1487, "春擬き"],//new
        ['Xi3C3WOUzXg', 1642, 1924, "妄想感傷代償連盟"],
        ['Xi3C3WOUzXg', 2292, 2543, "シュガーソングとビターステップ"],
      //['Xi3C3WOUzXg', 2790, 2986, "ただ君に晴れ"],//new
        ['Xi3C3WOUzXg', 3180, 3436, "つけまつける"],
        ['Xi3C3WOUzXg', 3542, 3816, "kiss"],
        ['Xi3C3WOUzXg', 3945, 4155, "ハレ晴レユカイ"],
        ['Xi3C3WOUzXg', 4283, 4479, "君をのせて"],
        ['Xi3C3WOUzXg', 4600, 4850, "神のまにまに"],
        ['Xi3C3WOUzXg', 4982, 5172, "タッチ"],
      //['Xi3C3WOUzXg', 5322, 5602, "トライアングラー"],//new
        ['Xi3C3WOUzXg', 5608, 5857, "一度だけの戀なら"],
        ['Xi3C3WOUzXg', 6064, 6425, "たばこ"],
      //['Xi3C3WOUzXg', 6650, 6924, "オレンジ"],//new
        ['Xi3C3WOUzXg', 7035, 7287, "Lost my music"],
        ['Xi3C3WOUzXg', 7390, 7665, "天使にふれたよ！"],

        //2020.11.18 【歌枠/#11】singing♪まったり歌うよ！
      //['3K5KDKQ2U0c', 380, 593, "渡良瀬橋"],//new
      //['3K5KDKQ2U0c', 938, 1177, "千本桜"],//new
      //['3K5KDKQ2U0c', 1346, 1688, "君の知らない物語"],//new
      //['3K5KDKQ2U0c', 1878, 2231, "うたかた花火"],//new
      //['3K5KDKQ2U0c', 2392, 2635, "花に亡霊"],//new
        ['3K5KDKQ2U0c', 2804, 3041, "めざせポケモンマスター"],
        ['3K5KDKQ2U0c', 3316, 3524, "CHE.R.RY"],
        ['3K5KDKQ2U0c', 3802, 4028, "いのちの名前"],
      //['3K5KDKQ2U0c', 4126, 4374, "からくりピエロ"],//new
        ['3K5KDKQ2U0c', 4568, 4815, "only my railgun"],
      //['3K5KDKQ2U0c', 5032, 5252, "ハッピーマテリアル"],//new
      //['3K5KDKQ2U0c', 5414, 5691, "変わらないもの"],//new
      //['3K5KDKQ2U0c', 5835, 6100, "夜に駆ける"],//new
      //['3K5KDKQ2U0c', 6202, 6518, "ハナミズキ"],//new
      //['3K5KDKQ2U0c', 6676, 6918, "だから僕は音楽を辞めた"],//new
        ['3K5KDKQ2U0c', 7080, 7434, "Wishing"],

        //2020.11.16 【歌枠/#10】まったり歌うよ♪
        ['g_3J72Nlw3w', 290, 607, "ループ"],
        ['g_3J72Nlw3w', 820, 1005, "二息歩行"],
      //['g_3J72Nlw3w', 1188, 1438, "白金ディスコ"],//new
        ['g_3J72Nlw3w', 1638, 1876, "金曜日のおはよう"],
        ['g_3J72Nlw3w', 2004, 2257, "恋愛サーキュレーション"],
        ['g_3J72Nlw3w', 2348, 2601, "桃色片想い"],
      //['g_3J72Nlw3w', 2702, 2969, "メリッサ"],//new
      //['g_3J72Nlw3w', 3180, 3571, "夕日坂"],//new
        ['g_3J72Nlw3w', 3705, 3928, "Yeah!めっちゃホリディ"],
        ['g_3J72Nlw3w', 4075, 4304, "ヒトリゴト"],
        ['g_3J72Nlw3w', 4498, 4742, "愛言葉III"],
        ['g_3J72Nlw3w', 4860, 5137, "God knows"],
        ['g_3J72Nlw3w', 5218, 5491, "いけないボーダーライン"],
        ['g_3J72Nlw3w', 5662, 5964, "ノーザンクロス"],
      //['g_3J72Nlw3w', 6075, 6405, "雪の華"],//new
        ['g_3J72Nlw3w', 6470, 6709, "気まぐれロマンティック"],
        ['g_3J72Nlw3w', 7050, 7262, "あまのテーマ"],

        //2020.11.12 【歌枠/#9】アカペラ歌枠♪
      //['k29_aHtq4Ic', 648, 724, "風になる"],//清唱優先篩掉
        ['k29_aHtq4Ic', 830, 916, "となりのトトロ"],
      //['k29_aHtq4Ic', 1020, 1113, "恋愛サーキュレーション"],//清唱優先篩掉
        ['k29_aHtq4Ic', 1400, 1497, "オトメロディー"],
        ['k29_aHtq4Ic', 1728, 1802, "夜もすがら君想ふ"],
      //['k29_aHtq4Ic', 1870, 1969, "夜に駆ける"],//清唱優先篩掉
        ['k29_aHtq4Ic', 2154, 2227, "ベノム"],
        ['k29_aHtq4Ic', 2308, 2418, "アイロニ"],
        ['k29_aHtq4Ic', 2638, 2745, "Colorful World"],
      //['k29_aHtq4Ic', 3015, 3109, "ワールドイズマイン"],//new
        ['k29_aHtq4Ic', 3350, 3430, "ローリンガール"],
        ['k29_aHtq4Ic', 3613, 3708, "カレンダーガール"],
        ['k29_aHtq4Ic', 3824, 3936, "初めての恋が終わる時"],
      //['k29_aHtq4Ic', 4308, 4385, "一番の宝物"],//new
        ['k29_aHtq4Ic', 4532, 4620, "Alchemy"],
      //['k29_aHtq4Ic', 4820, 4884, "ライオン"],//清唱優先篩掉
        ['k29_aHtq4Ic', 5050, 5157, "ダイヤモンドクレバス"],
      //['k29_aHtq4Ic', 5310, 5382, "白金ディスコ"],//new
      //['k29_aHtq4Ic', 5460, 5529, "星間飛行"],//new
      //['k29_aHtq4Ic', 5645, 5768, "雪の華"],//new
        ['k29_aHtq4Ic', 5871, 5947, "おねがいダーリン"],
      //['k29_aHtq4Ic', 6028, 6089, "千本桜"],//清唱優先篩掉
        ['k29_aHtq4Ic', 6192, 6294, "ギミー！レボリューション"],
      //['k29_aHtq4Ic', 6398, 6475, "いのちの名前"],//new
        ['k29_aHtq4Ic', 6536, 6705, "天ノ弱"],
      //['k29_aHtq4Ic', 6795, 6885, "おじゃま虫"],//new
      //['k29_aHtq4Ic', 6956, 7016, "花に亡霊"],//new

        //2020.11.09 【歌枠/#8】ボカロ縛り歌枠♪
      //['HHUzjK5cK2w', 245, 525, "ハロ/ハワユ"],//new
        ['HHUzjK5cK2w', 950, 1186, "ルカルカ★ナイトフィーバー"],
        ['HHUzjK5cK2w', 1560, 1837, "ロミオとシンデレラ"],
      //['HHUzjK5cK2w', 2103, 2322, "メランコリック"],//new
        ['HHUzjK5cK2w', 2588, 2821, "Calc."],
      //['HHUzjK5cK2w', 3068, 0, "glow"],//被剪掉了
        ['HHUzjK5cK2w', 3323, 3590, "crack"],
        ['HHUzjK5cK2w', 3779, 3992, "妄想税"],
      //['HHUzjK5cK2w', 4207, 4453, "ファンサ"],//new
        ['HHUzjK5cK2w', 4574, 4834, "白い雪のプリンセスは"],
      //['HHUzjK5cK2w', 5093, 5227, "KING"],//new

        //2020.11.06 【歌枠/#7】ゲリラ歌枠♪
        ['0N1N8CxAXho', 272, 557, "Q＆Aリサイタル"],
        ['0N1N8CxAXho', 906, 1130, "センチメートル"],
        ['0N1N8CxAXho', 1350, 1627, "恋空予報"],//new
      //['0N1N8CxAXho', 1792, 2044, "残酷な天使のテーゼ"],
        ['0N1N8CxAXho', 2358, 2593, "DISCOTHEQUE"],
        ['0N1N8CxAXho', 2888, 3086, "え？あぁ、そう。"],
      //['0N1N8CxAXho', 3420, 3674, "恋愛サーキュレーション"],//new
      //['0N1N8CxAXho', 3916, 4174, "夜に駆ける"],//new
      //['0N1N8CxAXho', 4366, 4685, "ループ"],//new

        //2020.11.03 【歌枠/#6】まったりお歌配信♪
        ['88Vr2WnRCcY', 576, 817, "プラチナ"],
      //['88Vr2WnRCcY', 1302, 1656, "うたかた花火"],//new
        ['88Vr2WnRCcY', 1840, 2137, "just be friends"],
      //['88Vr2WnRCcY', 2372, 2668, "ライオン"],//new
        ['88Vr2WnRCcY', 2914, 3163, "snow halation"],
      //['88Vr2WnRCcY', 3428, 3705, "変わらないもの"],//new
      //['88Vr2WnRCcY', 3978, 4331, "wishing"],//new
        ['88Vr2WnRCcY', 4566, 4892, "冬がくれた予感"],
        ['88Vr2WnRCcY', 5095, 5152, "paranoia"],
        ['88Vr2WnRCcY', 5270, 5509, "純情スカート"],
        ['88Vr2WnRCcY', 5710, 5997, "ブラック★ロックシューター"],//new
      //['88Vr2WnRCcY', 6172, 6410, "あまのテーマ"],//new

        //2020.10.29 【歌枠/#5】ボカロ縛り歌枠♪
      //['d0d8heiAuaU', 424, 642, "メランコリック"],//new
      //['d0d8heiAuaU', 1045, 1228, "二息歩行"],//new
        ['d0d8heiAuaU', 1564, 1848, "キャットフード"],
        ['d0d8heiAuaU', 2170, 2454, "サリシノハラ"],
        ['d0d8heiAuaU', 2686, 2973, "ネトゲ廃人シュプレヒコール"],
        ['d0d8heiAuaU', 3248, 3461, "だってだってだって"],
      //['d0d8heiAuaU', 3708, 3892, "ルマ"],//new
        ['d0d8heiAuaU', 4408, 4666, "メルト"],
      //['d0d8heiAuaU', 4844, 5083, "千本桜"],//new
      //['d0d8heiAuaU', 5224, 5500, "少女レイ"],//new
      //['d0d8heiAuaU', 5862, 6108, "愛言葉III"],//new

        //2020.10.27 【歌枠/#4】アカペラ歌枠♪
      //['6LSNi5Gup_Q', 344, , "テルーの唄"],//被消音
        ['6LSNi5Gup_Q', 890, 975, "蒼のエーテル"],
      //['6LSNi5Gup_Q', 1336, 1511, "天ノ弱"],//new
        ['6LSNi5Gup_Q', 1916, 1974, "あしたもあそぼう"],
        ['6LSNi5Gup_Q', 2444, 2508, "風の歌をうたおう"],
        ['6LSNi5Gup_Q', 2940, 3180, "ダイヤモンドクレパス"],
        ['6LSNi5Gup_Q', 3520, 3793, "rain stops, good-bye"],
        ['6LSNi5Gup_Q', 3924, 4125, "かくれんぼ"],
      //['6LSNi5Gup_Q', 4790, 4870, "プラチナ"],//new
        ['6LSNi5Gup_Q', 5010, 5184, "カムパネルラ"],
      //['6LSNi5Gup_Q', 5410, 5652, "secret base"],//new
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
      //['97xzUQ25_dM', 2822, 3062, "めざせポケモンマスター"],//new
      //['97xzUQ25_dM', 3284, 3524, "気まぐれロマンティック"],//new
        ['97xzUQ25_dM', 3725, 3954, "わんわんおにゃんにゃんお"],
      //['97xzUQ25_dM', 4300, 4535, "赤いフリージア"],//new
      //['97xzUQ25_dM', 4690, 4857, "アンパンマンマーチ"],//new
        ['97xzUQ25_dM', 4954, 5867, "勇気りんりん"],
        ['97xzUQ25_dM', 5080, 5351, "サンサンたいそう"],
        ['97xzUQ25_dM', 5142, 5211, "おどるポンポコリン"],
      //['97xzUQ25_dM', 5256, 5351, "おジャ魔女カーニバル"],//new
      //['97xzUQ25_dM', 5572, 5844, "いけないボーダーライン"],//new
        ['97xzUQ25_dM', 6028, 6254, "My sweet heart"],
        ['97xzUQ25_dM', 6301, 6684, "恐山ル・ヴォワール"],

        //2020.10.22 【歌枠/#2】まったりお歌配信♪
      //['K_hqLj2bkkY', 310, 479, "ムーンライト伝説"],//new
      //['K_hqLj2bkkY', 708, 1006, "Q&Aリサイタル！"],//new
      //['K_hqLj2bkkY', 1286, 1540, "恋愛裁判"],//new
      //['K_hqLj2bkkY', 1849, 2059, "ハレ晴レユカイ"],//new
      //['K_hqLj2bkkY', 2394, 2747, "Wishing"],//new
      //['K_hqLj2bkkY', 2922, 3174, "桃色片想い"],//new
        ['K_hqLj2bkkY', 3444, 3588, "自由への扉"],
      //['K_hqLj2bkkY', 3864, 4118, "残酷な天使のテーゼ"],//new
      //['K_hqLj2bkkY', 4385, 4556, "Booo！"],//new
        ['K_hqLj2bkkY', 4699, 4948, "紅一葉"],
      //['K_hqLj2bkkY', 5050, 5240, "タッチ"],//new
      //['K_hqLj2bkkY', 5541, 5812, "雨とカプチーノ"],//new
        ['K_hqLj2bkkY', 6000, 6258, "私、アイドル宣言"],

        //2020.10.19 【歌枠/#1】まったりお歌配信♪
      //['KIWpV4sXoEQ', 385, 662, "風になる"],//new
      //['KIWpV4sXoEQ', 1096, 1415, "ループ"],///new
      //['KIWpV4sXoEQ', 1570, 1774, "ただ君に晴れ"],//new
      //['KIWpV4sXoEQ', 2187, 2428, "YUME日和"],//new
      //['KIWpV4sXoEQ', 2638, 2917, "ハロ/ハワユ"],//new
      //['KIWpV4sXoEQ', 3239, 3488, "only my railgun"],//new
        ['KIWpV4sXoEQ', 3883, 4124, "君の体温"],
      //['KIWpV4sXoEQ', 4316, 4658, "君の知らない物語"],//new
      //['KIWpV4sXoEQ', 4896, 5213, "ハナミズキ"],//new
        ['KIWpV4sXoEQ', 5419, 5508, "香水"],
        ['KIWpV4sXoEQ', 5665, 5967, "キラキラ"],
      //['KIWpV4sXoEQ', 6192, 6416, "あまのテーマ"],//new
      //['KIWpV4sXoEQ', 6918, 7249, "変わらないもの"],//new

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
