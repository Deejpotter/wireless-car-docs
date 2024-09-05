---
layout: base.njk
title: Electrical Assembly - DIY Wireless Arduino Car
date: 2023-09-07
tags:
- project
- electrical
description: Step-by-step guide for wiring and connecting the electronic components of the DIY Wireless Arduino Car.
author: Your Name
eleventyNavigation:
  key: Electrical Assembly
  order: 3
---

## Electrical Assembly

Welcome to the electrical assembly phase of our DIY Wireless Arduino Car project. In this section, we'll wire up all the electronic components, creating the brain and nervous system of our car.

## Required Components and Tools

Before we begin, ensure you have the following:

### Components

- Arduino Uno R3
- L293D Dual H-Bridge Motor Driver
- NRF24L01 2.4GHz Transceiver
- Breadboard
- Jumper wires (male-to-male, male-to-female)
- 9V battery
- Battery connector
- 100μF capacitor
- Resistors (as needed for your specific components)

### Tools

- Wire stripper
- Soldering iron and solder (for any necessary connections)
- Multimeter
- Needle-nose pliers

## Assembly Steps

### 1. Prepare the Breadboard

1. Place the breadboard on the top plate of your chassis where you marked during mechanical assembly.
2. If using double-sided tape or putty, secure the breadboard to the chassis.

### 2. Connect the Power Supply

1. Attach the 9V battery connector to the breadboard.
2. Connect the positive (red) wire to the positive rail and the negative (black) wire to the negative rail of the breadboard.
3. Add the 100μF capacitor across the power rails to help stabilize the voltage.

### 3. Set Up the Arduino

1. Place the Arduino Uno on the chassis in its designated spot.
2. Connect the Arduino's 5V pin to the breadboard's positive rail and the GND pin to the negative rail.

### 4. Wire the L293D Motor Driver

1. Insert the L293D chip into the breadboard.
2. Connect the chip's power pins:
   - Pin 16 (VSS) to the positive rail
   - Pin 8 (VS) to the positive rail
   - Pin 4 and 5 (GND) to the negative rail
3. Connect the control pins to the Arduino:
   - Pin 1 (Enable 1,2) to Arduino pin 9
   - Pin 2 (Input 1) to Arduino pin 3
   - Pin 7 (Input 2) to Arduino pin 5
   - Pin 9 (Enable 3,4) to Arduino pin 10
   - Pin 15 (Input 3) to Arduino pin 6
   - Pin 10 (Input 4) to Arduino pin 11

### 5. Connect the Motors

1. Connect the left motors to pins 3 and 6 of the L293D.
2. Connect the right motors to pins 11 and 14 of the L293D.
3. Ensure the polarity is correct for forward motion.

### 6. Set Up the NRF24L01 Transceiver

1. Insert the NRF24L01 module into the breadboard.
2. Connect the module to the Arduino:
   - VCC to 3.3V
   - GND to GND
   - CE to pin 7
   - CSN to pin 8
   - SCK to pin 13
   - MOSI to pin 11
   - MISO to pin 12

## Final Checks

1. Double-check all connections against your wiring diagram.
2. Ensure there are no short circuits using your multimeter.
3. Verify that all components are securely fastened to the chassis.

## Next Steps

Great job! You've completed the electrical assembly of your DIY Wireless Arduino Car. The car now has its electronic nervous system in place.

In the next section, we'll move on to [Software Setup](/software/), where we'll program the Arduino to control our newly assembled car.

Remember, if you encounter any issues or have questions about the wiring, consult the [FAQ](/faq/) or feel free to ask for help. Proper electrical connections are crucial for the functioning of your car, so take your time and be precise. Happy wiring!
