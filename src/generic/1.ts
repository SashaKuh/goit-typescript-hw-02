/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>() {
  return new Promise<T>((resolve) => {
    resolve(['Text', 50] as T);
  });
}

getPromise()
  .then((data) => {
    console.log(data);
  });


/* 
  Я не розумію логіку цьго завдання і чому вилазить помилка яка я типізував getPromise і Promise але в будь якому 
  разі в рядку resolve(['Text', 50]) буде помилка якщо я не додам as T 
*/