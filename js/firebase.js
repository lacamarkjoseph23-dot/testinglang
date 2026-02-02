// js/firebase.js

console.log("firebase.js loading...");

var firebaseConfig = {
xxxxxxxx
};

// Check if Firebase SDK is loaded
if (typeof firebase === 'undefined') {
  console.error("Firebase SDK not loaded!");
} else {
  console.log("Firebase SDK loaded successfully");
}

// Prevent duplicate initialization
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized");
} else {
  console.log("Firebase already initialized");
}

// Initialize Realtime Database reference
try {
  const database = firebase.database();
  console.log("Database reference created:", database);
  window.database = database;
} catch (error) {
  console.error("Error creating database reference:", error);
}

