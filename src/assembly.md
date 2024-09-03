---
layout: base.njk
title: Assembly Guide
---

Welcome to the Assembly Guide for your Wireless Car Project. This guide will walk you through the process of putting together your wireless-controlled car using the Funduino joystick shield, NRF24L01 modules, and L293D motor driver. Let's get building!

## Preparation

Estimated time: 3-4 hours

Tools needed:

- Screwdriver set
- Wire strippers
- Soldering iron and solder
- Multimeter

Safety precautions:

- Wear safety glasses when soldering
- Work in a well-ventilated area
- Be careful of sharp edges on the chassis

## Step-by-Step Assembly

### Step 1: Prepare the Chassis

1. Unpack the chassis and identify all parts
2. Attach the motors to the designated spots on the chassis
3. Secure the wheels to the motor shafts

Tips:

- Ensure motors are firmly attached to prevent wobbling
- Double-check wheel alignment for smooth operation

### Step 2: Mount the Arduino (Car)

1. Position the Arduino on the car chassis
2. Mark screw holes and drill if necessary
3. Secure the Arduino using screws or double-sided tape

Caution: Be careful not to overtighten screws, which could damage the board

### Step 3: Install the L293D Motor Driver

1. Insert the L293D chip into your breadboard
2. Connect the following pins on the L293D to the Arduino:
   - Pin 1 (Enable 1,2) to Arduino digital pin 9
   - Pin 2 (Input 1) to Arduino digital pin 3
   - Pin 7 (Input 2) to Arduino digital pin 4
   - Pin 9 (Enable 3,4) to Arduino digital pin 10
   - Pin 15 (Input 3) to Arduino digital pin 5
   - Pin 10 (Input 4) to Arduino digital pin 6
3. Connect the motor wires to the appropriate output pins on the L293D

Common issue: Incorrect motor connections can cause reversed movement. If this happens, swap the motor wires.

### Step 4: Connect the NRF24L01 Module (Car)

1. Connect the NRF24L01 module to the Arduino:
   - VCC to 3.3V
   - GND to GND
   - CE to digital pin 7
   - CSN to digital pin 8
   - MOSI to digital pin 11
   - MISO to digital pin 12
   - SCK to digital pin 13

Note: Use short wires to minimize interference

### Step 5: Assemble the Controller

1. Attach the Funduino Joystick Shield to the second Arduino Uno
2. Connect the second NRF24L01 module to the shield:
   - VCC to 3.3V
   - GND to GND
   - CE to digital pin 7
   - CSN to digital pin 8
   - MOSI to digital pin 11
   - MISO to digital pin 12
   - SCK to digital pin 13

Tip: You may need to solder headers to the shield for a secure connection

### Step 6: Power Connections

1. Connect the 9V battery to the car's Arduino using the battery connector
2. Connect another 9V battery to the controller's Arduino

Caution: Double-check polarity before connecting batteries

### Step 7: Final Checks

1. Double-check all connections with your circuit diagram
2. Ensure all components are securely fastened
3. Check for any loose wires or short circuits

## Troubleshooting

- Car doesn't move: Check motor connections and battery charge
- No wireless communication: Verify NRF24L01 connections and power
- Erratic movement: Check L293D connections

## Next Steps

Congratulations on assembling your wireless car! The next step is to learn how to operate it. Head over to the [Operation Manual](/operation/) to get your car up and running.

Remember, if you encounter any issues during assembly, don't hesitate to ask for help in our community forum. Happy building!
