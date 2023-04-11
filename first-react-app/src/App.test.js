import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Testing todo App", () => {
    let buttons;
    beforeEach(() => {
        render(<App />);
        buttons = screen.getAllByRole("button");
    });

    test("first open", () => {
        screen.getByText("Hacer Super");
        screen.getByPlaceholderText("Agregar Nueva Tarea");
        screen.getByText("Te quedan 1 pendientes");
    });
    test("Check one task", () => {
        fireEvent.click(screen.getByText("Hacer Super"));
        screen.getByText("Te quedan 0 pendientes");
    });
    test("Add new task", () => {
        fireEvent.change(screen.getByPlaceholderText("Agregar Nueva Tarea"), {
            target: { value: "Ir al gym" },
        });
        fireEvent.click(buttons[0]);
        screen.getByText("Te quedan 1 pendientes");
        screen.getByText("Ir al gym");
        let task = screen.getAllByRole("checkbox");
        expect(task).toHaveLength(2);
    });
    test("Delete task", () => {
        fireEvent.click(buttons[1]);
        let task = screen.getAllByRole("checkbox");
        expect(task).toHaveLength(1);
    });
});
