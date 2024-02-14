# Weather App React Demo

This repository contains a simple React application that fetches and
displays weather information using the OpenWeatherMap API. The app
showcases how to make asynchronous requests to external APIs and handle
the response data within a React component.

## Features

- Fetches current weather data based on user input (city name)
- Displays weather details such as temperature, humidity, wind speed, etc.
- Responsive design for mobile and desktop devices
- Error handling for invalid city names or API errors

## Demo

A live demo of the application is available at [GitHub Pages URL].

## Screenshots

![Screenshot of the Weather App](./screenshot.png)

## Installation

To run the application locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/weather-app-react.git
   ```
2. Navigate into the project directory:
   ```
   cd weather-app-react
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open `http://localhost:3000` in your browser to view the application.

## Usage

After starting the application, enter a city name in the search bar and
press Enter. The app will display the current weather information for
that location.

## API Key

The application uses the OpenWeatherMap API to fetch weather data. To
use the app, you need to obtain an API key from OpenWeatherMap:

1. Sign up for a free account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
2. Obtain your API key from the dashboard.
3. Create a `.env` file in the root of the project and add your API key like so:
   ```
   REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
   ```

**Note:** Do not commit your `.env` file to public repositories. Add
`.env` to your `.gitignore` file to prevent accidental commits.

## Contributing

Contributions are welcome! Please feel free to submit pull requests or
open issues if you find any bugs or have suggestions for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or feedback, please contact me.

# Setup development env with dokcer

1. **Install Docker**: If you haven't already, install Docker Desktop on
   your machine. It includes both Docker Engine and Docker Compose,
   which will be useful for managing multi-container applications.

2. **Create a Dockerfile**: In the root directory of your React project,
   create a file named `Dockerfile`. This file will contain instructions
   for building a Docker image of your application.

3. **Define the Dockerfile**: Open the Dockerfile in a text editor and
   add the following content:

```Dockerfile
# Use an official Node runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the working directory
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Make port  3000 available to the world outside this container
EXPOSE  3000

# Define the command to run your app using CMD which defines your runtime
CMD ["npm", "start"]
```

This Dockerfile starts with a Node.js base image, sets the working
directory, copies over your `package.json` and `package-lock.json`,
installs your dependencies, copies the rest of your code, exposes port
3000 (the default port for React apps), and finally runs `npm start` to
start your application.

4. **Build the Docker Image**: Run the following command in your
   terminal from the same directory as your Dockerfile:

```sh
docker build -t my-react-app .
```

Replace `my-react-app` with whatever name you want to give your Docker
image.

5. **Run the Docker Container**: After the image is built, you can run
   it with the following command:

```sh
docker run -p  3000:3000 -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true my-react-app
```

This command maps port  3000 inside the container to port  3000 on your
host machine, mounts your current directory (`${PWD}`) to `/app` inside
the container, and sets an environment variable that helps with hot
reloading when files change.

6. **Access Your Application**: Open your web browser and navigate to
   `http://localhost:3000`. You should see your React application
   running.

Remember that every time you make changes to your application, you may
need to rebuild the Docker image if you've made changes to the
Dockerfile or installed new dependencies. However, since we're using
volume mapping, your local changes will still reflect in the container
without rebuilding the image.
