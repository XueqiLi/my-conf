#!/bin/bash

killall -p polybar

while pgrep -u $UID -x polybar > /dev/null; do sleep 1; done
polybar dark &
echo "polybar launched..."
