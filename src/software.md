---
layout: base.njk
title: Software Setup
---

Welcome to the Software Setup guide for your Wireless Car Project. In this section, we'll walk you through installing and configuring all the necessary software to program your Arduino, set up the NRF24L01 modules, and control your car using the Funduino joystick shield.

## Required Software

1. Arduino IDE
2. RF24 Library
3. Funduino Joystick Shield Library

## Step-by-Step Installation Guide

### 1. Installing Arduino IDE

1. Go to the [official Arduino website](https://www.arduino.cc/en/software)
2. Download the appropriate version for your operating system
3. Run the installer and follow the prompts
4. Once installed, open Arduino IDE

Tips:

- Make sure you have admin rights on your computer
- If you encounter any errors, try running the installer as administrator

### 2. Installing RF24 Library

1. In Arduino IDE, go to Sketch > Include Library > Manage Libraries
2. In the search bar, type "RF24"
3. Find the library by TMRh20 and click "Install"

### 3. Installing Funduino Joystick Shield Library

1. Download the Funduino library from [this GitHub repository](https://github.com/Funduino/FunduinoJoystickShield)
2. In Arduino IDE, go to Sketch > Include Library > Add .ZIP Library
3. Navigate to the downloaded ZIP file and select it

## Configuring Arduino IDE

1. Open Arduino IDE
2. Go to Tools > Board and select "Arduino Uno"
3. Go to Tools > Port and select the COM port your Arduino is connected to

If you don't see your Arduino:

- Check if it's properly connected
- Try a different USB cable
- Ensure drivers are correctly installed

## Testing Your Setup

1. Connect your Arduino to your computer
2. Open Arduino IDE
3. Load the example sketch for the NRF24L01:
   File > Examples > RF24 > GettingStarted
4. Modify the CE and CSN pin numbers if necessary
5. Click the "Upload" button (right arrow icon)
6. Open the Serial Monitor to check for output

For the Funduino Joystick Shield:

1. Load the example sketch:
   File > Examples > FunduinoJoystickShield > JoystickShield
2. Upload the sketch
3. Open the Serial Monitor to see joystick and button inputs

If you encounter errors:

- Double-check your board and port selection
- Ensure your Arduino is properly connected
- Verify that the libraries are correctly installed

## Troubleshooting Common Issues

- "Library not found": Ensure you've installed the RF24 and Funduino libraries correctly
- "Port not found": Try unplugging and replugging your Arduino
- "Access is denied": Close any programs that might be using the COM port
- Compilation errors: Ensure you have the latest Arduino IDE version

## Next Steps

Congratulations! Your software environment is now set up. You're ready to move on to the [Assembly Guide](/assembly/) and start building your wireless car.

Remember, if you encounter any issues during setup, our community forum is here to help. Don't hesitate to ask questions!
