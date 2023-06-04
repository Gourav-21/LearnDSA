# Hash table 

## Introduction
A hash table (commonly referred to as hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. A hash table uses a hash function on an element to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.

Hashing is the most common example of a space-time tradeoff. Instead of linearly searching an array every time to determine if an element is present, which takes O(n) time, we can traverse the array once and hash all the elements into a hash table. Determining if the element is present is a simple matter of hashing the element and seeing if it exists in the hash table, which is O(1) on average.

In the case of hash collisions, there are a number of collision resolution techniques that can be used. You will unlikely be asked about details of collision resolution techniques in interviews:

- **Separate chaining** - A linked list is used for each value, so that it stores all the collided items.

- **Open addressing** - All entry records are stored in the bucket array itself. When a new entry has to be inserted, the buckets are examined, starting with the hashed-to slot and proceeding in some probe sequence, until an unoccupied slot is found.

## Learning resources
- Readings
 * [Taking Hash Tables Off The Shelf](), basecs
* [Hashing Out Hash Functions](), basecs
- Videos
 * [Core](): [Hash Tables](), University of California San Diego
* [A Brief Guide to Hash Tables (slides)](), Samuel Albanie, University of Cambridge.

## Implementations
|   Language  |            API                               |  
| :------------ | :---------: 
|	    C++     |    [std::unordered_map]()                  |
|      Java	    |   [java.util.Map.]() Use [java.util.HashMap]() |
|     Python	|      [ dict ]()                            |
| JavaScript	|     [Object]() or [Map]()                  |
## Time complexity
|Operation  |	Big-O	|      Note              |
|:--------- |:----------:|-------------:
  Access	    N/A	       Accessing not possible as the hash code is not known
  Search	    O(1)*	
  Insert	    O(1)*	
  Remove	    O(1)*	
 
 *This is the average case, but in interviews we only care about the average case for hash tables.

## Sample questions
-  Describe an implementation of a least-used cache, and big-O notation of it.
- A question involving an API's integration with hash map where the buckets of hash map are made up of linked lists.

- Essential questions
These are essential questions to practice if you're studying for this topic.

- [Two Sum]()
- [Ransom Note]()
 ## Recommended practice questions
These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Group Anagrams]()
- [Insert Delete GetRandom O(1)]()
- [First Missing Positive]()
- [LRU Cache]()
- [All O one Data Structure]()

