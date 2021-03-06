// 授業一覧
var lessons = {
    0: 'イントロダクション 4/9',
    1: '1章 4/16',
    2: '2章 4/23',
    3: '3章 5/7 ',
    4: '4章 5/14',
    5: '6章 5/21'
};
var ldate = [];
ldate[0] = new Date(2018, 4 - 1, 9);
ldate[1] = new Date(2018, 4 - 1, 16);
ldate[2] = new Date(2018, 4 - 1, 23);
ldate[3] = new Date(2018, 5 - 1, 7);
ldate[4] = new Date(2018, 5 - 1, 14);
ldate[5] = new Date(2018, 5 - 1, 21);

/* 各授業のタイミングデータ */
var lt0 = {
    0: ["授業時間全体", "13:00", "14:30"],
    1: ["授業後", "14:30", "18:30"]
};
var lt1 = {
    0: ["授業時間全体", "13:00", "14:30"],
    1: ["授業後", "14:30", "18:30"]
};
var lt2 = {
    10: ["前回公開アサインメント紹介など", "13:00", "13:10"],
    11: ["1. 行為が社会をつくる", "13:10", "13:15"],
    12: [" - 行為⊂行動", "13:15", "13:27"],
    13: [" - 行為の4類型", "13:27", "13:35"],
    14: [" - 2種類の「合理的行為」", "13:35", "13:44"],
    20: ["2. 合理的行為のパラドックス", "13:44", "13:51"],
    21: [" - ボランティアのパラドックス", "13:51", "13:59"],
    22: [" - パラドックスの2つのパターン", "13:59", "14:02"],
    23: [" - プロテスタンティズムの倫理と資本主義", "14:02", "14:10"],
    30: ["3. 行為と規則", "14:10", "14:14"],
    31: [" - 行為の決定不能性", "14:14", "14:24"],
    32: [" - 行為は社会をつくり、かつ社会によってつくられる", "14:24", "14:30"],
    40: ["授業後(~18:30)", "14:30", "18:30"]
};
var lt3 = {
    10: ["前回公開アサインメント紹介など", "13:00", "13:05"],
    11: ["1. コミュニティとアソシエーション", "13:05", "13:17"],
    12: [" - 「日本的経営」とその崩壊", "13:17", "13:29"],
    13: [" - 官僚制からネットワークへ", "13:29", "13:48"],
    20: ["2. ヴァーチャル・コミュニティ", "13:48", "13:52"],
    21: [" - 初期のネットコミュニティ：パソコン通信", "13:52", "14:00"],
    22: [" - ヴァーチャル・コミュニティの二面性", "14:00", "14:07"],
    23: [" - 「想像の共同体」としての国民国家", "14:07", "14:13"],
    30: ["3. 準拠集団(reference group)", "14:13", "14:17"],
    31: [" - 「社会化の先取り」「相対的不満」", "14:17", "14:30"],
    32: ["授業後(~18:30)", "14:30", "18:30"]
};
var lt4 = {
    10: ["前回公開アサインメント紹介など", "13:00", "13:10"],
    11: ["1. 「子ども」の誕生", "13:10", "13:20"],
    20: ["2. 公／私空間の近代化", "13:20", "13:25"],
    21: [" - 近代家族の出現", "13:25", "13:30"],
    22: [" - 日本における近代家族の成立", "13:30", "13:40"],
    23: [" - 近代社会の公／私空間", "13:40", "13:46"],
    24: [" - 近代家族の二重性", "13:46", "13:50"],
    30: ["3. 近代家族のゆらぎ", "13:50", "14:07"],
    31: [" - 近代家族の解体", "14:07", "14:11"],
    32: ["「クレヨンしんちゃん オトナ帝国の逆襲", "14:11", "14:27"],
    33: ["「地球へ…」", "14:27", "14:35"],
    34: ["授業後(~18:30)", "14:30", "18:30"]
}
var lt5 = {
    10: ["前回公開アサインメント紹介など", "13:00", "13:10"],
    11: ["規範と逸脱", "13:10", "13:15"],
    12: ["1. 人はなぜ逸脱するのか／しないのか", "13:15", "13:25"],
    13: [" - 道徳の源泉", "13:25", "13:38"],
    20: ["2. 社会統制の限界", "13:38", "13:45"],
    21: [" - 匿名性：社会統制の空間的限界", "13:45", "14:00"],
    30: ["3. 社会統制が生み出す逸脱", "14:00", "14:05"],
    31: [" - 逸脱者アイデンティティの形成", "14:05", "14:10"],
    32: [" - ラベリング理論の応用事例", "14:10", "14:15"],
    33: [" - 社会統制が生み出す新たな逸脱", "14:15", "14:20"],
    34: [" - 「ハッカー」へのラベリング", "14:20", "14:25"],
    35: [" - ラベリング理論の含意", "14:25", "14:30"],
    36: ["授業後(~18:30)", "14:30", "18:30"] 
}
var ltiming = {
    5: lt5,
    4: lt4,
    3: lt3,
    2: lt2,
    1: lt1,
    0: lt0
};

$select_lesson = $('#lesson');
$select_part = $('#spart');
init();

//初期化処理
function init() {
    var options = $.map(lessons, function (name, value) {
        $option = $('<option>', { value: value, text: name });
        return $option;
    });
    
    $select_lesson.append(options);
    $('#lesson > option:first-child').remove();

    $(function($) {
        $select_lesson.change(function() {
            loadLesson($(this).val());
        });
        $("#button_search").click(function() {
            search();
        })
        $select_part.change(function() {
            setTimeRange($(this).val());
        });
    });
    loadLesson($select_lesson.val());
}

//授業選択時のパート一覧読込処理
function loadLesson(lid) {
    $('#spart > option').remove();
    var options = $.map(ltiming[lid], function (name, value) {
        $option = $('<option>', { value: value, text: name[0] });
        return $option;
    });
    
    $select_part.append(options);
}

//パート選択時の時間設定処理
function setTimeRange(pid) {
    var r = ltiming[$select_lesson.val()][pid];
    $('#range_start').val(r[1]);
    $('#range_end').val(r[2]);
}

//検索処理
function search() {
    var val_start = $('#range_start').val();
    var val_end = $('#range_end').val();
    if (val_start == "" && val_end == "") return;

    var startDate = inputToDate(ldate[$select_lesson.val()], val_start);
    var searchString = "#s1tq since:" +
        startDate.getFullYear() + "-" + ('0' + (startDate.getMonth() + 1)).slice(-2) + "-" + ('0' + startDate.getDate()).slice(-2) + "_" + ('0' + startDate.getHours()).slice(-2) + ":" + ('0' + startDate.getMinutes()).slice(-2) + ":00_JST";
    if (val_end != "") {
        var endDate = inputToDate(ldate[$select_lesson.val()], val_end);
        searchString += " until:" + endDate.getFullYear() + "-" + ('0' + (endDate.getMonth() + 1)).slice(-2) + "-" + ('0' + endDate.getDate()).slice(-2) + "_" + ('0' + endDate.getHours()).slice(-2) + ":" + ('0' + endDate.getMinutes()).slice(-2) + ":00_JST";
    }

    window.open('https://twitter.com/search?q=' + encodeURIComponent(searchString) + '&src=typd');
}

//日付と時間の結合処理
function inputToDate(day, time) {
    var res = new Date(day.getTime());;
    var t_spl = time.split(':');
    res.setHours(t_spl[0]);
    res.setMinutes(t_spl[1]);
    return res;
}