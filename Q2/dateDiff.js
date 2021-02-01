var date_diff_in_days = function(date1, date2) {
    d1 = new Date(date1);
    d2 = new Date(date2);
    return Math.floor((Date.UTC(d2.getFullYear(), d2.getMonth(), d2.getDate()) - Date.UTC(d1.getFullYear(), d1.getMonth(), d1.getDate()) ) /(1000 * 60 * 60 * 24));
    }
    console.log(date_diff_in_days('04/02/2014', '11/04/2014'));
    console.log(date_diff_in_days('12/02/2014', '11/04/2014'));