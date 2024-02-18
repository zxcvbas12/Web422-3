// About.js

import ListingDetails from "@/components/ListingDetails";
import PageHeader from "@/components/PageHeader";
import Link from "next/link";
import Card from "react-bootstrap/Card";

export async function getStaticProps() {
  const res = await fetch(
    "https://ruby-gharial-boot.cyclic.app/api/listings/1206363"
  );
  const data = await res.json();
  return { props: { listing: data } };
}

export default function About({ listing }) {
  return (
    <>
      <PageHeader text="About me" />
      <Card>
        <Card.Body>
          <p>
            My name is Ji Ho Nam, and I'm currently pursuing a degree in
            Computer Programming Analysis at Seneca College. I've always had a
            deep passion for technology, especially when it comes to programming
            languages and problem-solving. There's something incredibly
            satisfying about unraveling complex problems and finding elegant
            solutions. I'm particularly excited about the prospect of taking the
            WEB422 course because it offers a fantastic opportunity to delve
            into the world of website creation and web programming. In today's
            digital age, having a strong grasp of web development is essential,
            and I'm eager to expand my skill set in this area.
          </p>
          <p>
            I would like to visit is the:{" "}
            <Link href="/listing/1206363">"Eco Hale Hawaii"</Link> in the
            Rainforest Lots Of Aloha
          </p>
        </Card.Body>
      </Card>
      <ListingDetails listing={listing} />
    </>
  );
}
