#!/usr/bin/env bash

cd /app || exit 1

if [ ! -d ./node_modules ]; then
  npm install
fi

exec "${@}"

