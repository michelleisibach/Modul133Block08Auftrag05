import { IDataStructure } from "./IDataStructure";

export class Stack<T> implements IDataStructure<T> {
    values: Array<T> = new Array<T>();

    public size(): number {
        return this.values.length;
    }

    public isEmpty(): boolean {
        return this.values.length === 0;
    }

    public enqueue(value: T): void {
        this.values.push(value);
    }

    public peek(): T {
        return this.values[this.values.length - 1];
    }

    public poll(): T {
        return <T>this.values.pop();
    }
}