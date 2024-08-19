#!/usr/bin/env bash
seconds=0

do_stop() {
  echo
  echo "SIGINT was caught after ${seconds} seconds."
  exit 0
}
trap 'do_stop' SIGINT

while true; do
  echo -n '.'
  ((seconds++))
  sleep 1
done
