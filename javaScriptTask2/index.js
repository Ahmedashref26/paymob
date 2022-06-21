const solution = (N) => {
  let result = '';
  if (N >= 1 && N <= 100) {
    for (let i = 0; i < N; i++) {
      let rows = N - 1;
      if (i < rows) {
        result += 'L\n';
      } else {
        for (let j = 0; j < N; j++) {
          result += 'L';
        }
      }
    }
  }

  console.log(result);
};

solution(4);
