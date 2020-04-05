function flatten(arr) {
	return arr.reduce((acc, val) => {
    if (Array.isArray(val)) {
      acc.push(...flatten(val));
    } else {
      acc.push(val);
    }
    return acc;
  }, [])
}

const flatArray = flatten([[1,2,[3]],4]);
console.log(flatArray);

