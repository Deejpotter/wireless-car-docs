# Wireless Car Project Documentation

Welcome to the Wireless Car Project documentation repository. This project provides comprehensive information on building and operating your own wireless-controlled car using Arduino.

## Project Structure

The project is organized as follows:

- **_site/**: Contains the generated static site files.
- **src/**: Contains the source Markdown files and templates.
- **src/_includes/**: Contains the Nunjucks templates.
- **.eleventy.js**: Configuration file for Eleventy.
- **netlify.toml**: Configuration file for Netlify.
- **package.json**: Contains the project dependencies and scripts.

## Quick Links

- [Hardware Overview](src/hardware.md)
- [Software Setup](src/software.md)
- [Assembly Guide](src/assembly.md)
- [Operation Manual](src/operation.md)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Deejpotter/wireless-car-docs.git
    cd wireless-car-docs
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

### Development

To start the development server, run:

```sh
npm start
```

This will start Eleventy in serve mode and watch for changes.

### Build

To build the project, run:

```sh
npm run build
```

This will generate the static site in the _site directory.

### Deployment

The project is configured to be deployed on Netlify. The deployment settings are specified in the netlify.toml file.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request.

### License

There's no license. Feel free to use the project as you wish.
