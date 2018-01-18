var size = 8;

for (var i = 0; i < size; i++) {
    if (i % 2 === 0) {
        var char_a = ' ';
        var char_b = '#';
    } else {
        var char_a = '#';
        var char_b = ' ';
    }
    row = '';
    for (var j = 0; j < size; j++) {
        if (j % 2 === 0) {
            row += char_a;
        } else {
            row += char_b;
        }
    }
    console.log(row);
}