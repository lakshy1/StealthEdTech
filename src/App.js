import './App.css';

function App() {
  return (
    <div className="w-[390px] h-auto bg-[#F0F0F5] text-[#404C3C] flex flex-col gap-3">

      <div className="h-[56px]  bg-white">
        <div className="flex flex-row justify-center items-center">
          <div>

          </div>
          <div className="flex flex-col ">
            <p className="text-[14px]"><b>Checkout</b></p>
            <p className="text-[10px]">POPEYES | JP NAGAR</p>
          </div>

        </div>

      </div>


      <div className=" flex flex-col ">

        <div className="flex flex-row w-[95%] h-auto bg-white mx-auto rounded-[10px]">
          <div>
            <img src="Burger.png" className="h-[80px] w-[80px] p-[10px] rounded-[10px]"></img>
          </div>

          <div className=" flex flex-col w-full pb-[10px] pr-[10px]">
            <p className="text-[12px]"><b>Caribbean Spicy Zinger Burger</b></p>
            <p>350Kcal</p>

            <div className=" flex flex-row justify-between">
              <div>
                319
              </div>
              <div>
                <button className="h-[28px] w-[88px] border-[#F05A26] border-[1px] rounded-[10px] text-[#F05A26]">- 1 + </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-6 w-[95%] h-auto bg-white mx-auto rounded-[10px] mt-3">
          <div>
            <img src="Burger.png" className="h-[80px] w-[80px] p-[10px] rounded-[10px]"></img>
          </div>

          <div className=" flex flex-col w-full pb-[10px] pr-[10px]">
            <p><b>Cajun Veg Burger</b></p>
            <p>250Kcal</p>

            <div className=" flex flex-row justify-between">
              <div>
                219
              </div>
              <div>
                <button className="h-[28px] w-[88px] border-[#F05A26] border-[1px] rounded-[10px] text-[#F05A26]">- 2 + </button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className="flex flex-col overflow-x-hidden bg-[#F0F0F5]">
        <p className="text-[14px] pb-6"><b>Frequently Ordered</b></p>
        <div className=" flex flex-row gap-3 w-[95%] mx-auto">
          <div className="h-[140px] w-[148px] bg-white rounded-[10px] flex flex-col">
            <img src="./Fanta.png" className="h-[76px] rounded-[10px] p-1"></img>
            <p><b>Fanta 1 PET</b></p>

            <p>89</p>
          </div>

          <div className="h-[140px] w-[148px] bg-white rounded-[10px] flex flex-col">
            <img src="./Fanta.png" className="h-[76px] rounded-[10px] p-1"></img>
            <p><b>Fanta 1 PET</b></p>

            <p> 89</p>
          </div>

          <div className="h-[140px] w-[74px] bg-white overflow-y-hidden rounded-tl-[10px] rounded-bl-[10px]">
            <img src="./Fanta.png" className="h-[76px] rounded-[10px] p-1"></img>
            <p><b>Fanta 1</b></p>

            <p>89</p>
          </div>
        </div>
      </div >


      <div className="flex flex-col">
        <div>
          <div>

          </div>
        </div>


      </div>


      <div className="w-[95%] mx-auto py-3">
        <button className="bg-[#F05A26] h-[44px] text-[16px] rounded-[10px] text-[#F0F0F5] w-full"><b> Proceed to Checkout</b></button>
      </div>

    </div >
  );
}

export default App;
