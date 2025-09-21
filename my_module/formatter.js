// formatter.js - A simple formatter module
// This module provides basic string formatting functions.
// Second custom module: Formats a name

export function formatName(firstName, lastName) {
    // Capitalize the first letter of each name and make the rest lowercase
    const formattedFirst = firstName.trim()[0].toUpperCase() +
        firstName.trim().slice(1);
    const formattedLast = lastName.trim()[0].toUpperCase() +
        lastName.trim().slice(1);
    return `${formattedFirst} ${formattedLast}`;
}