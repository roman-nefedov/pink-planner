import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FiCalendar } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { RiNotification2Line } from "react-icons/ri";
import { GrClose } from "react-icons/gr";
import { FcCheckmark } from "react-icons/fc";

import SmallLoadingIcon from "../SmallLoadingIcon";
import NewEventCalendar from "../NewEventCalendar";
import { EditEventTime } from "../EditEventTime/index";
import { Top, ActionsSection, ButtonCreate, ButtonClose, Title, Description,
         Section, Label, InputBorder, SectionInput, SectionInput2, CalendarForm,
         ConfirmationBox } from "./index.styled";

export const EditEventForm = ({ closeDialog, refreshEvents, currentEvent }) => {
  const [form, setForm] = useState(currentEvent);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (form.title != null && form.start.date != null) {
      if (form.start.time.allday === true) {
        setButtonDisabled(false);
      } else {
        if (
          form.start.time.hours != null &&
          form.start.time.minutes != null &&
          form.start.time.ap != null &&
          form.end.time.hours != null &&
          form.end.time.minutes != null &&
          form.end.time.ap != null
        ) {
          setButtonDisabled(false);
        } else {
          setButtonDisabled(true);
        }
      }
    } else {
      setButtonDisabled(true);
    }
  }, [form]);

  useEffect(() => {
    let startDate = new Date(currentEvent.start.date);
    let formatted = format(startDate, "EEE. MMM. d, y");
    setDisplayStartDate(formatted);
    let endDate = new Date(currentEvent.end.date);
    let formatted2 = format(endDate, "EEE. MMM. d, y");
    setDisplayEndDate(formatted2);
  }, []);

  const handleTitle = (value) => setForm({ ...form, title: value });
  const handleDescription = (value) => setForm({ ...form, description: value });
  const handleLocation = (value) => setForm({ ...form, location: value });

  const UpdateEvent = (event) => {
    event.preventDefault();
    setStatus("loading");

    fetch("/editEvent", {
      method: "PUT",
      body: JSON.stringify({ form }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        refreshEvents();
        setStatus("updated");
        setButtonDisabled(true);
      })
      .catch((error) => {
        console.log("error!", error);
        setStatus("error");
        setButtonDisabled(true);
      });
  };

  /******************************* */
  /** Select start/end date Input fields */
  /******************************* */
  const [displayStartDate, setDisplayStartDate] = useState("");
  const [displayEndDate, setDisplayEndDate] = useState("");

  const startField = () => {
    document.getElementById("CalendarFormStart").style.visibility = "visible";
  };
  const endField = () => {
    document.getElementById("CalendarFormEnd").style.visibility = "visible";
  };

  /******************************* */
  /**CALENDAR STATES AND FUNCTIONS */
  /******************************* */
  const [CalendarStartDate, setCalendarStartDate] = useState(new Date());
  const [CalendarEndDate, setCalendarEndDate] = useState(new Date());

  const onStartCalendarChange = (nextValue) => setCalendarStartDate(nextValue);
  const onEndCalendarChange = (nextValue) => setCalendarEndDate(nextValue);

  const selectStartDate = (value) => {
    setForm({ ...form, start: { ...form.start, date: value } });
    setCalendarStartDate(value);
  };
  const selectEndDate = (value) => {
    setForm({ ...form, end: { ...form.end, date: value } });
    setCalendarEndDate(value);
  };

  // OK button in the calendar view
  const submitStartDate = (event) => {
    event.preventDefault();
    document.getElementById("CalendarFormStart").style.visibility = "hidden";

    let formatted = format(CalendarStartDate, "EEE. MMM. d, y");
    setDisplayStartDate(formatted);
    if (form.end.date < CalendarStartDate) {
      setForm({ ...form, end: { ...form.end, date: CalendarStartDate } });
      let formatted = format(CalendarStartDate, "EEE. MMM. d, y");
      setDisplayEndDate(formatted);
    }
  };
  const submitEndDate = (event) => {
    event.preventDefault();
    document.getElementById("CalendarFormEnd").style.visibility = "hidden";
    let formatted = format(CalendarEndDate, "EEE. MMM. d, y");
    setDisplayEndDate(formatted);
    if (form.start.date > CalendarEndDate) {
      setForm({ ...form, start: { ...form.start, date: CalendarEndDate } });
      let formatted = format(CalendarEndDate, "EEE. MMM. d, y");
      setDisplayStartDate(formatted);
    }
  };

  return (
    <div>
      <form>
        <Top>
          <Title
            type="text"
            placeholder="Your event title"
            defaultValue={form.title}
            onChange={(event) => handleTitle(event.target.value)}
          />
          <Description
            type="text"
            placeholder="What will happen?"
            defaultValue={form.description}
            onChange={(event) => handleDescription(event.target.value)}
          />
        </Top>
        <Section>
          <Label>Date</Label>
          <div className="dateNTimeInputSection">
            <InputBorder>
              <SectionInput
                readOnly
                placeholder="Start date"
                onClick={startField}
                value={displayStartDate}
                defaultValue={displayStartDate}
              />
              <FiCalendar color="#b3b3b3" />
            </InputBorder>
            <BsArrowRight />
            <InputBorder>
              <SectionInput
                placeholder="End date"
                onClick={endField}
                value={displayEndDate}
                defaultValue={displayEndDate}
              />
              <FiCalendar color="#b3b3b3" />
            </InputBorder>
          </div>
          <CalendarForm id="CalendarFormStart">
            <NewEventCalendar
              onChange={onStartCalendarChange}
              value={CalendarStartDate}
              onClickDay={(value, event) => selectStartDate(value, event)}
            />
            <div className="ButtonBox">
              <button onClick={(event) => submitStartDate(event)}>Ok</button>
            </div>
          </CalendarForm>
          <CalendarForm id="CalendarFormEnd">
            <NewEventCalendar
              onChange={onEndCalendarChange}
              value={CalendarEndDate}
              onClickDay={(value, event) => selectEndDate(value, event)}
            />
            <div className="ButtonBox">
              <button onClick={(event) => submitEndDate(event)}>Ok</button>
            </div>
          </CalendarForm>
        </Section>
        <Section>
          <EditEventTime form={form} setForm={setForm} />
        </Section>
        <Section>
          <Label>Location</Label>
          <div>
            <GrLocation />
            <SectionInput2
              type="text"
              placeholder="Add location"
              onChange={(event) => handleLocation(event.target.value)}
              defaultValue={currentEvent.location}
            />
          </div>
        </Section>
        <Section>
          <Label>Notifications</Label>
          <RiNotification2Line />{" "}
          <SectionInput2 type="text" placeholder="Add notification" />
        </Section>
      </form>
      <ActionsSection>
        <ButtonClose onClick={closeDialog}>
          <GrClose />
        </ButtonClose>
        <ButtonCreate
          onClick={(event) => UpdateEvent(event)}
          disabled={buttonDisabled}
        >
          {status === "idle" && "Update event"}
          {status === "loading" && <SmallLoadingIcon />}
        </ButtonCreate>
      </ActionsSection>
      {status === "updated" && 
        <ConfirmationBox>
          <FcCheckmark /> Your event was updated!
        </ConfirmationBox>
      }
    </div>
  );
};
