"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Walk_1 = require("./Walk");
const steps = "DU".split("");
const walk = new Walk_1.Walk();
for (let direction of steps) {
    walk.to(direction);
}
