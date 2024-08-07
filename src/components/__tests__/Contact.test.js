const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page Test Case", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // });

    // beforeEach(() => {
    //     console.log("Before Each");
    // });

    // afterAll(() => {
    //     console.log("After All");
    // });
    // afterEach(() => {
    //     console.log("After Each");
    // });

    it("Should load contact us componet", () => {
        render(<Contact />);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });

    it("Should load button inside contact componet", () => {
        render(<Contact />);
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    });

    it("Should load input inside contact componet by Placeholder Text", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });

    it("Should load two input boxed on the contact componet", () => {
        render(<Contact />);
        const inpuboxes = screen.getAllByRole("textbox");
        // console.log(inpuboxes);
        expect(inpuboxes.length).toBe(2);
    });
});