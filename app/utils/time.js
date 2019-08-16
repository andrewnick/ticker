import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import momentDurationFormatSetup from 'moment-duration-format';

const formattedDuration = seconds => {
  const duration = moment.duration(seconds, 'seconds');
  return duration.format('hh:mm:ss', {
    trim: false
  });
};

export default formattedDuration;
