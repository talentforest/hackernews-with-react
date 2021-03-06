import { mapTime } from 'util'

const TimeInfo = ({ story }) => {
  return (
    <>
      <img
        src={require("assets/clock2.png")}
        alt="clock"
      />
      <span>{mapTime(story.time)}</span>
    </>
  )
}

export default TimeInfo;
