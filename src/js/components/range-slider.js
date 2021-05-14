const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 1000],
    connect: true,
    step: 1,
    range: {
      'min': [200],
      'max': [1000]
    }
  })



  const input0 = document.getElementById('input-0');
  const input1 = document.getElementById('input-1');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (value, handle) {
    inputs[handle].value = Math.round(value[handle]);
  })

  const SetRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    console.log(arr);
    rangeSlider.noUiSlider.set(arr);
  }

  inputs.forEach((elem, index) => {
    elem.addEventListener('change', (e) => {
      SetRangeSlider(index, e.currentTarget.value)
    })
  })
}
