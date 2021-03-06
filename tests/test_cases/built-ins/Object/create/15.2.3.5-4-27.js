// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.5-4-27
description: >
    Object.create - own enumerable accessor property in 'Properties'
    without a get function that overrides an enumerable inherited
    accessor property in 'Properties' is defined in 'obj' (15.2.3.7
    step 5.a)
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = {};
        Object.defineProperty(proto, "prop", {
            get: function () {
                return {};
            },
            enumerable: true
        });

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var child = new ConstructFun();
        Object.defineProperty(child, "prop", {
            set: function () { },
            enumerable: true
        });

        try {
            Object.create({}, child);

            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);
