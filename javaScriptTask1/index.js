const solution = (A, B, X, Y) => {
  // function to detect if point is in the circle of radius r or not
  const isInCircle = (x, y, center, r = 20) => {
    const left = Math.pow(center[0] - x, 2) + Math.pow(center[1] - y, 2);
    const right = Math.pow(r, 2);

    return left <= right ? true : false;
  };

  // loop over the icons
  for (let i = 0; i < A.length; i++) {
    if (isInCircle(X, Y, [A[i], B[i]])) return i;
  }
  return -1;
};
// console.log(solution([100, 200, 100], [50, 100, 100], 200, 60));
