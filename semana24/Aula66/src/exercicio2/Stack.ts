import { LinkedList, LinkedListNode } from "../exercicio1/LinkedList";

export class Stack {
    constructor(
        public frames: LinkedList = new LinkedList()
    ) { }

    public isEmpty = (): Boolean => this.frames.start === null

    public push = (value: any): void => {
        this.frames.addToEnd(value)
    }

    public pop = (): any => {

        if (this.isEmpty()) {
            return null
        }

        let removedItem: LinkedListNode | null = this.frames.start

        while (removedItem?.next !== null) {
            removedItem = removedItem!.next
        }

        return removedItem
    }
}