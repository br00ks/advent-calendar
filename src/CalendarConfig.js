/**
 * Config file for application.
 *
 * Possible settings:
 * Snowfall yes/no
 * Creator (Made with love by )
 * Calendar for [name]
 *
 * NOTE: The background image should be set in index.css!
 *
 */
const calendarConfig = {
  // activate snowfall true/false
  snowfall: {
    active: true,
    color: "white",
    snowflakeCount: 200
  },
  // name of the creator (will be displayed in heading)
  creator: "creator_placeholder",
  // name of the recipient (will be displayed at advent calendar pages)
  recipient: "recipient_placeholder"
};

export default calendarConfig;
