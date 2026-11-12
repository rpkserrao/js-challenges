function showRating(rating) {
    return "★".repeat(Math.floor(rating)) + "½".repeat(rating % 1 ? 1 : 0) + "☆".repeat(5 - Math.ceil(rating));
}

console.log(showRating(3));
console.log(showRating(4.5));
console.log(showRating(0.5));



