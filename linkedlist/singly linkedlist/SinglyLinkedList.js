// LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array. 

// Linked list contains a head ,tail and length property
//Linked list consist of nodes , and each node has a value and a pointer to another node or null



// Head                              Tail
// [Node1] -> [Node2] -> [Node3] -> [Node4]



//Comparisons with Arrays

// List
//Don't have indexes
//Connected via nodes with next Pointer
//Random Access is not allowded

//Arrays
//Indexed in Order
//Insertion and deletion can be expensive
//Can quickly be Accesed at a specific index


//Push :- Adding Item To linkedlist
//Popping :- Removeing a node from the linked list 





// PseudoCode for Pop
// 1) If there are no nodes in the list,return undefined
// 2) Loop through the list until you reach the tail
// 3) Set the next property of the 2nd last node to be null
// 4) Set the tail to be 2nd to last node
// 5) Decrement the length of the list by 1
// 6) Return the value of the node removed









class Node{
    constructor(val){
        this.val = val;
        this.next = null
    }
}


class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //Adding push methods

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length ++;
        return this;

    }


    pop(){
        if(!this.head){
            return undefined
        }else{
            let current = this.head;
            let newTail = current
            
        }

    }




    traverse() {
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next
        }
         
    }


}

var list = new SinglyLinkedList();
list.push("Hi")
list.push("Mihir")
list.push("Ravi")

console.log(list)
console.log(list.traverse())






