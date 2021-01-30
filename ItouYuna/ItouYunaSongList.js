var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    //最初整理著：小飯(LittleRice)
    /**
     * 標籤
     * @type {string[]}
     */
    var tags = ["Itou", "Yuna", "ItouYuna", "public"];
    /**
     * 播放清單名稱
     * @type {string}
     */
    var listName = "ItouYunaPlaylist";
    /**
     * ['VideoID', StartTime, EndTime, 'Title']
     * VideoID: 必須用引號包住，為字串型態。
     * StartTime: 只能是非負數。如果要從頭播放，輸入0
     * EndTime: 只能是非負數。如果要播放至尾，輸入0
     * Title: 必須用引號包住，為字串型態
     * @type {*[]}
     */
    var newPlaylist = [
        //2020.11.02 ピアノ音源縛りでしっとりと🎹🎶
        ['fMHyKMghjCQ', 251, 512, "夜に駆ける"],
        ['fMHyKMghjCQ', 609, 895, "サリシノハラ"],
        ['fMHyKMghjCQ', 999, 1276, "宿命"],
        ['fMHyKMghjCQ', 1371, 1687, "夜明けと蛍"],
        ['fMHyKMghjCQ', 1773, 1972, "1925"],
        ['fMHyKMghjCQ', 2173, 2407, "紅蓮華"],
        ['fMHyKMghjCQ', 2513, 2899, "スパークル（君の名は。）"],
        ['fMHyKMghjCQ', 2974, 3216, "メランコリック"],
        ['fMHyKMghjCQ', 3293, 3531, "花に亡霊"],
        ['fMHyKMghjCQ', 3603, 3875, "少女レイ"],
        ['fMHyKMghjCQ', 3949, 4142, "夜咄ディセイブ"],
        ['fMHyKMghjCQ', 4240, 4507, "吉原ラメント"],
        ['fMHyKMghjCQ', 4582, 4925, "たばこ"],
        ['fMHyKMghjCQ', 5031, 5380, "さよならミッドナイト"],
        ['fMHyKMghjCQ', 5496, 5728, "いかないで"],
        ['fMHyKMghjCQ', 5896, 6091, "ドレミファロンド "],

        //2020.10.26 今日も今日とて歌う🌟
        ['q5S886m4d00', 309, 522, "くらべられっ子"],
        ['q5S886m4d00', 630, 873, "バレリーコ"],
        ['q5S886m4d00', 954, 1184, "青春なんていらないわ"],
        ['q5S886m4d00', 1249, 1553, "ひまわりの約束"],
        ['q5S886m4d00', 1623, 1855, "勇気100%"],
        ['q5S886m4d00', 1983, 2220, "Sweets Parade"],
        ['q5S886m4d00', 2320, 2564, "Happy Halloween"],
        ['q5S886m4d00', 2651, 2899, "Crazy Party Night ~ぱんぷきんの逆襲~"],
        ['q5S886m4d00', 3001, 3255, "Mrs.Pumpkinの滑稽な夢"],
        ['q5S886m4d00', 3348, 3542, "ボッカデラベリタ"],
        ['q5S886m4d00', 3610, 3838, "虎視眈々"],
        ['q5S886m4d00', 3894, 4152, "からくりピエロ"],
        ['q5S886m4d00', 4227, 4445, "ヤキモチの答え-anther story-"],
        ['q5S886m4d00', 4510, 4797, "別の人の彼女になったよ"],
        ['q5S886m4d00', 4875, 5097, "カタオモイ"],
        ['q5S886m4d00', 5227, 5489, "サイレントマジョリティー"],
        ['q5S886m4d00', 5591, 5787, "ドレミファロンド  "],

        //2020.10.19 ボカロたくさん歌うよ~~❕❄
        ['hYbrtibjc20', 269, 509, "Booo!"],
        ['hYbrtibjc20', 654, 833, "バレリーコ"],
        ['hYbrtibjc20', 1116, 1327, "深海少女"],
        ['hYbrtibjc20', 1419, 1627, "ゴーストルール"],
        ['hYbrtibjc20', 1748, 1931, "ブリキノダンス"],
        ['hYbrtibjc20', 2020, 2210, "君色に染まる"],
        ['hYbrtibjc20', 2326, 2559, "夜もすがら君想ふ"],
        ['hYbrtibjc20', 2672, 2924, "ワールドイズマイン"],
        ['hYbrtibjc20', 3071, 3337, "心做し"],
        ['hYbrtibjc20', 3485, 3669, "天ノ弱"],
        ['hYbrtibjc20', 3805, 4080, "ロミオとシンデレラ"],
        ['hYbrtibjc20', 4182, 4403, "パンダヒーロー"],
        ['hYbrtibjc20', 4523, 4785, "夢花火"],
        ['hYbrtibjc20', 4893, 5119, "Calc."],
        ['hYbrtibjc20', 5214, 5450, "ハートアラモード"],
        ['hYbrtibjc20', 5537, 5776, "千本桜"],
        ['hYbrtibjc20', 5884, 6081, "ドレミファロンド"],

        //2020.10.12 感謝と愛を込めて歌います❄🐾
        ['vRKSdZjF8lc', 239, 595, "す一ぱーぬこになりたい"],
        ['vRKSdZjF8lc', 712, 942, "星間飛行"],
        ['vRKSdZjF8lc', 1067, 1317, "可愛くなりたい"],
        ['vRKSdZjF8lc', 1414, 1667, "恋愛サーキュレーション"],
        ['vRKSdZjF8lc', 1803, 2080, "白曰"],
        ['vRKSdZjF8lc', 2211, 2461, "香水"],
        ['vRKSdZjF8lc', 2572, 2828, "Happy birthday"],
        ['vRKSdZjF8lc', 2950, 3157, "惑星ループ"],
        ['vRKSdZjF8lc', 3246, 3456, "ディスコミュ星人"],
        ['vRKSdZjF8lc', 3595, 3851, "秒針を噛む"],
        ['vRKSdZjF8lc', 3942, 4199, "妄想感傷代償連盟"],
        ['vRKSdZjF8lc', 4300, 4582, "ハロ/ハワユ"],
        ['vRKSdZjF8lc', 4704, 4932, "ロクベル"],
        ['vRKSdZjF8lc', 5013, 5295, "ピエロ"],
        ['vRKSdZjF8lc', 5414, 5693, "前前前世"],
        ['vRKSdZjF8lc', 5848, 6094, "愛言葉 III"],
        ['vRKSdZjF8lc', 6163, 6360, "ドレミファロンド"],

        //2020.10.05 月曜日だよ！ユナライブだよ🌟
        ['wQA68grlLPc', 283, 479, "ベノム"],
        ['wQA68grlLPc', 584, 843, "夜に駆ける"],
        ['wQA68grlLPc', 980, 1238, "このピアノでお前を8759632145回ぶん殴る"],
        ['wQA68grlLPc', 1363, 1599, "CheerS"],
        ['wQA68grlLPc', 1700, 1946, "全力バタンキュー"],
        ['wQA68grlLPc', 2085, 2351, "さようなら、花泥棒さん"],
        ['wQA68grlLPc', 2445, 2665, "恋愛裁判"],
        ['wQA68grlLPc', 2773, 3000, "ロキ "],
        ['wQA68grlLPc', 3121, 3337, "ダダダダ天使"],
        ['wQA68grlLPc', 3468, 3706, "弱虫モンブラン"],
        ['wQA68grlLPc', 3816, 4027, "スイートマジック "],
        ['wQA68grlLPc', 4153, 4408, "贖罪 "],
        ['wQA68grlLPc', 4586, 4904, "奏"],
        ['wQA68grlLPc', 5007, 5240, "いーあるふぁんくらぶ"],
        ['wQA68grlLPc', 5452, 5683, "あの娘シークレット "],
        ['wQA68grlLPc', 5810, 6006, "ドレミファロンド "],

        //2020.09.28 ついに…!!アニソンを歌います🌟
        ['-laC57ldaLs', 330, 419, "お願いマッスル"],
        ['-laC57ldaLs', 540, 707, "ムーンライト伝説"],
        ['-laC57ldaLs', 865, 1028, "ワンルームシュガーライブ"],
        ['-laC57ldaLs', 1170, 1377, "かくしん的☆めたまるふぉ~ぜっ！"],
        ['-laC57ldaLs', 1514, 1673, "ラムのラブソング"],
        ['-laC57ldaLs', 1847, 1940, "チカッとチカ千花"],
        ['-laC57ldaLs', 2116, 2317, "ようこそジャパリパークへ"],
        ['-laC57ldaLs', 2461, 2710, "乙女どもよ"],
        ['-laC57ldaLs', 2827, 3053, "おジャ魔女カーニバル"],
        ['-laC57ldaLs', 3193, 3382, "はなまるぴっぴはよいこだけ"],
        ['-laC57ldaLs', 3541, 3792, "恋愛サーキュレーション"],
        ['-laC57ldaLs', 3929, 4174, "全力バタンキュー"],
        ['-laC57ldaLs', 4447, 4546, "紅蓮の弓矢"],
        ['-laC57ldaLs', 4725, 4958, "紅蓮華"],
        ['-laC57ldaLs', 5120, 5316, "ドレミファロンド"],

        //2020.09.22 知りたい／水野あつ covered by 伊冬ユナ
        ['KVKe6hJiKjU', 0, 0, "知りたい"],

        //2020.09.21 月曜日のユナライブ❄🐾
        ['16OmDROLLhI', 249, 447, "ノーダウト"],
        ['16OmDROLLhI', 575, 796, "丸の内サディスティック"],
        ['16OmDROLLhI', 949, 1237, "アイネクライネ"],
        ['16OmDROLLhI', 1401, 1651, "さよならエレジー"],
        ['16OmDROLLhI', 1815, 2107, "高嶺の花子さん"],
        ['16OmDROLLhI', 2412, 2714, "マリーゴールド"],
        ['16OmDROLLhI', 2883, 3007, "言葉のいらない約束"],
        ['16OmDROLLhI', 3180, 3398, "チューリングラブ"],
        ['16OmDROLLhI', 3510, 3775, "心做し"],
        ['16OmDROLLhI', 3931, 4130, "ただ君に晴れ"],
        ['16OmDROLLhI', 4270, 4404, "KING"],
        ['16OmDROLLhI', 4596, 4840, "ファンサ"],
        ['16OmDROLLhI', 4973, 5165, "おねがいダーリン"],
        ['16OmDROLLhI', 5308, 5504, "ドレミファロンド"],


        //2020.09.17 ご主人の疲れを吹っ飛ばします！！
        ['j1gyZtiOBP0', 267, 463, "アサガオの散る頃に"],
        ['j1gyZtiOBP0', 641, 995, "たばこ"],
        ['j1gyZtiOBP0', 1354, 1655, "心拍数＃0822"],
        ['j1gyZtiOBP0', 1887, 2277, "桜の雨"],
        ['j1gyZtiOBP0', 2672, 2915, "ドナーソング"],
        ['j1gyZtiOBP0', 3560, 3863, "大嫌いなはずだった。"],
        ['j1gyZtiOBP0', 4292, 4613, "奏"],
        ['j1gyZtiOBP0', 4930, 5144, "くらべられっ子"],
        ['j1gyZtiOBP0', 5296, 5492, "ドレミファロンド"],

        //2020.09.14 きゅんきゅん恋愛ソング！たくさん歌う🎶
        ['j1gyZtiOBP0', 324, 561, "金曜日のおはよう"],
        ['j1gyZtiOBP0', 748, 965, "ヒロイン育成計画"],
        ['j1gyZtiOBP0', 1122, 1434, "世界は恋に落ちている"],
        ['j1gyZtiOBP0', 1563, 1818, "今好きになる"],
        ['j1gyZtiOBP0', 1982, 2186, "初恋の絵本"],
        ['j1gyZtiOBP0', 2353, 2600, "カヌレ"],
        ['j1gyZtiOBP0', 2750, 2975, "東京サマーセッション"],
        ['j1gyZtiOBP0', 3099, 3385, "スキキライ"],
        ['j1gyZtiOBP0', 3548, 3781, "プライド革命"],
        ['j1gyZtiOBP0', 3983, 4206, "センパイ"],
        ['j1gyZtiOBP0', 4345, 4608, "アイのシナリオ"],
        ['j1gyZtiOBP0', 4754, 5023, "決戦スピリット"],
        ['j1gyZtiOBP0', 5169, 5396, "ロクベル"],
        ['j1gyZtiOBP0', 5647, 5843, "ドレミファロンド"],

        //2020.09.12 ユナライブへようこそ❄️🐾②
        ['tJD7BhkXHV8', 329, 545, "妄想税"],
        ['tJD7BhkXHV8', 833, 1119, "ハッピーシンセサイザ"],
        ['tJD7BhkXHV8', 1219, 1415, "ドレミファロンド"],
        //2020.09.12 ユナライブへようこそ❄️🐾①
        ['BaSrzicFqE4', 230, 461, "青春なんていらないわ"],
        ['BaSrzicFqE4', 676, 829, "くらべられっ子"],
        ['BaSrzicFqE4', 1065, 1227, "夜行"],
        ['BaSrzicFqE4', 1492, 1673, "モザイクロール"],
        ['BaSrzicFqE4', 1827, 2134, "夜明けと蛍"],
        ['BaSrzicFqE4', 2276, 2434, "告白予行練習"],
        ['BaSrzicFqE4', 2603, 2814, "深海少女"],
        ['BaSrzicFqE4', 3010, 3260, "ワールドイズマイン"],
        ['BaSrzicFqE4', 3440, 3640, "気まぐれメルシィ"],
        ['BaSrzicFqE4', 3825, 4072, "チェリボム"],
        ['BaSrzicFqE4', 4227, 4260, "恋愛サーキュレーション"],

        //2020.09.07 リクエスト大募集！歌います！
        ['bvXG4UCuoCM', 260, 464, "ヒバナ"],
        ['bvXG4UCuoCM', 598, 815, "恋愛裁判"],
        ['bvXG4UCuoCM', 1126, 1347, "乙女解剖"],
        ['bvXG4UCuoCM', 1475, 1646, "Booo!"],
        ['bvXG4UCuoCM', 1794, 2009, "おじゃま虫"],
        ['bvXG4UCuoCM', 2171, 2406, "ハートアラモード"],
        ['bvXG4UCuoCM', 2557, 2769, "二息歩行"],
        ['bvXG4UCuoCM', 3038, 3237, "快晴"],
        ['bvXG4UCuoCM', 3394, 3629, "ウミユリ海底譚"],
        ['bvXG4UCuoCM', 3810, 3998, "いかないで"],
        ['bvXG4UCuoCM', 4150, 4443, "secret base"],
        ['bvXG4UCuoCM', 4601, 4796, "ドレミファロンド"],

        // 2020.08.31 夏の曲たくさん歌うよ～！！
        ['da9V--iWQlo', 278, 504, "夏祭り"],
        ['da9V--iWQlo', 648, 875, "夕景イエスタデイ"],
        ['da9V--iWQlo', 1007, 1365, "あの夏が飽和する。"],
        ['da9V--iWQlo', 1496, 1746, "花に亡霊"],
        ['da9V--iWQlo', 1890, 2133, "如月アテンション"],
        ['da9V--iWQlo', 2247, 2525, "少女レイ"],
        ['da9V--iWQlo', 2650, 2882, "Henceforth"],
        ['da9V--iWQlo', 3096, 3379, "夏戀花火"],
        ['da9V--iWQlo', 3626, 3919, " secret base"],
        ['da9V--iWQlo', 4113, 4332, "ドレミファロンド"],

        // 2020.08.25 お歌リベンジさせてください！
        ['i1Ei5evME30', 304, 520, "ダダダダ天使"],
        ['i1Ei5evME30', 792, 1010, "メランコリック"],
        ['i1Ei5evME30', 1170, 1448, "ハロ／ハワユ"],
        ['i1Ei5evME30', 1654, 1886, "プライド革命"],
        ['i1Ei5evME30', 2014, 2264, "合言葉Ⅲ"],
        ['i1Ei5evME30', 2388, 2633, "ファンサ"],
        ['i1Ei5evME30', 2762, 2961, "惑星ループ"],
        ['i1Ei5evME30', 3154, 3383, "シンクロナイザー"],
        ['i1Ei5evME30', 3630, 3823, "ドレミファロンド"],

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
