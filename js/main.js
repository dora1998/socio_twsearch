// 授業一覧
var lessons = {
    0: '第1回 4/9',
    1: '第2回 4/16'
};
var ldate = [];
ldate[0] = new Date(2018, 4 - 1, 9);
ldate[1] = new Date(2018, 4 - 1, 16);

/* 各授業のタイミングデータ */
var lt0 = {
    0: "授業時間全体"
};
var lt1 = {
    0: "授業時間全体"
};
var ltiming = {
    1: lt1,
    0: lt0
};

$select_lesson = $('#lesson');
$select_part = $('#spart');
init();

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
    });
    loadLesson($select_lesson.val());
}

function loadLesson(lid) {
    $('#spart > option').remove();
    var options = $.map(ltiming[lid], function (name, value) {
        $option = $('<option>', { value: value, text: name });
        return $option;
    });
    
    $select_part.append(options);
}

function search() {
    var val_start = $('#range_start').val();
    var val_end = $('#range_end').val();

    var startDate = inputToDate(ldate[$select_lesson.val()], val_start);
    var endDate = inputToDate(ldate[$select_lesson.val()], val_end);
    var searchString = "#s1tq since:" +
        startDate.getFullYear() + "-" + ('0' + (startDate.getMonth() + 1)).slice(-2) + "-" + ('0' + startDate.getDate()).slice(-2) + "_" + ('0' + startDate.getHours()).slice(-2) + ":" + ('0' + startDate.getMinutes()).slice(-2) + ":00_JST until:" + 
        endDate.getFullYear() + "-" + ('0' + (endDate.getMonth() + 1)).slice(-2) + "-" + ('0' + endDate.getDate()).slice(-2) + "_" + ('0' + endDate.getHours()).slice(-2) + ":" + ('0' + endDate.getMinutes()).slice(-2) + ":00_JST";

    window.open('https://twitter.com/search?q=' + encodeURIComponent(searchString) + '&src=typd');
}

function inputToDate(day, time) {
    var res = new Date(day.getTime());;
    var t_spl = time.split(':');
    res.setHours(t_spl[0]);
    res.setMinutes(t_spl[1]);
    return res;
}