const timeInput = document.getElementById('time-input');
const dayOfWeekInput = document.getElementById('dayOfWeekInput');
const output = document.getElementById('output');
const send = document.getElementById('send');
const arrayInput = [];

send.addEventListener('click', () => {
  let arrayTime = timeInput.value.split(':');
  arrayInput.splice(0, arrayInput.length);
  arrayInput.push(dayOfWeekInput.value);
  arrayInput.push(timeInput.value);
  let hours = +arrayTime[0];
  let minutes = +arrayTime[1];
  let dayWeek = moment().day(dayOfWeekInput.value).hour(hours).minute(minutes);
  let times = moment().hour(hours).minute(minutes);
  const startMorning = moment(dayWeek).startOf(`Monday 10:00`, 'HH:mm');
  const endMorning = moment(dayWeek).endOf(`Monday 13:30`, 'HH:mm');

  console.log('times :>> ', moment(times).format('HH:mm'));
  console.log('arrayInput :>> ', arrayInput);
  console.log('startMorning :>> ', startMorning);
  console.log(!moment(arrayInput).isBetween(startMorning, endMorning));

  output.innerHTML = '';

  if (
    dayOfWeekInput.value === 'SATURDAY' ||
    dayOfWeekInput.value === 'SUNDAY'
  ) {
    output.innerText = `Today is ${dayOfWeekInput.value}. Sorry. We accept orders during business hours.`;
  } else if (timeInput.value === '') {
    output.innerText = 'Please, enter all data.';
  } else if (!moment(arrayInput).isBetween(startMorning, endMorning)) {
    output.innerText = `Sorry. Now is ${dayOfWeekInput.value} ${timeInput.value}, our cooking went to smoking the bamboo ) or we don\'t work.`;
  } else {
    output.innerText =
      "Your order has ben processed. Wait for the manager's call.";
  }
});

const openingHours = {
  dayOfWeek: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'],
  periods: [
    [
      {
        from: '10:00',
        to: '14:00',
      },
      {
        from: '15:00',
        to: '18:00',
      },
      {
        from: '18:30',
        to: '22:00',
      },
    ],
    [
      {
        from: '10:00',
        to: '14:00',
      },
      {
        from: '15:00',
        to: '18:00',
      },
      {
        from: '18:30',
        to: '22:00',
      },
    ],
    [
      {
        from: '10:00',
        to: '14:00',
      },
      {
        from: '15:00',
        to: '18:00',
      },
      {
        from: '18:30',
        to: '22:00',
      },
    ],
    [
      {
        from: '10:00',
        to: '14:00',
      },
      {
        from: '15:00',
        to: '18:00',
      },
      {
        from: '18:30',
        to: '22:00',
      },
    ],
    [
      {
        from: '08:00',
        to: '12:00',
      },
      {
        from: '13:00',
        to: '19:00',
      },
      {
        from: '19:30',
        to: '23:30',
      },
    ],
  ],
};
