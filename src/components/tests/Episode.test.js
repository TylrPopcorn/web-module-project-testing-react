import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id: 1,
    name: "",
    image: "https://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "Text to test for",
    runtime: 1,
}



test("renders without error", () => {
    render(<Episode episode={testEpisode} />);
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={testEpisode} />);

    const summary = screen.queryByText(/Text to test for/i)

    expect(summary).toBeInTheDocument();
    expect(summary).toBeTruthy();
    expect(summary).toHaveTextContent(/Text to test for/i)

});

test("renders default image when image is not defined", () => {
    render(<Episode episode={{ ...testEpisode, image: "" }} />)

    const image = screen.queryByAltText("https://i.ibb.co/2FsfXqM/stranger-things.png")

    expect(image).toBeInTheDocument();
});
