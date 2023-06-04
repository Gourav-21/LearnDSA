# Linked list

## Introduction
Like arrays, a linked list is used to represent sequential data. It is a linear collection of data elements whose order is not given by their physical placement in memory, as opposed to arrays, where data is stored in sequential blocks of memory. Instead, each element contains an address of the next element. It is a data structure consisting of a collection of nodes which together represent a sequence.

In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the seque

### Advantages

Insertion and deletion of a node in the list (given its location) is O(1) whereas in arrays the following elements will have to be shifted.

### Disadvantages

Access time is linear because directly accessing elements by its position in the list is not possible (in arrays you can do ```arr[4]``` for example). You have to traverse from the start.

## Types of linked lists
### Singly linked list
A linked list where each node points to the next node and the last node points to ```null```.

### Doubly linked list
A linked list where each node has two pointers, ```next``` which points to the next node and ```prev``` which points to the previous node. The ```prev``` pointer of the first node and the next pointer of the last node point to ```null```.

### Circular linked list
A singly linked list where the last node points back to the first node. There is a circular doubly linked list variant where the ```prev``` pointer of the first node points to the last node and the ```next``` pointer of the last node points to the first node.

## Implementations

Out of the common languages, only Java provides a linked list implementation. Thankfully it's easy to write your own linked list regardless of language.

|Language  |	API     |
|----------|------------|
|C++	       N/A
| Java	   | java.util.LinkedList|
|Python     |	N/A|
|JavaScript |	N/A     |

## Time complexity