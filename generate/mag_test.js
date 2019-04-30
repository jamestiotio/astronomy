'use strict';
const fs = require('fs');
const Astronomy = require('../source/js/astronomy.js');

function Fail(message) {
    console.log(`FATAL(mag_test.js): ${message}`);
    process.exit(1);
}

function LoadMagnitudeData(filename) {
    const text = fs.readFileSync(filename, 'utf8');
    const lines = text.split(/[\r\n]+/);
    let lnum = 0;
    let rows = [];
    for (let line of lines) {
        ++lnum;

        // [ Date__(UT)__HR:MN      APmag  S-brt               r        rdot            delta      deldot    S-T-O]
        // [ 2023-Mar-30 00:00      -4.01   1.17  0.719092953368  -0.1186373 1.20453495004726 -11.0204917  55.9004]
        let m = line.match(/^\s(\d{4})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2})\s(\d{2}):(\d{2})\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s+(-?\d+\.\d+)\s*$/);
        if (m) {
            const year = parseInt(m[1]);
            const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].indexOf(m[2]);
            const day = parseInt(m[3]);
            const hour = parseInt(m[4]);
            const minute = parseInt(m[5]);

            const item = {
                lnum: lnum,
                date: new Date(Date.UTC(year, month, day, hour, minute)),
                mag: parseFloat(m[6]),
                sbrt: parseFloat(m[7]),
                helio_dist: parseFloat(m[8]),
                helio_radvel: parseFloat(m[9]),
                geo_dist: parseFloat(m[10]),
                geo_radvel: parseFloat(m[11]),
                phase_angle: parseFloat(m[12])
            };

            rows.push(item);
        }
    }

    //console.log(`${filename} : ${rows.length} rows`);

    return {
        filename: filename,
        rows: rows
    };
}

function CheckMagnitudeData(body, data) {
    let diff_lo, diff_hi;
    for (let item of data.rows) {
        let illum = Astronomy.Illumination(body, item.date);
        let diff = illum.mag - item.mag;
        if (diff_lo === undefined) {
            diff_lo = diff_hi = diff;
        } else {
            diff_lo = Math.min(diff_lo, diff);
            diff_hi = Math.max(diff_hi, diff);
        }
    }

    const limit = 0.012;
    const pass = (Math.abs(diff_lo) < limit && Math.abs(diff_hi) < limit);
    console.log(`${body.padEnd(8)} ${pass?"    ":"FAIL"}  diff_lo=${diff_lo.toFixed(4).padStart(8)}, diff_hi=${diff_hi.toFixed(4).padStart(8)}`);
    return pass;
}

function Test() {
    let all_passed = true;
    for (let body of Astronomy.Bodies) {
        if (body !== 'Earth' && body !== 'Saturn') {
            const data = LoadMagnitudeData(`magnitude/${body}.txt`);
            if (!CheckMagnitudeData(body, data))
                all_passed = false;
        }
    }
    all_passed || Fail('Found excessive error in at least one test.');
    console.log('SUCCESS');
}

Test();
process.exit(0);