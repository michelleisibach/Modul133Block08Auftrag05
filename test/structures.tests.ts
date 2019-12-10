import { expect } from "chai";
import { Queue } from "../lib/Queue";
import { Stack } from "../lib/Stack";

describe("Data structures", () => {
    describe("QueueTests", () => {
        it("Empty Queue, Size 0", () => {
            const testee = new Queue<number>();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("Unempty Queue, isEmpty=false", () => {
            const testee = new Queue<number>();
            testee.enqueue(15);
            const result = testee.isEmpty();
            expect(result).to.be.false;
        })

        it("Empty Queue, isEmpty=true", () => {
            const testee = new Queue<number>();
            const result = testee.isEmpty();
            expect(result).to.be.true;
        })

        it("Enqueue Item, increases size", () => {
            const testee = new Queue<number>();;
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.size();
            expect(result).to.equal(3);
        })

        it("Peek Item, first added value", () => {
            const testee = new Queue<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.peek();
            expect(result).to.equal(11);
        })

        it("Peek Item, does not affect size", () => {
            const testee = new Queue<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.peek();
            const result = testee.size();
            expect(result).to.equal(3);
        })

        it("Poll Item, first added value", () => {
            const testee = new Queue<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.poll();
            expect(result).to.equal(11);
        })

        it("Poll Item, does affect size", () => {
            const testee = new Queue<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.poll();
            const result = testee.size();
            expect(result).to.equal(2);
        })
    })

    describe("StackTests", () => {
        it("Empty Stack, Size 0", () => {
            const testee = new Stack<number>();
            const result = testee.size();
            expect(result).to.equal(0);
        })

        it("UnEmpty Stack, isEmpty=false", () => {
            const testee = new Stack<number>();
            testee.enqueue(15);
            const result = testee.isEmpty();
            expect(result).to.be.false;
        })

        it("Empty Stack, isEmpty=true", () => {
            const testee = new Stack<number>();
            const result = testee.isEmpty();
            expect(result).to.be.true;
        })

        it("Enqueue Item, increases size", () => {
            const testee = new Stack<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.size();
            expect(result).to.equal(3);
        })

        it("Peek Item, last added value", () => {
            const testee = new Stack<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.peek();
            expect(result).to.equal(33);
        })

        it("Peek Item, doesnt affect size", () => {
            const testee = new Stack<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.peek();
            const result = testee.size();
            expect(result).to.equal(3);
        })

        it("Poll Item, last added value", () => {
            const testee = new Stack<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            const result = testee.poll();
            expect(result).to.equal(33);
        })

        it("Poll Item, affects size", () => {
            const testee = new Stack<number>();
            testee.enqueue(11);
            testee.enqueue(22);
            testee.enqueue(33);
            testee.poll();
            const result = testee.size();
            expect(result).to.equal(2);
        })
    })
})