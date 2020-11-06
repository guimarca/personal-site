import { render, screen } from "@testing-library/react";
import { Article } from "../utils/article";

describe("Article", () => {
  it("renders with title", () => {
    const publication = {
      title: "Publication" 
    }
    render(<Article article={publication} />);
    
    expect(
      screen.getByText('"Publication"')
    ).toBeInTheDocument();
  });

  it("renders with title, 1 author", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1"]
    }
    render(<Article article={publication} />);

    expect(
      screen.getByText(', with Author1')
    ).toBeInTheDocument();    
  });

  it("renders with title, 2 authors", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1", "Author2"]
    }
    render(<Article article={publication} />);

    expect(
      screen.getByText(', with Author1 and Author2')
    ).toBeInTheDocument();    
  });

  it("renders with title, 3 authors", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1", "Author2", "Author3"]
    }
    render(<Article article={publication} />);

    expect(
      screen.getByText(', with Author1, Author2 and Author3')
    ).toBeInTheDocument();    
  });

  it("renders with title, 3 authors, journal", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1", "Author2", "Author3"],
      journal: "Journal"
    }
    render(<Article article={publication} />);

    expect(
      screen.getByText('Journal')
    ).toBeInTheDocument();    
  });

  it("renders with title, 3 authors, journal, volume and pages", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1", "Author2", "Author3"],
      journal: "Journal",
      volume: "1",
      pages: "2-3"
    }
    render(<Article article={publication} />);

    expect(
      screen.getByText('. 1, 2-3')
    ).toBeInTheDocument();    
  });

  it("renders with title, 3 authors, journal, volume and pages, year", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1", "Author2", "Author3"],
      journal: "Journal",
      volume: "1",
      pages: "2-3",
      year: 2020
    }
    render(<Article article={publication} />);

    expect(
      screen.getByText('. (2020)')
    ).toBeInTheDocument();    
  });

  it("renders with title, 3 authors, journal, volume and pages, year, link", () => {
    const publication = {
      title: "Publication" ,
      authors: ["Author1", "Author2", "Author3"],
      journal: "Journal",
      volume: "1",
      pages: "2-3",
      year: 2020,
      link: "http://example.com"
    }
    render(<Article article={publication} />);  
  });
});
