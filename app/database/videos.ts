// A) UPLOAD VIDEO

// FRONTEND - on users dashboard
// [x] 1. enable choosing videos on frontend via button (tailwind)
// [] 2. handleUpload button

// API part 1: connecting FRONT-END WITH CLOUDINARY - POST method
// [] 3. figure out implementation of cloudinary POST method - api route for uploading videos
// [] 3a. store uploaded data to cloudinary

// API part 2: cloudinary data - GET method - endpoint localhost:3000
// [] 3b. retrieve url_link of the video- likely to use cloudinary sdf or api to fetch url or other relevant data about the uploaded video

// API part 3: connecting cloudinary data with backend - endpoint localhoast:5432
// [x]4a. create videos tables
// [] 4b. create a file in database videos.ts with sql queries to feed database with data
// [] 4. save url_link from cloudinary to the database, namely to the table "videos"

// [] 5. thumb nail

// [] 6. error handling - client validation

// [] 7. publish video

// FEATURE B) DELETE VIDEO: repeat steps 1-7

// FEATURE C) EDIT VIDEO: upload different video, change metadata: title, description
