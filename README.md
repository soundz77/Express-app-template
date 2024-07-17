# Express app template

A modular Express REST API featuring logging (to file/console) and global error handling. Envalid is used for environment variable validation.

## Getting Started

1. **Clone the repository**:
   ```
   git clone git://github.com/soundz77/Express-app-template.git
   ```
2. **Install dependencies**:

   ```
   npm install
   ```

3. **Set up environment variables**:
   Rename env.example to .env
   Add the required environment variables in the .env file

4. **Run the app**:
   - For linting: npm run lint
   - For development mode: npm run dev
   - For production mode: npm run start

The app starts on http://localhost:3000

## Project Structure

The main express app template is in base-template. Import existing modules from the base-template into the project directory. The project directory is already set up and provides MongoDB and session support. Add middleware to config/, and the application files to /src.

- Logging and Error Messages: Defined in src/utils/logging/messages/
- Server Configuration: Handled in base-template/src/server.js
- Middleware and Routes Configuration: Handled in src/app.js (and src/config/configureMiddleware)
- Error Handling: The AppError class takes an error message (defined in base-template/src/utils/logging/messages/ and src/utils/logging/messages/) and a status code.
