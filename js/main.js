// 授業一覧
var lessons = {
    0: '第1回 4/9',
    1: '第2回 4/16',
    2: '第3回 4/23'
};
var ldate = [];
ldate[0] = new Date(2018, 4 - 1, 9);
ldate[1] = new Date(2018, 4 - 1, 16);
ldate[2] = new Date(2018, 4 - 1, 23);

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
    30: ["3. 行為と規則", "14:10", ""],
};
var ltiming = {
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