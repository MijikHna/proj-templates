import time
from src.figure.Circle import Circle
from src.figure.Rect import Rect


def main() -> None:
    print('starting')

    while True:
        print('I am working')
        rect: Rect = Rect('blue', 10, 20)
        circle: Circle = Circle('red', 10)

        print(rect.get_color())
        print(rect.area())

        print(circle.get_color())
        print(circle.area())
        time.sleep(5)


if __name__ == "__main__":
    main()
