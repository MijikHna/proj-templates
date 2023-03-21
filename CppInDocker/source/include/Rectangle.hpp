#ifndef __RECTANGLE__
#define __RECTANGLE__

#include "Figure.hpp"

class Rectangle: public Figure
{
public:
  Rectangle(string color, double width, double height);
  Rectangle(Rectangle &&) = default;
  Rectangle(const Rectangle &) = default;
  Rectangle &operator=(Rectangle &&) = default;
  Rectangle &operator=(const Rectangle &) = default;
  ~Rectangle();

  virtual double getArea() override;

private:
  double width;
  double height;
};

#endif // __RECTANGLE__
