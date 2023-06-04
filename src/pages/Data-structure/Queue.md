# Queue

## Introduction
A queue is a linear collection of elements that are maintained in a sequence and can be modified by the addition of elements at one end of the sequence (enqueue operation) and the removal of elements from the other end (dequeue operation). Usually, the end of the sequence at which elements are added is called the back, tail, or rear of the queue, and the end at which elements are removed is called the head or front of the queue. As an abstract data type, queues can be implemented using arrays or singly linked lists.

This behavior is commonly called FIFO (first in, first out). The name "queue" for this type of structure comes from the analogy to people lining up in real life to wait for goods or services.

Breadth-first search is commonly implemented using queues.

## Implementations
|  Language	      |           API     |
|-----------------|-------------------|
|    C++	                  std::queue
|  Java           |```java.util.Queue```.```Use java.util.ArrayDeque```
| Python	       |         queue    |
|JavaScript        |	N/A           |