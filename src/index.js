module.exports = function toReadable (number) {
    let dict = new Map ([
        [0, 'zero'],
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
        [4, 'four'],
        [5, 'five'],
        [6, 'six'],
        [7, 'seven'],
        [8, 'eight'],
        [9, 'nine'],
        [10, 'ten'],
        [11, 'eleven'],
        [12, 'twelve'],
        [13, 'thirteen'],
        [14, 'fourteen'],
        [15, 'fifteen'],
        [16, 'sixteen'],
        [17, 'seventeen'],
        [18, 'eighteen'],
        [19, 'nineteen'],
        [20, 'twenty'],
        [30, 'thirty'],
        [40, 'forty'],
        [50, 'fifty'],
        [60, 'sixty'],
        [70, 'seventy'],
        [80, 'eighty'],
        [90, 'ninety']
    ]);

    let res = '';

    if (dict.has(number)) return dict.get(number);

    const hundred = Math.floor(number / 100);

    if (hundred > 0) {
        res += dict.get(hundred) + ' hundred';
        if (number % 100 == 0) return res;
        number = number - hundred*100;
    }

    if (dict.has(number)) {
        if (hundred > 0) res += ' ';
        res += dict.get(number);
    }
    else {
        if (hundred > 0) res += ' ';
        const dec  = Math.floor(number / 10);
        res +=  dict.get(dec*10);
        if ( number % 10 != 0 ) res += ' ' + dict.get(number % 10);

    }
    return res;
}
