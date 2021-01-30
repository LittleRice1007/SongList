var myPlaylist = (typeof myPlaylist === 'undefined') ? [] : myPlaylist;
(function() {
    //整理者：小飯(LittleRice)
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
        //2020.12.24 クリスマスソング／backnumber
        ['j_2ZBliHt8U', 0, 0, "クリスマスソング"],

        //2020.12.21 全力全開Singing!!!
        ['nOmnsDGeyzo', 331, 547, "ダダダダ天使"],
        ['nOmnsDGeyzo', 734, 988, "病名恋ワズライ"],
        ['nOmnsDGeyzo', 1084, 1315, "劣等上等"],
        ['nOmnsDGeyzo', 1398, 1669, "猫"],
        ['nOmnsDGeyzo', 1771, 2027, "このピアノでお前を8759632145回ぶん殴る"],
        ['nOmnsDGeyzo', 2135, 2268, "KING"],
        ['nOmnsDGeyzo', 2368, 2611, "今日もサクラ舞う暁に"],
        ['nOmnsDGeyzo', 2737, 3037, "トワイライト急行"],
        ['nOmnsDGeyzo', 3121, 3317, "アサガオの散る頃に"],
        ['nOmnsDGeyzo', 3395, 3628, "夜もすがら君想ふ"],
        ['nOmnsDGeyzo', 3747, 4064, "ハナミズキ"],
        ['nOmnsDGeyzo', 4185, 4407, "Darling"],
        ['nOmnsDGeyzo', 4482, 4682, "トゥインクル"],
        ['nOmnsDGeyzo', 4682, 4994, "初恋の絵本"],
        ['nOmnsDGeyzo', 5414, 5610, "ドレミファロンド"],

        //2020.12.14 まだまだ歌い足りないっっ
        ['8nNoNODMLxc', 336, 564, "星間飛行"],
        ['8nNoNODMLxc', 665, 924, "帝国少女"],
        ['8nNoNODMLxc', 1031, 1233, "ただ君に晴れ"],
        ['8nNoNODMLxc', 1322, 1662, "君の知らない物語"],
        ['8nNoNODMLxc', 1738, 1989, "シュガーソングとビターステップ"],
        ['8nNoNODMLxc', 2122, 2391, "決戦スピリット"],
        ['8nNoNODMLxc', 2481, 2748, "前前前世"],
        ['8nNoNODMLxc', 2861, 3136, "サリシノハラ"],
        ['8nNoNODMLxc', 3295, 3498, "ロメオ"],
        ['8nNoNODMLxc', 3682, 3876, "ボッカデラベリタ"],
        ['8nNoNODMLxc', 4160, 4380, "イジワルな出会い"],
        ['8nNoNODMLxc', 4523, 4756, "プライド革命"],
        ['8nNoNODMLxc', 4858, 5065, "ゴーストルール"],
        ['8nNoNODMLxc', 5199, 5397, "オツキミリサイタル"],
        ['8nNoNODMLxc', 5532, 5768, "紅蓮華"],
      //['8nNoNODMLxc', 5891, 6087, "ドレミファロンド"],//new

        //2020.12.12 ワタシノテンシ／HoneyWorks
        ['yXDIRzrTQ68', 0, 0, "ワタシノテンシ"],

        //2020.12.12 アニソンパーティー始まるよ！！！
      //['f5BzrI6mX_U', 370, 460, "Butter-Fly"],
      //['f5BzrI6mX_U', 548, 643, "Wake up!"],
      //['f5BzrI6mX_U', 760, 866, "気まぐれロマンティック"],
      //['f5BzrI6mX_U', 1004, 1096, "ヒトリゴト"],
      //['f5BzrI6mX_U', 1262, 1350, "ノスタルジックレインフォール"],
      //['f5BzrI6mX_U', 1478, 1555, "シルエット"],
      //['f5BzrI6mX_U', 1679, 1766, "あ・え・い・う・え・お・あお！！"],
      //['f5BzrI6mX_U', 1892, 1986, "おジャ魔女カーニバル！！"],
      //['f5BzrI6mX_U', 2083, 2157, "ムーンライト伝説"],
      //['f5BzrI6mX_U', 2270, 2383, "ウィーアー！"],
      //['f5BzrI6mX_U', 2523, 2617, "紅蓮の弓矢"],
      //['f5BzrI6mX_U', 2703, 2790, "インフェルノ"],
      //['f5BzrI6mX_U', 2887, 2994, "残酷な天使のテーゼ"],
      //['f5BzrI6mX_U', 3214, 3367, "魂のルフラン"],
      //['f5BzrI6mX_U', 3465, 3564, "God Knows..."],
      //['f5BzrI6mX_U', 3668, 3774, "unravel"],
      //['f5BzrI6mX_U', 3874, 3954, "タッチ"],
      //['f5BzrI6mX_U', 4066, 4148, "DANZEN! ふたりはプリキュア"],
      //['f5BzrI6mX_U', 4237, 4318, "ハレ晴レユカイ"],
      //['f5BzrI6mX_U', 4428, 4536, "Daydream cafe"],
      //['f5BzrI6mX_U', 4643, 4712, "檄！帝国華撃団"],
      //['f5BzrI6mX_U', 4792, 4882, "そばかす"],
      //['f5BzrI6mX_U', 4970, 5066, "ブルーバード"],
      //['f5BzrI6mX_U', 5131, 5272, "フリージア"],
      //['f5BzrI6mX_U', 5352, 5445, "天体観測"],
      //['f5BzrI6mX_U', 5560, 5632, "光るなら"],
      //['f5BzrI6mX_U', 5707, 5801, "ライオン"],
      //['f5BzrI6mX_U', 5859, 5966, "炎"],
      //['f5BzrI6mX_U', 6036, 6132, "Rising Hope"],
      //['f5BzrI6mX_U', 6267, 6362, "創聖のアクエリオン"],
      //['f5BzrI6mX_U', 6439, 6336, "ドレミファロンド"],//new

        //2020.12.05 4000人感謝LIVE開催！！！
      //['QfPeMclxfL4', 276, 411, "KING"],//new
        ['QfPeMclxfL4', 533, 746, "くらべられっ子"],
        ['QfPeMclxfL4', 849, 1129, "ハロ/ハワユ"],
      //['QfPeMclxfL4', 1221, 1486, "夜に駆ける"],//有Cover的版本
        ['QfPeMclxfL4', 1577, 1793, "メランコリック"],
        ['QfPeMclxfL4', 1874, 2077, "夜行"],
        ['QfPeMclxfL4', 2161, 2183, "花に亡霊"],
        ['QfPeMclxfL4', 2275, 2497, "丸の內サディスティック"],
        ['QfPeMclxfL4', 2571, 2819, "チェリボム"],
        ['QfPeMclxfL4', 2901, 3249, "あの夏が飽和する。"],
        ['QfPeMclxfL4', 3356, 3540, "二息歩行"],
      //['QfPeMclxfL4', 3616, 3876, "ワタシノテンシ"],//有Cover的版本
      //['QfPeMclxfL4', 3968, 4200, "プライド革命"],//new
        ['QfPeMclxfL4', 4261, 4513, "戀愛サーキュレーション"],
        ['QfPeMclxfL4', 4615, 4850, "CheerS"],
        ['QfPeMclxfL4', 4939, 5233, "secret base"],
        ['QfPeMclxfL4', 5324, 5554, "シンクロナイザー"],
      //['QfPeMclxfL4', 5693, 5816, "知りたい"],//有Cover的版本
      //['QfPeMclxfL4', 5934, 6129, "ドレミファロンド"],//new

        //2020.11.30 アイドルいきます！！！
        ['me3GNPlpoSA', 213, 426, "ヒロインなるもの"],
        ['me3GNPlpoSA', 502, 753, "フライングゲット"],
      //['me3GNPlpoSA', 829, 1046, "ダダダダ天使"],//new
        ['me3GNPlpoSA', 1115, 1324, "ディスコミュ星人"],
        ['me3GNPlpoSA', 1394, 1560, "ワンルームシュガーライフ"],
        ['me3GNPlpoSA', 1621, 1876, "トリセツ"],
        ['me3GNPlpoSA', 1935, 2120, "グランドエスケープ"],
        ['me3GNPlpoSA', 2201, 2435, "ウミユリ海底譚"],
        ['me3GNPlpoSA', 2524, 2801, "God knows..."],
        ['me3GNPlpoSA', 2867, 3031, "テレキャスタービーボーイ"],
        ['me3GNPlpoSA', 3097, 3394, "Calc."],
        ['me3GNPlpoSA', 3500, 3833, "アヤノの幸福理論"],
        ['me3GNPlpoSA', 3905, 4095, "はなまるぴっぴはよいこだけ"],
        ['me3GNPlpoSA', 4178, 4421, "ニア"],
        ['me3GNPlpoSA', 4520, 4812, "高嶺の花子さん"],
        ['me3GNPlpoSA', 4899, 5109, "かくしん的 めたまるふぉ～ぜっ!"],
        ['me3GNPlpoSA', 5303, 5548, "ファンサ"],
      //['me3GNPlpoSA', 5664, 5861, "ドレミファロンド"],//new

        //2020.11.23 デビュー3ヶ月ありがとう❄🐾
        ['Fh1CehRKDmY', 314, 539, "行くぜっ!怪盗少女"],
        ['Fh1CehRKDmY', 642, 890, "おちゃめ機能"],
        ['Fh1CehRKDmY', 967, 1231, "私、アイドル宣言"],
        ['Fh1CehRKDmY', 1352, 1540, "春を告げる"],
        ['Fh1CehRKDmY', 1625, 1867, "言って。"],
        ['Fh1CehRKDmY', 1931, 2131, "ゆるふわ樹海ガール"],
        ['Fh1CehRKDmY', 2203, 2418, "妄想税"],
        ['Fh1CehRKDmY', 2481, 2750, "炎"],
        ['Fh1CehRKDmY', 2829, 3072, "LOSER"],
        ['Fh1CehRKDmY', 3138, 3275, "だんだん早くなる"],
        ['Fh1CehRKDmY', 3373, 3572, "ようこそジャパリパークへ"],
      //['Fh1CehRKDmY', 3710, 3982, "猫"],//new
        ['Fh1CehRKDmY', 4065, 4277, "スイートマジック"],
      //['Fh1CehRKDmY', 4348, 4585, "Darling"],//new
        ['Fh1CehRKDmY', 4688, 4969, "恋するフォーチュンクッキー"],
        ['Fh1CehRKDmY', 5194, 5384, "君色に染まる"],
      //['Fh1CehRKDmY', 5542, 5739, "ドレミファロンド"],//new

        //2020.11.22 夜に駆ける／YOASOBI covered by 伊冬ユナ
        ['XryVk7-3l-k', 0, 0, "夜に駆ける"],


        //2020.11.16 ほぼボカロ❕(たまにJPOP)
        ['fH9TNsYjl4c', 369, 570, "気まぐれメルシィ"],
        ['fH9TNsYjl4c', 680, 878, "恋の魔法"],
        ['fH9TNsYjl4c', 964, 1230, "ハイドアンドシーク"],
        ['fH9TNsYjl4c', 1328, 1534, "スキスキ絶頂症"],
        ['fH9TNsYjl4c', 1646, 1849, "ダーリンダンス"],
        ['fH9TNsYjl4c', 1954, 2187, "chocolate box"],
        ['fH9TNsYjl4c', 2296, 2611, "瞬き"],
        ['fH9TNsYjl4c', 2714, 2965, "可愛くなりたい"],
      //['fH9TNsYjl4c', 3079, 3334, "病名恋ワズライ"],//new
        ['fH9TNsYjl4c', 3403, 3658, "今好きになる。"],
        ['fH9TNsYjl4c', 3740, 3983, "ミスター・ダーリン"],
        ['fH9TNsYjl4c', 4057, 4264, "カタオモイ"],
        ['fH9TNsYjl4c', 4379, 4670, "どうぶつ占い"],
        ['fH9TNsYjl4c', 4750, 4942, "おねがいダーリン"],
      //['fH9TNsYjl4c', 5043, 5382, "君の知らない物語"],//new
        ['fH9TNsYjl4c', 5507, 5753, "愛言葉Ⅲ"],
      //['fH9TNsYjl4c', 5890, 6086, "ドレミファロンド"],//new

        //2020.11.09 ユナソングたくさん聴いてって😘
        ['pOmEtpUhrQ8', 280, 504, "放課後ストライド"],
        ['pOmEtpUhrQ8', 604, 830, "おジャ魔女カーニバル!!"],
      //['pOmEtpUhrQ8', 956, 1183, "星間飛行"],//new
        ['pOmEtpUhrQ8', 1286, 1537, "神のまにまに"],
        ['pOmEtpUhrQ8', 1621, 1857, "砂の惑星"],
        ['pOmEtpUhrQ8', 1945, 2160, "おじゃま虫"],
        ['pOmEtpUhrQ8', 2253, 2425, "ルージュの伝言"],
        ['pOmEtpUhrQ8', 2520, 2928, "愛にできることはまだあるかい"],
        ['pOmEtpUhrQ8', 3030, 3297, "さようなら、花沢棒さん"],
        ['pOmEtpUhrQ8', 3420, 3631, "翡翠のまち"],
        ['pOmEtpUhrQ8', 3723, 3931, "彗星ハネムーン"],
        ['pOmEtpUhrQ8', 4040, 4225, "脱法ロック"],
        ['pOmEtpUhrQ8', 4317, 4535, "絶え間なく藍色"],
        ['pOmEtpUhrQ8', 4606, 4807, "独りんぼエンヴィー"],
        ['pOmEtpUhrQ8', 4939, 5257, "Pretender"],
        ['pOmEtpUhrQ8', 5386, 5634, "藍二乗"],
      //['pOmEtpUhrQ8', 5764, 5960, "ドレミファロンド"],//new


        //2020.11.02 ピアノ音源縛りでしっとりと🎹🎶
      //['fMHyKMghjCQ', 251, 512, "夜に駆ける"],//有Cover的版本
      //['fMHyKMghjCQ', 609, 895, "サリシノハラ"],//new
        ['fMHyKMghjCQ', 999, 1276, "宿命"],
        ['fMHyKMghjCQ', 1371, 1687, "夜明けと蛍"],
        ['fMHyKMghjCQ', 1773, 1972, "1925"],
      //['fMHyKMghjCQ', 2173, 2407, "紅蓮華"],//new
        ['fMHyKMghjCQ', 2513, 2899, "スパークル（君の名は。）"],
      //['fMHyKMghjCQ', 2974, 3216, "メランコリック"],//new
      //['fMHyKMghjCQ', 3293, 3531, "花に亡霊"],//new
        ['fMHyKMghjCQ', 3603, 3875, "少女レイ"],
        ['fMHyKMghjCQ', 3949, 4142, "夜咄ディセイブ"],
        ['fMHyKMghjCQ', 4240, 4507, "吉原ラメント"],
        ['fMHyKMghjCQ', 4582, 4925, "たばこ"],
        ['fMHyKMghjCQ', 5031, 5380, "さよならミッドナイト"],
        ['fMHyKMghjCQ', 5496, 5728, "いかないで"],
      //['fMHyKMghjCQ', 5896, 6091, "ドレミファロンド "],//new

        //2020.10.26 今日も今日とて歌う🌟
      //['q5S886m4d00', 309, 522, "くらべられっ子"],//new
        ['q5S886m4d00', 630, 873, "バレリーコ"],
        ['q5S886m4d00', 954, 1184, "青春なんていらないわ"],
        ['q5S886m4d00', 1249, 1553, "ひまわりの約束"],
        ['q5S886m4d00', 1623, 1855, "勇気100%"],
        ['q5S886m4d00', 1983, 2220, "Sweets Parade"],
        ['q5S886m4d00', 2320, 2564, "Happy Halloween"],
        ['q5S886m4d00', 2651, 2899, "Crazy Party Night ~ぱんぷきんの逆襲~"],
        ['q5S886m4d00', 3001, 3255, "Mrs.Pumpkinの滑稽な夢"],
      //['q5S886m4d00', 3348, 3542, "ボッカデラベリタ"],//new
        ['q5S886m4d00', 3610, 3838, "虎視眈々"],
        ['q5S886m4d00', 3894, 4152, "からくりピエロ"],
        ['q5S886m4d00', 4227, 4445, "ヤキモチの答え-anther story-"],
        ['q5S886m4d00', 4510, 4797, "別の人の彼女になったよ"],
      //['q5S886m4d00', 4875, 5097, "カタオモイ"],//new
        ['q5S886m4d00', 5227, 5489, "サイレントマジョリティー"],
      //['q5S886m4d00', 5591, 5787, "ドレミファロンド  "],//new

        //2020.10.19 ボカロたくさん歌うよ~~❕❄
        ['hYbrtibjc20', 269, 509, "Booo!"],
      //['hYbrtibjc20', 654, 833, "バレリーコ"],//new
        ['hYbrtibjc20', 1116, 1327, "深海少女"],
      //['hYbrtibjc20', 1419, 1627, "ゴーストルール"],//new
        ['hYbrtibjc20', 1748, 1931, "ブリキノダンス"],
      //['hYbrtibjc20', 2020, 2210, "君色に染まる"],//new
      //['hYbrtibjc20', 2326, 2559, "夜もすがら君想ふ"],//new
        ['hYbrtibjc20', 2672, 2924, "ワールドイズマイン"],
        ['hYbrtibjc20', 3071, 3337, "心做し"],
        ['hYbrtibjc20', 3485, 3669, "天ノ弱"],
        ['hYbrtibjc20', 3805, 4080, "ロミオとシンデレラ"],
        ['hYbrtibjc20', 4182, 4403, "パンダヒーロー"],
        ['hYbrtibjc20', 4523, 4785, "夢花火"],
      //['hYbrtibjc20', 4893, 5119, "Calc."],//new
        ['hYbrtibjc20', 5214, 5450, "ハートアラモード"],
        ['hYbrtibjc20', 5537, 5776, "千本桜"],
      //['hYbrtibjc20', 5884, 6081, "ドレミファロンド"],//new

        //2020.10.12 感謝と愛を込めて歌います❄🐾
        ['vRKSdZjF8lc', 239, 595, "す一ぱーぬこになりたい"],
      //['vRKSdZjF8lc', 712, 942, "星間飛行"],//new
      //['vRKSdZjF8lc', 1067, 1317, "可愛くなりたい"],//new
        ['vRKSdZjF8lc', 1414, 1667, "恋愛サーキュレーション"],
        ['vRKSdZjF8lc', 1803, 2080, "白曰"],
        ['vRKSdZjF8lc', 2211, 2461, "香水"],
        ['vRKSdZjF8lc', 2572, 2828, "Happy birthday"],
        ['vRKSdZjF8lc', 2950, 3157, "惑星ループ"],
      //['vRKSdZjF8lc', 3246, 3456, "ディスコミュ星人"],//new
        ['vRKSdZjF8lc', 3595, 3851, "秒針を噛む"],
        ['vRKSdZjF8lc', 3942, 4199, "妄想感傷代償連盟"],
      //['vRKSdZjF8lc', 4300, 4582, "ハロ/ハワユ"],//new
        ['vRKSdZjF8lc', 4704, 4932, "ロクベル"],
        ['vRKSdZjF8lc', 5013, 5295, "ピエロ"],
      //['vRKSdZjF8lc', 5414, 5693, "前前前世"],//new
      //['vRKSdZjF8lc', 5848, 6094, "愛言葉 III"],//new
      //['vRKSdZjF8lc', 6163, 6360, "ドレミファロンド"],//new

        //2020.10.05 月曜日だよ！ユナライブだよ🌟
        ['wQA68grlLPc', 283, 479, "ベノム"],
      //['wQA68grlLPc', 584, 843, "夜に駆ける"],//有Cover的版本
      //['wQA68grlLPc', 980, 1238, "このピアノでお前を8759632145回ぶん殴る"],//new
      //['wQA68grlLPc', 1363, 1599, "CheerS"],//new
        ['wQA68grlLPc', 1700, 1946, "全力バタンキュー"],
        ['wQA68grlLPc', 2085, 2351, "さようなら、花泥棒さん"],
        ['wQA68grlLPc', 2445, 2665, "恋愛裁判"],
        ['wQA68grlLPc', 2773, 3000, "ロキ"],
      //['wQA68grlLPc', 3121, 3337, "ダダダダ天使"],//new
        ['wQA68grlLPc', 3468, 3706, "弱虫モンブラン"],
      //['wQA68grlLPc', 3816, 4027, "スイートマジック "],//new
        ['wQA68grlLPc', 4153, 4408, "贖罪 "],
        ['wQA68grlLPc', 4586, 4904, "奏"],
        ['wQA68grlLPc', 5007, 5240, "いーあるふぁんくらぶ"],
        ['wQA68grlLPc', 5452, 5683, "あの娘シークレット "],
      //['wQA68grlLPc', 5810, 6006, "ドレミファロンド "],//new

        //2020.09.28 ついに…!!アニソンを歌います🌟
        ['-laC57ldaLs', 330, 419, "お願いマッスル"],
        ['-laC57ldaLs', 540, 707, "ムーンライト伝説"],
        ['-laC57ldaLs', 865, 1028, "ワンルームシュガーライブ"],
        ['-laC57ldaLs', 1170, 1377, "かくしん的☆めたまるふぉ~ぜっ！"],
        ['-laC57ldaLs', 1514, 1673, "ラムのラブソング"],
        ['-laC57ldaLs', 1847, 1940, "チカッとチカ千花"],
      //['-laC57ldaLs', 2116, 2317, "ようこそジャパリパークへ"],//new
        ['-laC57ldaLs', 2461, 2710, "乙女どもよ"],
      //['-laC57ldaLs', 2827, 3053, "おジャ魔女カーニバル"],//new
      //['-laC57ldaLs', 3193, 3382, "はなまるぴっぴはよいこだけ"],//new
      //['-laC57ldaLs', 3541, 3792, "恋愛サーキュレーション"],//new
      //['-laC57ldaLs', 3929, 4174, "全力バタンキュー"],//new
        ['-laC57ldaLs', 4447, 4546, "紅蓮の弓矢"],
      //['-laC57ldaLs', 4725, 4958, "紅蓮華"],//new
      //['-laC57ldaLs', 5120, 5316, "ドレミファロンド"],//new

        //2020.09.22 知りたい／水野あつ covered by 伊冬ユナ
        ['KVKe6hJiKjU', 0, 0, "知りたい"],

        //2020.09.21 月曜日のユナライブ❄🐾
        ['16OmDROLLhI', 249, 447, "ノーダウト"],
        ['16OmDROLLhI', 575, 796, "丸の内サディスティック"],
        ['16OmDROLLhI', 949, 1237, "アイネクライネ"],
        ['16OmDROLLhI', 1401, 1651, "さよならエレジー"],
      //['16OmDROLLhI', 1815, 2107, "高嶺の花子さん"],//new
        ['16OmDROLLhI', 2412, 2714, "マリーゴールド"],
        ['16OmDROLLhI', 2883, 3007, "言葉のいらない約束"],
        ['16OmDROLLhI', 3180, 3398, "チューリングラブ"],
      //['16OmDROLLhI', 3510, 3775, "心做し"],//new
      //['16OmDROLLhI', 3931, 4130, "ただ君に晴れ"],//new
      //['16OmDROLLhI', 4270, 4404, "KING"],//new
      //['16OmDROLLhI', 4596, 4840, "ファンサ"],//new
      //['16OmDROLLhI', 4973, 5165, "おねがいダーリン"],//new
      //['16OmDROLLhI', 5308, 5504, "ドレミファロンド"],//new


        //2020.09.17 ご主人の疲れを吹っ飛ばします！！
      //['j1gyZtiOBP0', 267, 463, "アサガオの散る頃に"],//new
      //['j1gyZtiOBP0', 641, 995, "たばこ"],//new
        ['j1gyZtiOBP0', 1354, 1655, "心拍数＃0822"],
        ['j1gyZtiOBP0', 1887, 2277, "桜の雨"],
        ['j1gyZtiOBP0', 2672, 2915, "ドナーソング"],
        ['j1gyZtiOBP0', 3560, 3863, "大嫌いなはずだった。"],
      //['j1gyZtiOBP0', 4292, 4613, "奏"],//new
      //['j1gyZtiOBP0', 4930, 5144, "くらべられっ子"],//new
      //['j1gyZtiOBP0', 5296, 5492, "ドレミファロンド"],//new

        //2020.09.14 きゅんきゅん恋愛ソング！たくさん歌う🎶
        ['j1gyZtiOBP0', 324, 561, "金曜日のおはよう"],
        ['j1gyZtiOBP0', 748, 965, "ヒロイン育成計画"],
        ['j1gyZtiOBP0', 1122, 1434, "世界は恋に落ちている"],
      //['j1gyZtiOBP0', 1563, 1818, "今好きになる"],//new
      //['j1gyZtiOBP0', 1982, 2186, "初恋の絵本"],//new
        ['j1gyZtiOBP0', 2353, 2600, "カヌレ"],
        ['j1gyZtiOBP0', 2750, 2975, "東京サマーセッション"],
        ['j1gyZtiOBP0', 3099, 3385, "スキキライ"],
      //['j1gyZtiOBP0', 3548, 3781, "プライド革命"],//new
        ['j1gyZtiOBP0', 3983, 4206, "センパイ"],
        ['j1gyZtiOBP0', 4345, 4608, "アイのシナリオ"],
      //['j1gyZtiOBP0', 4754, 5023, "決戦スピリット"],//new
      //['j1gyZtiOBP0', 5169, 5396, "ロクベル"],//new
      //['j1gyZtiOBP0', 5647, 5843, "ドレミファロンド"],//new

        //2020.09.12 ユナライブへようこそ❄️🐾①
      //['BaSrzicFqE4', 230, 461, "青春なんていらないわ"],//new
      //['BaSrzicFqE4', 676, 829, "くらべられっ子"],//new
      //['BaSrzicFqE4', 1065, 1227, "夜行"],//new
        ['BaSrzicFqE4', 1492, 1673, "モザイクロール"],
      //['BaSrzicFqE4', 1827, 2134, "夜明けと蛍"],//new
        ['BaSrzicFqE4', 2276, 2434, "告白予行練習"],
      //['BaSrzicFqE4', 2603, 2814, "深海少女"]//new
      // ['BaSrzicFqE4', 3010, 3260, "ワールドイズマイン"],//new
      //['BaSrzicFqE4', 3440, 3640, "気まぐれメルシィ"],//new
      //['BaSrzicFqE4', 3825, 4072, "チェリボム"],//new
      //['BaSrzicFqE4', 4227, 4260, "恋愛サーキュレーション"],//new
        //2020.09.12 ユナライブへようこそ❄️🐾②
      //['tJD7BhkXHV8', 329, 545, "妄想税"],//new
        ['tJD7BhkXHV8', 833, 1119, "ハッピーシンセサイザ"],
      //['tJD7BhkXHV8', 1219, 1415, "ドレミファロンド"],//new

        //2020.09.07 リクエスト大募集！歌います！
        ['bvXG4UCuoCM', 260, 464, "ヒバナ"],
      //['bvXG4UCuoCM', 598, 815, "恋愛裁判"],//new
        ['bvXG4UCuoCM', 1126, 1347, "乙女解剖"],
      //['bvXG4UCuoCM', 1475, 1646, "Booo!"],//new
      //['bvXG4UCuoCM', 1794, 2009, "おじゃま虫"],//new
      //['bvXG4UCuoCM', 2171, 2406, "ハートアラモード"],//new
      //['bvXG4UCuoCM', 2557, 2769, "二息歩行"],//new
        ['bvXG4UCuoCM', 3038, 3237, "快晴"],
      //['bvXG4UCuoCM', 3394, 3629, "ウミユリ海底譚"],//new
      //['bvXG4UCuoCM', 3810, 3998, "いかないで"],//new
      //['bvXG4UCuoCM', 4150, 4443, "secret base"],//new
      //['bvXG4UCuoCM', 4601, 4796, "ドレミファロンド"],//new

        // 2020.08.31 夏の曲たくさん歌うよ～！！
        ['da9V--iWQlo', 278, 504, "夏祭り"],
        ['da9V--iWQlo', 648, 875, "夕景イエスタデイ"],
      //['da9V--iWQlo', 1007, 1365, "あの夏が飽和する。"],//new
      //['da9V--iWQlo', 1496, 1746, "花に亡霊"],//new
        ['da9V--iWQlo', 1890, 2133, "如月アテンション"],
      //['da9V--iWQlo', 2247, 2525, "少女レイ"],//new
        ['da9V--iWQlo', 2650, 2882, "Henceforth"],
        ['da9V--iWQlo', 3096, 3379, "夏戀花火"],
      //['da9V--iWQlo', 3626, 3919, " secret base"],//new
      //['da9V--iWQlo', 4113, 4332, "ドレミファロンド"],//new

        // 2020.08.25 お歌リベンジさせてください！
      //['i1Ei5evME30', 304, 520, "ダダダダ天使"],//new
      //['i1Ei5evME30', 792, 1010, "メランコリック"],//new
      //['i1Ei5evME30', 1170, 1448, "ハロ／ハワユ"],//new
      //['i1Ei5evME30', 1654, 1886, "プライド革命"],//new
      //['i1Ei5evME30', 2014, 2264, "愛言葉Ⅲ"],//new
      //['i1Ei5evME30', 2388, 2633, "ファンサ"],//new
      //['i1Ei5evME30', 2762, 2961, "惑星ループ"],//new
      //['i1Ei5evME30', 3154, 3383, "シンクロナイザー"],//new
      //['i1Ei5evME30', 3630, 3823, "ドレミファロンド"],//new

    ];

    /** 載入判斷 **/
    CheckAndLoadPlaylist(listName, tags, newPlaylist);
})();
