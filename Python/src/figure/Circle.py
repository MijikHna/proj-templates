from src.figure.Figure import Figure


class Circle(Figure):

    def __init__(self, color, radius):
        super().__init__(color)
        self.radius = radius

    def area(self):
        return 3.14 * self.radius ** 2
