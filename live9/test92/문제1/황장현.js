class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.heap.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      index = parentIndex;
    }
  }

  // 루트 값을 뺐을 때 재정렬
  bubbleDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;

      let min = Math.min(this.heap[left], this.heap[right]);
      [this.heap[index], min] = [min, this.heap[index]];
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }

      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [
        this.heap[smallest],
        this.heap[index],
      ];
      index = smallest;
    }
  }

  least() {
    return this.heap[0];
  }
}

function calculateScovile(num1, num2) {
  return num1 + num2 * 2;
}

function solution(scoville, K) {
  scoville.sort((a, b) => a - b);
  if (scoville[0] >= K) return 0;

  const minHeap = new MinHeap();
  scoville.forEach((s) => minHeap.push(s));
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
