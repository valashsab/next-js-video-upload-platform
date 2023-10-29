// A) UPLOAD VIDEO

// 3 parties involved & with different APIs as an intermediary
// - client
// - my server
// - cloudinary server

// 2 APIs:
// 1. next.js REST API: client - to my server
// 2. API REST cloudinary SDK(???): my server - to cloudinary server

// include smaller steps including logic of request & response
// - client-side request PUBLIC e.g browser
// - server-side request HIDDEN & MORE SECURE
// API can work from client to server OR from server to server

// FRONTEND - on users dashboard
// [x] 1. Implement UI components for video selection enable choosing videos on frontend via button (tailwind)
// [] 2. Implement logic for handling video upload (handleUpload button, POST method to cloudinary)

// API part 1: connecting frontent with cloudinary - POST method
// [] 3a. Create an API route on your backend for handling video uploads to Cloudinary.
// [] 3b. Make sure that videos and also other data such as title, description are saved to cloudinary as well

// API part 2: connecting cloudinary data with backend - endpoint localhoast:5432
// [x] 4a. create videos tables
// [] 4b. create a file in database videos.ts with sql queries to populate database with data
// [] 4c. save url_link from cloudinary to the database, namely to the table "videos"

// API part 3: implementin GET method
// [] 5a. create an API endpoint & route on my backend for fetching video data from the videos table.
// [] 5b. Implement GET method on frontend to retrieve & display video data (url, title, description) - ikely to use cloudinary sdf or api to fetch url or other relevant data about the uploaded video

// [] 6. thumb nail

// [] 7. error handling - client-side & server-validation

// [] 8. publish video

// FEATURE B) DELETE VIDEO: repeat steps 1-8

// FEATURE C) EDIT VIDEO: upload different video, change metadata: title, description
