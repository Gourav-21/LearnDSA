 # Matrix 

 ## Introduction
A matrix is a 2-dimensional array. Questions involving matrices are usually related to [dynamic programming]() or [graph]() traversal.

Matrices can be used to represent graphs where each node is a cell on the matrix which has 4 neighbors (except those cells on the edge and corners). This page will focus on questions which don't use matrix as graphs. Questions which are meant to use the matrix as a graph can be found on the [graph section]().

## Corner cases
Empty matrix. Check that none of the arrays are 0 length
1 x 1 matrix
Matrix with only one row or column

## Techniques

Creating an empty N x M matrix
For questions involving traversal or dynamic programming, you almost always want to make a copy of the matrix with the same size/dimensions that is initialized to empty values to store the visited state or dynamic programming table. Be familiar with such a routine in your language of choice:

This can be done easily in Python in one line.

 #Assumes that the matrix is non-empty

```java zero_matrix = [[0 for _ in range(len(matrix[0]))] for _ in range(len(matrix))]```

## Copying a matrix in Python is:
copied_matrix = ```[row[:] for row in matrix]```
Transposing a matrix
The transpose of a matrix is found by interchanging its rows into columns or columns into rows.

Many grid-based games can be modeled as a matrix, such as Tic-Tac-Toe, Sudoku, Crossword, Connect 4, Battleship, etc. It is not uncommon to be asked to verify the winning condition of the game. For games like Tic-Tac-Toe, Connect 4 and Crosswords, where verification has to be done vertically and horizontally, one trick is to write code to verify the matrix for the horizontal cells, transpose the matrix, and reuse the logic for horizontal verification to verify originally vertical cells (which are now horizontal).

## Transposing a matrix in Python is simply:

```transposed_matrix = zip(*matrix)```
## Essential questions
These are essential questions to practice if you're studying for this topic.

- [Set Matrix Zeroes]()
- [Spiral Matrix]()

## Recommended practice questions
These are recommended questions to practice after you have studied for the topic and have practiced the essential questions.

- [Rotate Image]()
- [Valid Sudoku]()