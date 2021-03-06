// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-5-a-15
description: >
    Object.defineProperties - 'Properties' is the JSON object which
    implements its own [[Get]] method to get enumerable own property
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        try {
            JSON.prop = {
                value: 15
            };
            Object.defineProperties(obj, JSON);

            return obj.hasOwnProperty("prop") && obj.prop === 15;
        } finally {
            delete JSON.prop;
        }
    }
runTestCase(testcase);
