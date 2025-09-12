// On a 2D plane, there are n points with integer coordinates points[i] = [xi, yi]. Return the minimum time in seconds to visit all the points in the order given by points.



// 📌 Problem Summary

// You’re given an array of points in a 2D plane, points[i] = [xi, yi].

// You start at points[0] and must visit each point in order.

// In one second, you can move:

// 1 unit horizontally,

// 1 unit vertically,

// OR 1 unit diagonally (↖, ↗, ↘, ↙).

// Return the minimum time needed to visit all points.


// Input: points = [[1,1],[3,4],[-1,0]]
// Output: 7

// Input: points = [[3,2],[-2,2]]
// Output: 5


var shortestDistance = function(points) {

    let shortest_distance = 0;
    for(let i =0;i<points.length-1;i++){
        let [x1,y1] = points[i];
        let [x2,y2] = points[i+1];

        let shortest_x = Math.abs(x2-x1);
        let shortest_y = Math.abs(y2-y1);

        let shortest_distance_between_points = Math.max(shortest_x,shortest_y);

        shortest_distance += shortest_distance_between_points


    }

    return shortest_distance
};

console.log(shortestDistance([[1,1],[3,4],[-1,0]]))
