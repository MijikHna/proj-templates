#!/usr/bin/env bash

cd /app

if [ -f "./CMakeLists.txt" ]; then
  cmake . -B ./build
  cmake --build ./build --config Debug --target CPP
fi

exec "${@}" 

