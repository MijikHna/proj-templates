#include <cstdlib>
#include <iostream>

#include "include/Circle.hpp"
#include "include/Rectangle.hpp"

using namespace std;

int main(int argc, char *argv[]) {
  Circle circle("red", 15.);
  Rectangle rect("blue", 10, 20);

  cout << circle.getArea() << endl;
  circle.printColor();
  cout << rect.getArea() << endl;
  rect.printColor();

  return EXIT_SUCCESS;
}
