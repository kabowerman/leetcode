/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    var odd = 1;
    if (matrix.length % 2 == 0) { odd = 0; }
    for (var i = 0; i < Math.trunc(matrix.length/2) + odd; i++) {
        for (var j = 0; j < Math.trunc(matrix.length/2) + odd; j++) {

        }
    }
};

var mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ];

  // Move 1, 3, 7, and 9
  // Move 2, 6, 8, 4
// [a,b,c,d]
// [e,f,g,h]
// [i,j,k,l]
// [m,n,o,p]

// switch 0,0 and 0,3 --> switch 0,0 and 3,3 --> switch 0,0 and 3,0
// [m,b,c,a]
// [e,f,g,h]
// [i,j,k,l]
// [p,n,o,d]

// switch 0,1 and 1,3 --> switch 0,1 and 3,2 --> switch 0,1 and 2,0
// [m,i,c,a]
// [e,f,g,b]
// [o,j,k,l]
// [p,n,h,d]

// switch 0,2 and 2,3 --> switch 0,2 and 3,1 --> switch 0,2 and 1,0
// [m,i,e,a]
// [n,f,g,b]
// [o,j,k,c]
// [p,l,h,d]

// switch 1,1 and 1,2 --> switch 1,1 and 2,2 --> switch 1,1 and 2,1
// [m,i,e,a]
// [n,j,f,b]
// [o,k,g,c]
// [p,l,h,d]


// [a,b,c]
// [d,e,f]
// [g,h,i]

// switch 0,0 and 0,2 --> switch 0,0 and 2,2 --> switch 0,0 and 2,0
// [g,b,a]
// [d,e,f]
// [i,h,c]

// switch 0,1 and 1,2 --> switch 0,1 and 2,1 --> switch 0,1 and 1,0
// [g,d,a]
// [h,e,b]
// [i,f,c]



// switch 0,0 and 0,mat.length --> switch 0,0 and mat.length,mat.length --> switch 0,0 and mat.length,0
// [g,b,a]
// [d,e,f]
// [i,h,c]

// switch 0,1 and 1,mat.length --> switch 0,1 and mat.length,1 --> switch 0,1 and 1,0
// [g,d,a]
// [h,e,b]
// [i,f,c]


//   [
//     [7,4,1],
//     [8,5,2],
//     [9,6,3]
//   ]