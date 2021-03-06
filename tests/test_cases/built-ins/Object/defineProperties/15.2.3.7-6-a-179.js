// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-179
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' is boundary value 2^32 - 2 (15.4.5.1 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [];

        Object.defineProperties(arr, {
            "4294967294": {
                value: 100
            }
        });

        return arr.hasOwnProperty("4294967294") && arr.length === 4294967295 && arr[4294967294] === 100;
    }
runTestCase(testcase);
