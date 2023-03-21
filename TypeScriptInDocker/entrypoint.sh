#!/usr/bin/env bash

cd /app

if [ ! -d ./node_modules ]; then
  npm install
fi

exec "${@}"

