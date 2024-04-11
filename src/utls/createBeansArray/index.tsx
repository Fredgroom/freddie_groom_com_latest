interface Size {
  width: number;
  height: number;
}

const createBeansArray = (
  size: Size,
  setBeansArr: any,
  intervals: number,
  sparsity: number
): void => {
  let colourArr = ['blue', 'orange', 'green'];
  let sizeArr = ['', 'large'];
  for (let i = 0; i < sparsity; i++) {
    colourArr.push('primary');
  }
  let columns = Math.floor(size.width / intervals);
  let rows = Math.floor(size.height / intervals);

  let beansArr = [];
  let column = 0;
  let row = 0;

  while (row < rows) {
    let beanObj = {
      left: 0,
      top: 0,
      colour: '',
      size: '',
      altAnimation: false,
    };
    beanObj.colour = colourArr[Math.floor(Math.random() * colourArr.length)];
    beanObj.size = sizeArr[Math.floor(Math.random() * sizeArr.length)];
    beanObj.left =
      row % 2
        ? column * intervals + intervals / 4
        : column * intervals + intervals / 8;

    beanObj.top =
      column % 2
        ? row * intervals + intervals
        : row * intervals + intervals / 2;
    if (row % 2 || column % 2) {
      beanObj.altAnimation = true;
    }
    beansArr.push(beanObj);
    column++;
    if (row >= rows) {
      return;
    }
    if (column > columns) {
      column = 0;
      row++;
    }
  }

  setBeansArr(beansArr);
};

export default createBeansArray;
