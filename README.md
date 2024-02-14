# Weather react app

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
