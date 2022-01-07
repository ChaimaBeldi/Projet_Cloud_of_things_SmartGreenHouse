#!/usr/local/bin/python

import RPi.GPIO as GPIO
import time
import paho.mqtt.client as mqtt

# The callback for when the client receives a CONNACK response from the server.
def on_connect(client, userdata, flags, rc):
    print("Connected with result code "+str(rc))
client = mqtt.Client()
client.on_connect = on_connect
client.username_pw_set('mqttubuntu', '123456789')
client.connect("192.168.43.138", 1883, 60)    
    
__author__ = 'Gus (Adapted from Adafruit)'
__license__ = "GPL"
__maintainer__ = "pimylifeup.com"

GPIO.setmode(GPIO.BOARD)

#define the pin that goes to the circuit
pin_to_circuit = 16

def rc_time (pin_to_circuit):
    count = 0
  
    #Output on the pin for 
    GPIO.setup(pin_to_circuit, GPIO.OUT)
    GPIO.output(pin_to_circuit, GPIO.LOW)
    time.sleep(0.1)

    #Change the pin back to input
    GPIO.setup(pin_to_circuit, GPIO.IN)
  
    #Count until the pin goes high
    while (GPIO.input(pin_to_circuit) == GPIO.LOW):
        count += 1

    return count

#Catch when script is interupted, cleanup correctly
try:
    # Main loop
    while True:
        client.publish("/nodejs/mqtt","la valeur de lumiére est  "+str(rc_time(pin_to_circuit)))
        
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()