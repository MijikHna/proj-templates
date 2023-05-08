### Arduino-cli commands

* `arduino-cli sketch new NAME` - create Arduino Projekt
* `arduino-cli board list` - show connected board
* `arduino-cli config init` - create arduino-cli.yaml
* `arduino-cli core update-index` - update arduino-cli.yml (if additional board has been added)
* `arduino-cli board listall` - show all board
* `arduino-cli download BOARD_NAME` - download board libraries
* `arduino-cli board attach -p /dev/ttyCON --fqbn FQBN` - create sketch.yaml (Board and Connectin parameters)
* `arduino-cli compile --fqbn FQBN .` - compile project
* `arduino-cli upload -p /dev/ttyUSB0 --fqbn esp8266:esp8266:d1_mini .` - upload code to the board
