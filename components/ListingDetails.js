// ListingDetails.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function ListingDetails({ listing }) {
  return (
    <>
      <Container>
        <Row>
          <Col lg={6}>
            <img
              onError={(event) => {
                event.target.onerror = null;
                event.target.src =
                  "https://placehold.co/600x400?text=Photo+Not+Available";
              }}
              className="img-fluid w-100"
              src={listing.images.picture_url}
              alt="Listing Image"
            />
            <br />
            <br />
          </Col>
          <Col lg={6}>
            <p>
              {listing.neighborhood_overview}
              <br />
              <br />
              <strong>Price:</strong> ${listing.price.toFixed(2)}
              <br />
              <strong>Room:</strong> {listing.room_type}
              <br />
              <strong>Bed:</strong> {listing.bed_type}
              <br />
              <br />
              <strong>Rating:</strong>{" "}
              {listing.review_scores.review_scores_rating}/100 (
              {listing.number_of_reviews} Reviews)
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
