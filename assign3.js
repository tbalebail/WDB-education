function max(iterable, key) {
    var maximum = iterable[0];
    for (var i in iterable) {
      var comparison = iterable[i];
      if (key(comparison) >= key(maximum)) {
        maximum = comparison;
      }
    }
    return maximum;
}

const mulTwo = (num) => num * 2;
console.log(max([1, 3, 5, 7], mulTwo));

const reverser = (num) => -num;
console.log(max([1, 3, 5, 7], reverser));

function changer(object, key, value) {
    var prev = object[key];
    if (Array.isArray(prev)) {
      object.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
      object[key] = value;
    }
    return null;
}

const me = {
    name: {
      first: "Tejas",
      last: "Balebail",
    },
    location: {
      city: "Berkeley",
      state: "CA",
      country: "USA",
    },
    favoriteFruit: "watermelon"
};

console.log(me);
changer(me, "favoriteFruit", "pears");
console.log(me);

async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1)
        resolve(5)
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = await a;
    console.log(five)
    return five
}
