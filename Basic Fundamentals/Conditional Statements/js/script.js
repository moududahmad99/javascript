function gradeAssignment(score) {
    if (score > 80) {
        return 'A'
    } else if (score > 60) {
        return 'C'
    } else {
        return 'F'
    }
}

// Test cases
console.log(gradeAssignment(95)); // Output: 'A'
console.log(gradeAssignment(78)); // Output: 'C'
console.log(gradeAssignment(42)); // Output: 'F'
