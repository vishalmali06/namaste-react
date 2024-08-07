import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";

it("should render RestaurantCard component with props Data", () => {
    render(<RestaurantCard restData={MOCK_DATA} />);
    const name = screen.getByText("Subway");
    expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
    // Home Work - test HOC : withPromtedLabel()
});