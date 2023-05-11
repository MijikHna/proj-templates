import abc


class Figure(abc.ABC):

    def __init__(self, color):
        self.color = color

    def get_color(self):
        return self.color

    @abc.abstractmethod
    def area(self):
        pass
