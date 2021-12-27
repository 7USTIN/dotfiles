#!/usr/bin/env bash

# Terminate already running bar instances
killall -q polybar
# If all your bars have ipc enabled, you can also use 
# polybar-msg cmd quit

# Launch bars
echo "---" | tee -a /tmp/bar-main.log /tmp/bar-secondary.log
polybar bar-main 2>&1 | tee -a /tmp/bar-main.log & disown
polybar bar-secondary 2>&1 | tee -a /tmp/bar-secondary.log & disown

echo "Bars launched..."
