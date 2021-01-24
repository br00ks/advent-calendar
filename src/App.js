import "./App.css";
import SnowingBackground from "./components/SnowingBackground";
import calendarConfig from "./CalendarConfig";
import React, {Suspense} from "react";
import CalendarWrapper from "./CalendarWrapper";
import {Navbar, Container} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

/**
 * Advent calendar component defining the snowing background, title and footer as configured in CalenderConfig.js
 */
function AdventCalendar() {
  const {t} = useTranslation();

  useEffect(() => {
    document.title = t("adventCalendar");
  });

  return (
    <SnowingBackground snowfall={calendarConfig.snowfall}>
      <h1>
        {t("adventCalendarFor", {recipient: calendarConfig.recipient})} ☃️
      </h1>
      <CalendarWrapper
        className={
          "calendarPage d-flex align-items-center justify-content-center"
        }
      />
      <div className="footer">
        <Navbar color="bg-light">
          <Container className="text-center">
            <p>
              {t("adventCalendarMadeBy", {creator: calendarConfig.creator})}
            </p>
          </Container>
        </Navbar>
      </div>
    </SnowingBackground>
  );
}

export default function App() {
  return (
    <Suspense fallback="loading">
      <AdventCalendar />
    </Suspense>
  );
}
