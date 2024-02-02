class Series {
  static isPrime(n: number): boolean {
    for (let i = 2, s = Math.sqrt(n); i <= s; ++i) {
      if (n % i === 0) return false;
    }
    return n > 1;
  }
  static prime(n: number): number {
    let count = 0;
    let num = 2;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (this.isPrime(num)) {
        count++;
        if (count == n) return num;
      }
      num++;
    }
  }
  static triangular(n: number): number {
    return (n * (n + 1)) / 2;
  }

  static fibonacci(n: number): number {
    let a = 0,
      b = 1,
      temp;
    for (let i = 0; i < n; i++) {
      temp = a + b;
      a = b;
      b = temp;
    }
    return a;
  }

  static result(n: number): number {
    return this.prime(n + 1) - 2 * this.triangular(n) + this.fibonacci(n + 1);
  }
}

export default Series;