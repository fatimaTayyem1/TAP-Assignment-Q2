function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

// Example:
const nums = [3, 0, 1];
console.log(findMissingNumber(nums)); // Output: 2