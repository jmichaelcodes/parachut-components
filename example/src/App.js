import React, { useState } from "react";

import { NestedButton } from "parachut-components";
import { CircleButton } from "parachut-components";
import { Col } from "parachut-components";
import { Container } from "parachut-components";
import { Hidden } from "parachut-components";
import { Grid } from "parachut-components";
import { Modal } from "parachut-components";
import { Navbar } from "parachut-components";
import { Row } from "parachut-components";
import { Text } from "parachut-components";
import { Input } from "parachut-components";

import CartIcon from "./icons/CartIcon";
import HamburgerIcon from "./icons/HamburgerIcon";

import "./index.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container
      modalClose={() => setIsOpen(false)}
      modalVisible={isOpen}
      style={{ backgroundColor: "#F9F6F3" }}
    >
      <Navbar className="navbar" inContainer color="#fff" border="#ddd">
        <HamburgerIcon width={21} className="navMenuIcon"/>
        <img
          src="https://parachut.imgix.net/io/logo-simple.svg"
          alt="parachut"
          style={{ height: 14 }}
        />
        <CartIcon width={24} />
      </Navbar>
      <div className="sectionHeader" style={{ paddingTop: 75 }}>
        <Text size="h4" weight="bold" className="sectionTitle">
          Circle Button
        </Text>
        <CircleButton
          style={{ marginLeft: 75 }}
          onClick={() => alert("Circle button clicked")}
          text="Circle button"
        />
      </div>
      <div className="sectionHeader">
        <Text
          size="h4"
          weight="bold"
          style={{ marginBottom: 10, marginTop: 25 }}
        >
          Column
        </Text>
        <Col>
          <Text size="h6">Column item 1</Text>
          <Text size="h6">Column item 1</Text>
          <Text size="h6">Column item 1</Text>
        </Col>
      </div>
      <div className="sectionHeader">
        <Text size="h4" weight="bold" className="sectionTitle">
          Grid
        </Text>
        <Grid>
          <Col
            xs={12}
            sm={5}
            md={5}
            className="gridItem"
            style={{ backgroundColor: "green" }}
          >
            <Text size="h6" weight="bold" color="white">
              md={5}
            </Text>
            <Text size="h6" weight="bold" color="white">
              sm={5}
            </Text>
            <Text size="h6" weight="bold" color="white">
              xs={12}
            </Text>
          </Col>
          <Col
            xs={12}
            sm={2}
            md={2}
            className="gridItem"
            style={{ backgroundColor: "blue" }}
          >
            <Text size="h6" weight="bold" color="white">
              md={2}
            </Text>
            <Text size="h6" weight="bold" color="white">
              sm={2}
            </Text>
            <Text size="h6" weight="bold" color="white">
              xs={12}
            </Text>
          </Col>
          <Col
            xs={12}
            sm={5}
            md={3}
            className="gridItem"
            style={{ backgroundColor: "purple" }}
          >
            <Text size="h6" weight="bold" color="white">
              md={3}
            </Text>
            <Text size="h6" weight="bold" color="white">
              sm={5}
            </Text>
            <Text size="h6" weight="bold" color="white">
              xs={12}
            </Text>
          </Col>
        </Grid>
      </div>
      <div className="sectionHeader">
        <Text size="h4" weight="bold" className="sectionTitle">
          Hidden
        </Text>
        <Hidden xsDown>
          <Text size="h6">xsDown</Text>
        </Hidden>
        <Hidden smDown>
          <Text size="h6">smDown</Text>
        </Hidden>
        <Hidden mdDown>
          <Text size="h6">mdDown</Text>
        </Hidden>
        <Hidden lgDown>
          <Text size="h6">lgDown</Text>
        </Hidden>
        <Hidden xlDown>
          <Text size="h6">xlDown</Text>
        </Hidden>
        <Hidden xsUp>
          <Text size="h6">xsUp</Text>
        </Hidden>
        <Hidden smUp>
          <Text size="h6">smUp</Text>
        </Hidden>
        <Hidden mdUp>
          <Text size="h6">mdUp</Text>
        </Hidden>
        <Hidden lgUp>
          <Text size="h6">lgUp</Text>
        </Hidden>
        <Hidden xlUp>
          <Text size="h6">xlUp</Text>
        </Hidden>
      </div>
      <div style={{ marginTop: 25, width: 350 }}>
        <Text size="h4" weight="bold" className="sectionTitle">
          Input
        </Text>
        <Input
          placeholder="First name"
          style={{ marginBottom: 25 }}
          error="You must enter a value"
          touched={true}
        />
        <Input
          defaultValue="Williams"
          placeholder="Last name"
          style={{ marginBottom: 25 }}
          touched={true}
        />
        <Input
          placeholder="Phone number"
          format="###-###-####"
          mask="_"
          type="number"
        />
      </div>
      <div className="sectionHeader">
        <Text size="h4" weight="bold" className="sectionTitle">
          Modal
        </Text>
        <NestedButton onClick={() => setIsOpen(true)} text="Open modal" />
      </div>
      <div className="sectionHeader">
        <Text size="h4" weight="bold" className="sectionTitle">
          Nested Button
        </Text>
        <NestedButton
          onClick={() => alert("Small nested button clicked")}
          size="small"
          style={{ marginBottom: 15 }}
          text="Small"
        />
        <NestedButton
          onClick={() => alert("Medium nested button clicked")}
          style={{ marginBottom: 15 }}
          text="Medium"
        />
        <NestedButton
          onClick={() => alert("Large nested button clicked")}
          size="large"
          text="Largee"
        />
      </div>
      <div className="sectionHeader">
        <Text size="h4" weight="bold" className="sectionTitle">
          Row
        </Text>
        <Row>
          <Text size="h6" style={{ width: 100 }}>
            Row item 1
          </Text>
          <Text size="h6" style={{ width: 100 }}>
            Row item 1
          </Text>
          <Text size="h6" style={{ width: 100 }}>
            Row item 1
          </Text>
        </Row>
      </div>
      <div className="sectionHeader">
        <Text size="h4" weight="bold">
          Text
        </Text>
        <Text size="h1">h1</Text>
        <Text size="h2">h2</Text>
        <Text size="h3">h3</Text>
        <Text size="h4">h4</Text>
        <Text size="h5">h5</Text>
        <Text size="h6">h6</Text>
        <Text size="subtitle">subtitle</Text>
        <Text size="body">body</Text>
        <Text size="caption">caption</Text>
      </div>
      <Modal className="modal" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Col style={{ padding: 25 }}>
          <Text size="h4" style={{ textAlign: "center" }}>
            Modal title
          </Text>
          <Text size="body" style={{ marginTop: 25 }}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
            ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
            consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
            velit esse molestie consequat, vel illum dolore eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore.
          </Text>
        </Col>
      </Modal>
    </Container>
  );
}

export default App;
