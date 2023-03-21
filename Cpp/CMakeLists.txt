cmake_minimum_required(VERSION 3.0.0)
project(CPP VERSION 0.1.0)

include(CTest)
enable_testing()

add_executable(
  CPP src/main.cpp 
  src/Figure.cpp 
  src/Circle.cpp 
  src/Rectangle.cpp
)

target_include_directories(CPP PRIVATE include/)

set(CPACK_PROJECT_NAME ${PROJECT_NAME})
set(CPACK_PROJECT_VERSION ${PROJECT_VERSION})

include(CPack)
