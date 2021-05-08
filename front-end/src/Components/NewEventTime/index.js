import React from "react";
import { HOURS, MINUTES } from "../../Constants";
import { BsArrowRight } from "react-icons/bs";

import { Label, TimeSection, TimeRange, Arrow, Select } from "./index.styled"

export const NewEventTime = ({ form, setForm }) => {
  const allDaySelect = (checked) => {
    if (checked) {
      setForm({
        ...form,
        start: { ...form.start, time: { ...form.start.time, allday: true } },
        end: { ...form.end, time: { ...form.end.time, allday: true } },
      });
    } else {
      setForm({
        ...form,
        start: { ...form.start, time: { ...form.start.time, allday: false } },
        end: { ...form.end, time: { ...form.end.time, allday: false } },
      });
    }
  };

  const onStartHourChange = (value) => {
    setForm({
      ...form,
      start: { ...form.start, time: { ...form.start.time, hours: value } },
    });
  };
  const onStartMinChange = (value) => {
    setForm({
      ...form,
      start: { ...form.start, time: { ...form.start.time, minutes: value } },
    });
  };
  const onStartAPChange = (value) => {
    setForm({
      ...form,
      start: { ...form.start, time: { ...form.start.time, ap: value } },
    });
  };
  const onEndHourChange = (value) => {
    setForm({
      ...form,
      end: { ...form.end, time: { ...form.end.time, hours: value } },
    });
  };
  const onEndMinChange = (value) => {
    setForm({
      ...form,
      end: { ...form.end, time: { ...form.end.time, minutes: value } },
    });
  };
  const onEndAPChange = (value) => {
    setForm({
      ...form,
      end: { ...form.end, time: { ...form.end.time, ap: value } },
    });
  };

  return (
    <>
      <TimeSection>
        <Label className="TimeLabel">Time</Label>{" "}
        <div className="AllDaySection">
          <input
            type="checkbox"
            className="checkBoxBox"
            onChange={(event) => allDaySelect(event.target.checked)}
          />
          <label>All-day</label>
        </div>
      </TimeSection>
      <TimeRange>
        <Select onChange={(event) => onStartHourChange(event.target.value)}>
          <option hidden></option>
          {HOURS.map((hour) => (
            <option>{hour}</option>
          ))}
        </Select>
        :
        <Select onChange={(event) => onStartMinChange(event.target.value)}>
          <option hidden></option>
          {MINUTES.map((min) => (
            <option>{min}</option>
          ))}
        </Select>
        <Select onChange={(event) => onStartAPChange(event.target.value)}>
          <option hidden></option>
          <option>AM</option>
          <option>PM</option>
        </Select>
        <Arrow>
          <BsArrowRight />
        </Arrow>
        <Select onChange={(event) => onEndHourChange(event.target.value)}>
          <option hidden></option>
          {HOURS.map((hour) => (
            <option>{hour}</option>
          ))}
        </Select>
        :
        <Select onChange={(event) => onEndMinChange(event.target.value)}>
          <option hidden></option>
          {MINUTES.map((min) => (
            <option>{min}</option>
          ))}
        </Select>
        <Select onChange={(event) => onEndAPChange(event.target.value)}>
          <option hidden></option>
          <option>AM</option>
          <option>PM</option>
        </Select>
      </TimeRange>
    </>
  );
};
