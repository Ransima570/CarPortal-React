# Step 1: Use an official Node.js image to build the React app
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use nginx to serve the built React app
FROM nginx:alpine

# Step 8: Copy the build folder from the previous stage to nginx's html directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 for the app to be accessible
EXPOSE 80

# Step 10: Start nginx server
CMD ["nginx", "-g", "daemon off;"]
