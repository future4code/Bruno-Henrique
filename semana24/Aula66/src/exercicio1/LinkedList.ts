export class LinkedListNode{
    constructor(
        public value: any,
        public next: LinkedListNode | null = null
    ){}
}

export class LinkedList {
    constructor(
        public start: LinkedListNode | null = null
    ){}
    
    public addToEnd(value:any){

        if(!this.start){
            this.start = new LinkedListNode(value)
            return
        }

        let node = this.start

        while(node.next !== null){
            node = node.next
        }
        node.next = new LinkedListNode(value)
    }

    public printElements(): void{

        if(!this.start){
            console.log("Nenhum elemento encontrado");            
            return
        }

        let node: LinkedListNode | null = this.start

        while(node !== null){
            console.log(node.value)
            node = node.next
        }

    }
}
