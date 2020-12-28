function buddy(start,limit) {
  //   return [,];
  //   return "Nothing";
    for (let i = start; i <= limit; i++) {
      const startDivisors = getDivisors(i);
      const sumStartDivisors = sum(startDivisors);
      const candidateBuddyDivisors = getDivisors(sumStartDivisors - 1);
      const sumCandidateBuddyDivisors = sum(candidateBuddyDivisors);
      if (sumCandidateBuddyDivisors - 1 === i && sumStartDivisors - 1 > i) {
        return [i, sumStartDivisors - 1];
      }
    }
    return 'Nothing'
  }
  
  function getDivisors(n) {
    let divisors = []
    if (n <= 0) {
      return divisors;
    }
    for (let i = 1; i <= n/2; i++) {
      if (n % i === 0) {
        divisors.push(i)
      }
    }
    return divisors;
  }
  
  function sum(arr) {
    return arr.reduce((s, n, i) => {
      return s + n
    }, 0)
  }