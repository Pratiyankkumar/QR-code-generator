let value;

document.querySelector('#js-generate-button').addEventListener('click', async () => {
  let value = document.querySelector('#js-input').value;
  const response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=200x200`);
  const url = response.url;
  console.log(url);

  document.querySelector('#js-qrcode-container').innerHTML = `
    <p class="md:text-5xl text-3xl mb-4 md:mb-0 font-bold">QR Code :</p>

    <div class=" flex flex-col items-center md:h-96 md:w-100 w-60 h-96 bg-white bg-opacity-30 backdrop-blur-lg border border-gray-300 rounded-md p-4 md:ml-32">
      <img class="mt-10" src="${url}" alt="">
      
      <button type="button" id="js-download-button" class="text-white absolute md:right-2 right-14 bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Downlaod
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </button>
    </div>
  `;

  document.querySelector('#js-input').value = '';

  document.querySelector('#js-download-button').addEventListener('click', () => {
    const imageUrl = url;
    const fileName = `qr${value.slice(0,3)}.png`;

    const a = document.createElement('a');
    a.href = imageUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
})
