
function ShowingCard({ cart, setCart }) {

  function handelRemove(id) {
    setCart(cart.filter(item => item.id !== id));
  }
  return (
    <div className="bg-slate-200 rounded px-5 mt-5 w-10/12 flex flex-col justify-center text-center ml-auto mr-auto ">
      <h2 class="text-4xl font-bold p-5 m-5  flex border-spacing-y-16  justify-center">Your cart</h2>

      {
        cart?.map((item) => (
          <div class="mx-auto flex max-w-2xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
            <p class="mt-3 text-sm font-medium text-gray-700">
              {item.author}
            </p>
            <ul class="flex flex-col divide-y divide-gray-200">
              <li class="flex flex-col py-6 sm:flex-row sm:justify-between">
                <div class="flex w-full space-x-2 sm:space-x-4">
                  <img
                    class="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                    src={item.img}
                    alt="Nike Air Force 1 07 LV8"
                  />
                  <div class="flex w-full flex-col justify-between pb-4">
                    <div class="flex w-full justify-between space-x-2 pb-2">
                      <div class="space-y-1">
                        <h3 class="text-lg font-semibold leading-snug sm:pr-8">
                          {item.title}
                        </h3>
                        <p class="text-sm">{item.author}</p>
                      </div>
                      <div class="text-right">{item.price}
                        <p class="text-lg font-semibold">{ }</p>
                      </div>
                    </div>
                    <div class="flex divide-x text-sm">
                      <button
                        type="button"
                        class="flex items-center space-x-2 px-2 py-1 pl-0"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-trash"
                        >
                          <path d="M3 6h18"></path>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                        <span onClick={() => handelRemove(item.id)}>Remove</span>
                      </button>
                      <button type="button" class="flex items-center space-x-2 px-2 py-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="lucide lucide-heart"
                        >
                          <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                        </svg>
                        <span>Add to favorites</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>


            </ul>
            <div class="space-y-1 text-right">
              <p>
                Total amount:<span class="font-semibold"> ₹48,967</span>
              </p>
            </div>

          </div>
        ))
      }

    </div>

  )
}

export default ShowingCard