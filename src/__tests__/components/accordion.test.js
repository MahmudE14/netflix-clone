import { fireEvent, render, screen } from "@testing-library/react";
import { Accordion } from "../../components";
import faqsData from "../../fixtures/faqs.json";

describe("<Accordion />", () => {
    it("renders <Accordion /> with populated data", () => {
        const { container, getByText } = render(
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        );

        expect(screen.getByText("Frequently Asked Questions")).toBeTruthy();
        expect(screen.getByText("What is Netflix?")).toBeTruthy();
        expect(screen.getByText("How much does Netflix cost?")).toBeTruthy();
        expect(screen.getByText("Where can I watch?")).toBeTruthy();
        expect(screen.getByText("How do I cancel?")).toBeTruthy();
        expect(screen.getByText("What can I watch on Netflix?")).toBeTruthy();
        expect(container.firstChild).toMatchSnapshot();
    });

    it("opens and closes the <Accordion /> component", () => {
        const { container, getByText } = render(
            <Accordion>
                <Accordion.Title>Frequently Asked Questions</Accordion.Title>
                {faqsData.map((item) => (
                    <Accordion.Item key={item.id}>
                        <Accordion.Header>{item.header}</Accordion.Header>
                        <Accordion.Body>{item.body}</Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        );

        const whatIsNetflixDetails = "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

        expect(screen.queryByText(whatIsNetflixDetails)).toBeFalsy()

        fireEvent.click(screen.queryByText('What is Netflix?'))
        expect(screen.getByText(whatIsNetflixDetails)).toBeTruthy()

        fireEvent.click(screen.queryByText('What is Netflix?'))
        expect(screen.queryByText(whatIsNetflixDetails)).toBeFalsy()

        expect(container.firstChild).toMatchSnapshot()
    });
});
