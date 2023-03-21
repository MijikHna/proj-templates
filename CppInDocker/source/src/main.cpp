#include <cstdlib>
#include <iostream>
#include <iterator>
#include <ostream>

#ifdef __unix__
  #include <unistd.h>
#endif // __unix__

#ifdef _WIN32
  #include <windows.h>
#endif


#include "../include/Circle.hpp"
#include "../include/Rectangle.hpp"

using namespace std;

int main(int argc, char *argv[]) {
  while (true) {
    Circle circle("red", 15.); 
    Rectangle rect("blue", 10, 20);

    cout << circle.getArea() << endl;
    circle.printColor();
    cout << rect.getArea() << endl;
    rect.printColor();
    
    cout << "---" << endl;
    sleep(5);
  }

  return EXIT_SUCCESS;
}
