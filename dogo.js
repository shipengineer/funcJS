let dogoCount = 0;

async function dogoUploader() {
  if (dogoCount < 10) {
    await new Promise((resolve) => {
      setTimeout(async () => {
        const responce = await fetch('https://dog.ceo/api/breeds/image/random');
        if (responce.status == '404') {
          document.body.insertAdjacentHTML(
            'afterbegin',
            '<p>Изображения нет</p>'
          );
        } else {
          const dogo = await responce.json();
          console.log(dogo.message);
          document.body.insertAdjacentHTML(
            'afterbegin',
            `<img src = "${dogo.message}"/>`
          );
        }
        dogoCount++;
        dogoUploader();
        console.log(dogoCount);
        resolve();
      }, 3000);
    });
  }
}
dogoUploader();
