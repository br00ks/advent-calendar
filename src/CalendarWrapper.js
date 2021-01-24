import React from "react";
import calendarContent from "./CalendarContent";
import {Container, Row, Col} from "react-bootstrap";
import CalendarDay from "./components/CalendarDay";

/**
 * Calendar wrapper class where advent calendar grid is generated.
 */
export default function CalendarWrapper(props) {
  let calendarDays = [];
  let calendarRows = [];

  calendarContent.forEach((item, index) => {
    calendarDays.push(
      <Col className={"mb-5"} key={"col_" + index}>
        <CalendarDay day={item.day} data={item.data} />
      </Col>
    );
  });

  for (let i = 0; i < 24; i += 6) {
    calendarRows.push(<Row key={i}>{calendarDays.slice(i, 6 + i)}</Row>);
  }

  return (
    <div className={props.className}>
      <Container className={"h-100"}>
        {calendarRows.map((item, i) => item)}
      </Container>
    </div>
  );
}
