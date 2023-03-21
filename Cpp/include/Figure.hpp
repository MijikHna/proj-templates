#ifndef ___FIGURE__
#define ___FIGURE__
#include <string>

using std::string;

class Figure
{
public:
  Figure(string color);
  Figure(Figure &&) = default;
  Figure(const Figure &) = default;
  Figure &operator=(Figure &&) = default;
  Figure &operator=(const Figure &) = default;
  ~Figure();

  virtual auto getArea() -> double = 0;
  auto printColor() -> void;

private:
  string color;
};

#endif // !___FIGURE__
