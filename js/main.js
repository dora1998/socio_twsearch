// 授業一覧
var lessons = {
    0: '第1回 4/9',
    1: '第2回 4/16'
};

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