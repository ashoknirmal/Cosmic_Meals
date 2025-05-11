# Stage 1: Build the app using Node.js
FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install

# Expose port 5173 for Vite's dev server
EXPOSE 5173

# Run the development server
CMD ["npm", "run", "dev", "--", "--host"]
